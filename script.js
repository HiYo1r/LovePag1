const correctPassword = "1503";

const wrongMessages = [
  "Contraseña incorrecta jiji",
  "Mmm Tamo mal mona",
  "No me amas",
  "Es una fecha",
  "Pista: Teamo"
];

function checkPassword() {
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (password === correctPassword) {
    document.getElementById("loginPage").classList.add("fade-out");

    setTimeout(() => {
      document.getElementById("loginPage").classList.add("hidden");

      const welcome = document.createElement("div");
      welcome.id = "welcomeScreen";
      welcome.innerHTML = "<h1>💖 Bienvenida monita 💖</h1>";
      document.body.appendChild(welcome);

      setTimeout(() => {
        welcome.classList.add("fade-out");

        setTimeout(() => {
          welcome.remove();

          const app = document.getElementById("app");
          app.classList.remove("hidden");
          app.classList.add("fade-in");

          showPage("home");
        }, 800);

      }, 1800);

    }, 800);

  } else {
    const randomMessage =
      wrongMessages[Math.floor(Math.random() * wrongMessages.length)];

    error.textContent = randomMessage;
  }
}

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
}

function toggleGallery(id) {
  const gallery = document.getElementById(id);
  gallery.classList.toggle("show");
}

function openModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");

  modalImg.src = img.src;
  modal.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

/* CORAZONES SUAVES */
const heartsContainer = document.getElementById("hearts");
const heartSymbols = ["💖", "💕", "💗"];

function createHeart() {
  const heart = document.createElement("div");

  heart.classList.add("heart");
  heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 22 + 18 + "px";
  heart.style.animationDuration = Math.random() * 5 + 7 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}

const dragCircle = document.getElementById("dragCircle");
const letterHidden = document.getElementById("letterHidden");
const dragText = document.querySelector(".drag-text");

let draggingLetter = false;
let startLetterY = 0;
let isOpen = false;

/* PC */
dragCircle.addEventListener("mousedown", (e) => {
  draggingLetter = true;
  startLetterY = e.clientY;
});

/* CELULAR */
dragCircle.addEventListener("touchstart", (e) => {
  draggingLetter = true;
  startLetterY = e.touches[0].clientY;
});

/* MOVIMIENTO */
function handleMove(currentY) {
  if (!draggingLetter) return;

  const distance = currentY - startLetterY;

  /* ABRIR */
  if (!isOpen && distance > 0) {
    letterHidden.style.maxHeight =
      Math.min(distance * 5, 2000) + "px";

    if (distance > 60) {
      dragCircle.classList.add("hide");
      dragText.classList.add("hide");
    }
  }

  /* CERRAR */
  if (isOpen && distance < 0) {
    const closeValue =
      Math.max(2000 + distance * 5, 0);

    letterHidden.style.maxHeight =
      closeValue + "px";

    if (closeValue < 1800) {
      dragCircle.classList.remove("hide");
      dragText.classList.remove("hide");
    }
  }
}

/* PC */
document.addEventListener("mousemove", (e) => {
  handleMove(e.clientY);
});

/* CELULAR */
document.addEventListener("touchmove", (e) => {
  handleMove(e.touches[0].clientY);
});

/* FINAL */
function finishDrag() {
  if (!draggingLetter) return;

  const currentHeight =
    parseInt(letterHidden.style.maxHeight) || 0;

  if (currentHeight > 800) {
    letterHidden.style.maxHeight = "2000px";
    isOpen = true;
  } else {
    letterHidden.style.maxHeight = "0px";
    dragCircle.classList.remove("hide");
    dragText.classList.remove("hide");
    isOpen = false;
  }

  draggingLetter = false;
}

/* PC */
document.addEventListener("mouseup", finishDrag);

/* CELULAR */
document.addEventListener("touchend", finishDrag);

/* CLICK PARA CERRAR */
letterHidden.addEventListener("click", () => {
  if (!isOpen) return;

  letterHidden.style.maxHeight = "0px";

  dragCircle.classList.remove("hide");
  dragText.classList.remove("hide");

  isOpen = false;
});



