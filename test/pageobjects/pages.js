class TestPage {     

    async goForm() {
        await browser.pause(200); 
        const formsButton = $('//android.widget.Button[@content-desc="Forms"]');
        await formsButton.click();
    }

    async fieldTest(inputText) {
        await browser.pause(200); 
        const input = $('//android.widget.EditText[@content-desc="text-input"]');
        const result = $('//android.widget.TextView[@content-desc="input-text-result"]');
        await input.setValue(inputText);
        const output = await result.getText();
        return output;
    }

    async switchTest() {
        await browser.pause(200); 
        const switchButton = $('//android.widget.Switch[@content-desc="switch"]');
        await switchButton.click();
        const switchText = $('//android.widget.TextView[@content-desc="switch-text"]');
        const switchResult = await switchText.getText();
        return switchResult;
    }

    async dropdownTest() {
        await browser.pause(200); 
        const dropdownButton = await $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText');
        await dropdownButton.click();
        const dropdownEntry = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]')
        await dropdownEntry.click();
        const dropdownText = await dropdownButton.getText();
        return dropdownText;
    }

    async clickTest(){
        await browser.pause(200); 
        const clickButton = await $('//android.view.ViewGroup[@content-desc="button-Active"]');
        await clickButton.click();
        const clickEntry = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView')
        const clickText = await clickEntry.getText();
        return clickText;
    }

    async scrollDown(){
        await browser.pause(200); 
        await driver.performActions([
            {
               type: 'pointer',
               id: 'finger1',
               parameters: { pointerType: 'touch' },
               actions: [
                  { type: 'pointerMove', duration: 0, x: 100, y: 100},
                  { type: 'pointerDown', button: 0 },
                  { type: 'pause', duration: 100 },
                  { type: 'pointerMove', duration: 1000, origin: 'pointer', x: 100, y: -200 },
                  { type: 'pointerUp', button: 0 },
               ],
            },
         ])
    }

}

module.exports = new TestPage()