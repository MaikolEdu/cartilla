import "./styles.css";

var lista = [
  {
    premios: ["TELEVISOR", "PLAY", "AUTO", "CELULAR", "OLLA Y LICUADORA"],
    cartilla: [
      [97, 23, 25, 85, 10],
      [41, 86, 58, 73, 89],
      [8, 5, 35, 36, 18],
      [43, 68, 67, 81, 51],
      [87, 26, 93, 54, 24]
    ]
  },
  {
    premios: ["TELEVISOR", "PLAY", "AUTO", "CELULAR", "OLLA Y LICUADORA"],
    cartilla: [
      [43, 23, 75, 46, 22],
      [76, 7, 56, 38, 57],
      [11, 24, 15, 18, 70],
      [13, 63, 5, 60, 61],
      [72, 31, 26, 59, 8]
    ]
  }
];

var numeros = [87, 2, 13, 27, 30, 31, 41, 51];

function cabecera(cabecera) {
  var contenido = "<div class='rectangulo-padre'>";
  for (var i = 0; i < cabecera.length; i++) {
    contenido += '<div class="rectangulo-item">' + cabecera[i] + "</div>";
  }
  contenido += "</div>";
  return contenido;
}

function contenido(indice, content) {
  var texto = "";
  for (var i = 0; i < content.length; i++) {
    texto += "<div class='rectangulo-padre'>";
    for (var j = 0; j < content.length; j++) {
      texto +=
        '<div id="item_' +
        indice +
        "_" +
        i +
        "_" +
        j +
        '" class="rectangulo-item">' +
        content[i][j] +
        "</div>";
    }
    texto += "</div>";
  }
  return texto;
}

function dibujarCartilla() {
  var html = "";
  for (var i = 0; i < lista.length; i++) {
    html += '<div class="table">';
    html += cabecera(lista[i].premios);
    html += contenido(i, lista[i].cartilla);
    html += "</div>";
  }

  document.getElementById("contenido").innerHTML = html;
}

function marcar(indice, content) {
  for (var i = 0; i < content.length; i++) {
    for (var j = 0; j < content.length; j++) {
      if (numeros.includes(content[i][j])) {
        document.getElementById(
          "item_" + indice + "_" + i + "_" + j
        ).style.backgroundColor = "red";
      }
    }
  }
}

function marcarCartilla() {
  for (var i = 0; i < lista.length; i++) {
    marcar(i, lista[i].cartilla);
  }
}

document.getElementById("app").innerHTML = `
<button id="dibujar">Dibujar Cartilla</button>
<button id="marcar">Marcar Cartilla</button>

`;

document.getElementById("dibujar").onclick = function() {
  dibujarCartilla();
};

document.getElementById("marcar").onclick = function() {
  marcarCartilla();
};
