#  Envia coding challenge

## Instalation
- First you need to create a .env file on the root of the project, at the same level as .env.example already included, also fill that new .env file with your own env variables, use .env.example as guide.
```bash
npm install
```

### Run on development mode 🔍
```bash
npm run dev
```

### Start production mode
```bash
npm start
```

## Local use
- On home path (it should be http://localhost:YOUR-PORT/ will be served the page with the counter of the labels created.
### To create a new label:
- POST request to: /shipments, in local it will be ttp://localhost:<your-port>/shipments
    - It is not necessary to include any data on the body of the request, since the backend includes a "default" label creation, but also accepts the same body data than the original api, check the [envia documentation](https://docs.envia.com/) 

-  After you send the post request, if the creation has been successful, the counter will automatically increase in one, because of the socket created.

## Deploy
You can find on this url: [https://coding-challenge-envia-dev-kgss.1.us-1.fl0.io/](https://coding-challenge-envia-dev-kgss.1.us-1.fl0.io/) an already deployed version for this application.
Counter persists between tabs :) 
This might take some time to load the first time you open the above url, server needs to start
