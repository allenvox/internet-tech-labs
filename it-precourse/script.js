var showing = "empty";
function show(val) {
    document.getElementById(showing.toString()).style.visibility = "hidden";
    if(showing == val) {
        showing = "empty";
    } else {
        showing = val;
    }
    document.getElementById(showing.toString()).style.visibility = "visible";
}