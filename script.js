var rafa = { nome: "Rafa", vitorias: 1, empates: 1, derrotas: 3, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 1, empates: 1, derrotas: 3, pontos: 0 };

function calculaPontos(jogador) {
  var pontos = parseInt(jogador.vitorias) * 3 + parseInt(jogador.empates);
  return pontos;
}

var listaJogadores = [rafa, paulo];

function exibirJogadoresNaTela(listaJogadores) {
  var elemento = "";

  for (var i = 0; i < listaJogadores.length; i++) {
    listaJogadores[i].pontos = calculaPontos(listaJogadores[i]);

    elemento += "<tr> <td>" + listaJogadores[i].nome + "</td>";
    elemento += "<td>" + listaJogadores[i].vitorias + "</td>";
    elemento += "<td>" + listaJogadores[i].empates + "</td>";
    elemento += "<td>" + listaJogadores[i].derrotas + "</td>";
    elemento += "<td>" + listaJogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td> </tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibirJogadoresNaTela(listaJogadores);

function adicionarVitoria(i) {
  var jogadorVitoria = listaJogadores[i];
  jogadorVitoria.vitorias++;
  jogadorVitoria.pontos = calculaPontos(jogadorVitoria);
  exibirJogadoresNaTela(listaJogadores);
}

function adicionarEmpate(i) {
  var jogadorEmpate = listaJogadores[i];
  jogadorEmpate.empates++;
  jogadorEmpate.pontos = calculaPontos(jogadorEmpate);
  exibirJogadoresNaTela(listaJogadores);
}

function adicionarDerrota(i) {
  var jogadorDerrota = listaJogadores[i];
  jogadorDerrota.derrotas++;
  jogadorDerrota.pontos = calculaPontos(jogadorDerrota);
  exibirJogadoresNaTela(listaJogadores);
}

function Inserir() {
  var jogadorNovo = {
    nome: document.getElementById("nome").value,
    vitorias: document.getElementById("nVitorias").value,
    empates: document.getElementById("nEmpates").value,
    derrotas: document.getElementById("nDerrotas").value,
    pontos: 0
  };

  jogadorNovo.pontos = calculaPontos(jogadorNovo);

  listaJogadores.push(jogadorNovo);

  console.log(listaJogadores);

  exibirJogadoresNaTela(listaJogadores);

  document.getElementById("nome").value = "";
  document.getElementById("nVitorias").value = "";
  document.getElementById("nEmpates").value = "";
  document.getElementById("nDerrotas").value = "";
}