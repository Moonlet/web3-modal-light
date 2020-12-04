import Web3ModalCore from "../../core";
import { DEFAULT_OPTIONS } from "../../core/consts";
import { IOptions } from "../../core/types";
import { merge } from "../../core/utils";
import { PROVIDERS_DEFAULT_OPTIONS } from "./providers";

function connect(options?: IOptions) {
  const mergedOptions = merge(
    {
      ...DEFAULT_OPTIONS,
      providersOptions: PROVIDERS_DEFAULT_OPTIONS,
    },
    options || Web3ModalCore.getOptions()
  );
  console.log(mergedOptions);
  return Web3ModalCore.connect(mergedOptions);
}

function fixZilliqaJsInstance(zilliqa) {
  if (zilliqa?.blockchain?.signer) {
    zilliqa.blockchain.signer = zilliqa.contracts.signer = {
      sign: (m) => m,
    };
  }
}

export default {
  connect,
  init: Web3ModalCore.init,
  updateTheme: Web3ModalCore.updateTheme,
  fixZilliqaJsInstance,
};
