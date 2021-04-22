load("galen-bootstrap/galen-bootstrap.js");


var TEST_USER = {
    username: "testadmin@example.com",
    password: "test123"
};

$galen.settings.website = "http://localhost:8181";
//$galen.settings.website = "http://localhost:8080";

$galen.registerDevice("mobile", inSingleBrowser("mobile emulation", "450x700", ["mobile"]));
$galen.registerDevice("tablet", inSingleBrowser("tablet emulation", "600x700", ["tablet"]));
$galen.registerDevice("desktop", inSingleBrowser("desktop emulation", "1024x768", ["desktop"]));


(function (exp) {
    exp.TEST_USER = TEST_USER;
})(this);
