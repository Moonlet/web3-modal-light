export interface IMoonletProviderOptions {}

export default async (
  packageProvider: () => Promise<any>
  //   options: IMoonletProviderOptions
) => {
  const MoonletProvider = await packageProvider();
  const provider = new MoonletProvider();

  await provider.connect();

  return provider;
};
