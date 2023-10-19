const date = '2021-09-09T04:54:29.000Z';
const salesFromDB = [
  {
    saleId: 1,
    date,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date,
    productId: 3,
    quantity: 15,
  },
];
const salesFromModel = [
  {
    saleId: 1,
    date,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date,
    productId: 3,
    quantity: 15,
  },
];

const salesIdFromDB = [
  {
    date,
    productId: 1,
    quantity: 5,
  },
  {
    date,
    productId: 2,
    quantity: 10,
  },
];
const salesIdFromModel = [
  {
    date,
    productId: 1,
    quantity: 5,
  },
  {
    date,
    productId: 2,
    quantity: 10,
  },
];

const salesServiceSuccessful = {
  status: 'SUCCESSFUL',
  data: salesFromModel,
};
const salesIDServiceSuccessful = {
  status: 'SUCCESSFUL',
  data: salesIdFromModel,
};
const salesIDServiceNotFound = {
  status: 'NOT_FOUND',
  data: { message: 'message' },
};

module.exports = {
  salesFromDB,
  salesFromModel,
  salesIdFromDB,
  salesIdFromModel,
  salesServiceSuccessful,
  salesIDServiceSuccessful,
  salesIDServiceNotFound,
};