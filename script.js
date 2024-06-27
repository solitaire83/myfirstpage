// window.onload = function () {
//   setTimeout(() => {
//     console.clear();
//     setTimeout(() => {
//       console.log("am sters consola");
//     }, 1);
//   }, 1000);
// };

var div = document.querySelector(".portal");

if (div) {
  var imgs = div.querySelectorAll("img");
  imgs.forEach((img) => {
    img.addEventListener("click", function (redirect) {
      redirect.preventDefault();

      var rLink = img.parentElement.getAttribute("href");
      var _CUSTOM;

      if (rLink === "../index.html") {
        _CUSTOM = "casa";
      }

      var confirmare = `Te redirectionez catre ${
        _CUSTOM || rLink
      }\n\nEsti sigur ca vrei sa parasesti portalul?`;

      if (img.id === "itschool") {
        confirmare =
          "Atentie!\nPagina pe care urmeaza sa fi redirectionat/a este 100% o clona!\n\nDe asemenea, clona nu are navigataia interconectata cu portalul sau restul paginii html.";
      } else if (img.id === "github") {
        confirmare =
          "Atentie!\nPagina pe care urmeaza sa fi redirectionat/a este un link extern ce nu apartine paginii web.\n\nDe asemenea, link-ul nu are navigatia interconectata cu portalul sau restul paginii html.";
      } else if (
        img.id === "git" ||
        img.id === "terminal" ||
        img.id === "javascript"
      ) {
        return;
      }

      if (confirm(confirmare)) {
        window.location.href = rLink;
      }
    });
  });
}

function showdiv(id) {
  const divs = document.querySelectorAll(".portalcontent");
  divs.forEach((div) => (div.style.display = "none"));
  document.getElementById(id).style.display = "flex";
}

function hidediv() {
  const divs = document.querySelectorAll(".portalcontent");
  divs.forEach((div) => (div.style.display = "none"));
}

document.getElementById("git").addEventListener("click", function (event) {
  showdiv("gitcontent");
});

document.getElementById("terminal").addEventListener("click", function (event) {
  showdiv("terminalcontent");
});

document
  .getElementById("javascript")
  .addEventListener("click", function (event) {
    showdiv("javascriptcontent");
  });

/* ===================================================== GIT ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  var cmds = [
    "git init",
    "git add .",
    'git commit -m "prima initializare"',
    "git status",
    "git push",
    "git clone",
    "git pull",
  ];

  var descrieri = [
    " // initializeaza un nou repository dar local",
    " // adauga toate fisierele din director in staging",
    ' // salveaza modificarile proiectului din staging intr-un istoric al repo-ului cu mesajul "prima initializare"',
    " // prezinta situatia curenta a proiectului (modificari noi s.a.m.d)",
    " // salveaza modificarile locale intr-un repo extern (github)",
    " // cloneaza un repository de pe github",
    " // cloneaza si aplica modificarile unui repo remote in repo-ul tau local",
  ];

  var COMANDA = document.getElementById("comanda");
  var DESCRIERE = document.getElementById("descriere");
  var IndexCMD = 0;
  var CURRENTINDEX = 0;
  var SPEED = 100;
  var DELAY = 3000;

  function writecmd() {
    if (IndexCMD >= cmds.length) {
      IndexCMD = 0; // reset
    }

    var cmdcurenta = cmds[IndexCMD];
    var _currentdescription = descrieri[IndexCMD];

    if (CURRENTINDEX <= cmdcurenta.length) {
      COMANDA.textContent = `C:\\Users\\Iulica>${cmdcurenta.substring(
        0,
        CURRENTINDEX
      )}`;
      CURRENTINDEX++;
      setTimeout(writecmd, SPEED);
    } else {
      DESCRIERE.textContent = _currentdescription;
      setTimeout(deletecmd, DELAY);
    }
  }

  function deletecmd() {
    const cmdcurenta = cmds[IndexCMD];

    if (CURRENTINDEX >= 0) {
      COMANDA.textContent = `C:\\Users\\Iulica>${cmdcurenta.substring(
        0,
        CURRENTINDEX
      )}`;
      CURRENTINDEX--;
      setTimeout(deletecmd, SPEED / 2);
    } else {
      IndexCMD++;
      CURRENTINDEX = 0;
      DESCRIERE.textContent = "";
      setTimeout(writecmd, SPEED);
    }
  }

  writecmd();
});
/* ===================================================== /GIT ===================================================== */

/* ===================================================== TERMINAL ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  var cmds = ["ls -lah", "pwd", "cd", "rm", "cp", "mkdir"];

  var descrieri = [
    " // listeaza detaliat toate fisierele si directoarele din directorul curent",
    " // arata locatia ta actuala",
    " // schimbi directorul, poti naviga.",
    " // poti sterge un director/fisier",
    " // poti copia un fisier/director",
    " // creeaza un nou director",
  ];

  var COMANDA = document.getElementById("comanda2");
  var DESCRIERE = document.getElementById("descriere2");
  var IndexCMD = 0;
  var CURRENTINDEX = 0;
  var SPEED = 100;
  var DELAY = 3000;

  function writecmd() {
    if (IndexCMD >= cmds.length) {
      IndexCMD = 0; // reset
    }

    var cmdcurenta = cmds[IndexCMD];
    var _currentdescription = descrieri[IndexCMD];

    if (CURRENTINDEX <= cmdcurenta.length) {
      COMANDA.textContent = `PS C:\\Users\\Iulica>${cmdcurenta.substring(
        0,
        CURRENTINDEX
      )}`;
      CURRENTINDEX++;
      setTimeout(writecmd, SPEED);
    } else {
      DESCRIERE.textContent = _currentdescription;
      setTimeout(deletecmd, DELAY);
    }
  }

  function deletecmd() {
    const cmdcurenta = cmds[IndexCMD];

    if (CURRENTINDEX >= 0) {
      COMANDA.textContent = `PS C:\\Users\\Iulica>${cmdcurenta.substring(
        0,
        CURRENTINDEX
      )}`;
      CURRENTINDEX--;
      setTimeout(deletecmd, SPEED / 2);
    } else {
      IndexCMD++;
      CURRENTINDEX = 0;
      DESCRIERE.textContent = "";
      setTimeout(writecmd, SPEED);
    }
  }

  writecmd();
});
/* ===================================================== /TERMINAL ===================================================== */
