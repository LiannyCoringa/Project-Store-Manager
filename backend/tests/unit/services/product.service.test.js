const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const { productService } = require('../../../src/services');
const {
  productFromDB,
  productFromModel,
  productIdFromDB,
  productIdFromModel,
  newProductFromDB,
  newProductFromModel,
} = require('../mocks/product.mock');

describe('Realizando testes - product service', function () {
  it('Retornando todos os products com sucesso', async function () {
    sinon.stub(productModel, 'findAll').resolves(productFromDB);

    const products = await productService.getProduct();

    expect(products.status).to.equal('SUCCESSFUL');
    expect(products.data).to.be.deep.equal(productFromModel);
  });
  it('Retorna produto com ID existente', async function () {
    sinon.stub(productModel, 'findById').resolves(productIdFromDB);

    const inputData = 1;
    const product = await productService.getProductById(inputData);

    expect(product.status).to.equal('SUCCESSFUL');
    expect(product.data).to.be.deep.equal(productIdFromModel);
  });
  it('Não retorna produto com ID inexistente', async function () {
    sinon.stub(productModel, 'findById').resolves(undefined);

    const inputData = 999;
    const product = await productService.getProductById(inputData);

    expect(product.status).to.equal('NOT_FOUND');
    expect(product.data.message).to.equal('Product not found');
  });
  it('Insere um novo produto com sucesso', async function () {
    sinon.stub(productModel, 'insert').resolves(newProductFromDB);
    sinon.stub(productModel, 'findById').resolves(newProductFromModel);

    const inputData = 'ProdutoX';
    const product = await productService.insertProduct(inputData);

    expect(product.status).to.equal('CREATED');
    expect(product.data).to.be.deep.equal(newProductFromModel);
  });
  afterEach(function () {
    sinon.restore();
  });
});