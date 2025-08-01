/**
 * @swagger
 * /token/get:
 *   get:
 *     summary: 토큰 발급
 *     description: 도메인을 기준으로 JWT 토큰을 발급하고 DB에 저장합니다.
 *     tags:
 *       - Token
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: 토큰 발급 성공
 *       500:
 *         description: 서버 오류 (토큰 생성 또는 DB 저장 중 에러)
 */

/**
 * @swagger
 * /token/read:
 *   get:
 *     summary: 저장된 토큰 조회
 *     description: 관리자가 자신의 도메인에 등록된 토큰을 조회
 *     tags:
 *       - Token
 *     security:
 *       - bearerAuth:
 *	type: http
 *	scheme: bearer
*	bearerFormat: JWT 	
 *     responses:
 *       200:
 *         description: 토큰 조회 성공
 *       404:
 *         description: 해당 origin에 해당하는 토큰이 없음
 *       500:
 *         description: 서버 오류
 */

/**
 * @swagger
 * /token/refresh:
 *   post:
 *     summary: 토큰 재발급
 *     description: 리프레시 토큰을 이용해 새로운 액세스 토큰을 재발급받습니다.
 *     tags:
  *       - Token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refreshToken
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 description: 저장된 리프레시 토큰
 *     responses:
 *       200:
 *         description: 토큰 재발급 성공
 *       401:
 *         description: 유효하지 않은 리프레시 토큰
 *       500:
 *         description: 서버 오류
 */