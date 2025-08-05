const express = require('express')
const bcrypt = require('bcrypt')
const passport = require('passport')
const { User } = require('../models')
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')

const router = express.Router()

// 회원가입
router.post('/join', isNotLoggedIn, async (req, res) => {
   const { email, password, name, userId, address, gender } = req.body

   try {
      const exUser = await User.findOne({ where: { email } })
      if (exUser) {
         return res.status(409).json({ message: '이미 가입된 이메일입니다.' })
      }

      const hash = await bcrypt.hash(password, 12)
      await User.create({
         userId,
         email,
         password: hash,
         name,
         address,
         gender, // 선택 사항이지만 받도록
      })

      res.status(201).json({ message: '회원가입 성공' })
   } catch (error) {
      console.error('회원가입 중 에러:', error)
      res.status(500).json({ message: '서버 오류', error })
   }
})

// 로그인
router.post('/login', isNotLoggedIn, (req, res, next) => {
   passport.authenticate('local', (authError, user, info) => {
      if (authError) {
         console.error(authError)
         return next(authError)
      }
      if (!user) {
         return res.status(401).json({ message: info.message })
      }

      req.login(user, (loginError) => {
         if (loginError) {
            console.error(loginError)
            return next(loginError)
         }

         return res.status(200).json({
            message: '로그인 성공',
            user: {
               id: user.id,
               userId: user.userId,
               email: user.email,
               name: user.name,
               role: user.role,
            },
         })
      })
   })(req, res, next)
})

// 로그아웃
router.post('/logout', isLoggedIn, (req, res) => {
   req.logout((err) => {
      if (err) {
         console.error(err)
         return res.status(500).json({ message: '로그아웃 중 오류 발생' })
      }

      req.session.destroy(() => {
         res.clearCookie('connect.sid')
         res.status(200).json({ message: '로그아웃 성공' })
      })
   })
})

// 로그인 상태 확인
router.get('/check', (req, res) => {
   if (req.isAuthenticated()) {
      res.status(200).json({
         isAuthenticated: true,
         user: {
            id: req.user.id,
            userId: req.user.userId,
            email: req.user.email,
            name: req.user.name,
            role: req.user.role,
         },
      })
   } else {
      res.status(200).json({
         isAuthenticated: false,
      })
   }
})

// 아이디 중복 확인
router.get('/check-id', async (req, res) => {
   const { userId } = req.query

   if (!userId) {
      return res.status(400).json({ message: 'userId 파라미터가 필요합니다.' })
   }

   try {
      const user = await User.findOne({ where: { userId } })
      if (user) {
         return res.status(409).json({ message: '이미 사용 중인 아이디입니다.' })
      } else {
         return res.status(200).json({ message: '사용 가능한 아이디입니다.' })
      }
   } catch (err) {
      console.error('아이디 중복 확인 중 오류:', err)
      return res.status(500).json({ message: '서버 오류', error: err })
   }
})


module.exports = router
