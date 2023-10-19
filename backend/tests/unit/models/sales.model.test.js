const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');

const { salesModel } = require('../../../src/models');
const {
  salesFromDB,
  salesFromModel,
  salesIdFromDB,
  salesIdFromModel,
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
  afterEach(function () {
    sinon.restore();
  });
});
