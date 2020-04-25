
// Suite de testes para serem executados todos os nossos cenários de validações das funcionalidades

module.exports = {

    '@tags': ['smoke', 'senhaBranco'],
    // Para desabilitar a suite de teste e nao ser executado
    // '@disabled': true,
    // before : (browser) => {
    //     browser.resizeWindow(1920, 1080)
    // },

    // after : (browser) => {
    //     browser.end();
    // },

    'login com senha branco': function (browser) {
        let login = browser.page.login()
        login
            .with('didico@ninjazombie.com', '')
            .expectAlert('@userAlert', 'Opps. Cadê a senha?')
            // .navigate()
            // .waitForElementVisible('@form', 3000)
            // .assert.titleContains('ZombiePlus')
            // .assert.visible('@emailInput')
            // .setValue('@emailInput', 'didico@ninjazombie.com')
            // .setValue('@passInput', '')
            // .assert.visible("@loginButton")
            // .click("@loginButton")
            // .waitForElementVisible('@userAlert', 3000)
            // .assert.containsText('@userAlert', 'Opps. Cadê a senha?')
    }

}