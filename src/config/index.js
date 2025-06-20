// Centralized config loader based on NODE_ENV
let config;

switch (import.meta.env.VITE_APP_ENV || process.env.NODE_ENV) {
  case 'production':
    config = await import('./production.js');
    break;
  case 'staging':
    config = await import('./staging.js');
    break;
  case 'development':
    config = await import('./development.js');
    break;
  case 'local':
  default:
    config = await import('./local.js');
    break;
}

export default config.default;
