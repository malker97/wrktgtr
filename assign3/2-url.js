// Enter your code here

// Input:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no
function getquery(str) {
    var args = {};
    items = str.length?str.split('&'):[];
    var item = null;
    var name = null;
    var value = null;
    var query = "";
    for(var i=0; i<items.length;i++){
        item = items[i].split('=');
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if(name.length){
            args[name] = name + ":" +value+"\n";
            query += args[name];
            // alert(query);
        }
    }
    return query;
}
function geturl() {
    var commentid = document.getElementById("comments");
    var url = commentid.value;
    return url;
}
function myfunction() {
    var url = geturl();
    // alert(url);
    var answer = getquery(url);
    // alert(answer);
    // alert("NTHING");
    //插入新的元素
    var newForm = document.createElement("form class=\"bg-light border rounded w-50 mx-auto mt-5 p-3\"");
    var newText = document.createTextNode(answer);
    newForm.appendChild(newText);
    var oldForm = document.getElementById("orgform");
    document.body.insertBefore(oldForm,newForm);
    alert(answer);
}