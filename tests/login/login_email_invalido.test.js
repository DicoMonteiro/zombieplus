
// Suite de testes para serem executados todos os nossos cenários de validações das funcionalidades

module.exports = {
    '@tags': ['smoke', 'emailInvalido'],
    // Para desabilitar a suite de teste e nao ser executado
    // '@disabled': true,
    // before : (browser) => {
    //     browser.resizeWindow(1920, 1080)
    // },

    // after : (browser) => {
    //     browser.end();
    // },
    'login com email invalido': function (browser) {
        let login = browser.page.login()
        login
            .with('teste@ninjazombie.com', 'pwd123')
            .expectAlertDanger('Usuário e/ou senha inválidos')
            // .navigate()
            // .waitForElementVisible('@form', 3000)
            // .assert.titleContains('ZombiePlus')
            // .assert.visible('@emailInput')
            // .setValue('@emailInput', 'teste@ninjazombie.com')
            // .setValue('@passInput', 'pwd123')
            // .assert.visible('@loginButton')
            // .click('@loginButton')
            // .waitForElementVisible('@userError', 3000)
            // .assert.containsText('@userError', 'Usuário e/ou senha inválidos')
    }

}