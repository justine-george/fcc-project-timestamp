# Timestamp Microservice

## Live at:

https://fcc-project-timestamp.fly.dev/

## Tech Stack:
- Node.js
- Express.js
- fly.io

## API Usage:

```
https://fcc-project-timestamp.fly.dev/api/2023-01-01

Response JSON: {"unix":1672531200000,"utc":"Sun, 01 Jan 2023 00:00:00 GMT"}
```

```
https://fcc-project-timestamp.fly.dev/api/1672531200000

Response JSON: {"unix":1672531200000,"utc":"Sun, 01 Jan 2023 00:00:00 GMT"}
```

```
https://fcc-project-timestamp.fly.dev/api/

Response JSON: Returns current time in the above JSON format
```

## Run locally:

```
npm install
npm start
```

## Deploy on fly.io:

```
fly launch
fly deploy
```