const database = {
  host: '',
  port: '',
  user: '',
  password: '',
  database: '',
};

const sessionConfig = {
  key: 'koa.sess', 
  maxAge: 86400000,
  autoCommit: true, 
  overwrite: true,
  httpOnly: true,
  signed: true, 
  rolling: false, 
  renew: false, 
  secure: false, 
  sameSite: null,
};

const secret = 'secretStr';

module.exports = {
  database,
  sessionConfig,
  secret
}