console.log("Hello World from Chrome Extension");

let video_views = document.getElementsByClassName("view-count style-scope ytd-video-view-count-renderer")[0].innerText.slice(0, -6);
console.log(video_views);

let video_likes = document.getElementsByClassName("style-scope ytd-toggle-button-renderer style-text")[1].innerText.slice(0, -1);
let video_likes_multiplier = document.getElementsByClassName("style-scope ytd-toggle-button-renderer style-text")[1].innerText.slice(-1);
console.log(video_likes);
console.log(video_likes_multiplier);

// console.log(video_views);
// console.log(video_likes);
// console.log(video_rating);