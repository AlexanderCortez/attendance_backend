const { DB } = process.env;

const config = {
  development: {
    url: 'http://localhost:3000',
    database: DB,
  },
};

const getEnvConfig = (env) => {
  return config[env];
}
module.exports = getEnvConfig;
