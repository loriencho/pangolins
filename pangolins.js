window.onscroll = function() {toTop()};
3
 
4
function toTop() {
5
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
6
        document.getElementById("buttonTop").style.display = "block";
7
    } else {
8
        document.getElementById("buttonTop").style.display = "none";
9
    }
10