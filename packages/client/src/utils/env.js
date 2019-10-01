export const ENVIRONMENTS = {
  DEV: 'development',
  PROD: 'production',
};

export function getCurrentEnvironment() {
  switch (process.env.NODE_ENV) {
    case 'production':
      return ENVIRONMENTS.PROD;
    case 'development':
    default:
      return ENVIRONMENTS.DEV;
  }
}

export const isDev = getCurrentEnvironment() === ENVIRONMENTS.DEV;
export const isProd = getCurrentEnvironment() === ENVIRONMENTS.PROD;
