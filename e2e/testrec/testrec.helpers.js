function switchWindow(x) {
    browser.getAllWindowHandles().then(function(handles){
        browser.switchTo().window(handles[x]);
    });
}

function closeTabs() {
    browser.getAllWindowHandles().then(function (handles) {
        handles = handles.slice();
        while (handles.length > 1) {
            browser.driver.switchTo().window(handles[handles.length - 1]).then(function() {
                browser.driver.close();
            });
            handles.pop();
        }
        browser.driver.switchTo().window(handles[0]);
    });
}

function setAngular(version) {
    if (!version) {
        browser.ignoreSynchronization = true;
        browser.rootEl = "";
    } else if (
        (typeof version === "number" && version === 2) ||
        (typeof version === "string" && version.indexOf("2") === 0)
    ) {
        browser.ignoreSynchronization = false;
        browser.rootEl = "";
    } else {
        browser.ignoreSynchronization = false;
        browser.rootEl = "body";
    }
}

function switchToFrame(chain, av, nextElement) {
    browser.switchTo().defaultContent();
    chain = chain.split(".");
    for (var c = 0; c < chain.length; ++c) {
        var name = chain[c];
        browser.wait(function () {
            setAngular(null);
            return browser.isElementPresent(by.css("iframe[name='" + name + "']"));
        });
        browser.switchTo().frame(name);
    }
    setAngular(av);
    if (nextElement) {
        browser.wait(function () {
            setAngular(av);
            return browser.isElementPresent(nextElement);
        });
    }
}

module.exports = {
    switchWindow: switchWindow,
    switchToFrame: switchToFrame,
    closeTabs: closeTabs,
    setAngular: setAngular
};
