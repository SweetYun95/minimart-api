const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
const Domain = require('../models')
const { isLoggedIn, isAdmin } = require('./middlewares')

// 토큰 발급
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

      res.json({
         success: true,
         message: '토큰이 발급되었습니다.',
         token,
      })
   } catch (error) {
      error.status = 500
      error.message = '토큰 발급 중 오류가 발생했습니다.'
      return next(error)
   }
})

//DB에 저장된 토큰 조회
router.get('/read', isAdmin, async (req, res, next) => {
   try {
      const origin = req.get('origin')
      const userId = req.user.id

      const domainData = await Domain.findOne({
         where: { userId, host: origin },
      })

      if (!domainData) {
         const error = new Error('토큰이 존재하지 않습니다.')
         error.status = 404
         return next(error)
      }

      res.json({
         success: true,
         message: '토큰을 성공적으로 불러왔습니다.',
         token: domainData.clientToken,
      })
   } catch (error) {
      error.status = 500
      error.message = '토큰을 불러오는 중 오류가 발생했습니다.'
      return next(error)
   }
})

module.exports = router
