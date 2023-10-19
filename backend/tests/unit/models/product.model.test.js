const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');

const { productModel } = require('../../../src/models');
const {
  productFromDB,
  productFromModel,
  productIdFromDB,
  productIdFromModel,
  newProductFromDB,
} = require('../mocks/product.mock');

describe('Product Model', function () {
  it('Recuperando todos os products com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([productFromDB]);

    const products = await productModel.findAll();

    expect(products).to.be.an('array');
    expect(products).to.be.deep.equal(productFromModel);
  });
  it('Recuperando product por id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[productIdFromDB]]);

    const inputData = 1;
    const product = await productModel.findById(inputData);

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(productIdFromModel);
  });
  it('Insere um novo produto com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([newProductFromDB]);

    const inputData = 'ProdutoX';
    const product = await productModel.insert(inputData);

    expect(product).to.be.an('number');
    expect(product).to.be.equal(4);
  });
  afterEach(function () {
    sinon.restore();
  });
});
