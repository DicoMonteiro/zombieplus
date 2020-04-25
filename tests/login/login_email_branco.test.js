
// Suite de testes para serem executados todos os nossos cenários de validações das funcionalidades

module.exports = {
    '@tags': ['smoke', 'emailBranco'],
    // Para desabilitar a suite de teste e nao ser executado
    // '@disabled': true,
    // before : (browser) => {
    //     browser.resizeWindow(1920, 1080)
    // },

    // after : (browser) => {
    //     browser.end();
    // },

    'login com email branco': function (browser) {
        let login = browser.page.login()
        login
            .with('', 'pwd123')
            .expectAlert('@userAlert', 'Opps. Cadê o email?')
            // .navigate()
            // .waitForElementVisible('@form', 3000)
            // .assert.titleContains('ZombiePlus')
            // .assert.visible('@emailInput')
            // .setValue('@emailInput', '')
            // .setValue('@passInput', 'pwd123')
            // .assert.visible("@loginButton")
            // .click("@loginButton")
            // .waitForElementVisible('@userAlert', 3000)
            // .assert.containsText('@userAlert', 'Opps. Cadê o email?')
    }

}