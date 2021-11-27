console.log("Hello World from background script");

chrome.action.onClicked.addListener(buttonClicked);

async function buttonClicked() {
    let query_options = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(query_options);
    console.log(tab);
    msg = {
        text: "analyse"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}