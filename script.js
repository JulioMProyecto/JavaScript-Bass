const sonidos = document.querySelectorAll("audio");
const trastes = document.querySelectorAll(".btn");

// trastes.forEach(function(trastes, index) {
//   trastes.addEventListener("click", function() {
//     sonidos.forEach(function(sonido, index) {
//       sonido.pause();
//       sonido.currentTime = 0;
//     });
//     sonidos[index].currentTime = 0;
//     sonidos[index].play();
//   });
// });

// addEventListener("keydown", function(event) {
//   if (event.keyCode == 86) sonidos[0].play();
// });

// for (let i = 0; i < 5; i++) {
//   addEventListener("keydown", function(event) {
//     if (event.keyCode === 49 + i) {
//       sonidos[i].currentTime = 0;
//       sonidos[i].play();
//     }
//     if (event.keyCode !== 49 + i) {
//       sonidos[i].pause();
//       sonidos[i].currentTime = 0;
//     }
//   });
// }
addEventListener("keydown", function(event) {
  if (event.keyCode === 49) {
    sonidos[0].currentTime = 0;
    sonidos[0].play();
    trastes[0].style.backgroundColor = "red";
  }
  if (event.keyCode !== 49) {
    sonidos[0].pause();
    sonidos[0].currentTime = 0;
    trastes[0].style.backgroundColor = "rgb(219, 170, 115)";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 50) {
    sonidos[1].currentTime = 0;
    sonidos[1].play();
    trastes[1].style.backgroundColor = "red";
  }
  if (event.keyCode !== 50) {
    sonidos[1].pause();
    sonidos[1].currentTime = 0;
    trastes[1].style.backgroundColor = "white";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 51) {
    sonidos[2].currentTime = 0;
    sonidos[2].play();
    trastes[2].style.backgroundColor = "red";
  }
  if (event.keyCode !== 51) {
    sonidos[2].pause();
    sonidos[2].currentTime = 0;
    trastes[2].style.backgroundColor = "white";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 52) {
    sonidos[3].currentTime = 0;
    sonidos[3].play();
    trastes[3].style.backgroundColor = "red";
  }
  if (event.keyCode !== 52) {
    sonidos[3].pause();
    sonidos[3].currentTime = 0;
    trastes[3].style.backgroundColor = "white";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 53) {
    sonidos[4].currentTime = 0;
    sonidos[4].play();
    trastes[4].style.backgroundColor = "red";
  }
  if (event.keyCode !== 53) {
    sonidos[4].pause();
    sonidos[4].currentTime = 0;
    trastes[4].style.backgroundColor = "white";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 54) {
    sonidos[5].currentTime = 0;
    sonidos[5].play();
    trastes[5].style.backgroundColor = "red";
  }
  if (event.keyCode !== 54) {
    sonidos[5].pause();
    sonidos[5].currentTime = 0;
    trastes[5].style.backgroundColor = "white";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 55) {
    sonidos[6].currentTime = 0;
    sonidos[6].play();
    trastes[6].style.backgroundColor = "red";
  }
  if (event.keyCode !== 55) {
    sonidos[6].pause();
    sonidos[6].currentTime = 0;
    trastes[6].style.backgroundColor = "white";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 56) {
    sonidos[7].currentTime = 0;
    sonidos[7].play();
    trastes[7].style.backgroundColor = "red";
  }
  if (event.keyCode !== 56) {
    sonidos[7].pause();
    sonidos[7].currentTime = 0;
    trastes[7].style.backgroundColor = "white";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 57) {
    sonidos[8].currentTime = 0;
    sonidos[8].play();
    trastes[8].style.backgroundColor = "red";
  }
  if (event.keyCode !== 57) {
    sonidos[8].pause();
    sonidos[8].currentTime = 0;
    trastes[8].style.backgroundColor = "white";
  }
});

// segunda cuerda

