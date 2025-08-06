const express = require('express')
const { Review, ReviewImage } = require('../models')
const { isLoggedIn } = require('./middlewares')
const fs = require('fs')
const path = require('path')
const multer = require('multer')
const { Op } = require('sequelize')
const router = express.Router()

try {
   fs.readdirSync('uploads')
} catch (error) {
   console.log('uploads 폴더가 없어 uploads 폴더를 생성합니다.')
   fs.mkdirSync('uploads')
}
// multer 설정
const upload = multer({
   storage: multer.diskStorage({
      destination(req, file, cb) {
         cb(null, 'uploads/')
      },
      filename(req, file, cb) {
         const decodedFileName = decodeURIComponent(file.originalname)
         const ext = path.extname(decodedFileName)
         const basename = path.basename(decodedFileName, ext)
         cb(null, basename + Date.now() + ext)
      },
   }),
   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
})

// 리뷰 등록하기
router.post('/', isLoggedIn, upload.array('img'), async (req, res, next) => {
   const t = await sequelize.transaction()
   try {
      const { itemId, reviewDate, reviewContent, rating } = req.body

      const review = await Review.create({ itemId, reviewDate, reviewContent, rating }, { transaction: t })
      let reviewImages = []
      if (req.files?.length > 0) {
         reviewImages = req.files.map((file) => ({
            oriImgName: file.originalname,
            imgUrl: `/${file.filename}`,
            reviewId: review.id,
         }))
         await ReviewImage.bulkCreate(reviewImages, { transaction: t })
      }

      await t.commit()
      res.status(201).json({
         success: true,
         message: '후기가 성공적으로 등록되었습니다.',
         review,
         reviewImages,
      })
   } catch (error) {
      await t.rollback()
      next({
         status: 500,
         message: '후기 등록 중 오류가 발생했습니다.',
      })
   }
})

//리뷰 수정하기
router.put('/:id', isLoggedIn, upload.array('img'), async (req, res, next) => {
   try {
      const { itemId, reviewDate, reviewContent, rating } = req.body
      const review = await Review.findByPk(req.params.id)

      if (!review) {
         const error = new Error('해당 후기를 찾을 수 없습니다.')
         error.status = 404
         return next(error)
      }

      await review.update({ itemId, reviewDate, reviewContent, rating })
      if (req.files && req.files.length > 0) {
         await ReviewImage.destroy({ where: { reviewId: review.id } })
         let reviewImages = []
         reviewImages = req.files.map((file) => ({
            oriImgName: file.originalname,
            imgUrl: `/${file.filename}`,
            reviewId: review.id,
         }))
         await ReviewImage.bulkCreate(reviewImages)
      }

      res.json({
         success: true,
         message: '후기를 성공적으로 수정했습니다.',
      })
   } catch (error) {
      error.status = 500
      error.message = '리뷰 수정 중 오류가 발생했습니다.'
      next(error)
   }
})
//리뷰 삭제하기
//전체 리뷰 목록 불러오기

module.exports = router
