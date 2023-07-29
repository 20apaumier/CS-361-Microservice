# Project Description

* This project includes a micro service that runs on a server for my partner's project
* This micro service will return the current time in ISOString format.

## Setting up and Running the Project

1. Clone the project
```
git clone https://github.com/20apaumier/CS-361-Microservice.git
```
2. Install the dependencies
```
npm install
```
3. Run the project
```
npm start
```

## Requesting and Receiving Data with Javascript

Make sure the project is up and running before any requests are made.

```
const axios = require('axios');

axios.get('http://localhost:6116')
    .then(function (response) {
        // success
        console.log(response.data);
    })
    .catch(function (error) {
        // error
        console.log(error);
    });


response.data: 2023-07-29T18:51:19.980Z
```

## UML Diagram

![UML Diagram](https://github.com/20apaumier/CS-361-Microservice/blob/main/Microservice%20UML.png)