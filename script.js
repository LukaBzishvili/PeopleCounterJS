//document.getElementById("count-el").innerText = 5;
 
 // initialize the count as 0
 //listen for clicks on the increment button
 //increment the count visible when the button is clicked (log it out)
 // change the count-el in the HTML to reflect the count

 let count = 0;
 let countEl = document.getElementById("count-el") //pass in arguments
 let saveEl = document.getElementById("save-el")

 function increment(){
    count += 1;
    countEl.innerText = count;
    console.log(count);
 }
 let dash = " - " 

 function save(){
    console.log(count);
    saveEl.textContent += count + dash;
    countEl.innerText = 0;
    count = 0;
 }
 save();


 
 
 