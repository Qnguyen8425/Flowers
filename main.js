onload = () => {
  document.body.classList.remove("container");
};

const songs = [
  "aud/Music chill/BongPhuHoa.mp3",
  "aud/Music chill/ChuyenHoaCuc.mp3",
  "aud/Music chill/DongSongPhangLang.mp3",
  "aud/Music chill/NangThoXuHue.mp3",
  "aud/Music chill/NeuMotMaiToiBayLenTroi.mp3",
  "aud/Music chill/NhamMatThayMuaHe.mp3",
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');
const nextButton = document.getElementById('nextButton');

// Hàm để chuyển bài hát
function playSong(index) {
    audioPlayer.src = songs[index];
    audioPlayer.play();
}

// Chuyển bài khi bài hiện tại kết thúc
audioPlayer.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // vòng lặp lại từ đầu danh sách
    playSong(currentSongIndex);
});

// Hàm để chuyển đến bài hát tiếp theo khi nút bấm được nhấn
nextButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length; // vòng lặp lại từ đầu danh sách
  playSong(currentSongIndex);
});

// Bắt đầu phát bài hát đầu tiên
playSong(currentSongIndex);

const Contain = document.getElementById('Contain');
var bordersArray = ['50%','50%'];
var blursArray = ['0','5px'];
var colorsArray =['#EEDC82', '#63B8FF', '#F8F8FF'];
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var count = 100;

function createElementRandom(){
  for(var i = 0; i < count; i++){
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
    div.style.position = 'absolute';
    div.style.width = widthElement + 'px';
    div.style.height = heightElement + 'px';
    div.style.marginLeft = randomLeft + 'px';
    div.style.marginTop = randomTop + 'px';
    div.style.borderRadius = bordersArray[border];
    div.style.filter = 'blur(' + blursArray[blur] + ')';
    div.style.animation = 'move ' + timeAnimation + 's ease-in infinite'; 
    Contain.appendChild(div);
  }
}
createElementRandom();