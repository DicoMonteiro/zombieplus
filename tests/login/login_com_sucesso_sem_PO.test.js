
// Suite de testes para serem executados todos os nossos cenários de validações das funcionalidades

module.exports = {

    '@tags': ['smoke', 'login'],
    // Para desabilitar a suite de teste e nao ser executado
    // '@disabled': true,

    // before : (browser) => {
    //     browser.resizeWindow(1920, 1080)
    // },

    // after : (browser) => {
    //     browser.end();
    // },

    'login com sucesso tradicional': function (browser) {
        let userInfo = '.user .info span'
        // URL função responsável por abrir o browser e execute a url
        browser
            .url('http://zombie-web:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .assert.titleContains('ZombiePlus')
            .assert.visible('input[name=email]')
            .setValue('input[name=email]', 'didico@ninjazombie.com')
            .setValue('input[name=password]', 'pwd123')
            .assert.visible(".login-button")
            .click(".login-button")
            .waitForElementPresent(userInfo, 5000)
            .assert.containsText(userInfo, 'Adriano Almeida')
    },

}