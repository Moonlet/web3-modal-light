export interface IProviderOptions {
  display?: Partial<IProviderDisplayOptions>;
  packageProvider: () => Promise<any>;
  connector?: (providerPackage, options) => Promise<any>;
  options?: any;
}

export interface IProviderDisplayOptions {
  name: string;
  caption: string;
  logo: string;
}

export interface IOptions {
  theme?: string | Partial<ITheme>;
  cacheProvider?: boolean;
  providersOptions: {
    [key: string]: Partial<IProviderOptions>;
  };
}

export interface ITheme {
  overlayBackground: string;
  background: string;
  primaryText: string;
  secondaryText: string;
  border: string;
  hover: string;
}
