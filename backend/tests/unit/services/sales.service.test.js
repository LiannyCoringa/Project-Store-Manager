const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const {
  salesFromDB,
  salesFromModel,
  salesIdFromDB,
  salesIdFromModel,
} = require('../mocks/sales.mock');

describe('Realizando testes - sales service', function () {
  it('Retornando todos os sales com sucesso', async function () {
    sinon.stub(salesModel, 'findModel').resolves(salesFromDB);

    const sales = await salesService.getSales();

    expect(sales.status).to.equal('SUCCESSFUL');
    expect(sales.data).to.be.deep.equal(salesFromModel);
  });
  it('Retorna sale com ID existente', async function () {
    sinon.stub(salesModel, 'findIdModel').resolves(salesIdFromDB);

    const inputData = 1;
    const sale = await salesService.getSalesById(inputData);

    expect(sale.status).to.equal('SUCCESSFUL');
    expect(sale.data).to.be.deep.equal(salesIdFromModel);
  });
  it('Não retorna sale com ID inexistente', async function () {
    sinon.stub(salesModel, 'findIdModel').resolves([]);

    const inputData = 999;
    const sale = await salesService.getSalesById(inputData);

    expect(sale.status).to.equal('NOT_FOUND');
    expect(sale.data.message).to.equal('Sale not found');
  });
  afterEach(function () {
    sinon.restore();
  });
});