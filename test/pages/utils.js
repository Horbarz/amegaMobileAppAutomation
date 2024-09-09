const { ActionSequence } = require('webdriverio');
const driver = require('webdriverio');


async function tapOnCoordinates(x, y) {
    // Use the WebDriverIO Actions API to tap on the profile icon
    // const element = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]')
    // await driver.touchAction([{ action: 'tap', x: x, y: y, element: element }])
    const actions = await browser.actions({
        async: true
    });

    await actions
        .pointerMove(x, y)
        .pointerDown()
        .pause(200)
        .pointerUp()
        .perform();

}

module.exports = {
    tapOnCoordinates
};
