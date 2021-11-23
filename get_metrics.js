let views_metric = "0";
let likes_metric = "0";
let comments_metric = "0";

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension started");
    console.log(views_metric);
    console.log(likes_metric);
    console.log(comments_metric);
})
