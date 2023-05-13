const chai = require('chai');
const assert = chai.assert;

const server = require('../server');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

suite('Functional Tests', function () {
  this.timeout(5000);
  suite('Integration tests with chai-http', function () {
    // #1
    test('Test GET /hello with no name', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/hello')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'hello Guest');
          done();
        });
    });
    // #2
    test('Test GET /hello with your name', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/hello?name=xy_z')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'hello xy_z');
          done();
        });
    });
    // #3
   test('send {surname: "Colombo"}', function(done) {
  // we setup the request for you...
  chai
    .request(server)
    .put('/travellers')
    /** send {surname: 'Colombo'} here **/
    .send({ surname: 'Colombo' })
    // .send({...})
    .end(function(err, res) {
      /** your tests here **/
      assert.equal(res.status, 200, 'response status should be 200');
      assert.equal(res.type, 'application/json', 'Response should be json');
      assert.equal(
        res.body.name,
        'Cristoforo',
        'res.body.name should be "Christoforo"'
      );
      assert.equal(
        res.body.surname,
        'Colombo',
        'res.body.surname should be "Colombo"'
      );

      done(); // Never forget the 'done()' callback...
    });
});
    // #4
    test('send {surname: "da Verrazzano"}', function(done) {
  /** place the chai-http request code here... **/
  chai
    .request(server)
    .put('/travellers')
    .send({ surname: 'da Verrazzano' })
    /** place your tests inside the callback **/
    .end(function(err, res) {
      assert.equal(res.status, 200, 'response status should be 200');
      assert.equal(res.type, 'application/json', 'Response should be json');
      assert.equal(res.body.name, 'Giovanni');
      assert.equal(res.body.surname, 'da Verrazzano');

      done();
    });
});
    // #5
  const Browser = require('zombie');
const assert = require('assert');

describe('Testing form submission', function() {
  before(function() {
    this.browser = new Browser();
  });

  it('should submit "surname" : "Colombo" and check results', function(done) {
    const browser = this.browser;
    browser.visit('http://localhost:3000/', function() {
      browser.fill('surname', 'Colombo').pressButton('submit', function() {
        // assert that status is OK 200
        assert.equal(browser.statusCode, 200);
        // assert that the text inside the element 'span#name' is 'Cristoforo'
        assert.equal(browser.text('span#name'), 'Cristoforo');
        // assert that the text inside the element 'span#surname' is 'Colombo'
        assert.equal(browser.text('span#surname'), 'Colombo');
        // assert that the element(s) 'span#dates' exist and their count is 1
        assert.equal(browser.queryAll('span#dates').length, 1);

        done(); // It's an async test, so we have to call 'done()''
      });
    });
  });
});

    // #6
    test('Submit the surname "Vespucci" in the HTML form', function (done) {
      assert.equal();

      done();
    });
  });
});
