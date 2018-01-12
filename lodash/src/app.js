'use strict'

const Koa = require('koa')
const app = new Koa()
const router = require('./router')
app.use(router.routes())
app.use(router.allowedMethods());
console.log("app js called");
module.exports = app