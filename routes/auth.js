/**
 * @swagger
 * /join:
 *   post:
 *     summary: 사용자 회원가입
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - name
 *               - address
 *               - phonenumber
 *               - password
 *             properties:
 *               id:
 *                 type: string
 *                 description: 아이디
 *               name:
 *                 type: string
 *                 description: 이름
 *               address:
 *                 type: string
 *                 description: 주소
 *               phonenumber:
 *                 type: string
 *                 description: 전화번호
 *               password:
 *                 type: string
 *                 format: password
 *                 description: 비밀번호
 *     responses:
 *       201:
 *         description: 회원가입 성공
 *       409:
 *         description: 이미 존재하는 사용자
 *       500:
 *         description: 서버 오류
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: 사용자 로그인
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - password
 *             properties:
 *               id:
 *                 type: string
 *                 description: 아이디             
 *               password:
 *                 type: string
 *                 format: password
 *                 description: 비밀번호         
 *     responses:
 *       200:
 *         description: 로그인 성공 
 *       400:
 *         description: 요청값 오류 (아이디 또는 비밀번호 누락)
 *       401:
 *         description: 인증 실패 (아이디 또는 비밀번호 불일치)
 *       500:
 *         description: 서버 오류
 */


/**
 * @swagger
 * /auth/status:
 *   get:
 *     summary: 로그인상태확인
 *     tags: [Auth]
 *     responses:
 *       200:
 *          description: 로그인 여부 및 사용자 정보
 *       500:
 *          description: 서버 오류
 */

/**
 * @swagger
 * /logout:
 *   post:
 *     summary: 사용자 로그아웃
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 description: 저장된 리프레시 토큰
 *     responses:
 *       200:
 *         description: 로그아웃 성공
 *       401:
 *         description: 인증 실패 (유효하지 않은 토큰)
 *       500:
 *         description: 서버 오류
 */


/**
 * @swagger
 * /auth/forgot-password:
 *   post:
 *     summary: 비밀번호 찾기 요청
 *     description: 전화번호 입력시 비밀번호를 찾을 수 있다
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json: 
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id: 
 *                 type: string
 *                 description: 비밀번호를 찾을 아이디
 *     responses:
 *       200:
 *         description: 비밀번호 찾기 성공
 *       404:
 *         description: 등록되지 않은 아이디
 *       500:
 *         description: 서버 오류
 */