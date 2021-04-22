load("init.js");
load("pages/LoginPage.js");


testOnAllDevices("Login page", "/", function (driver, device) {

    var loginPage = null;

    logged("Basic layout check", function () {
        var welcomePage = new WelcomePage(driver).waitForIt();
        welcomePage.loginButton.click();

        loginPage = new LoginPage(driver).waitForIt();

        checkLayout(driver, "specs/loginPage.gspec", device.tags);
    });

    logged("Checking error box", function () {
        loginPage.username.typeText("qweqwe");
        loginPage.loginButton.click();
        loginPage.errorMessage.waitToBeShown();

        checkLayout(driver, "specs/loginPage-withErrorMessage.gspec", device.tags);
    });

});
