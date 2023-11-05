var avgarray=document.getElementsByName("input")
var continuebutton=document.getElementById("continuebtn")

function calculateaverage () {

   var total = 0;
   for(var i = 0; i < avgarray.length; i++) {

      total += Number(avgarray[i].value) 
   }//for loop

   var avg = Math.round(total / avgarray.length)
   
   document.getElementById("outputtext").innerText=avg
 
   //if ( == null || person == "") {

   // prompt("please enter missing information ,values cannot be null")
   //}
   //else{
console.log
   if (avg>=90) {
   document.getElementById("averagedisplay").style.background='green'
   document.getElementById("grade").innerText="A+"
   }
   else if (avg>=80 && avg<90){
    document.getElementById("averagedisplay").style.background='yellow'
    document.getElementById("grade").innerText="A"
   }
   else if (avg>=70 && avg<80) {
    document.getElementById("averagedisplay").style.background='blue'
    document.getElementById("grade").innerText="B"
   }
   else if ( avg>=60 && avg<70) {
    document.getElementById("averagedisplay").style.background='darkorange'
    document.getElementById("grade").innerText="C"
   }
   //else if ( avg>=50 && avg<60) {
   // document.getElementById("outputtext").style.backgroundColor='orange'
  // }
   else {
   document.getElementById("averagedisplay").style.background='red'
   document.getElementById("grade").innerText="F"
   }
   //}

}


continuebutton.onclick = calculateaverage