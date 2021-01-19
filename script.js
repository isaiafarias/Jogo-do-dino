const  dino  =  document . querySelector ( '.dino' ) ;

const  background  =  document . querySelector ( '.background' ) ;

let  isJumping  =  false ;
deixe a  posição  =  0 ;

function  handleKeyUp ( event ) {
    if ( event . keyCode  ===  32 ) {  // tecla espaço
        if ( ! isJumping ) {
           salto ( ) ; 
        }

    }
}

function  jump ( ) {

    isJumping  =  true ;
    let  upInterval  =  setInterval ( ( ) => {
        if ( posição > = 150 ) {
            clearInterval ( upInterval ) ;
            // Descendo
            let  downInterval  =  setInterval ( ( ) => {
                if ( posição <= 0 ) {
                    clearInterval ( upInterval ) ;
                    isJumping  =  false ;
                }
                else {
                    posição  - =  20 ;
                    Dino . estilo . inferior  =  posição  + 'px' ;
                }

            } ) ;
        }
        else {
            // Subindo
            posição  + =  20 ;
            Dino . estilo . inferior  =  posição  +  'px' ;
        }


    } , 20 ) ;

}

function  createCactus ( ) {
    const  cactus  =  document . createElement ( 'div' ) ;
    deixe  cactusPosition  =  1000 ;
    deixe  randomTime  =  Math . aleatório ( ) * 6000 ;

    cacto . classList . adicionar ( 'cacto' ) ;
    cacto . estilo . esquerda  =  1000  +  'px' ;
    fundo . appendChild ( cacto )  ;

    let  leftInterval  =  setInterval ( ( ) => {
        if ( cactusPosition <  - 60 ) {
            clearInterval ( leftInterval ) ;
            fundo . removeChild ( cacto ) ;
        } else  if ( cactusPosition  >  0  &&  cactusPosition  <  60  &&  position  <  60 ) {
            //Fim de jogo
            clearInterval ( leftInterval ) ;
            documento . corpo . innerHTML  =  '<h1 class = "game-over"> GAME OVER </h1>' ;
        }
        else {
           cactusPosition  - =  10 ;
           cacto . estilo . left  =  cactusPosition  +  'px' ; 
        }
    } , 20 ) ;

    setTimeout ( createCactus ,  randomTime ) ;
}

createCactus ( ) ;
documento . addEventListener ( ' keyup ' , handleKeyUp ) ; 
