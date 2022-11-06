const pessoas = Array();
pessoas[0] = {name:"Fabiana Araújo", age: 33};
pessoas[1] = {name:"Gabriel Gomes", age: 25};
pessoas[2] = {name:"Fernando Henrique", age: 17};
pessoas[3] = {name:"Ana Luiza", age: 2};
pessoas[4] = {name:"Geralda do Nascimento", age: 93};
pessoas[5] = {name:"Miguel Souza", age: 70};
pessoas[6] = {name:"Antonio Miguel", age: 69};

//Questão 3 
find_by_name("Gabriel Gomes");

function find_by_name(nome){
    for(i = 0; i<pessoas.length; i++){
        if (pessoas[i].name == nome){
            return pessoas[i];
        };
    };
    console.log("Err: Pessoa não encontrada")
};

//Questão 4
get_names();

function get_names(){
    var full_name = Array();
    for(i = 0; i<pessoas.length; i++){
        var str = pessoas[i].name;
        full_name = str.split(' ');
    };
    var str = '';
    for(i = 0; i<full_name.length; i= i+2){
        str = str + full_name[i] + ' ';
    }
    var name = str.split(' ');
    return name;
};

//Questão 5 


//Questão 6


//Questão 7
