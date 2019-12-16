const base = '/api/v1';
const domain = 'ipiranga.com.br';
const Defaults = {
  appName: 'PNEApp',
  domain,
  defaultLocale: {
    lang: 'en'
  },
  app: {
    platforms: ['ios', 'android']
  },
  apis: {
    baseUrl: `https://api.${domain}`,
    public: {
      base: `${base}`,
      backend: `${base}`
    },
    user: {
      base: `${base}`,
      login: `${base}/login`,
      logout: `${base}/logout`
    }
  }
};

export default Defaults;
