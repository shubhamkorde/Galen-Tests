load("init.js");
load("pages/HomePage.js");
console.log('Started Successfully');
testOnAllDevices("HomePage page", "/", function (driver, device) {
    new HomePage(driver).waitForIt();
    checkLayout(driver, "specs/homePage.gspec", device.tags);
});



// testOnDevice($galen.devices.desktop, "Menu Highlight", "/", function (driver, device) {
//     var welcomePage = new WelcomePage(driver).waitForIt();
//     logged("Checking color for menu item", function () {
//         checkLayout(driver, "specs/menuHighlight.gspec", ["usual"]);
//     })

//     logged("Checking color for highlighted menu item", function () {
//         welcomePage.hoverFirstMenuItem();
//         checkLayout(driver, "specs/menuHighlight.gspec", ["hovered"]);
//     });
// });
