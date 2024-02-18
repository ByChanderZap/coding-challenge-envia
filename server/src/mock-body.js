const mockBody = {
  origin: {
    number: '',
    postalCode: '66236',
    type: 'origin',
    company: 'doe',
    name: 'joe',
    email: 'joedoe@gmail.com',
    phone: '3333333333',
    country: 'MX',
    street: 'mock street',
    city: 'mock city',
    state: 'MK',
    district: 'mock district'
  },
  destination: {
    number: '',
    postalCode: '66236',
    type: 'origin',
    company: 'doe',
    name: 'joe',
    email: 'joedoe@gmail.com',
    phone: '3333333333',
    country: 'MX',
    street: 'mock street',
    city: 'mock city',
    state: 'MK',
    district: 'mock district'
  },
  packages: [
    {
      type: 'box',
      content: 'camisetas',
      amount: 2,
      name: 'camisetas',
      declaredValue: 400,
      lengthUnit: 'CM',
      weightUnit: 'KG',
      weight: 2,
      dimensions: {
        length: 1,
        width: 17,
        height: 2
      }
    }
  ],
  settings: {
    currency: 'MXN',
    printFormat: 'PDF',
    printSize: 'PAPER_4X8'
  },
  shipment: {
    carrier: 'bigLogistics',
    service: 'next_day',
    reverse_pickup: 0,
    type: 1
  }
}

export default mockBody
