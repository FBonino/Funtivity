/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);

describe('Country routes', () => {

  before(async () => {
    await conn.authenticate();
    await Country.sync({ force: true });
    await agent.get('/start');
  })

  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
    it('should get an array', () =>
      agent.get('/countries').then(res => {
        expect(Array.isArray(res.body)).to.be.equal(true);
      })
    );
  });

  describe('GET /countries using queries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
    it('should get 200 with every query undefined', () =>
      agent.get('/countries?name=&filter=&offset=&order=').expect(200)
    );
    it('should get the country searched by name', () =>
      agent.get('/countries?name=argentina&filter=&offset=&order=').then(res => {
        expect(res.body.pop().name).to.equal('Argentina');
      })
    );
    it('should get 400 when the name searched for is not in the database', () =>
      agent.get('/countries?name=test123&filter=&offset=&order=').expect(400)
    );
    it('should get 200 when results are filtered, ordered and with a page number', () =>
      agent.get('/countries?name=&filter=Continent,Europe&offset=2&order=population,DESC').expect(200)
    );
  });
});