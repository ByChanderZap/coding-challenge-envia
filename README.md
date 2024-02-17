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
    - Example expected body:
```json
{
  "origin": {
    "number": "",
    "postalCode": "66236",
    "type": "origin",
    "company": "doe",
    "name": "joe",
    "email": "joedoe@gmail.com",
    "phone": "3333333333",
    "country": "MX",
    "street": "mock street",
    "city": "mock city",
    "state": "MK",
    "district": "mock district"
  },
  "destination": {
    "number": "",
    "postalCode": "66236",
    "type": "origin",
    "company": "doe",
    "name": "joe",
    "email": "joedoe@gmail.com",
    "phone": "3333333333",
    "country": "MX",
    "street": "mock street",
    "city": "mock city",
    "state": "MK",
    "district": "mock district"
  },
  "packages": [
    {
      "type": "box",
      "content": "camisetas",
      "amount": 2,
      "name": "camisetas",
      "declaredValue": 400,
      "lengthUnit": "CM",
      "weightUnit": "KG",
      "weight": 2,
      "dimensions": {
        "length": 1,
        "width": 17,
        "height": 2
      }
    }
  ],
  "settings": {
    "currency": "MXN",
    "printFormat": "PDF",
    "printSize": "PAPER_4X8"
  },
  "shipment": {
    "carrier": "bigLogistics",
    "service": "next_day",
    "reverse_pickup": 0,
    "type": 1
  }
}
```
-  After you send the post request, if the creation has been successful, the counter will automatically increase in one, because of the socket created.

## Deploy
You can find on this url: [https://coding-challenge-envia-dev-kgss.1.us-1.fl0.io/](https://coding-challenge-envia-dev-kgss.1.us-1.fl0.io/) an already deployed version for this application.
Counter persists between tabs :) 
This might take some time to load the first time you open the above url, server needs to start
