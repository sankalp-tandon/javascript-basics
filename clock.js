update();
setInterval(update,1000);
function update(){
    let date= new Date();
// date = date.toLocaleString();

 document.getElementById("mylabel").innerHTML= formatTime(date);

function formatDate(date){
let year = date.getFullYear(date);
let month = date.getMonth(date)+1;
let day = date.getDate(date);
return `${month}/ ${day}/${year}`
}
function formatTime(date){
     
    let hours= date.getHours(date);
    let minutes = date.getMinutes(date);
    let seconds = date.getSeconds(date);
    let amOrPm = hours <= 12 ? "am" : "pm" ;

    hours = hours % 12 || 12;    

      hours = formatzeroes(hours);
     minutes = formatzeroes(minutes);
    seconds = formatzeroes(seconds);

    return `${hours}: ${minutes}: ${seconds} ${amOrPm}`;
  
}
function formatzeroes(time){
     time= time.toString();
    return time.length< 2 ? "0"+ time : time ;
}

}
