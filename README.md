# Timestamp Microservice

The Timestamp Microservice is a simple tool that allows users to convert between UNIX timestamps and UTC dates, and vice versa.

## Live Demo

Check out the microservice [here](https://fcc-project-timestamp.fly.dev/).

## API Usage

### 1. Converting a Date String to Timestamp

- Endpoint: `GET /api/:date_string`
- Description: Returns a JSON object with the unix timestamp and UTC date string of the given date string
- Usage: `GET https://fcc-project-timestamp.fly.dev/api/2023-01-01`
- Response:

```
{
    "unix":1672531200000,
    "utc":"Sun, 01 Jan 2023 00:00:00 GMT"
}
```

### 2. Converting a Timestamp to Date String

- Endpoint: `GET /api/:timestamp`
- Description: Returns a JSON object with the unix timestamp and UTC date string of the given timestamp
- Usage: `GET https://fcc-project-timestamp.fly.dev/api/1672531200000`
- Response:

```
{
    "unix":1672531200000,
    "utc":"Sun, 01 Jan 2023 00:00:00 GMT"
}
```

### 3. Getting the Current Timestamp and Date

- Endpoint: `GET /api/`
- Description: Returns a JSON object with the unix timestamp and UTC date string of the current time
- Usage: `GET https://fcc-project-timestamp.fly.dev/api/`
- Response:

```
{
    "unix":<current_unix_timestamp>,
    "utc":"<current_utc_date>"
}
```

## Tech Stack

- Node.js
- Express.js
- fly.io

## Run locally

```
npm install
npm start
```

## Deploy on fly.io

```
fly launch
fly deploy
```
