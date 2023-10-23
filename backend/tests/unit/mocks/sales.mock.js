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

const newSalesFromDB = {
  insertId: 4,
};

const newSalesFromModel = {
  id: 4,
  itemsSold: [
    {
      productId: 1,
      quantity: 5,
    },
  ],
};

const newSalesServiceSuccessful = {
  status: 'CREATED',
  data: newSalesFromModel,
};

const delSalesFromDB = {
  id: 1,
  date,
};

const updateSale = {
  date: ['Date: 2021-09-09T04:54:29.000Z'],
  productId: 1,
  quantity: 10,
  saleId: 1,
};

module.exports = {
  salesFromDB,
  salesFromModel,
  salesIdFromDB,
  salesIdFromModel,
  salesServiceSuccessful,
  salesIDServiceSuccessful,
  salesIDServiceNotFound,
  newSalesFromDB,
  newSalesFromModel,
  newSalesServiceSuccessful,
  delSalesFromDB,
  updateSale,
};