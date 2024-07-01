// window.onload = function () {
//   setTimeout(() => {
//     console.clear();
//     setTimeout(() => {
//       console.log("am sters consola");
//     }, 1);
//   }, 1000);
// };

var msj = ["bn te am gasit in portal", "bn ai revenit", "tema temelor"];

var random = Math.floor(Math.random() * msj.length);
console.log(msj[random]);

// ======================================================== \\
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

// function hidediv() {
//   var divs = document.querySelectorAll(".portalcontent");
//   divs.forEach((div) => (div.style.display = "none"));
// }

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

/* ===================================================== VARIABILE, CONSTANTE s.a.m.d ===================================================== */
var TIMEOUT_GIT;
var TIMEOUT_TERMINAL;
//var USEDFACTS = [];
/* ===================================================== GIT ===================================================== */
function startGit() {
  clearTimeout(TIMEOUT_GIT);

  var cmds = [
    "git init",
    "git add .",
    'git commit -m "prima initializare"',
    "git status",
    "git push",
    "git clone",
    "git pull",
    "git remote",
  ];

  var descrieri = [
    " // initializeaza un nou repository dar local",
    " // adauga toate fisierele din director in staging\n// De asemenea, poti adauga separat fiecare fisier in parte.\n\n// Syntax: git add index.html",
    ' // salveaza modificarile proiectului din staging intr-un istoric al repo-ului cu mesajul "prima initializare"',
    " // prezinta situatia curenta a proiectului (modificari noi s.a.m.d)",
    " // salveaza modificarile locale intr-un repo extern (github)",
    " // cloneaza un repository de pe github",
    " // cloneaza si aplica modificarile unui repo remote in repo-ul tau local",
    " // gestioneaza setarile remote ale unui repository",
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
      TIMEOUT_GIT = setTimeout(writecmd, SPEED);
    } else {
      DESCRIERE.textContent = _currentdescription;
      TIMEOUT_GIT = setTimeout(deletecmd, DELAY);
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
      TIMEOUT_GIT = setTimeout(deletecmd, SPEED / 2);
    } else {
      IndexCMD++;
      CURRENTINDEX = 0;
      DESCRIERE.textContent = "";
      TIMEOUT_GIT = setTimeout(writecmd, SPEED);
    }
  }

  writecmd();
}
/* ===================================================== TERMINAL ===================================================== */
function startTerminal() {
  clearTimeout(TIMEOUT_TERMINAL);

  var cmds = ["clear", "ls -lah", "pwd", "cd", "rm", "cp", "mkdir", "rmdir"];

  var descrieri = [
    " // sterge intregul continut al terminalului",
    " // listeaza detaliat toate fisierele si directoarele din directorul curent\n\n// Exemplu: $ ls -lah\n// d-----         19-Jun-24     23:30                iulica\n// d-r---         20-Apr-24     09:12                Public",
    ' // arata locatia ta actuala\n\n// Exemplu $ pwd\n// "/c/Users/preda/Desktop/Tests/"',
    " // schimbi directorul, poti naviga.\n\n// Exemplu: $ cd Desktop/Documents/\n// Te-ai dus in directorul Documents, congrats.",
    " // poti sterge un fisier\n\n// Exemplu: $ rm nume_director/notepad.txt\nFisierul notepad.txt a fost sters din directorul nume_director",
    " // poti copia un fisier/director\n\n// Exemplu $ cp nume_fisier.txt nume_fisier_dar_asta_e_ales.txt\n// S-a copiat cu succes fisierul nume_fisier, copia sa se numeste nume_fisier_dar_asta_e_ales.txt",
    " // creeaza un nou director\n\n// Exemplu $ mkdir folder1/nume_director\n// S-a creat un nou director in directorul folder1",
    " // sterge un director\n\n// Exemplu $ rmdir folder1/nume_director\n// S-a sters directorul nume_director din folder1",
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
      TIMEOUT_TERMINAL = setTimeout(writecmd, SPEED);
    } else {
      DESCRIERE.textContent = _currentdescription;
      TIMEOUT_TERMINAL = setTimeout(deletecmd, DELAY);
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
      TIMEOUT_TERMINAL = setTimeout(deletecmd, SPEED / 2);
    } else {
      IndexCMD++;
      CURRENTINDEX = 0;
      DESCRIERE.textContent = "";
      TIMEOUT_TERMINAL = setTimeout(writecmd, SPEED);
    }
  }

  writecmd();
}

/* ===================================================== ALTE LISTEN-URI SI FUNCTII/CHESTII ===================================================== */
function DESTROY_GIT_TERMINAL() {
  clearTimeout(TIMEOUT_GIT);
  clearTimeout(TIMEOUT_TERMINAL);
}

function hidediv() {
  console.log("in orice caz, am oprit afisarea.");
  var divs = document.querySelectorAll(".portalcontent");
  divs.forEach((div) => {
    div.style.display = "none";
    DESTROY_GIT_TERMINAL();
  });
}

document.getElementById("git").addEventListener("click", function () {
  showdiv("gitcontent");
  startGit();
  console.log("Afisez continutul git..");
});

document.getElementById("terminal").addEventListener("click", function () {
  showdiv("terminalcontent");
  startTerminal();
  console.log("Afisez continutul terminalului..");
});

/*var facts_term = [
  "In majoritatea sistemelor de operare bazate pe Unix, terminalul este o interfata de \nutilizator text pentru a comunica cu sistemul de operare mai repede si mai eficient.",
  "Exista comenzi specializate pentru retea, cum ar fi 'ping' pentru a \nverifica conectivitatea cu un alt computer și 'ssh' pentru a accesa un server de la distanta.",
  "Pentru manipularea fisierelor si directoarelor, poti folosi comenzi precum 'cp' pentru a copia, \n'mv' pentru a muta și 'rm' pentru a sterge.",
  "Terminalul poate fi personalizat prin configurarea profilurilor de utilizator si \nprin utilizarea diferitelor scheme de culori si fonturi.",
  "Utilizarea comenzilor de terminal poate imbunatati eficienta si productivitatea \npentru utilizatorii avansati, oferind o alternativa rapida la interfetele grafice.",
];
var FACTSRANDOMIZATOR_TERMINAL = Math.floor(Math.random() * facts_term.length);

function TERMINALFACTS() {
  if (USEDFACTS.length === facts_term.length) {
    USEDFACTS = [];
  }

  var random;
  do {
    random = Math.floor(Math.random() * facts_term.length);
  } while (USEDFACTS.includes(random));

  USEDFACTS.push(random);
  return facts_term[random];
}*/
