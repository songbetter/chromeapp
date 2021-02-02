const body = document.querySelector("body");

const IMG_NUMBER = 3;
function paintImage(imgNumber) {
  const image = new Image();
  // 랜덤 숫자는 0부터 시작하므로 +1 해준다.
  image.src = `${imgNumber + 1}.jpeg`;
  // CSS 적용을 위해 class를 추가한다.
  image.classList.add("bgImage");
  // image를 body의 하위 element로 추가한다.
  body.prepend(image);
}

function genRandom() {
    // 이미지 숫자만큼 랜덤으로 카운트한다.
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();