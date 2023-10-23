const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');

const { salesModel } = require('../../../src/models');
const {
  salesFromDB,
  salesFromModel,
  salesIdFromDB,
  salesIdFromModel,
  newSalesFromDB,
  delSalesFromDB,
  updateSale,
} = require('../mocks/sales.mock');

describe('Sales Model', function () {
  it('Recuperando todos os sales com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([salesFromDB]);

    const sales = await salesModel.findModel();

    expect(sales).to.be.an('array');
    expect(sales).to.be.deep.equal(salesFromModel);
  });
  it('Recuperando sales por id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([salesIdFromDB]);

    const inputData = 1;
    const sales = await salesModel.findIdModel(inputData);

    expect(sales).to.be.an('array');
    expect(sales).to.be.deep.equal(salesIdFromModel);
  });
  it('Inserindo sales com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([newSalesFromDB]);

    const sales = await salesModel.insertSale();

    expect(sales).to.be.an('number');
    expect(sales).to.be.deep.equal(4);
  });
  it('Inserindo salesProducts com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([newSalesFromDB]);

    const sales = await salesModel.insertSaleProduct(4, 1, 5);

    expect(sales).to.be.an('number');
    expect(sales).to.be.deep.equal(4);
  });
  it('Deletando sales com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([delSalesFromDB]);

    const sales = await salesModel.deleteSale(1);

    expect(sales).to.be.an('Object');
    expect(sales).to.be.deep.equal(delSalesFromDB);
  });
  it('Atualizando sales com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([updateSale]);

    const sales = await salesModel.updateSale(1, 1, 10);

    expect(sales).to.be.an('Object');
    expect(sales).to.be.deep.equal(updateSale);
  });
  afterEach(function () {
    sinon.restore();
  });
});