addEventListener("keydown", function(event) {
  if (event.keyCode === 81) {
    sonidos[9].currentTime = 0;
    sonidos[9].play();
    trastes[9].style.backgroundColor = "red";
  }
  if (event.keyCode !== 81) {
    sonidos[9].pause();
    sonidos[9].currentTime = 0;
    trastes[9].style.backgroundColor = "rgb(219, 170, 115)";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 87) {
    sonidos[10].currentTime = 0;
    sonidos[10].play();
    trastes[10].style.backgroundColor = "red";
  }
  if (event.keyCode !== 87) {
    sonidos[10].pause();
    sonidos[10].currentTime = 0;
    trastes[10].style.backgroundColor = "white";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 69) {
    sonidos[11].currentTime = 0;
    sonidos[11].play();
    trastes[11].style.backgroundColor = "red";
  }
  if (event.keyCode !== 69) {
    sonidos[11].pause();
    sonidos[11].currentTime = 0;
    trastes[11].style.backgroundColor = "white";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 82) {
    sonidos[12].currentTime = 0;
    sonidos[12].play();
    trastes[12].style.backgroundColor = "red";
  }
  if (event.keyCode !== 82) {
    sonidos[12].pause();
    sonidos[12].currentTime = 0;
    trastes[12].style.backgroundColor = "white";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 84) {
    sonidos[13].currentTime = 0;
    sonidos[13].play();
    trastes[13].style.backgroundColor = "red";
  }
  if (event.keyCode !== 84) {
    sonidos[13].pause();
    sonidos[13].currentTime = 0;
    trastes[13].style.backgroundColor = "white";
  }
});

//Tercera Cuerda

addEventListener("keydown", function(event) {
  if (event.keyCode === 65) {
    sonidos[14].currentTime = 0;
    sonidos[14].play();
    trastes[14].style.backgroundColor = "red";
  }
  if (event.keyCode !== 65) {
    sonidos[14].pause();
    sonidos[14].currentTime = 0;
    trastes[14].style.backgroundColor = "rgb(219, 170, 115)";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 83) {
    sonidos[15].currentTime = 0;
    sonidos[15].play();
    trastes[15].style.backgroundColor = "red";
  }
  if (event.keyCode !== 83) {
    sonidos[15].pause();
    sonidos[15].currentTime = 0;
    trastes[15].style.backgroundColor = "white";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 68) {
    sonidos[16].currentTime = 0;
    sonidos[16].play();
    trastes[16].style.backgroundColor = "red";
  }
  if (event.keyCode !== 68) {
    sonidos[16].pause();
    sonidos[16].currentTime = 0;
    trastes[16].style.backgroundColor = "white";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 70) {
    sonidos[17].currentTime = 0;
    sonidos[17].play();
    trastes[17].style.backgroundColor = "red";
  }
  if (event.keyCode !== 70) {
    sonidos[17].pause();
    sonidos[17].currentTime = 0;
    trastes[17].style.backgroundColor = "white";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 71) {
    sonidos[18].currentTime = 0;
    sonidos[18].play();
    trastes[18].style.backgroundColor = "red";
  }
  if (event.keyCode !== 71) {
    sonidos[18].pause();
    sonidos[18].currentTime = 0;
    trastes[18].style.backgroundColor = "white";
  }
});

//Cuarta Cuerda
addEventListener("keydown", function(event) {
  if (event.keyCode === 90) {
    sonidos[19].currentTime = 0;
    sonidos[19].play();
    trastes[19].style.backgroundColor = "red";
  }
  if (event.keyCode !== 90) {
    sonidos[19].pause();
    sonidos[19].currentTime = 0;
    trastes[19].style.backgroundColor = "rgb(219, 170, 115)";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 88) {
    sonidos[20].currentTime = 0;
    sonidos[20].play();
    trastes[20].style.backgroundColor = "red";
  }
  if (event.keyCode !== 88) {
    sonidos[20].pause();
    sonidos[20].currentTime = 0;
    trastes[20].style.backgroundColor = "white";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 67) {
    sonidos[21].currentTime = 0;
    sonidos[21].play();
    trastes[21].style.backgroundColor = "red";
  }
  if (event.keyCode !== 67) {
    sonidos[21].pause();
    sonidos[21].currentTime = 0;
    trastes[21].style.backgroundColor = "white";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 86) {
    sonidos[22].currentTime = 0;
    sonidos[22].play();
    trastes[22].style.backgroundColor = "red";
  }
  if (event.keyCode !== 86) {
    sonidos[22].pause();
    sonidos[22].currentTime = 0;
    trastes[22].style.backgroundColor = "white";
  }
});

addEventListener("keydown", function(event) {
  if (event.keyCode === 66) {
    sonidos[23].currentTime = 0;
    sonidos[23].play();
    trastes[23].style.backgroundColor = "red";
  }
  if (event.keyCode !== 66) {
    sonidos[23].pause();
    sonidos[23].currentTime = 0;
    trastes[23].style.backgroundColor = "white";
  }
});
