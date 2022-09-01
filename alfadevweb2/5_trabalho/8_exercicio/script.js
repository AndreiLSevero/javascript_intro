/*
Escreva um loop for ou while que exiba qual número é par e qual número é ímpar, O contador deve iniciar em 0 e ir até 50;
*/
for (x=0; x<= 50; x++) {
    if((x % 2) == 0){
        console.log(x + ' é um número par ');
    }else{
        console.log(x + ' é um número ímpar');
    }
}
console.log('while----')
while(x<=50){
    if((x % 2) == 0){
        console.log(x + ' é um número par ');
    }else{
        console.log(x + ' é um número ímpar');
    }
    x++;
}