// Enter your code here
function myfunction() {
    var ipnumberid = document.getElementById("number");
    var ipnumb = ipnumberid.value;
    var result = false;
    if(ipnumb){
        var intToStr = ipnumb.toString();
        for (var i = 0; i < intToStr.length / 2; i++) {
            if(intToStr[i] != intToStr[intToStr.length - 1 - i]){
                return false;
            }
        }
        document.getElementById("result").innerHTML="Yes";
        // alert("Yes");
    }
    return false;
}