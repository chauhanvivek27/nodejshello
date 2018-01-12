'use strict'

const _ = require('lodash')
const KoaRouter = require('koa-router')
const router = KoaRouter()

 router.get('/_up', function(ctx, next) {
 ctx.body = "UP"
});

  module.exports = router