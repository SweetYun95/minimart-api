const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
const Domain = require('../models')
const { isLoggedIn, isAdmin } = require('./middlewares')

router.get('/get', isLoggedIn, async (req, res, next) => {
   try {
      const origin = req.get('origin')
      const token = jwt.sign(
         {
            id: req.user.id,
            email: req.user.email,
         },
         process.env.JWT_SECRET,
         {
            expiresIn: '365d',
            issuer: 'shopmaxadmin',
         }
      )
      await Domain.create({
         userId: req.user.id,
         host: origin,
         clientToken: token,
      })
   } catch (error) {
      error.status = 500
      error.message = '토큰 발급 중 오류가 발생했습니다.'
      return next(error)
   }
})

module.exports = router
