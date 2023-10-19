const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productService } = require('../../../src/services');
const { productController } = require('../../../src/controllers');
const {
  productFromModel,
  productIdFromModel,
  productServiceSuccessful,
  productIDServiceSuccessful,
  productIDServiceNotFound,
  newProductFromModel,
  newProductServiceSuccessful,
} = require('../mocks/product.mock');

describe('Realizando testes - product controller', function () {
  it('Retornando todos os products com sucesso - 200', async function () {
    sinon.stub(productService, 'getProduct').resolves(productServiceSuccessful);
    const req = {
      body: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.getProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productFromModel);
  });
  it('Retornando um product com sucesso - 200', async function () {
    sinon.stub(productService, 'getProductById').resolves(productIDServiceSuccessful);
    const req = {
      params: { id: 1 },
      body: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.getProductsById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productIdFromModel);
  });
  it('Retornando um product com falha - 404', async function () {
    sinon.stub(productService, 'getProductById').resolves(productIDServiceNotFound);
    const req = {
      params: { id: 999 },
      body: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.getProductsById(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });
  it('Insere um novo produto com sucesso - 201', async function () {
    sinon.stub(productService, 'insertProduct').resolves(newProductServiceSuccessful);
    const req = {
      body: { name: 'ProdutoX' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.insertProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProductFromModel);
  });
  afterEach(function () {
    sinon.restore();
  });
});