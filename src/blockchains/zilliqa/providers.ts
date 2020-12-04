import { IProviderOptions } from "../../core/types";

import moonletConnector from "./connectors/moonlet";
import zilPayConnector from "./connectors/zilpay";

export type ProvidersType = "moonlet" | "zilpay";

export const PROVIDERS_DEFAULT_OPTIONS: { [key: string]: IProviderOptions } = {
  moonlet: {
    display: {
      name: "Moonlet Wallet",
      caption: "Connect to your wallet.",
      logo:
        "https://moonlet.io/wp-content/uploads/2019/11/cropped-Moonlet-Logo-Icon-01-scaled-192x192.jpg",
    },
    packageProvider: undefined,
    connector: moonletConnector,
  },
  zilpay: {
    display: {
      name: "ZilPay Wallet",
      caption: "Connect to your wallet.",
      logo: "https://zilpay.xyz/logo.svg",
    },
    packageProvider: undefined,
    connector: zilPayConnector,
  },
};
