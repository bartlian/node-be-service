const koa = require('koa');
const koaStatic = require("koa-static");
const error = require("koa-json-error");
const router = require('./router/router.js');
const app = new koa();


app.use(async (ctx, next) => {
  console.log(`请求地址：${ctx.url}`)
  await next()
});

app.use(router.routes());
app.listen(9999);