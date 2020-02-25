# AWS TEST

테스트 프로젝트 입니다.

- 프로젝트 기간: 20.02.24 ~

## Introduction

- Express.js API Server
- RESTful API
- OAuth2.0 (적용 전)
- Prisma DB Proxy (적용 전)
- Swagger API Docs
- AWS CodePipeline CI/CD (적용 전)

## Dependency

```json
{
  "dependencies": {
    "body-parser": "^1.19.0",
    "compression": "^1.7.4",
    "cookie-parser": "^1.4.4",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "express-useragent": "^1.0.13",
    "helmet": "^3.21.2",
    "morgan": "^1.9.1"
  },
  "devDependencies": {
    "@types/body-parser": "^1.17.0",
    "@types/compression": "^1.0.0",
    "@types/cookie-parser": "^1.4.1",
    "@types/cors": "^2.8.6",
    "@types/dotenv": "^6.1.1",
    "@types/express": "^4.17.0",
    "@types/helmet": "0.0.45",
    "@types/node": "^12.7.0",
    "dotenv": "^8.2.0",
    "nodemon": "^1.19.4",
    "ts-node": "^8.3.0",
    "tslint": "^5.20.0",
    "tslint-config-airbnb": "^5.11.2",
    "tslint-config-prettier": "^1.18.0",
    "typescript": "^3.5.3"
  }
}
```

## Set Up

```bash
$ npm install

// Local 실행
$ npm run dev

// Staging & Production 서버 실행(PM2)
$ npm start

// Build
$ npm run build

// Test 실핼
$ npm test
```
