let browser = require('zombie')

let browser = new Browser()
browser.site = 'http://localhost:3000/'

let name = 'Polo'

browser.visit('/welcome', () =>{
    browser.Assert.element('h4#i1')

    browser.fill('#surname', surname)
    browser.pressButton('#submitname', () =>{
        browser.assert.text('p#respponse', 'Welcome' + name)
        console.log('All tests passed')
    })



})



