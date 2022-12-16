const app = document.querySelector(".app");
const numeros = document.querySelector(".numeros");
const boton = document.querySelector(".boton");
const NUM = 9;
const sudoku = [
  [
    0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 1, 7, 4, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0,
    0, 0, 4, 0, 0, 0, 2, 5, 0, 0, 0, 7, 8, 0, 0, 0, 0, 6, 0, 0, 5, 0, 0, 8, 0,
    0, 0, 0, 0, 6, 0, 1, 0, 0, 0, 2, 0, 0, 5, 0, 0, 0, 0, 6, 0, 0, 1, 0, 0, 0,
    0, 3, 0, 7, 0, 4,
  ],
];

let num;

let n = new Array(NUM + 2);
let o = new Array(NUM + 2);
let t;
for (let i = 0; i < NUM + 2; i++) {
  n[i] = document.createElement("div");
  o[i] = document.createElement("span");
  o[i].classList.add("pointer");
  if (i < 9) {
    o[i].innerText = `${i + 1}`;
    o[i].classList.add("num");
    o[i].addEventListener("click", () => {
      for (let j = 0; j < o.length; j++) {
        o[j].style.color = "black";
      }
      o[i].style.color = "red";
      num = i + 1;
      console.log(num);
    });
  } else if (i === 10) {
    o[i].innerText = "refresh";
    o[i].addEventListener("click", () => {
      for (let j = 0; j < o.length; j++) {
        o[j].style.color = "black";
      }
      if (confirm("Desear reiniciar?") === true) {
        console.log("hola");
        location.reload();
      }
    });
  } else {
    o[i].innerText = "clear";
    o[i].addEventListener("click", () => {
      for (let j = 0; j < o.length; j++) {
        o[j].style.color = "black";
      }
      o[i].style.color = "red";
      num = 0;
    });
  }
  n[i].appendChild(o[i]);
  numeros.appendChild(n[i]);
}

let a = new Array(NUM);
for (let i = 0; i < NUM; i++) {
  a[i] = document.createElement("div");
  a[i].classList.add("matriz");
  app.appendChild(a[i]);
}
let b = new Array(NUM);
for (let i = 0; i < NUM; i++) {
  b[i] = new Array(NUM);
}
let x;
let k = 0;
for (let i = 0; i < NUM; i++) {
  for (let j = 0; j < NUM; j++) {
    b[i][j] = document.createElement("div");
    b[i][j].classList.add("matriz");
    b[i][j].classList.add("celda");
    x = document.createElement("span");
    if (sudoku[0][k] === 0) {
      x.classList.add("invisible");
      b[i][j].classList.add("pointer");
    } else {
      b[i][j].classList.add("gris");
    }
    k++;
    x.innerText = sudoku[0][k - 1];
    b[i][j].appendChild(x);
    if (b[i][j].children[0].textContent == 0) {
      b[i][j].addEventListener("click", () => {
        if (b[i][j].children[0].textContent === 0) {
          if (num != 0 || num !== 0) {
            b[i][j].children[0].textContent = num;
            b[i][j].children[0].classList.remove("invisible");
          }
        } else if (b[i][j].children[0].textContent == 0) {
          if (num != 0 || num !== 0) {
            b[i][j].children[0].textContent = num;
            b[i][j].children[0].classList.remove("invisible");
          }
        } else if (num === 0) {
          b[i][j].children[0].textContent = "";
          b[i][j].children[0].classList.add("invisible");
        } else {
          console.log("asdf");
        }
      });
    }
    a[i].appendChild(b[i][j]);
  }
}

const solucion = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const check = (array) => {
  if (array.includes(0)) {
    return false;
  }
  array.sort();
  console.log(array);
  console.log(solucion);
  for (let i = 0; i < NUM; i++) {
    if (array[i] !== solucion[i]) {
      return false;
    }
  }
  return true;
};

const row = () => {
  let x = new Array(9);
  let a = 0;
  let b;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      b = app.children[i].children[j].innerText;
      x.push(b);
    }
  }
  if (check(x) === false) {
    return false;
  }
  x = new Array(NUM);
  for (let i = 0; i < 3; i++) {
    for (let j = 3; j < 6; j++) {
      b = app.children[i].children[j].innerText;
      x.push(b);
    }
  }
  if (check(x) === false) {
    return false;
  }
  x = new Array(NUM);
  for (let i = 0; i < 3; i++) {
    for (let j = 6; j < 9; j++) {
      b = app.children[i].children[j].innerText;
      x.push(b);
    }
  }
  if (check(x) === false) {
    return false;
  }
  x = new Array(NUM);
  for (let i = 3; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      b = app.children[i].children[j].innerText;
      x.push(b);
    }
  }
  if (check(x) === false) {
    return false;
  }
  x = new Array(NUM);
  for (let i = 3; i < 6; i++) {
    for (let j = 3; j < 6; j++) {
      b = app.children[i].children[j].innerText;
      x.push(b);
    }
  }
  if (check(x) === false) {
    return false;
  }
  x = new Array(NUM);
  for (let i = 3; i < 6; i++) {
    for (let j = 6; j < 9; j++) {
      b = app.children[i].children[j].innerText;
      x.push(b);
    }
  }
  if (check(x) === false) {
    return false;
  }
  x = new Array(NUM);
  for (let i = 6; i < 9; i++) {
    for (let j = 0; j < 3; j++) {
      b = app.children[i].children[j].innerText;
      x.push(b);
    }
  }
  if (check(x) === false) {
    return false;
  }
  x = new Array(NUM);
  for (let i = 6; i < 9; i++) {
    for (let j = 3; j < 6; j++) {
      b = app.children[i].children[j].innerText;
      x.push(b);
    }
  }
  if (check(x) === false) {
    return false;
  }
  x = new Array(NUM);
  for (let i = 6; i < 9; i++) {
    for (let j = 6; j < 9; j++) {
      b = app.children[i].children[j].innerText;
      x.push(b);
    }
  }
  if (check(x) === false) {
    return false;
  }

  alert("hoal");
};

const rows = () => {
  let x = new Array(NUM + 1);
  let a = 0;
  let b;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      b = app.children[i].children[j].innerText;
      x.push(b);
      console.log(x);
    }
  }
  if (check(x) === false) {
    return false;
  }
};

boton.addEventListener("click", () => {
  if (row() === false) {
    alert("ERES UN PRINGAD@ ESTA MAL");
  }
});
