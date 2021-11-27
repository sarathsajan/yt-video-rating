chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse) {
    msg = request;
    console.log(msg.text);
    if (msg.text === "analyse") {
        let video_views_raw = document.getElementsByClassName("view-count style-scope ytd-video-view-count-renderer")[0].innerText;
        console.log(video_views_raw);
        alert(video_views_raw);

        let video_likes_raw = document.getElementsByClassName("style-scope ytd-toggle-button-renderer style-text")[1].innerText;
        console.log(video_likes_raw);
        alert(video_likes_raw);
    }
}