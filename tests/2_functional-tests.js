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
    const Browser = require('zombie');
// Browser.site = 'https://ajaythanki-organic-space-meme-q9r4x4ppww7hx557-3000.preview.app.github.dev';
// Browser.site = 'https://chai-test.onrender.com';
Browser.site = 'http://0.0.0.0:3000';

suite('Functional Tests with Zombie.js', function () {
  this.timeout(5000);
  const browser = new Browser();
  suiteSetup(function(done) {
    return browser.visit('/', done);
  });

  suite('Headless browser', function () {
    test('should have a working "site" property', function() {
      assert.isNotNull(browser.site);
    });
  });

  suite('"Famous Italian Explorers" form', function () {
    // #5
    const Browser = require('zombie');
    Browser.site = 'http://0.0.0.0:3000';

    test('Submit the surname "Colombo" in the HTML form', function (done) {
      browser.fill('surname','Colombo').then(() => {
      browser.pressButton('submit',() => {
        browser.assert.success();
        browser.assert.text('span#name','Cristoforo');
        browser.assert.text('span#surname','Colombo');
        browser.assert.elements('span#dates',1);
      done();
      });
      });

    });

    // #6
     test('Submit the surname "Vespucci" in the HTML form', function (done) {
      browser.fill('surname','Vespucci').then(() => {
      browser.pressButton('submit',() => {
        browser.assert.success();
        browser.assert.text('span#name','Amerigo');
        browser.assert.text('span#surname','Vespucci');
        browser.assert.elements('span#dates',1);
      done();
      });
      });
    });
  });
});
