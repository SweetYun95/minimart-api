# 🛒 ShopMax Backend

이 프로젝트는 Node.js + Express 기반 이커머스 백엔드입니다.  
JWT 인증, 주문 처리, Swagger 문서화를 포함합니다.

---

## 📁 레포 구조

- `/config` — DB 및 서버 설정 파일 (예: `config.json`, 환경별 설정)
- `/models` — Sequelize 또는 Mongoose 등 ORM 모델 정의
  - `user.js`: 사용자 모델
  - `item.js`: 상품 모델
  - `order.js`: 주문 모델
- `/passport` — Passport를 활용한 인증 설정 (`passport.js`, 전략 파일 등)
- `/routes` — API 라우터 정의
  - `user.js`, `auth.js`, `order.js` 등
  - `/middlewares` — 커스텀 미들웨어 (토큰 검증, 에러 처리 등)
  <!-- /routes_swagger 폴더를 /routes 와 구분할 지는 후추 결정예정 -->
- `/routes_swagger` — Swagger 문서화를 위한 주석 기반 라우터 모듈 
- `/swagger.js` — Swagger UI 연결 및 세팅 파일
- `/utils` — 공통 유틸 함수 (예: 토큰 생성, 날짜 포맷 등)
- `/socket.js` — 실시간 기능 (WebSocket 또는 Socket.io) 처리
- `.env` — 환경 변수 파일 (DB 정보, JWT 시크릿 등)
- `app.js` — 서버 진입점


---

## 👥 브랜치 전략

- `main`: 운영용
- `hcm`, `jsy`, `jse`, `ysy`: 각자 작업 브랜치
- hcm : 한창민
- jsy : 정세연
- jse : 정송이
- ysy : 윤승영

### ✅ 브랜치 생성 및 push 방법

```bash
# 브랜치 최초 이동
git checkout -t origin/브랜치이름

# 예: 본인 이름으로 브랜치 이동
git checkout -t origin/hcm
git checkout -t origin/jsy
git checkout -t origin/jse
git checkout -t origin/ysy

# 최초 이동후 이동은
git checkout 브랜치 이름

# 최초 1회만 push 설정
git push --set-upstream origin 브랜치이름
git push