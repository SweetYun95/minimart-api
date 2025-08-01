/**
 * @swagger
 * /review:
 *   post:
 *     summary: 리뷰 등록
 *     description: 로그인한 사용자가 리뷰를 작성합니다.
 *     tags: [Review]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - itemId
 *               - reviewContent
 *               - rating
 *             properties:
 *               itemId:
 *                 type: integer
 *                 description: 리뷰 대상 상품 ID
 *               reviewContent:
 *                 type: string
 *                 description: 리뷰 본문 내용
 *               rating:
 *                 type: integer
 *                 description: 별점 (1~5)
 *     responses:
 *       201:
 *         description: 리뷰 등록 성공
 *       400:
 *         description: 잘못된 요청 (필수 필드 누락 등)
 *       401:
 *         description: 인증 실패 (로그인 필요)
 *       500:
 *         description: 서버 오류
 */


/**
 * @swagger
 * /review/{id}:
 *   patch:
 *     summary: 리뷰 수정
 *     description: 사용자가 작성한 리뷰의 내용과 별점을 수정합니다.
 *     tags:
 *       - Review
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: 수정할 리뷰 ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reviewContent:
 *                 type: string
 *                 description: 수정할 리뷰 내용
 *               rating:
 *                 type: integer
 *                 description: 수정할 별점 (1~5)
 *     responses:
 *       200:
 *         description: 리뷰 수정 성공
 *       400:
 *         description: 잘못된 요청 (입력 누락 등)
 *       500:
 *         description: 서버 오류
 */

/**
 * @swagger
 * /review/{id}:
 *   delete:
 *     summary: 리뷰 삭제
 *     description: 사용자가 작성한 리뷰를 삭제합니다.
 *     tags:
 *       - Review
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: 삭제할 리뷰 ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *       401:
 *         description: 인증 실패 (로그인 필요)
 *       500:
 *         description: 서버 오류
 */
