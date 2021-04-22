load("init.js");
load("pages/LoginPage.js");
load("pages/MyNotesPage.js");
load("pages/AddNotePage.js");
load("commons.js");

testOnAllDevices("Add note page", "/", function (driver, device) {
    loginAsTestUser(driver);
    var myNotesPage = new MyNotesPage(driver);
    myNotesPage.addNoteButton.click();
    new AddNotePage(driver).waitForIt();

    checkLayout(driver, "specs/addNotePage.gspec", device.tags);
});
