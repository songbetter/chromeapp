const today = document.querySelector(".today");

function getDate(){
    const todayDate = new Date();
    const months = todayDate.getMonth()+1; // 1월이 0으로 출력된다.
    const day = todayDate.getDate();
    const year = todayDate.getFullYear();
    const week = todayDate.getDay(); // 일요일부터 토요일까지 0-6으로 출력된다.
    const dayArray = ['일','월','화','수','목','금','토'];
    today.innerHTML = `${year}년 ${months}월 ${day}일 ${dayArray[week]}요일`;
};

 function init(){
    getDate();
 }

 init();
