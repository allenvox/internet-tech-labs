var showing = "empty";
function show(val) {
    document.getElementById(showing.toString()).style.visibility = "hidden";
    document.getElementById("episodes1").style.visibility = "hidden";
    document.getElementById("episodes2").style.visibility = "hidden";
    document.getElementById("episodes3").style.visibility = "hidden";
    if(showing == val) {
        showing = "empty";
    } else {
        showing = val;
    }
    document.getElementById(showing.toString()).style.visibility = "visible";
}

function watch(s, e) {
    document.getElementById("episodes" + s.toString()).style.visibility = "visible";
    url = "video/s" + s.toString() + "/e" + e.toString() + ".mp4";
    document.getElementById("video_src").src = url;
    document.getElementById("video").load();
}