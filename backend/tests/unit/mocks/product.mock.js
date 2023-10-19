const productFromDB = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];
const productFromModel = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const productIdFromDB = {
  id: 1,
  name: 'Martelo de Thor',
};
const productIdFromModel = {
  id: 1,
  name: 'Martelo de Thor',
};

const productServiceSuccessful = {
  status: 'SUCCESSFUL',
  data: productFromModel,
};
const productIDServiceSuccessful = {
  status: 'SUCCESSFUL',
  data: productIdFromModel,
};
const productIDServiceNotFound = {
  status: 'NOT_FOUND',
  data: { message: 'message' },
};

const newProductFromDB = { insertId: 4 };
const newProductFromModel = {
  id: 4,
  name: 'ProdutoX',
};
const newProductServiceSuccessful = {
  status: 'CREATED',
  data: newProductFromModel,
};

module.exports = {
  productFromDB,
  productFromModel,
  productIdFromDB,
  productIdFromModel,
  productServiceSuccessful,
  productIDServiceSuccessful,
  productIDServiceNotFound,
  newProductFromDB,
  newProductFromModel,
  newProductServiceSuccessful,
};