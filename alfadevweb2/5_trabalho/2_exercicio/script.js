/*
Crie uma variável do tipo const (constante) com o seu nome como valor; 
Depois uma estrutura if que verifica se o seu nome é o que está na constante; 
Se estiver, emita uma mensagem de saudação com a função alert().
*/
const nome = prompt ('Insira seu nome');
if(nome == "Denicreidsson"){
    console.log('Seja Bem vindo');
    alert("Seja bem vindo " + nome);
}