function quaseJoKenPo(){

    let empate = 0;   //variaveis contadores dos pontos em cada rodada
    let pc = 0;
    let player = 0;

    let player2;   //variaveis de jogada
    let player1;


    const jogada = ['null', 'Jo', 'Ken', 'Po'];    //vetor com os nomes da jogada de acordo com cada numero


    for(let partida=0; partida<9; partida++){              //laco para as 9 rodadas

        if(player2 > 3 || player2 < 1){
            alert(`[ERRO]: Número inválido! Reinicie a partida`);           //mensagem de erro caso o usuario escolha uma opcao invalida

            return 0;

        }

        player2 = prompt("1(Jo) 2(Ken) 3(Po) \nEscolha sua opção:"); //jo ken po

        player1 = Math.floor(Math.random() * 3) + 1;   //random para as jogadas do computador


        if(player1 == player2){            //condicoes para o ganhador da rodada
            alert(`Usuário: ${jogada[player2]} \nComputador: ${jogada[player1]}\nDeu empate`)
            empate = empate+1;   //contadora de pontos
        }
    
        if(player1 == 1 && player2 == 3){
            alert(`Usuário: ${jogada[player2]} \nComputador: ${jogada[player1]}\nComputador ganhou a rodada`)
            pc= pc+1;
        }

        if(player1 == 1 && player2 == 2){
            alert(`Usuário: ${jogada[player2]} \nComputador: ${jogada[player1]}\nUsuário Ganhou a rodada`)
            player=player+1;
        }
    
        if(player1 == 2 && player2 == 1){
            alert(`Usuário: ${jogada[player2]} \nComputador: ${jogada[player1]}\nComputador ganhou a rodada`)
            pc= pc+1;
        }

        if(player1 == 2 && player2 == 3){
            alert(`Usuário: ${jogada[player2]} \nComputador: ${jogada[player1]}\nUsuário Ganhou a rodada`)
            player=player+1;
        }
    
        if(player1 == 3 && player2 == 2){
            alert(`Usuário: ${jogada[player2]} \nComputador: ${jogada[player1]}\nComputador ganhou a rodada`)
            pc= pc+1;
        }

        if(player1 == 3 && player2 == 1){
            alert(`Usuário: ${jogada[player2]} \nComputador: ${jogada[player1]}\nUsuário Ganhou a rodada`)
            player=player+1;
        }
    
       console.log (player2)      //exibir no console os valores das jogadas
       console.log (player1)
}

    if(pc >  player){   //condicoes para definir o campeao 

        alert(`[SAD]: COMPUTADOR FOI O CAMPEÃO!! \nNÚMEROS FINAIS \nComputador: ${pc} pontos \nUsuário: ${player} \nQuantidade de Empates: ${empate} `)
    }

    else if(player > pc){

        alert(`[PARABÉNS]: VOCÊ FOI O CAMPEÃO!! \nNÚMEROS FINAIS  \nUsuário: ${player} pontos \nComputador: ${pc} pontos \nQuantidade de Empates: ${empate}`)
    }

    else{

        alert(`[ATENÇÃO]: TIVEMOS UM EMPATE TOTAL!! \nNÚMEROS FINAIS \nComputador: ${pc} pontos \nUsuário: ${player} pontos \nQuantidade de Empates: ${empate} `)
    }

 }