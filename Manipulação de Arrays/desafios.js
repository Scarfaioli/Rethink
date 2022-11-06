const pessoas = Array();
pessoas[0] = { name: "Fabiana Araújo", age: 33 };
pessoas[1] = { name: "Gabriel Gomes", age: 25 };
pessoas[2] = { name: "Fernando Henrique", age: 17 };
pessoas[3] = { name: "Ana Luiza", age: 2 };
pessoas[4] = { name: "Geralda do Nascimento", age: 93 };
pessoas[5] = { name: "Miguel Souza", age: 70 };
pessoas[6] = { name: "Antonio Miguel", age: 69 };

//Questão 3
//find_by_name("Gabriel Gomes");

function find_by_name(nome) {
  for (i = 0; i < pessoas.length; i++) {
    if (pessoas[i].name == nome) {
      return pessoas[i];
    }
  }
  console.log("Err: Pessoa não encontrada");
}

//Questão 4
//Obs fiz o bonus para realizar o retorno com nome completo basta um for que atribui o nome para o array
//que será dado como retorno da função
//get_names();

function get_names() {
  var full_name = Array();
  var str = "";

  for (i = 0; i < pessoas.length; i++) {
    str = str + pessoas[i].name + " ";
  }

  full_name = str.split(" ");
  str = "";

  for (i = 0; i < full_name.length - 1; i = i + 2) {
    str = str + full_name[i] + " ";
    if (i == 8) {
      i++;
    }
  }

  var name = str.split(" ");
  name.pop();
  console.log(name);
  return name;
}

//Questão 5

insert_id();

function insert_id() {
  var pessoas_com_id = Array();
  for (i = 0; i < pessoas.length; i++){
    pessoas_com_id[i] = { id: i + 1, name: pessoas[i].name, age: pessoas[i].age };
  };
  return pessoas_com_id;
};

//Questão 6

//Questão 7
