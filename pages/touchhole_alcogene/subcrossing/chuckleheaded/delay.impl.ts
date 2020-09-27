export const delay = async (n: number) => new Promise((r) => setTimeout(r, n));

export const delaySync = (n: number) => {
  const end = Date.now() + n;
  while (Date.now() < end) {}
};
