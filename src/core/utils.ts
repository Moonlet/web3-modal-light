import { IOptions, IProviderOptions } from "./types";

// Merge a `source` object to a `target` recursively
export function merge(target, source) {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object)
      Object.assign(source[key], merge(target[key], source[key]));
  }

  // Join `target` and modified `source`
  Object.assign(target || {}, source);
  return target;
}

export function mergeProvidersOptions(
  defaultOptions: IOptions,
  options: IOptions
): IOptions {
  const providers = {};

  const providersOptionsArray = Object.entries(options.providersOptions);
  for (let i = 0; i < providersOptionsArray.length; i++) {
    const id = providersOptionsArray[i][0];
    const options = providersOptionsArray[i][1];

    if (id && typeof options === "object") {
      console.log("merge", id);
      const defaultProviderOptions =
        defaultOptions?.providersOptions[id] || ({} as IProviderOptions);
      providers[id] = Object.assign({}, defaultOptions, options, {
        display: Object.assign(
          {},
          defaultProviderOptions.display,
          options.display || {}
        ), // for display we do a deeper merge :)
      });
    }
  }

  return Object.assign({}, defaultOptions, options, {
    providersOptions: providers,
  });
}
