# Web3 Modal Light

This is a simple web3 high customizable modal library that help app to get a provider for different wallet on different blockchains.

## Usage

```ts
import Web3Modal from "web3-modal-light/zilliqa";
import MoonletZilliqaProvider from "@moonlet/providers/zilliqa";

Web3Modal.init({
  providersOptions: {
    moonlet: {
      packageProvider: () => MoonletZilliqaProvider, // () => import("@moonlet/providers/zilliqa") for lazyloading using webpack
    },
    zilpay: {
      ...
    }
  },
});

const provider = await Web3Modal.connect();
```

## TODO

- add loading state, after user clicks on a provider till the provider instance is returned.
- add theme and colors customization support
- add wallets logo images
- add cache to remember user option
- add more examples (for custom providers, lazyloaded providers, ...)
- add documentation
