// Enter your code here
/*
name: spongebob squarepants
email: spongebob@spongebob.me
registration status: waitlist
class section: undergrad
courses: operating systems, fullstack web development
class goals: learning more about frontend!
*/
document.getElementById("sumb").onclick = function() {myFunction()};
function myFunction() {
    var name = document.getElementById("fullname");
    var email = document.getElementById("email");
    var rigsttu = document.getElementById("rigsttu");
    var classlect = document.getElementById("classlect");
    var anycoures = document.getElementById("anycoures");
    var anyels = document.getElementById("anyels");
    console.log("Name:" + name);
    console.log("Email:" + email);
    console.log("registration status:" + rigsttu);
    console.log("class section:" + classlect);
    console.log("courses:" + anycoures);
    console.log("class goals:" + anyels);
//    alert("It just is a alert to help cheak if there is some infomation at the console");
}