const songs = [
  {
    title: "Japanese Denim",
    artist: "Daniel Caesar",
    cover: "gallery/p2.jpg",
    audio: "music/Japanese-Denim.mp3"
  },
  {
    title: "Best Part",
    artist: "Daniel Caesar ft. H.E.R.",
    cover: "gallery/p30.jpg",
    audio: "music/best-part.mp3"
  },
  {
    title: "Violet",
    artist: "Daniel Caesar",
    cover: "gallery/p24.jpg",
    audio: "music/violet.mp3"
  },
  {
    title: "Always",
    artist: "Daniel Caesar",
    cover: "gallery/p32.jpg",
    audio: "music/always.mp3"
  },
  {
    title: "Something About You",
    artist: "Eyedress, Dent May",
    cover: "gallery/p19.jpg",
    audio: "music/something-about-you.mp3"
  },
  {
    title: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    cover: "gallery/p1.jpg",
    audio: "music/i-wanna-be-yours.mp3"
  },
  {
    title: "My Kind Of Woman",
    artist: "Mac DeMarco",
    cover: "gallery/p8.jpg",
    audio: "music/my-kind-of-woman.mp3"
  },
  {
    title: "20191009 I Like Her",
    artist: "Mac DeMarco",
    cover: "gallery/p12.jpg",
    audio: "music/i-like-her.mp3"
  },
  {
    title: "My Favorite Part",
    artist: "Mac Miller, Ariana Grande",
    cover: "gallery/p26.jpg",
    audio: "music/my-favorite-part.mp3"
  },
  {
    title: "pov",
    artist: "Ariana Grande",
    cover: "gallery/p11.jpg",
    audio: "music/pov.mp3"
  },
  {
    title: "The Way",
    artist: "Ariana Grande, Mac Miller",
    cover: "gallery/p21.jpg",
    audio: "music/the-way.mp3"
  },
  {
    title: "Butterflies",
    artist: "Michael Jackson",
    cover: "gallery/p4.jpg",
    audio: "music/butterflies.mp3"
  },
  {
    title: "The Abyss",
    artist: "The Weeknd ft. Lana Del Rey",
    cover: "gallery/p11.jpg",
    audio: "music/the-abyss.mp3"
  },
  {
    title: "Die For You Remix",
    artist: "The Weeknd, Ariana Grande",
    cover: "gallery/p26.jpg",
    audio: "music/die-for-you-remix.mp3"
  },
  {
    title: "Angel",
    artist: "The Weeknd",
    cover: "gallery/p15.jpg",
    audio: "music/angel.mp3"
  },
  {
    title: "Loveeeeeee Song",
    artist: "Rihanna, Future",
    cover: "gallery/p25.jpg",
    audio: "music/love-song.mp3"
  },
  {
    title: "My Boo",
    artist: "Usher, Alicia Keys",
    cover: "gallery/p29.jpg",
    audio: "music/my-boo.mp3"
  },
  {
    title: "Love",
    artist: "Keyshia Cole",
    cover: "gallery/p31.jpg",
    audio: "music/love.mp3"
  },
  {
    title: "SWEET / I THOUGHT YOU WANTED TO DANCE",
    artist: "Tyler, The Creator",
    cover: "gallery/p28.jpg",
    audio: "music/sweet.mp3"
  },
  {
    title: "Legendary Lovers",
    artist: "Katy Perry",
    cover: "gallery/p9.jpg",
    audio: "music/legendary-lovers.mp3"
  },
  {
    title: "Bound 2",
    artist: "Kanye West",
    cover: "gallery/p26.jpg",
    audio: "music/bound-2.mp3"
  }
];

let currentSong = 0;

const audioPlayer = document.getElementById("audioPlayer");
const songCover = document.getElementById("songCover");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const playBtn = document.getElementById("playBtn");

function loadSong(index) {
  const song = songs[index];

  songCover.src = song.cover;
  audioPlayer.src = song.audio;
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;

  playBtn.textContent = "▶";
}

function togglePlay() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playBtn.textContent = "⏸";
  } else {
    audioPlayer.pause();
    playBtn.textContent = "▶";
  }
}

function nextSong() {
  currentSong++;

  if (currentSong >= songs.length) {
    currentSong = 0;
  }

  loadSong(currentSong);
  audioPlayer.play();
  playBtn.textContent = "⏸";
}

function prevSong() {
  currentSong--;

  if (currentSong < 0) {
    currentSong = songs.length - 1;
  }

  loadSong(currentSong);
  audioPlayer.play();
  playBtn.textContent = "⏸";
}

loadSong(currentSong);

const volumeSlider = document.getElementById("volumeSlider");

volumeSlider.addEventListener("input", () => {
  audioPlayer.volume = volumeSlider.value;
});

setInterval(createHeart, 700);


