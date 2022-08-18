velocidade = 170;

if(velocidade <= 40){
    console.log('Não foi multado');
}else if((velocidade > 40) && (velocidade < 45)){
    console.log('Atenção!');
}else{
    console.log('Perigo!');
}