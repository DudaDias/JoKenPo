function quaseJoKenPo(){

    let partida;
    let player2;
    let player1;
    let empate = 0;
    let pc = 0;
    let player = 0;


    for(partida=0; partida<9; partida++){
        if(player2 > 3 || player2 < 1){
            alert(`numero inválido! Reinicie a partida`);

            return 0;

        }
        
        player2 = prompt("1(Jo) 2(Ken) 3(Po)"); //pedra papel tesoura

        player1 = Math.floor(Math.random() * 3) + 1;//Ã© o que vai dar um numero de 1 a 3?
        
       console.log (player2)
       console.log (player1)


    if(player1 == player2){
        empate = empate+1;
    }
    if(player1 > player2){
        pc= pc+1;
    }
    if(player1 < player2){
        player=player+1;
    
    }

}

    if(pc >  player){
        alert(`PC GANHOU`);
        alert(`NÚMEROS FINAISS : \n pc ${pc} \n empate ${empate} \n  `)
    }
    else if(player > pc){
        alert(`PLAYER GANHOU`);
        alert(`NÚMEROS FINAISS :  \n player ${player} \n empate ${empate}`)
    }
    else{
        alert(`empate total!!! eitaaa`)
        alert(`NÚMEROS FINAISS : \n pc ${pc} \n empate ${empate} \n player ${player} `)
    }

  
  
    
 }