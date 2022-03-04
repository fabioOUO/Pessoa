const DIV_ROOT = document.getElementById("root");

const LIST_PERSON = [
  {
    codigo: 1,
    nome: "nome 1",
    caracteristica: {
      peso: 100,
      altura: 1,
    },
    endereco: {
      pais: "Brasil",
      estado: "Minas Gerais",
      cidade: "Ubá",
      cep: "36500096",
      bairro: "Centro",
      rua: "Rua Matilde da Rocha Balbi",
      numero: "1",
    },
    login: {
      email: "pessoa1@teste.com",
      senha: "111111111",
    },
  },
  {
    codigo: 2,
    nome: "nome 2",
    caracteristica: {
      peso: 200,
      altura: 2,
    },
    endereco: {
      pais: "Brasil",
      estado: "Minas Gerais",
      cidade: "Ubá",
      cep: "36500096",
      bairro: "Centro",
      rua: "Rua Matilde da Rocha Balbi",
      numero: "1",
    },
    login: {
      email: "pessoa2@teste.com",
      senha: "22222222222",
    },
  },
  {
    codigo: 3,
    nome: "nome 3",
    caracteristica: {
      peso: 300,
      altura: 3,
    },
    endereco: {
      pais: "Brasil",
      estado: "Minas Gerais",
      cidade: "Ubá",
      cep: "36500096",
      bairro: "Centro",
      rua: "Rua Matilde da Rocha Balbi",
      numero: "1",
    },
    login: {
      email: "pessoa3@teste.com",
      senha: "3333333",
    },
  },
  {
    codigo: 4,
    nome: "nome 4",
    caracteristica: {
      peso: 400,
      altura: 4,
    },
    endereco: {
      pais: "Brasil",
      estado: "Minas Gerais",
      cidade: "Ubá",
      cep: "36500096",
      bairro: "Centro",
      rua: "Rua Matilde da Rocha Balbi",
      numero: "1",
    },
    login: {
      email: "pessoa4@teste.com",
      senha: "4444444444444",
    },
  },
];

/* Funções para gerar lista de pessoas */

function geratorPerson(person) {
  const AUX = `
    <div>
      <p>Nome: ${person.nome} </p>
      <p>Peso ${person.caracteristica.peso} </p>
      <p>Altura ${person.caracteristica.altura} </p>
    </div>
    <div>
      <p>Pais: ${person.endereco.pais} </p>
      <p>Estado: ${person.endereco.estado} </p>
      <p>Estado: ${person.endereco.cidade} </p>
      <p>Bairro: ${person.endereco.bairro} </p>
      <p>Rua: ${person.endereco.rua} </p>
      <p>Numero: ${person.endereco.numero} </p>
    </div>
    <button class="btn-delete" onclick="deletePerson(${person.codigo})"> EXCLUIR </button>
    <button class="btn-update" onclick="updatePerson(${person.codigo})"> EDITAR </button>
  `;

  const PERSON_ELEMENT = document.createElement("div");
  PERSON_ELEMENT.classList.add("person");
  PERSON_ELEMENT.innerHTML = AUX;
  return PERSON_ELEMENT;
}

function geratorListPerson(LIST_PERSON) {
  const DIV_LIST_PERSON = document.createElement("div");
  DIV_LIST_PERSON.classList.add("list-person");

  for (let c = 0; c < LIST_PERSON.length; c++) {
    DIV_LIST_PERSON.appendChild(geratorPerson(LIST_PERSON[c]));
  }
  return DIV_LIST_PERSON;
}

function setListPerson(LIST_PERSON) {
  DIV_ROOT.appendChild(LIST_PERSON);
}

function deletePerson(person) {
  alert("Excluir: " + person);
}

function updatePerson(person) {
  alert("Atualizar: " + person);
}

const LIST = geratorListPerson(LIST_PERSON);
setListPerson(LIST);
