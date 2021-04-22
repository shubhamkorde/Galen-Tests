importClass(org.openqa.selenium.interactions.Actions);

this.HomePage = $page("Home page", {
    loginButton: ".oppia-navbar-button-container .protractor-mobile-test-login",

    // hoverFirstMenuItem: loggedFunction ("Hover first menu item", function (){
    //     var actions = new Actions(this.driver);
    //     actions.moveToElement(this.findChild("xpath: //*[@id='menu']//li/a[1]")).perform();
    // }) 
});
