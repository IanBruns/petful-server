# Petful (Node.js/Express Server)

View the live application at: https://petful-client-template-six.vercel.app/
Base url for server is: https://petful-api-ian.herokuapp.com/

### Application Summary

Petful is an application where user's can adopt 1 of 2 pets shown to them from
a queue.  User puts their name in a line, and when it is their turn they can adopt
a pet which will remove from the queue and bring up the next one.  User can also 
requeue if that is their desire


### Technology used

This application was built with Node.js, Express, and other packages installed with npm

#### To install locally

1. Clone github repo to your machine
2. Run command 'npm install' to install dependencies locally
3. Run command 'npm run dev' to start up server locally

## API Documentation

### Responses

This API returns json responses, most of them in the following format

```javascript
{
  "error" : "message"
}
```

The `message` attribute contains a message conveying the nature of the error.

### ENDPOINTS

#### People endpoints

```http
POST /api/people
```

| Body Key | Type     | Description                               |
| :------- | :------- | :---------------------------------------- |
| `person` | `string` | **Required**. Name of person to be queued |

```http
DELETE /api/people
```

Dequeues person

#### Pets endpoints

```http
GET /api/pets
```

Returns an object containing all arrays of cats and dogs

```http
DELETE /api/pets
```

| Body Key | Type     | Description                          |
| :------- | :------- | :----------------------------------- |
| `type`   | `string` | **Required**. Must be 'cat' or 'dog' |

Requires a type in the body, will dequeue cat or dog based on type

#### Cat Endpoints

```http
GET /api/cat
```

- Returns first cat in the queue

#### Dog Endpoints

```http
GET /api/dog
```

- Returns first dog in the queue

---

### Status Codes

This API returns the following status codes:

| Status Code | Description             |
| :---------- | :---------------------- |
| 200         | `OK`                    |
| 201         | `CREATED`               |
| 400         | `BAD REQUEST`           |
| 404         | `NOT FOUND`             |
| 500         | `INTERNAL SERVER ERROR` |

---
