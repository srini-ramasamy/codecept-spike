import { HomePage } from './home/features/support/home.page';

export const scope = () => {
  if (inject().scope === null) {
    return {};
  }
  else {
    return inject().scope;
  }
}

export const wrap = (fn) => {
  return fn.bind(scope);
}