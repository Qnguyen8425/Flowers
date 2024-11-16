onload = () => {
  document.body.classList.remove("container");
};

//Tạo Rồng
("use strict");

const screen = document.getElementById("screen");
const xmlns = "http://www.w3.org/2000/svg";
const xlinkns = "http://www.w3.org/1999/xlink";

window.addEventListener(
  "pointermove",
  (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    rad = 0;
  },
  false
);
let width, height;

const resize = () => {
  width = window.innerWidth;
  height = window.innerHeight;
};

window.addEventListener("resize", () => resize(), false);
resize();

const prepend = (use, i) => {
  const elem = document.createElementNS(xmlns, "use");
  elems[i].use = elem;
  elem.setAttributeNS(xlinkns, "xlink:href", "#" + use);
  screen.prepend(elem);
};

const N = 40;

const elems = [];
for (let i = 0; i < N; i++) elems[i] = { use: null, x: width / 2, y: 0 };
const pointer = { x: width / 2, y: height / 2 };
const radm = Math.min(pointer.x, pointer.y) - 20;
let frm = Math.random();
let rad = 0;

for (let i = 1; i < N; i++) {
  if (i === 1) prepend("Cabeza", i);
  else if (i === 8 || i === 14) prepend("Aletas", i);
  else prepend("Espina", i);
}

const run = () => {
  requestAnimationFrame(run);
  let e = elems[0];
  const ax = (Math.cos(3 * frm) * rad * width) / height;
  const ay = (Math.sin(4 * frm) * rad * height) / width;
  e.x += (ax + pointer.x - e.x) / 10;
  e.y += (ay + pointer.y - e.y) / 10;
  for (let i = 1; i < N; i++) {
    let e = elems[i];
    let ep = elems[i - 1];
    const a = Math.atan2(e.y - ep.y, e.x - ep.x);
    e.x += (ep.x - e.x + (Math.cos(a) * (100 - i)) / 5) / 4;
    e.y += (ep.y - e.y + (Math.sin(a) * (100 - i)) / 5) / 4;
    const s = (162 + 4 * (1 - i)) / 50;
    e.use.setAttributeNS(
      null,
      "transform",
      `translate(${(ep.x + e.x) / 2},${(ep.y + e.y) / 2}) rotate(${
        (180 / Math.PI) * a
      }) translate(${0},${0}) scale(${s},${s})`
    );
  }
  if (rad < radm) rad++;
  frm += 0.003;
  if (rad > 60) {
    pointer.x += (width / 2 - pointer.x) * 0.05;
    pointer.y += (height / 2 - pointer.y) * 0.05;
  }
};

run();

//Tạo hiệu ứng mưa
const Contain = document.getElementById("Contain");
var bordersArray = ["50%", "50%"];
var blursArray = ["0", "5px"];
var colorsArray = ["#EEDC82", "#63B8FF", "#F8F8FF"];
width = document.documentElement.clientWidth;
height = document.documentElement.clientHeight;
var count = 100;

function createElementRandom() {
  for (var i = 0; i < count; i++) {
    var randomLeft = Math.floor(Math.random() * width);
    var randomTop = Math.floor(Math.random() * height);
    var color = Math.floor(Math.random() * 3);
    var border = Math.floor(Math.random() * 2);
    var blur = Math.floor(Math.random() * 2);
    var widthElement = Math.floor(Math.random() * 5) + 5;
    var heightElement = Math.floor(Math.random() * 5) + 5;
    var timeAnimation = Math.floor(Math.random() * 6) + 4;

    var div = document.createElement("div");
    div.style.backgroundColor = colorsArray[color];
    div.style.position = "absolute";
    div.style.width = widthElement + "px";
    div.style.height = heightElement + "px";
    div.style.marginLeft = randomLeft + "px";
    div.style.marginTop = randomTop + "px";
    div.style.borderRadius = bordersArray[border];
    div.style.filter = "blur(" + blursArray[blur] + ")";
    div.style.animation = "move " + timeAnimation + "s ease-in infinite";
    Contain.appendChild(div);
  }
}
createElementRandom();

//Thêm Nhạc
const songs = [
  "aud/Music chill/BongPhuHoa.mp3",
  "aud/Music chill/ChuyenHoaCuc.mp3",
  "aud/Music chill/DongSongPhangLang.mp3",
  "aud/Music chill/NangThoXuHue.mp3",
  "aud/Music chill/NeuMotMaiToiBayLenTroi.mp3",
  "aud/Music chill/NhamMatThayMuaHe.mp3",
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById("audioPlayer");
const nextButton = document.getElementById("nextButton");

// Hàm để chuyển bài hát
function playSong(index) {
  audioPlayer.src = songs[index];
  audioPlayer.play();
}

// Chuyển bài khi bài hiện tại kết thúc
audioPlayer.addEventListener("ended", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length; // vòng lặp lại từ đầu danh sách
  playSong(currentSongIndex);
});

// Hàm để chuyển đến bài hát tiếp theo khi nút bấm được nhấn
nextButton.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length; // vòng lặp lại từ đầu danh sách
  playSong(currentSongIndex);
});

// Bắt đầu phát bài hát đầu tiên
playSong(currentSongIndex);