// Enter your code here
function fndwdandhlgt(str, key) {
        var reg = new RegExp("(" + key + ")", "g");
        var newstr = str.replace(reg,"<font style='background:#ff0;'>$1</font>");
        return newstr;
}
function myfunction() {
        var oldstrid = document.getElementById("intro");
        var oldstr = oldstrid.innerHTML;
        var keyinput = document.getElementById("input");
        var key=keyinput.value;
        var newstr = fndwdandhlgt(oldstr,key);
//        alert(newstr);
        document.getElementById("intro").innerHTML=newstr;
        // alert("hear");
}
