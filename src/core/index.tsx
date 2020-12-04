import { h } from "./dom";
import styles from "./styles";
import { IOptions, ITheme } from "./types";

interface IState {
  isOpen: boolean;
  options: IOptions;
}

const state: IState = {
  isOpen: false,
  options: undefined,
};

function connect(options: IOptions) {
  //TODO: add some validation on options object
  if (state.isOpen) return Promise.reject("MODAL_ALREADY_OPENED");

  if (
    !options.providersOptions &&
    !(state.options && state.options.providersOptions)
  ) {
    return Promise.reject("PROVIDER_OPTIONS_NOT_FOUND");
  }

  return new Promise(async (resolve, reject) => {
    const providers = options.providersOptions;

    // handle the case where there is only one provider in list
    const providersArray = Object.values(providers);
    if (providersArray.length === 1) {
      const provider = providersArray[0];
      //TODO: add some checks to avoid errors when connector is not a function
      return resolve(
        await provider.connector(provider.packageProvider, provider.options)
      );
    }

    state.isOpen = true;
    const container: any = (
      <div
        className={styles.container}
        onClick={(e: any) => {
          if (e.target.className.split(" ").indexOf(styles.container) >= 0) {
            reject("CANCELED_BY_USER");
          }
          state.isOpen = false;
          container.remove();
        }}
      >
        <div className={`${styles.modal} ${styles.modalSmall}`}>
          {Object.values(providers).map((provider) => (
            <div
              className={styles.provider}
              onClick={async () => {
                // console.log(provider);
                resolve(
                  await provider.connector(
                    provider.packageProvider,
                    provider.options
                  )
                );
              }}
            >
              <div className={styles.logoWrapper}>
                <img src={provider.display.logo} />
              </div>
              <div className={styles.providerName}>{provider.display.name}</div>
              <div className={styles.providerText}>
                {provider.display.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    document.body.appendChild(container);
  });
}

function init(options: IOptions) {
  state.options = options;
}

function updateTheme(theme: string | Partial<ITheme>) {
  state.options.theme = theme;
}

function getOptions(): IOptions {
  return state.options || ({} as IOptions);
}

export default {
  init,
  getOptions,
  updateTheme,
  connect,
};
