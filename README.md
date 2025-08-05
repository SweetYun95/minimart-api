# 🛒 ShopMax Backend

이 프로젝트는 Node.js + Express 기반의 이커머스 백엔드입니다.  
JWT 인증, 주문 처리, Swagger 문서화, 실시간 소켓 통신 등의 기능을 포함합니다.  
각 팀원이 담당 브랜치에서 기능을 개발하고, 완성 후 `develop` 브랜치로 병합합니다.

---

## 📁 레포 구조

- `/config` — DB 및 서버 설정 (`config.json`, 환경별 설정 등)
- `/models` — ORM 모델 정의
  - `user.js`, `item.js`, `order.js` 등
- `/passport` — Passport를 활용한 JWT 인증 설정
- `/routes` — API 라우터 정의
  - `auth.js`, `order.js`, `token.js` 등
- `/routes_swagger` — Swagger 명세 주석 포함된 라우터
- `/middlewares` — 토큰 검증, 에러 처리 등 공통 미들웨어
- `/swagger.js` — Swagger UI 연결 및 설정
- `/socket.js` — 실시간 소켓 통신 (WebSocket / Socket.io)
- `/utils` — 유틸리티 함수 모음 (토큰 생성, 날짜 포맷 등)
- `.env` — 환경 변수 파일
- `app.js` — 서버 진입점

---

## 👥 브랜치 전략

- `main`: 최종 배포 브랜치
- `develop`: 통합 개발 브랜치
- `hcm` : 한창민
- `jsy` : 정세연
- `jse` : 정송이
- `ysy` : 윤승영

> 모든 기능 개발은 **개별 브랜치에서 수행 후**,  
> 반드시 `develop` 브랜치 기준으로 **PR(Pull Request)** 을 생성해주세요.

---

## 🌿 신규 브랜치 생성 규칙

기능이 세분화되거나 테스트/임시 작업이 필요한 경우, 아래 규칙에 따라 **개별 브랜치에서 파생 브랜치**를 생성할 수 있습니다.

### ✅ 브랜치 네이밍 규칙

[이니셜]-[작업유형]-[기능이름]
예시:
- `jsy-feat-popup` → 정세연 님이 팝업 기능 개발
- `hcm-fix-login-bug` → 한창민 님이 로그인 버그 수정
- `jse-test-api-token` → 정송이 님이 토큰 API 테스트

### ✅ 브랜치 생성 명령어

```bash
git checkout -b 본인지명/작업유형-기능명
git push -u origin 본인지명/작업유형-기능명
예:
git checkout -b jsy/feat-chat-ui
git push -u origin jsy/feat-chat-ui
```
> ❗ 브랜치를 새로 생성할 때는 팀 리더와 간단히 공유 후 작업해주세요.
> 작업 완료 후에는 develop 브랜치 기준으로 Pull Request를 생성합니다.

✅ 브랜치 전략은 협업의 중심입니다.
원활한 관리와 통합을 위해 가이드에 따라 작업해주세요 🙌

---


## 🔀 브랜치 작업 및 Push 방법

### 1. 브랜치 최초 이동

```bash
git checkout -t origin/브랜치이름

# 예:
git checkout -t origin/jsy

# 이후 작업할 때는

git checkout 브랜치이름
# 최초 Push 연결
git push --set-upstream origin 브랜치이름

#이후에는 git push만 입력하면 됩니다.
```
---

## ✍️ Git 커밋 메시지 작성 규칙

커밋 메시지는 형식과 내용을 명확하게 작성해야 협업 시 변경 내역을 빠르게 파악할 수 있습니다.  
아래 형식을 따라 작성해주세요:

### ✅ 기본 형식

git commit -m "[태그] 작업한 내용 요약"

예:
git commit -m "[feat] 로그인 API 구현"
git commit -m "[fix] 장바구니 오류 수정"
git commit -m "[style] 버튼 정렬 개선"


---

### ✅ 커밋 태그 종류

| 태그       | 설명                                        |
| ---------- | ------------------------------------------- |
| `feat`     | 새로운 기능 추가                            |
| `patch`    | 간단한 수정 (줄바꿈, 줄추가, 정렬 등)       |
| `fix`      | 버그 수정                                   |
| `refactor` | 코드 리팩토링 (기능 변화 없음)              |
| `style`    | 스타일, 포맷팅, 주석 등 UI 외 변경          |
| `docs`     | 문서 (README 등) 변경                       |
| `test`     | 테스트 코드 추가/수정                       |
| `chore`    | 빌드, 패키지 매니저, 설정 파일 등 기타 작업 |
| `remove`   | 불필요한 코드/파일 제거                     |

---

### ✅ 커밋 메시지 팁

- 커밋 메시지는 **한 줄 요약**, 50자 이내 권장
- 작업 내용을 명확히 드러내는 동사를 사용
- PR 리뷰자가 한눈에 파악할 수 있도록 작성

---

### 💬 예시

[feat] 상품 상세 페이지 레이아웃 구현
[fix] 로그인 실패 시 에러 메시지 표시
[refactor] useEffect 로직 정리
[style] ChartPage 컴포넌트 마진 조정
[test] orderSlice 테스트 코드 작성
[chore] ESLint 룰 추가 및 적용
[docs] README.md에 커밋 규칙 추가


