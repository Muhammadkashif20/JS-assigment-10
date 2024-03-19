//question:-1

var student = [];
//question:-2

var student = ["kashif", "ali", "hassan", "raza"];
//question:-3

var student = ["ali", "kashif", "tahir"];
//question:-4

var student = [1, 2, 3, 4, 5];
//question:-5

var student = [true, false];
//question:-6

var student = ["ali", 23, 5, true];
//question:-7

var edu_in_Pak = [
  "SSC" +
    "<br>" +
    "HSC" +
    "<br>" +
    "BCS" +
    "<br>" +
    "BS" +
    "<br>" +
    "BCOM" +
    "<br>" +
    "MS" +
    "<br>" +
    "M. Phil." +
    "<br>" +
    "PhD",
];

document.write("<h2>Qualifications:</h2>");
document.write(edu_in_Pak);

//question:-8

var studentName = ["kashif", "hassan", "hasnain"];
var studentScore = [320, 230, 480];
var totalMarks = 500;
document.write("<br>");
document.write("<br>");
document.write(
  "Score of " +
    studentName[0] +
    " is 320. Percentage: " +
    (studentScore[0] / totalMarks) * 100 +
    "<br>"
);
document.write(
  "Score of " +
    studentName[1] +
    " is 230. Percentage: " +
    (studentScore[1] / totalMarks) * 100 +
    "<br>"
);
document.write(
  "Score of " +
    studentName[2] +
    " is 480. Percentage: " +
    (studentScore[2] / totalMarks) * 100 +
    "<br>"
);

//question:-9
document.write("<h3>Question 9 Colors </h3>");
var userColor1 = prompt("enter your Start Color");
document.write(userColor1 + "<br>");
var colorNames = [
  "red" +
    "<br>" +
    "blue" +
    "<br>" +
    "green" +
    "<br>" +
    "yellow" +
    "<br>" +
    "orange" +
    "<br>" +
    "pink",
];
document.write(colorNames);

var userColor2 = prompt("enter your last color");
document.write("<br>");
document.write(userColor2);
document.write("<h4>Adding 2 Colors</h4>");
var colorNames2 = ["red", "blue", "green", "yellow", "orange", "pink"];
colorNames2.push("rose", "brown");
document.write(colorNames2);
document.write("<h4>Delete 1 Color </h4>");
colorNames2.shift();
document.write(colorNames2);
document.write("<h4>Delete 1 last Color </h4>");
colorNames2.pop();
document.write(colorNames2);

document.write("<h3>User index number Result</h3>");
var colorjoin = prompt(
  "color ka index number bataou phir mai bataouga ke is index ka color ye hai max num 3!!"
);

if (colorjoin == "0") {
  document.write("blue");
} else if (colorjoin == "1") {
  document.write("green");
} else if (colorjoin == "2") {
  document.write("yellow");
} else if (colorjoin == "2") {
  document.write("orange");
} else if (colorjoin == "3") {
  document.write("pink");
}
document.write("<h3>user choice color delete</h3>");
var colordel = prompt(
  "konsea color delete krna chate ho index number se batao maximum num 0 to 3"
);
if (colordel == "0")
  //     if(colorNames2=[0]){
  //         document.write(colorNames2)
  //     }
  // }
  // else if(colordel=='1'){
  //     if(colorNames2=[1]){
  //         document.write(colorNames2)
  //     }
  // }
  // else if(colordel=='2'){
  //     if(colorNames2=[2]){
  //         document.write(colorNames2)
  //     }
  // }
  // else if(colordel=='3'){
  //     if(colorNames2=[3]){
  //         document.write(colorNames2)
  //     }
  // }

  //question:-10
  document.write("<h3>Q 10</h3>");
var scoreofStudents = [320, 230, 480, 120];
scoreofStudents.sort();
document.write(scoreofStudents);
//question:-11

var cityNames = ["Karachi", "lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedcity = ["Karachi", "lahore", "Islamabad"];

//question:-12
document.write("<br>");
document.write("<br>");
const array = ["This", "is", "my", "cat"];
const string = array.join("   ");
document.write(string);

//question:-13
document.write('<h3>First in first out</h3>')
// document.write('<br>')
var devices = ["keyboard", "mouse", "printer", "monitor"];
devices.shift();
document.write('Out Keyboard: '+devices)
document.write('<br>')
devices.shift();
document.write('Out mouse: '+devices)
document.write('<br>')
devices.shift();
document.write('Out printer: '+devices)
document.write('<br>')
devices.shift();
document.write('Out monitor: '+devices)
document.write('<br>')
document.write('<br>')
document.write('<br>')

//question:-14
document.write('<h3>Last in first out</h3>')
// document.write('<br>')
var devices = ["keyboard", "mouse", "printer", "monitor"];
devices.pop();
document.write('Out Keyboard: '+devices)
document.write('<br>')
devices.pop();
document.write('Out mouse: '+devices)
document.write('<br>')
devices.pop();
document.write('Out printer: '+devices)
document.write('<br>')
devices.pop();
document.write('Out monitor: '+devices)















// var mobile = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("Apple" + "<br>");
// document.write("Samsung" + "<br>");
// document.write("Motorola" + "<br>");
// document.write("Nokia" + "<br>");
// document.write("Sony" + "<br>");
// document.write("Haier" + "<br>");
