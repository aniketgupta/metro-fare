import chai from 'chai';
import chaiHttp from 'chai-http';
var should = chai.should();
chai.use(chaiHttp);
import server from '../app.mjs';
//Our parent block
describe('Fare', () => {
 describe('/GET fare', () => {
    it('it should GET the total fare', (done) => {
    chai.request(server)
      .get('/api/fare')
      .end((err, res) => {
            (res).should.have.status(200);
            (res.body).should.be.a('object');
            done();
        });
      });
  });
});