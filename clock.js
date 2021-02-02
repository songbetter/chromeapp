const hourMin = document.querySelector(".hourMin"),
 amPm = document.querySelector(".amPm"),
 sec = document.querySelector(".sec");

 function getTime(){
     const date = new Date();
     const hours = date.getHours();
     const minutes = date.getMinutes();
     const seconds = date.getSeconds();
     hourMin.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}`: minutes}`;
     sec.innerText = `${seconds < 10 ? `0${seconds}` : seconds}`;
     amPm.innerText = `${hours >= 12 ? `PM` : `AM`}`;
     }

 function init(){
     getTime();
     setInterval(getTime,1000);
 }

 init();
