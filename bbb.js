module.exports = {
  'bbb' : function (browser) {
    var url='https://gshow.globo.com/realities/bbb/bbb20/votacao/paredao-bbb20-quem-voce-quer-eliminar-babu-gizelly-ou-mari-6b0c783d-65cd-4a4e-940c-ad086cf73fee.ghtml';
    var voto='Gizelly';
    browser
      .url(url)
      .waitForElementVisible('//div[@id="roulette-root"]')
      .click('//div[@id="roulette-root"]//div[text()="'+voto+'"]')

      .pause(1000)
      .execute('document.querySelector(".login-modal iframe").setAttribute("id", "frame-login")')
      .frame('frame-login')
          .setValue('//input[@id="login"]', 'covid19bbb@gmail.com')
          .setValue('//input[@id="password"]', 'cest une virus')
          .click('//button[@type="submit"]')

    browser
      .frame()
      .waitForElementVisible('//div[@id="roulette-root"]//span[contains(text(), "Para confirmar seu voto, selecione:")]')
      .moveToElement('xpath', '//div[@id="roulette-root"]//span[contains(text(), "Para confirmar seu voto, selecione:")]/../..//img', 40, 20)
      .mouseButtonClick(0)
      .pause(2000)

    var i=100;
    var voto = 0;

    function clickOnImage(browser)
    {
        browser
          .waitForElementVisible('//div[@id="roulette-root"]//span[contains(text(), "Para confirmar seu voto, selecione:")]')
          .moveToElement('xpath', '//div[@id="roulette-root"]//span[contains(text(), "Para confirmar seu voto, selecione:")]/../..//img', 150, 30)
          .mouseButtonClick(0)
          .pause(2000)
          //.waitForElementVisible('xpath', '//div[@id="roulette-root"]//span[contains(text(), "Para confirmar seu voto, selecione:")]', 5000, 500, false, function(result) {console.log(result);clickOnImage(browser);});
          .waitForElementVisible('//button[@id="gc__1JSqe"]//span[contains(text(), "Recarregar Imagens")]')
          .moveToElement('xpath', '//div[@id="gc__1JSqe"]//span[contains(text(), "Recarregar Imagens', 70, 20)
          .mouseButtonClick(0)
          .pause(1000)
          
    }

    while(i--) {
        voto++;
        browser
          .url(url)
          .waitForElementVisible('//div[@id="roulette-root"]')
          .pause(250)
          .click('//div[@id="roulette-root"]//div[text()="'+voto+'"]');
        clickOnImage(browser);
    }

    browser.end();
}
};

