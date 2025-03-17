export const users = [
  {
    id: 123,
    name: 'Jan Kowalski',
    email: 'jan.kowalski@example.com',
    adressId: '459694604069999',
    details: [
      { id: 999, title: 'Produkt 1', description: 'Opis produktu 1' },
      { id: 1000, title: 'Produkt 2', description: 'Opis produktu 2' },
    ],
  },
  {
    id: 124,
    name: 'Anna Nowak',
    email: 'anna.nowak@example.com',
    addressId: '4596946040640',
    details: [
      { id: 1001, title: 'Usługa 1', description: 'Opis usługi 1' },
    ],
  },
];


export const addresses = [
  {
    id: '4596946040640',
    countryId: 'pl_PL',
    street: 'Tmp Street',
    buildNumber: '11',
    zipCode: '11-111',
    city: 'Bialystok',
    phoneNumber: '531211204',
    customFields: {
      vatId: '123123123123',
      company: 'Company Name',
    },
  },
  {
    id: '459694604069999',
    countryId: 'pl_PL',
    street: 'Tmp Street',
    buildNumber: '12',
    zipCode: '11-123',
    city: 'Bialystok',
    phoneNumber: '531211999',
    customFields: {
      vatId: '1231231231333',
      company: 'Company Name',
    },
  },
];


export const countries = [
  {
    id: 'pl_PL',
    label: 'Poland'
  },

  {
    id: 'us_US',
    label: 'USA'
  },

  {
    id: 'en_EN',
    label: 'England'
  }
]