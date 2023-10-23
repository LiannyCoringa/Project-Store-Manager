const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');
const {
  salesFromModel,
  salesIdFromModel,
  salesServiceSuccessful,
  salesIDServiceSuccessful,
  salesIDServiceNotFound,
  newSalesFromModel,
  newSalesServiceSuccessful,
} = require('../mocks/sales.mock');

describe('Realizando testes - sales controller', function () {
  it('Retornando todos os sales com sucesso - 200', async function () {
    sinon.stub(salesService, 'getSales').resolves(salesServiceSuccessful);
    const req = {
      body: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await salesController.getSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesFromModel);
  });
  it('Retornando um sale com sucesso - 200', async function () {
    sinon.stub(salesService, 'getSalesById').resolves(salesIDServiceSuccessful);
    const req = {
      params: { id: 1 },
      body: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await salesController.getSalesById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesIdFromModel);
  });
  it('Retornando um sale com falha - 404', async function () {
    sinon.stub(salesService, 'getSalesById').resolves(salesIDServiceNotFound);
    const req = {
      params: { id: 999 },
      body: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await salesController.getSalesById(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });
  it('Insere um novo sale com sucesso - 201', async function () {
    sinon.stub(salesService, 'insertSales').resolves(newSalesServiceSuccessful);
    const req = {
      body: [{ productId: 1, quantity: 5 }],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await salesController.insertSales(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newSalesFromModel);
  });
  it('Insere um novo sale com falha - 422', async function () {
    sinon.stub(salesService, 'insertSales').resolves({ status: 'INVALID_VALUE', data: { message: '"quantity" must be greater than or equal to 1' } });
    const req = {
      body: [{ productId: 1, quantity: 0 }],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await salesController.insertSales(req, res);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });
  it('Insere um novo sale com falha em productId - 400', async function () {
    sinon.stub(salesService, 'insertSales').resolves({ status: 'BAD_REQUEST', data: { message: '"productId" is required' } });
    const req = {
      body: [{ quantity: 5 }],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await salesController.insertSales(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });
  it('Insere um novo sale com falha em quantity - 400', async function () {
    sinon.stub(salesService, 'insertSales').resolves({ status: 'BAD_REQUEST', data: { message: '"quantity" is required' } });
    const req = {
      body: [{ productId: 1 }],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await salesController.insertSales(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });
  afterEach(function () {
    sinon.restore();
  });
});