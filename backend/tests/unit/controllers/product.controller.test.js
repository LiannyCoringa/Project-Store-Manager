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
  newProductServiceInvalidValue,
  newProductServiceBadRequest,
  updateProductFromModel,
  updateProductServiceSuccessful,
  updateProductServiceInvalidValue,
  updateProductServiceBadRequest,
  updateProductServiceNotFound,
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
  it('Insere um novo produto com falha - 422', async function () {
    sinon.stub(productService, 'insertProduct').resolves(newProductServiceInvalidValue);
    const req = {
      body: { name: 'Prod' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.insertProduct(req, res);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });
  it('Insere um novo produto com falha - 400', async function () {
    sinon.stub(productService, 'insertProduct').resolves(newProductServiceBadRequest);
    const req = {
      body: { name: '' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.insertProduct(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });
  it('Atualiza um produto com sucesso - 200', async function () {
    sinon.stub(productService, 'updateProduct').resolves(updateProductServiceSuccessful);
    const req = {
      params: { id: 1 },
      body: { name: 'ProdutoX' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.updateProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(updateProductFromModel);
  });
  it('Atualiza um produto com falha - 422', async function () {
    sinon.stub(productService, 'updateProduct').resolves(updateProductServiceInvalidValue);
    const req = {
      params: { id: 1 },
      body: { name: 'Prod' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.updateProduct(req, res);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });
  it('Atualiza um produto com falha - 400', async function () {
    sinon.stub(productService, 'updateProduct').resolves(updateProductServiceBadRequest);
    const req = {
      params: { id: 1 },
      body: { name: '' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.updateProduct(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });
  it('Atualiza um produto com falha - 404', async function () {
    sinon.stub(productService, 'updateProduct').resolves(updateProductServiceNotFound);
    const req = {
      params: { id: 999 },
      body: { name: 'ProdutoX' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.updateProduct(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });
  afterEach(function () {
    sinon.restore();
  });
});