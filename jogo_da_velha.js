var rodada = document.getElementById('h1-rodada');

var dificuldades = document.getElementById('select-dificuldades');
var dificuldadeSiMesmo = document.getElementById('modo-jogar-contra-si');
var dificuldadeMedio = document.getElementById('modo-medio');
var dificuldadeDificil = document.getElementById('modo-dificil');
var dificuldadeImpossivel = document.getElementById('modo-impossivel');

var telaWin = document.getElementById('div-tela-win');
var txtWin = document.getElementById('span-msg-win');
var btRestartJg = document.getElementById('span-bt-pos-win-reniciar');

var btModoContraSi = document.getElementById('btJogarModoContraSi');
var btModoFacil = document.getElementById('btJogarModoFacil');
var btModoDificil = document.getElementById('btJogarModoDificil');

var modoSelecionadoTxt = document.getElementById('span-modo-selecionado');


function checarEmpate(board) {
    for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
            if(board[row][col] === '') {
                return false;
            };
        };
    };

    return true;
};

btModoContraSi.addEventListener('click', function() {

    modoSelecionadoTxt.innerHTML = 'MODO SELECIONADO: JOGAR CONTRA SI';

    var boardSi = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    btModoContraSi.disabled = true;
    btModoFacil.disabled = true;
    btModoDificil.disabled = true;

    btRestartJg.addEventListener('click', function() {
        location.reload();
    });

    let quad1 = document.getElementById('content-1');
    var quadrado1 = document.getElementById('content-1');
    
    quadrado1.addEventListener('click', function() {
        if(quadrado1.classList.contains('x') || quadrado1.classList.contains('o')) {
            console.log('quadrado ja ocupado-1');
        } else {
            quadrado1.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad1.innerHTML = 'X';

                boardSi[0][0] = 'X';
    
                if(quadrado5.innerHTML === 'X' && quadrado1.innerHTML === 'X' && quadrado9.innerHTML === 'X') {
                    setTimeout(function(){
                        telaWin.style.display = 'flex';
                        }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                };
                if(quadrado1.innerHTML === 'X' && quadrado2.innerHTML === 'X' && quadrado3.innerHTML === 'X') {
                    setTimeout(function(){
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                };
                if(quadrado1.innerHTML === 'X' && quadrado4.innerHTML === 'X' && quadrado7.innerHTML === 'X'){
                    setTimeout(function(){
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                };

                if(checarEmpate(boardSi)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!'
                    txtWin.style.textAlign = 'center';
                }else {
                    rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                    quad1.style.cursor = 'not-allowed';
                };

            }else if(rodada.innerHTML === 'VEZ DE: JOGADOR 2') {
                quad1.innerHTML = 'O';
                rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                quad1.style.cursor = 'not-allowed';
    
                boardSi[0][0] = 'O';
    
                if(quadrado1.innerHTML === 'O' && quadrado4.innerHTML === 'O' && quadrado7.innerHTML === 'O'){
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'O VENCEU!';
                };
                if(quadrado5.innerHTML === 'O' && quadrado1.innerHTML === 'O' && quadrado9.innerHTML === 'O') {
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'O VENCEU!';
                };
                if(quadrado1.innerHTML === 'O' && quadrado2.innerHTML === 'O' && quadrado3.innerHTML === 'O') {
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'O VENCEU!';

                if(checarEmpate(boardSi)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!'
                    txtWin.style.textAlign = 'center';
                };
                };
            };
        };
    });
    
    
    // --------------------------------------------------------------------------------------
    
    let quad2 = document.getElementById('content-2');
    var quadrado2 = document.getElementById('content-2');
    
    quadrado2.addEventListener('click', function() {
        if(quadrado2.classList.contains('x') || quadrado2.classList.contains('o')) {
            console.log('quadrado ja ocupado-2');
        }else {
            quadrado2.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad2.innerHTML = 'X';

                boardSi[0][1] = 'X';
    
                if(quadrado1.innerHTML === 'X' && quadrado2.innerHTML === 'X' && quadrado3.innerHTML === 'X') {
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 1000);
                    txtWin.innerHTML = 'X VENCEU!';
                };
                if(quadrado2.innerHTML === 'X' && quadrado5.innerHTML === 'X' && quadrado8.innerHTML === 'X') {
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 1000);
                    txtWin.innerHTML = 'X VENCEU!';
                };

                if(checarEmpate(boardSi)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!'
                    txtWin.style.textAlign = 'center';
                }else {
                    rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                    quad2.style.cursor = 'not-allowed';
                };

            }else if(rodada.innerHTML === 'VEZ DE: JOGADOR 2') {
                quad2.innerHTML = 'O';

                boardSi[0][1] = 'O';
    
                if(quadrado1.innerHTML === 'O' && quadrado2.innerHTML === 'O' && quadrado3.innerHTML === 'O') {
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 1000);
                    txtWin.innerHTML = 'O VENCEU!';
                };
                if(quadrado2.innerHTML === 'O' && quadrado5.innerHTML === 'O' && quadrado8.innerHTML === 'O') {
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 1000);
                    txtWin.innerHTML = 'O VENCEU!';
                };

                if(checarEmpate(boardSi)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!'
                    txtWin.style.textAlign = 'center';
                }else {
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    quad2.style.cursor = 'not-allowed';
                };
            };
        };
    });
    
    
    // --------------------------------------------------------------------------------------
    
    let quad3 = document.getElementById('content-3');
    var quadrado3 = document.getElementById('content-3');
    
    quadrado3.addEventListener('click', function() {
        if(quadrado3.classList.contains('x') || quadrado3.classList.contains('o')) {
            console.log('quadrado ja ocupado-3');
        }else {
            quadrado3.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad3.innerHTML = 'X';
    
                boardSi[0][2] = 'X';

                if(quadrado7.innerHTML === 'X' && quadrado5.innerHTML === 'X' && quadrado3.innerHTML === 'X') {
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 1000);
                    txtWin.innerHTML = 'X VENCEU!';
                };
                if(quadrado1.innerHTML === 'X' && quadrado2.innerHTML === 'X' && quadrado3.innerHTML === 'X') {
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 1000);
                    txtWin.innerHTML = 'X VENCEU!';
                };
                if(quadrado3.innerHTML === 'X' && quadrado6.innerHTML === 'X' && quadrado9.innerHTML === 'X') {
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 1000);
                    txtWin.innerHTML = 'X VENCEU!';
                };
    
                if(checarEmpate(boardSi)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!'
                    txtWin.style.textAlign = 'center';
                }else {
                    rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                    quad3.style.cursor = 'not-allowed';
                };
            }else if(rodada.innerHTML === 'VEZ DE: JOGADOR 2') {
                quad3.innerHTML = 'O';

                boardSi[0][2] = 'O';
    
                if(quadrado7.innerHTML === 'O' && quadrado5.innerHTML === 'O' && quadrado3.innerHTML === 'O') {
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 1000);
                    txtWin.innerHTML = 'O VENCEU!';
                };
                if(quadrado1.innerHTML === 'O' && quadrado2.innerHTML === 'O' && quadrado3.innerHTML === 'O') {
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 1000);
                    txtWin.innerHTML = 'O VENCEU!';
                };
                if(quadrado3.innerHTML === 'O' && quadrado6.innerHTML === 'O' && quadrado9.innerHTML === 'O') {
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 1000);
                    txtWin.innerHTML = 'O VENCEU!';
                };
    
                if(checarEmpate(boardSi)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!'
                    txtWin.style.textAlign = 'center';
                }else {
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    quad3.style.cursor = 'not-allowed';
                };
            };
        };
    });

    
    // --------------------------------------------------------------------------------------
    
    let quad4 = document.getElementById('content-4');
    var quadrado4 = document.getElementById('content-4');
    
    quadrado4.addEventListener('click', function() {
        if(quadrado4.classList.contains('x') || quadrado4.classList.contains('o')) {
            console.log('quadrado ja ocupado-4');
        }else {
            quadrado4.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad4.innerHTML = 'X';
    
                boardSi[1][0] = 'X';

                if(quadrado4.innerHTML === 'X' && quadrado5.innerHTML === 'X' && quadrado6.innerHTML === 'X') {
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 1000);
                    txtWin.innerHTML = 'X VENCEU!';
                };
                if(quadrado1.innerHTML === 'X' && quadrado4.innerHTML === 'X' && quadrado7.innerHTML === 'X'){
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 1000);
                    txtWin.innerHTML = 'X VENCEU!';
                };

                if(checarEmpate(boardSi)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!'
                    txtWin.style.textAlign = 'center';
                }else {
                    rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                    quad4.style.cursor = 'not-allowed';
                };
            }else if(rodada.innerHTML === 'VEZ DE: JOGADOR 2') {
                quad4.innerHTML = 'O';
    
                boardSi[1][0] = 'O';
    
                if(quadrado4.innerHTML === 'O' && quadrado5.innerHTML === 'O' && quadrado6.innerHTML === 'O') {
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 1000);
                    txtWin.innerHTML = 'O VENCEU!';
                };
                if(quadrado1.innerHTML === 'O' && quadrado4.innerHTML === 'O' && quadrado7.innerHTML === 'O'){
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 1000);
                    txtWin.innerHTML = 'O VENCEU!';
                };
    
                if(checarEmpate(boardSi)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!'
                    txtWin.style.textAlign = 'center';
                }else {
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    quad4.style.cursor = 'not-allowed';
                };
            };
        };
    });

    
    // --------------------------------------------------------------------------------------
    
    let quad5 = document.getElementById('content-5');
    var quadrado5 = document.getElementById('content-5');
    
    quadrado5.addEventListener('click', function() {
        if(quadrado5.classList.contains('x') || quadrado5.classList.contains('o')) {
            console.log('quadrado ja ocupado-5');
        }else {
            quadrado5.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1'){
                quad5.innerHTML = 'X';

                boardSi[1][1] = 'X';
    
                if(quadrado5.innerHTML === 'X' && quadrado1.innerHTML === 'X' && quadrado9.innerHTML === 'X') {
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 1000);
                    txtWin.innerHTML = 'X VENCEU!';
                };
                if(quadrado7.innerHTML === 'X' && quadrado5.innerHTML === 'X' && quadrado3.innerHTML === 'X') {
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 1000);
                    txtWin.innerHTML = 'X VENCEU!';
                };
                if(quadrado4.innerHTML === 'X' && quadrado5.innerHTML === 'X' && quadrado6.innerHTML === 'X') {
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 1000);
                    txtWin.innerHTML = 'X VENCEU!';
                };
                if(quadrado2.innerHTML === 'X' && quadrado5.innerHTML === 'X' && quadrado8.innerHTML === 'X') {
                    setTimeout(function(){
                            telaWin.style.display = 'flex';
                    }, 1000);
                    txtWin.innerHTML = 'X VENCEU!';
                };
    
                if(checarEmpate(boardSi)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!'
                    txtWin.style.textAlign = 'center';
                }else {
                    rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                    quad5.style.cursor = 'not-allowed';
                };
            }else if(rodada.innerHTML === 'VEZ DE: JOGADOR 2') {
                quad5.innerHTML = 'O';
    
                boardSi[1][1] = 'O';
    
                if(quadrado5.innerHTML === 'O' && quadrado1.innerHTML === 'O' && quadrado9.innerHTML === 'O') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'O VENCEU!';
                };
                if(quadrado7.innerHTML === 'O' && quadrado5.innerHTML === 'O' && quadrado3.innerHTML === 'O') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'O VENCEU!';
                };
                if(quadrado4.innerHTML === 'O' && quadrado5.innerHTML === 'O' && quadrado6.innerHTML === 'O') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'O VENCEU!';
                };
                if(quadrado2.innerHTML === 'O' && quadrado5.innerHTML === 'O' && quadrado8.innerHTML === 'O') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'O VENCEU!';
                };

                if(checarEmpate(boardSi)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!'
                    txtWin.style.textAlign = 'center';
                }else {
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    quad5.style.cursor = 'not-allowed';
                };
            };
        };
    });
    
    // --------------------------------------------------------------------------------------
    
    let quad6 = document.getElementById('content-6');
    var quadrado6 = document.getElementById('content-6');
    
    quadrado6.addEventListener('click', function() {
        if(quadrado6.classList.contains('x') || quadrado6.classList.contains('o')) {
            console.log('quadrado ja ocupado-6');
        }else {
            quadrado6.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad6.innerHTML = 'X';
    
                boardSi[1][2] = 'X';
    
                if(quadrado4.innerHTML === 'X' && quadrado5.innerHTML === 'X' && quadrado6.innerHTML === 'X') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                };
                if(quadrado3.innerHTML === 'X' && quadrado6.innerHTML === 'X' && quadrado9.innerHTML === 'X') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                };

                if(checarEmpate(boardSi)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!'
                    txtWin.style.textAlign = 'center';
                }else {
                    rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                    quad6.style.cursor = 'not-allowed';
                };
            }else if(rodada.innerHTML === 'VEZ DE: JOGADOR 2') {
                quad6.innerHTML = 'O';
    
                boardSi[1][2] = 'O';
    
                if(quadrado4.innerHTML === 'O' && quadrado5.innerHTML === 'O' && quadrado6.innerHTML === 'O') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'O VENCEU!';
                };
                if(quadrado3.innerHTML === 'O' && quadrado6.innerHTML === 'O' && quadrado9.innerHTML === 'O') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'O VENCEU!';
                };
    
                if(checarEmpate(boardSi)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!'
                    txtWin.style.textAlign = 'center';
                }else {
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    quad6.style.cursor = 'not-allowed';
                };
            };
        };
    });

    
    // --------------------------------------------------------------------------------------
    
    let quad7 = document.getElementById('content-7');
    var quadrado7 = document.getElementById('content-7');
    
    quadrado7.addEventListener('click', function() {
        if(quadrado7.classList.contains('x') || quadrado7.classList.contains('o')) {
            console.log('quadrado ja ocupado-7');
        }else {
            quadrado7.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad7.innerHTML = 'X';
                
                boardSi[2][0] = 'X';

                if(quadrado9.innerHTML === 'X' && quadrado8.innerHTML === 'X' && quadrado7.innerHTML === 'X') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                };
                if(quadrado7.innerHTML === 'X' && quadrado5.innerHTML === 'X' && quadrado3.innerHTML === 'X') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                };
                if(quadrado1.innerHTML === 'X' && quadrado4.innerHTML === 'X' && quadrado7.innerHTML === 'X'){
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                };
                
                if(checarEmpate(boardSi)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!'
                    txtWin.style.textAlign = 'center';
                }else {
                    rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                    quad7.style.cursor = 'not-allowed';
                };
            }else if(rodada.innerHTML === 'VEZ DE: JOGADOR 2') {
                quad7.innerHTML = 'O';
    
                boardSi[2][0] = 'X';
    
                if(quadrado9.innerHTML === 'O' && quadrado8.innerHTML === 'O' && quadrado7.innerHTML === 'O') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'O VENCEU!';
                };
                if(quadrado7.innerHTML === 'O' && quadrado5.innerHTML === 'O' && quadrado3.innerHTML === 'O') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'O VENCEU!';
                };
                if(quadrado1.innerHTML === 'O' && quadrado4.innerHTML === 'O' && quadrado7.innerHTML === 'O'){
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'O VENCEU!';
                };
    
                if(checarEmpate(boardSi)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!'
                    txtWin.style.textAlign = 'center';
                }else {
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    quad7.style.cursor = 'not-allowed';
                };
            };
        };
    });

    
    // --------------------------------------------------------------------------------------
    
    let quad8 = document.getElementById('content-8');
    var quadrado8 = document.getElementById('content-8');
    
    quadrado8.addEventListener('click', function() {
        if(quadrado8.classList.contains('x') || quadrado8.classList.contains('o')) {
            console.log('quadrado ja ocupado-8');
        }else {
            quadrado8.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad8.innerHTML = 'X';
                
                boardSi[2][1] = 'X';
                
                if(quadrado7.innerHTML === 'X' && quadrado9.innerHTML === 'X' && quadrado8.innerHTML === 'X') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                };
                if(quadrado2.innerHTML === 'X' && quadrado5.innerHTML === 'X' && quadrado8.innerHTML === 'X') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                };

                if(checarEmpate(boardSi)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!'
                    txtWin.style.textAlign = 'center';
                }else {
                    rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                    quad8.style.cursor = 'not-allowed';
                };
            }else if(rodada.innerHTML === 'VEZ DE: JOGADOR 2') {
                quad8.innerHTML = 'O';
    
                boardSi[2][1] = 'O';
    
                if(quadrado7.innerHTML === 'O' && quadrado9.innerHTML === 'O' && quadrado8.innerHTML === 'O') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'O VENCEU!';
                };
                if(quadrado2.innerHTML === 'O' && quadrado5.innerHTML === 'O' && quadrado8.innerHTML === 'O') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'O VENCEU!';
                };
                if(checarEmpate(boardSi)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!'
                    txtWin.style.textAlign = 'center';
                }else {
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    quad8.style.cursor = 'not-allowed';
                };
            };
        };
    });

    
    // --------------------------------------------------------------------------------------
    
    var quad9 = document.getElementById('content-9');
    var quadrado9 = document.getElementById('content-9');
    
    quadrado9.addEventListener('click', function() {
        if(quadrado9.classList.contains('x') || quadrado9.classList.contains('o')) {
            console.log('quadrado ja ocupado-9');
        }else {
            quadrado9.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad9.innerHTML = 'X';
                
                boardSi[2][2] = 'X';
                
                if(quadrado8.innerHTML === 'X' && quadrado7.innerHTML === 'X' && quadrado9.innerHTML === 'X') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                };
                if(quadrado5.innerHTML === 'X' && quadrado1.innerHTML === 'X' && quadrado9.innerHTML === 'X') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                };
                if(quadrado3.innerHTML === 'X' && quadrado6.innerHTML === 'X' && quadrado9.innerHTML === 'X') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                };
            
                if(checarEmpate(boardSi)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!'
                    txtWin.style.textAlign = 'center';
                }else {
                    rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                    quad9.style.cursor = 'not-allowed';
                };
            }else if(rodada.innerHTML === 'VEZ DE: JOGADOR 2') {
                quad9.innerHTML = 'O';
    
                boardSi[2][2] = 'O';

                if(quadrado8.innerHTML === 'O' && quadrado7.innerHTML === 'O' && quadrado9.innerHTML === 'O') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'O VENCEU!';
                };
                if(quadrado5.innerHTML === 'O' && quadrado1.innerHTML === 'O' && quadrado9.innerHTML === 'O') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'O VENCEU!';
                };
                if(quadrado3.innerHTML === 'O' && quadrado6.innerHTML === 'O' && quadrado9.innerHTML === 'O') {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'O VENCEU!';
                };

                if(checarEmpate(boardSi)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!'
                    txtWin.style.textAlign = 'center';
                }else {
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    quad9.style.cursor = 'not-allowed';
                };
            };
        };
    });
});

btModoFacil.addEventListener('click', function() {

    modoSelecionadoTxt.innerHTML = 'MODO SELECIONADO: FÁCIL';

    var boardFacil = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    btModoContraSi.disabled = true;
    btModoFacil.disabled = true;
    btModoDificil.disabled = true;

    btRestartJg.addEventListener('click', function() {
        location.reload();
    });
    
    var quadradosSelecionados = [];

    function sortearNumeros() {
        var min = 1
        var max = 9
        
        var numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
        
        if (quadradosSelecionados.includes(numeroSorteado)) {
           if(quadradosSelecionados.length === max - min + 1) {
            return null;
           }else {
            return sortearNumeros();
           };
        };
        
        quadradosSelecionados.push(numeroSorteado);
        
        return numeroSorteado;
    };


    
    function verificarVitoria(jogador) {
        const combinacoesVitoria = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],

            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],

            [1, 5, 9], 
            [3, 5, 7]
        ];
        
        for (const combinacao of combinacoesVitoria) {

            const [a, b, c] = combinacao;
            const quadradoA = document.getElementById(`content-${a}`);
            const quadradoB = document.getElementById(`content-${b}`);
            const quadradoC = document.getElementById(`content-${c}`);
        
            if (quadradoA.innerHTML === jogador && quadradoB.innerHTML === jogador && quadradoC.innerHTML === jogador) {
                return true;
            };
        };
        
        return false;
        };
        
        
    let quad1Medio = document.getElementById('content-1');
    var quadrado1Medio = document.getElementById('content-1');
    
    var quadradosIds = ['content-1', 'content-2', 'content-3', 'content-4', 'content-5', 'content-6', 'content-7', 'content-8', 'content-9'];
    
    function quadradoSelecionado(id) {
        if(document.getElementById(id) !== null) {
            return document.getElementById(id).classList.contains('x') || document.getElementById(id).classList.contains('o');
        };
    };
    
    quadrado1Medio.addEventListener('click', function() {
        if (quadradoSelecionado(quadradosIds[0])) {
            console.log('quadrado já ocupado');
        } else {
            quad1Medio.classList.add('x');
            if (rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad1Medio.innerHTML = 'X';
                quad1Medio.style.cursor = 'not-allowed';
                boardFacil[0][0] = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                
                var numeroSorteado;
                
                do {
                    numeroSorteado = sortearNumeros();
                } while (quadradoSelecionado(quadradosIds[numeroSorteado - 1]));
                
                setTimeout(function() {
                    if(document.getElementById(quadradosIds[numeroSorteado - 1]) !== null) {
                        document.getElementById(quadradosIds[numeroSorteado - 1]).innerHTML = 'O';
                        document.getElementById(quadradosIds[numeroSorteado - 1]).style.cursor = 'not-allowed';
                        document.getElementById(quadradosIds[numeroSorteado - 1]).classList.add('o');

                        var idString = document.getElementById(quadradosIds[numeroSorteado - 1]);
                        const id = idString.getAttribute('id');
    
                        if(id == 'content-1') {
                            boardFacil[0][0] = 'O';
                        }else if(id == 'content-2') {
                            boardFacil[0][1] = 'O';
                        }else if(id == 'content-3') {
                            boardFacil[0][2] = 'O';
                        }else if(id == 'content-4') {
                            boardFacil[1][0] = 'O';
                        }else if(id == 'content-5') {
                            boardFacil[1][1] = 'O';
                        }else if(id == 'content-6') {
                            boardFacil[1][2] = 'O';
                        }else if(id == 'content-7') {
                            boardFacil[2][0] = 'O';
                        }else if(id == 'content-8') {
                            boardFacil[2][1] = 'O';
                        }else if(id == 'content-9') {
                            boardFacil[2][2] = 'O';
                        };
                    };

    
                    if(quad1Medio.innerHTML === 'X' && quad2Medio.innerHTML === 'X' && quad3Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!';

                    }else if(quad1Medio.innerHTML === 'X' && quad5Medio.innerHTML === 'X' && quad9Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!';

                    }else if(quad1Medio.innerHTML === 'X' && quad4Medio.innerHTML === 'X' && quad7Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!';

                    }else {
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    };

                    if(verificarVitoria('O')) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'O VENCEU!';
                    };

                    if(checarEmpate(boardFacil)) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'EMPATE!';
                        txtWin.style.textAlign = 'center';
                    };
            }, 1000);
            };
        };
    });

    // --------------------------------------------------------------------------------------
        
    
    let quad2Medio = document.getElementById('content-2');
    var quadrado2Medio = document.getElementById('content-2');
    
    quadrado2Medio.addEventListener('click', function() {
        if (quadradoSelecionado(quadradosIds[1])) {
            console.log('quadrado já ocupado');
        } else {
            quad2Medio.classList.add('x');
            if (rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad2Medio.innerHTML = 'X';
                quad2Medio.style.cursor = 'not-allowed';
                boardFacil[0][1] = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                
                var numeroSorteado;
                
                do {
                    numeroSorteado = sortearNumeros();
                } while (quadradoSelecionado(quadradosIds[numeroSorteado - 1]));
                
                setTimeout(function() {
                    if(document.getElementById(quadradosIds[numeroSorteado - 1]) !== null) {
                        document.getElementById(quadradosIds[numeroSorteado - 1]).innerHTML = 'O';
                        document.getElementById(quadradosIds[numeroSorteado - 1]).style.cursor = 'not-allowed';
                        document.getElementById(quadradosIds[numeroSorteado - 1]).classList.add('o');

                        var idString = document.getElementById(quadradosIds[numeroSorteado - 1]);
                        const id = idString.getAttribute('id');
    
                        if(id == 'content-1') {
                            boardFacil[0][0] = 'O';
                        }else if(id == 'content-2') {
                            boardFacil[0][1] = 'O';
                        }else if(id == 'content-3') {
                            boardFacil[0][2] = 'O';
                        }else if(id == 'content-4') {
                            boardFacil[1][0] = 'O';
                        }else if(id == 'content-5') {
                            boardFacil[1][1] = 'O';
                        }else if(id == 'content-6') {
                            boardFacil[1][2] = 'O';
                        }else if(id == 'content-7') {
                            boardFacil[2][0] = 'O';
                        }else if(id == 'content-8') {
                            boardFacil[2][1] = 'O';
                        }else if(id == 'content-9') {
                            boardFacil[2][2] = 'O';
                        };
                    };
        
                    if(quad1Medio.innerHTML === 'X' && quad2Medio.innerHTML === 'X' && quad3Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!';
                    }else if(quad2Medio.innerHTML === 'X' && quad5Medio.innerHTML === 'X' && quad8Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!';
                    }else {
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    };

                    if(verificarVitoria('O')) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'O VENCEU!';
                    };

                    if(checarEmpate(boardFacil)) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'EMPATE!';
                        txtWin.style.textAlign = 'center';
                    };
                }, 1000);
            };
        };
    });

    // --------------------------------------------------------------------------------------
    
    let quad3Medio = document.getElementById('content-3');
    var quadrado3Medio = document.getElementById('content-3');

    quadrado3Medio.addEventListener('click', function() {
        if (quadradoSelecionado(quadradosIds[2])) {
            console.log('quadrado já ocupado');
        } else {
            quad3Medio.classList.add('x');
            if (rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad3Medio.innerHTML = 'X';
                quad3Medio.style.cursor = 'not-allowed';
                boardFacil[0][2] = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                
                var numeroSorteado;
                
                do {
                    numeroSorteado = sortearNumeros();
                } while (quadradoSelecionado(quadradosIds[numeroSorteado - 1]));
                
                setTimeout(function() {
                    if(document.getElementById(quadradosIds[numeroSorteado - 1]) !== null) {
                        document.getElementById(quadradosIds[numeroSorteado - 1]).innerHTML = 'O';
                        document.getElementById(quadradosIds[numeroSorteado - 1]).style.cursor = 'not-allowed';
                        document.getElementById(quadradosIds[numeroSorteado - 1]).classList.add('o');

                        var idString = document.getElementById(quadradosIds[numeroSorteado - 1]);
                        const id = idString.getAttribute('id');

                        if(id == 'content-1') {
                            boardFacil[0][0] = 'O';
                        }else if(id == 'content-2') {
                            boardFacil[0][1] = 'O';
                        }else if(id == 'content-3') {
                            boardFacil[0][2] = 'O';
                        }else if(id == 'content-4') {
                            boardFacil[1][0] = 'O';
                        }else if(id == 'content-5') {
                            boardFacil[1][1] = 'O';
                        }else if(id == 'content-6') {
                            boardFacil[1][2] = 'O';
                        }else if(id == 'content-7') {
                            boardFacil[2][0] = 'O';
                        }else if(id == 'content-8') {
                            boardFacil[2][1] = 'O';
                        }else if(id == 'content-9') {
                            boardFacil[2][2] = 'O';
                        };
                    };
                    
                    if(quad1Medio.innerHTML === 'X' && quad2Medio.innerHTML === 'X' && quad3Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!';
                    }else if(quad3Medio.innerHTML === 'X' && quad5Medio.innerHTML === 'X' && quad7Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!';
                    }else if(quad3Medio.innerHTML === 'X' && quad6Medio.innerHTML === 'X' && quad9Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!';
                    }else {
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    };

                    if(verificarVitoria('O')) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'O VENCEU!';
                    };

                    if(checarEmpate(boardFacil)) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'EMPATE!';
                        txtWin.style.textAlign = 'center';
                    };
            }, 1000);
        };
        };
    });

    // --------------------------------------------------------------------------------------
    
    let quad4Medio = document.getElementById('content-4');
    var quadrado4Medio = document.getElementById('content-4');
    
    quadrado4Medio.addEventListener('click', function() {
        if (quadradoSelecionado(quadradosIds[3])) {
            console.log('quadrado já ocupado');
        } else {
            quad4Medio.classList.add('x');
            if (rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad4Medio.innerHTML = 'X';
                quad4Medio.style.cursor = 'not-allowed';
                boardFacil[1][0] = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
            
                var numeroSorteado;
            
                do {
                    numeroSorteado = sortearNumeros();
                } while (quadradoSelecionado(quadradosIds[numeroSorteado - 1]));
            
                setTimeout(function() {
                    if(document.getElementById(quadradosIds[numeroSorteado - 1]) !== null) {
                        document.getElementById(quadradosIds[numeroSorteado - 1]).innerHTML = 'O';
                        document.getElementById(quadradosIds[numeroSorteado - 1]).style.cursor = 'not-allowed';
                        document.getElementById(quadradosIds[numeroSorteado - 1]).classList.add('o');

                        var idString = document.getElementById(quadradosIds[numeroSorteado - 1]);
                        const id = idString.getAttribute('id');
    
                        if(id == 'content-1') {
                            boardFacil[0][0] = 'O';
                        }else if(id == 'content-2') {
                            boardFacil[0][1] = 'O';
                        }else if(id == 'content-3') {
                            boardFacil[0][2] = 'O';
                        }else if(id == 'content-4') {
                            boardFacil[1][0] = 'O';
                        }else if(id == 'content-5') {
                            boardFacil[1][1] = 'O';
                        }else if(id == 'content-6') {
                            boardFacil[1][2] = 'O';
                        }else if(id == 'content-7') {
                            boardFacil[2][0] = 'O';
                        }else if(id == 'content-8') {
                            boardFacil[2][1] = 'O';
                        }else if(id == 'content-9') {
                            boardFacil[2][2] = 'O';
                        };
                    };

                    if(quad4Medio.innerHTML === 'X' && quad5Medio.innerHTML === 'X' && quad6Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!'
                    }else if(quad1Medio.innerHTML === 'X' && quad4Medio.innerHTML === 'X' && quad7Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!'
                    }else {
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    };

                    if(verificarVitoria('O')) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'O VENCEU!';
                    };

                    if(checarEmpate(boardFacil)) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'EMPATE!';
                        txtWin.style.textAlign = 'center';
                    };
                }, 1000);
            };
        };
    });

    // --------------------------------------------------------------------------------------
    
    let quad5Medio = document.getElementById('content-5');
    var quadrado5Medio = document.getElementById('content-5');
    
    quadrado5Medio.addEventListener('click', function() {
        if (quadradoSelecionado(quadradosIds[4])) {
            console.log('quadrado já ocupado');
        } else {
            quad5Medio.classList.add('x');
            if (rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad5Medio.innerHTML = 'X';
                quad5Medio.style.cursor = 'not-allowed';
                boardFacil[1][1] = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
            
                var numeroSorteado;
            
                do {
                    numeroSorteado = sortearNumeros();
                } while (quadradoSelecionado(quadradosIds[numeroSorteado - 1]));
            
                setTimeout(function() {
                    if(document.getElementById(quadradosIds[numeroSorteado - 1]) !== null) {
                        document.getElementById(quadradosIds[numeroSorteado - 1]).innerHTML = 'O';
                        document.getElementById(quadradosIds[numeroSorteado - 1]).style.cursor = 'not-allowed';
                        document.getElementById(quadradosIds[numeroSorteado - 1]).classList.add('o');

                        var idString = document.getElementById(quadradosIds[numeroSorteado - 1]);
                        const id = idString.getAttribute('id');
    
                        if(id == 'content-1') {
                            boardFacil[0][0] = 'O';
                        }else if(id == 'content-2') {
                            boardFacil[0][1] = 'O';
                        }else if(id == 'content-3') {
                            boardFacil[0][2] = 'O';
                        }else if(id == 'content-4') {
                            boardFacil[1][0] = 'O';
                        }else if(id == 'content-5') {
                            boardFacil[1][1] = 'O';
                        }else if(id == 'content-6') {
                            boardFacil[1][2] = 'O';
                        }else if(id == 'content-7') {
                            boardFacil[2][0] = 'O';
                        }else if(id == 'content-8') {
                            boardFacil[2][1] = 'O';
                        }else if(id == 'content-9') {
                            boardFacil[2][2] = 'O';
                        };
                    };

                    if(quad4Medio.innerHTML === 'X' && quad5Medio.innerHTML === 'X' && quad6Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!'
                    }else if(quad1Medio.innerHTML === 'X' && quad5Medio.innerHTML === 'X' && quad9Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!'
                    }else if(quad3Medio.innerHTML === 'X' && quad5Medio.innerHTML === 'X' && quad7Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!'
                    }else if(quad2Medio.innerHTML === 'X' && quad5Medio.innerHTML === 'X' && quad8Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!'
                    }
                    else {
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    };
            
                    if(verificarVitoria('O')) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'O VENCEU!';
                    };

                    if(checarEmpate(boardFacil)) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'EMPATE!';
                        txtWin.style.textAlign = 'center';
                    };
                }, 1000);
            };
        };
    });

    // --------------------------------------------------------------------------------------
    
    
    let quad6Medio = document.getElementById('content-6');
    var quadrado6Medio = document.getElementById('content-6');
    
    quadrado6Medio.addEventListener('click', function() {
        if (quadradoSelecionado(quadradosIds[5])) {
            console.log('quadrado já ocupado');
        } else {
            quad6Medio.classList.add('x');
            if (rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad6Medio.innerHTML = 'X';
                quad6Medio.style.cursor = 'not-allowed';
                boardFacil[1][2] = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
            
                var numeroSorteado;
            
                do {
                    numeroSorteado = sortearNumeros();
                } while (quadradoSelecionado(quadradosIds[numeroSorteado - 1]));
            
                setTimeout(function() {
                    if(document.getElementById(quadradosIds[numeroSorteado - 1]) !== null) {
                        document.getElementById(quadradosIds[numeroSorteado - 1]).innerHTML = 'O';
                        document.getElementById(quadradosIds[numeroSorteado - 1]).style.cursor = 'not-allowed';
                        document.getElementById(quadradosIds[numeroSorteado - 1]).classList.add('o');

                        var idString = document.getElementById(quadradosIds[numeroSorteado - 1]);
                        const id = idString.getAttribute('id');
    
                        if(id == 'content-1') {
                            boardFacil[0][0] = 'O';
                        }else if(id == 'content-2') {
                            boardFacil[0][1] = 'O';
                        }else if(id == 'content-3') {
                            boardFacil[0][2] = 'O';
                        }else if(id == 'content-4') {
                            boardFacil[1][0] = 'O';
                        }else if(id == 'content-5') {
                            boardFacil[1][1] = 'O';
                        }else if(id == 'content-6') {
                            boardFacil[1][2] = 'O';
                        }else if(id == 'content-7') {
                            boardFacil[2][0] = 'O';
                        }else if(id == 'content-8') {
                            boardFacil[2][1] = 'O';
                        }else if(id == 'content-9') {
                            boardFacil[2][2] = 'O';
                        };
                    };

                    if(quad4Medio.innerHTML === 'X' && quad5Medio.innerHTML === 'X' && quad6Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!'
                    }else if(quad3Medio.innerHTML === 'X' && quad6Medio.innerHTML === 'X' && quad9Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!'
                    }
                    else {
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    };
            
                    if(verificarVitoria('O')) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'O VENCEU!';
                    };

                    if(checarEmpate(boardFacil)) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'EMPATE!';
                        txtWin.style.textAlign = 'center';
                    };
                }, 1000);
            };
        };
    });
    
    // --------------------------------------------------------------------------------------
    
    let quad7Medio = document.getElementById('content-7');
    var quadrado7Medio = document.getElementById('content-7');
    
    quadrado7Medio.addEventListener('click', function() {
        if (quadradoSelecionado(quadradosIds[6])) {
            console.log('quadrado já ocupado');
        } else {
            quad7Medio.classList.add('x');
            if (rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad7Medio.innerHTML = 'X';
                quad7Medio.style.cursor = 'not-allowed';
                boardFacil[2][0] = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
            
                var numeroSorteado;
            
                do {
                    numeroSorteado = sortearNumeros();
                } while (quadradoSelecionado(quadradosIds[numeroSorteado - 1]));
            
                setTimeout(function() {
                    if(document.getElementById(quadradosIds[numeroSorteado - 1]) !== null) {
                        document.getElementById(quadradosIds[numeroSorteado - 1]).innerHTML = 'O';
                        document.getElementById(quadradosIds[numeroSorteado - 1]).style.cursor = 'not-allowed';
                        document.getElementById(quadradosIds[numeroSorteado - 1]).classList.add('o');

                        var idString = document.getElementById(quadradosIds[numeroSorteado - 1]);
                        const id = idString.getAttribute('id');
    
                        if(id == 'content-1') {
                            boardFacil[0][0] = 'O';
                        }else if(id == 'content-2') {
                            boardFacil[0][1] = 'O';
                        }else if(id == 'content-3') {
                            boardFacil[0][2] = 'O';
                        }else if(id == 'content-4') {
                            boardFacil[1][0] = 'O';
                        }else if(id == 'content-5') {
                            boardFacil[1][1] = 'O';
                        }else if(id == 'content-6') {
                            boardFacil[1][2] = 'O';
                        }else if(id == 'content-7') {
                            boardFacil[2][0] = 'O';
                        }else if(id == 'content-8') {
                            boardFacil[2][1] = 'O';
                        }else if(id == 'content-9') {
                            boardFacil[2][2] = 'O';
                        };
                    };

                    if(quad7Medio.innerHTML === 'X' && quad8Medio.innerHTML === 'X' && quad9Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!'
                    }else if(quad3Medio.innerHTML === 'X' && quad5Medio.innerHTML === 'X' && quad7Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!'
                    }else if(quad1Medio.innerHTML === 'X' && quad4Medio.innerHTML === 'X' && quad7Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!'
                    }
                    else {
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    };
            
                    if(verificarVitoria('O')) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'O VENCEU!';
                    };
            
                    if(checarEmpate(boardFacil)) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'EMPATE!';
                        txtWin.style.textAlign = 'center';
                    };
                }, 1000);
            };
        };
    });

    // --------------------------------------------------------------------------------------
    
    let quad8Medio = document.getElementById('content-8');
    var quadrado8Medio = document.getElementById('content-8');
    
    quadrado8Medio.addEventListener('click', function() {
        if (quadradoSelecionado(quadradosIds[7])) {
            console.log('quadrado já ocupado');
        } else {
            quad8Medio.classList.add('x');
            if (rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad8Medio.innerHTML = 'X';
                quad8Medio.style.cursor = 'not-allowed';
                boardFacil[2][1] = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
            
                var numeroSorteado;
            
                do {
                    numeroSorteado = sortearNumeros();
                } while (quadradoSelecionado(quadradosIds[numeroSorteado - 1]));
            
                setTimeout(function() {
                    if(document.getElementById(quadradosIds[numeroSorteado - 1]) !== null) {
                        document.getElementById(quadradosIds[numeroSorteado - 1]).innerHTML = 'O';
                        document.getElementById(quadradosIds[numeroSorteado - 1]).style.cursor = 'not-allowed';
                        document.getElementById(quadradosIds[numeroSorteado - 1]).classList.add('o');

                        var idString = document.getElementById(quadradosIds[numeroSorteado - 1]);
                        const id = idString.getAttribute('id');
    
                        if(id == 'content-1') {
                            boardFacil[0][0] = 'O';
                        }else if(id == 'content-2') {
                            boardFacil[0][1] = 'O';
                        }else if(id == 'content-3') {
                            boardFacil[0][2] = 'O';
                        }else if(id == 'content-4') {
                            boardFacil[1][0] = 'O';
                        }else if(id == 'content-5') {
                            boardFacil[1][1] = 'O';
                        }else if(id == 'content-6') {
                            boardFacil[1][2] = 'O';
                        }else if(id == 'content-7') {
                            boardFacil[2][0] = 'O';
                        }else if(id == 'content-8') {
                            boardFacil[2][1] = 'O';
                        }else if(id == 'content-9') {
                            boardFacil[2][2] = 'O';
                        };
                    };

                    if(quad7Medio.innerHTML === 'X' && quad8Medio.innerHTML === 'X' && quad9Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!'
                    }else if(quad2Medio.innerHTML === 'X' && quad5Medio.innerHTML === 'X' && quad8Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!'
                    }
                    else {
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    };
            
                    if(verificarVitoria('O')) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'O VENCEU!';
                    };
                    
                    if(checarEmpate(boardFacil)) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'EMPATE!';
                        txtWin.style.textAlign = 'center';
                    };
                }, 1000);
            };
        };
    });

    // -------------------------------------------------------------------------------------- 
    
    let quad9Medio = document.getElementById('content-9');
    var quadrado9Medio = document.getElementById('content-9');
    
    quadrado9Medio.addEventListener('click', function() {
        if (quadradoSelecionado(quadradosIds[8])) {
            console.log('quadrado já ocupado');
        } else {
            quad9Medio.classList.add('x');
            if (rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad9Medio.innerHTML = 'X';
                quad9Medio.style.cursor = 'not-allowed';
                boardFacil[2][2] = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
            
                var numeroSorteado;
            
                do {
                    numeroSorteado = sortearNumeros();
                } while (quadradoSelecionado(quadradosIds[numeroSorteado - 1]));
            
                setTimeout(function() {
                    if(document.getElementById(quadradosIds[numeroSorteado - 1]) !== null) {
                        document.getElementById(quadradosIds[numeroSorteado - 1]).innerHTML = 'O';
                        document.getElementById(quadradosIds[numeroSorteado - 1]).style.cursor = 'not-allowed';
                        document.getElementById(quadradosIds[numeroSorteado - 1]).classList.add('o');

                        var idString = document.getElementById(quadradosIds[numeroSorteado - 1]);
                        const id = idString.getAttribute('id');

                        if(id == 'content-1') {
                            boardFacil[0][0] = 'O';
                        }else if(id == 'content-2') {
                            boardFacil[0][1] = 'O';
                        }else if(id == 'content-3') {
                            boardFacil[0][2] = 'O';
                        }else if(id == 'content-4') {
                            boardFacil[1][0] = 'O';
                        }else if(id == 'content-5') {
                            boardFacil[1][1] = 'O';
                        }else if(id == 'content-6') {
                            boardFacil[1][2] = 'O';
                        }else if(id == 'content-7') {
                            boardFacil[2][0] = 'O';
                        }else if(id == 'content-8') {
                            boardFacil[2][1] = 'O';
                        }else if(id == 'content-9') {
                            boardFacil[2][2] = 'O';
                        };
                    };

                    if(quad7Medio.innerHTML === 'X' && quad8Medio.innerHTML === 'X' && quad9Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!'
                    }else if(quad1Medio.innerHTML === 'X' && quad5Medio.innerHTML === 'X' && quad9Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!'
                    }else if(quad3Medio.innerHTML === 'X' && quad6Medio.innerHTML === 'X' && quad9Medio.innerHTML === 'X') {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'X VENCEU!'
                    }
                    else {
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    };

                    if(verificarVitoria('O')) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'O VENCEU!';
                    };

                    if(checarEmpate(boardFacil)) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'EMPATE!';
                        txtWin.style.textAlign = 'center';
                    };
                }, 1000);
            };
        };
    });
});


btModoDificil.addEventListener('click', function() {

    modoSelecionadoTxt.innerHTML = 'MODO SELECIONADO: DIFICIL';

    btModoContraSi.disabled = true;
    btModoFacil.disabled = true;
    btModoDificil.disabled = true;

    btRestartJg.addEventListener('click', function() {
        location.reload();
    });

    var board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    function checarVitoria(board, player) {
        for(let row = 0; row < 3; row++) {
            if(board[row][0] === player && board[row][1] === player && board[row][2] === player) {
                return true;
            };
        };

        for(let col = 0; col < 3; col++) {
            if(board[col][0] === player && board[col][1] === player && board[col][2] === player) {
                return true;
            };
        };

        if(board[0][0] === player && board[1][1] === player && board[2][2] === player) {
            return true;
        };

        if(board[0][2] === player && board[1][1] === player && board[2][0] === player) {
            return true;
        };

        if(board[0][1] === player && board[1][1] === player && board[2][1] === player) {
            return true;
        };

        if(board[0][2] === player && board[1][1] === player && board[2][0] === player) {
            return true;
        };

        return false;
    };


    function checkImmediateWin(board, player) {
        for (let row = 0; row < 3; row++) {
            if (board[row][0] === player && board[row][1] === player && board[row][2] === '') {
                return [row, 2];
            };
            if (board[row][0] === player && board[row][2] === player && board[row][1] === '') {
                return [row, 1];
            };
            if (board[row][1] === player && board[row][2] === player && board[row][0] === '') {
                return [row, 0];
            };
        };
  
        for (let col = 0; col < 3; col++) {
            if (board[0][col] === player && board[1][col] === player && board[2][col] === '') {
                return [2, col];
            }
            if (board[0][col] === player && board[2][col] === player && board[1][col] === '') {
                return [1, col];
            }
            if (board[1][col] === player && board[2][col] === player && board[0][col] === '') {
                return [0, col];
            };
        };
  
        if (board[0][0] === player && board[1][1] === player && board[2][2] === '') {
            return [2, 2];
        };
        if (board[0][0] === player && board[2][2] === player && board[1][1] === '') {
            return [1, 1];
        };
        if (board[1][1] === player && board[2][2] === player && board[0][0] === '') {
            return [0, 0];
        };

    
        if (board[0][2] === player && board[1][1] === player && board[2][0] === '') {
            return [2, 0];
        };
        if (board[0][2] === player && board[2][0] === player && board[1][1] === '') {
            return [1, 1];
        };
        if (board[1][1] === player && board[2][0] === player && board[0][2] === '') {
            return [0, 2];
        };
    
        return null;
    };
  
    function checkPlayerWin(board) {
        for (let row = 0; row < 3; row++) {
            if (board[row][0] === 'X' && board[row][1] === 'X' && board[row][2] === '') {
                return [row, 2];
            };
            if (board[row][0] === 'X' && board[row][2] === 'X' && board[row][1] === '') {
                return [row, 1];
            };
            if (board[row][1] === 'X' && board[row][2] === 'X' && board[row][0] === '') {
                return [row, 0];
            };
        };
    
        for (let col = 0; col < 3; col++) {
            if (board[0][col] === 'X' && board[1][col] === 'X' && board[2][col] === '') {
                return [2, col];
            };
            if (board[0][col] === 'X' && board[2][col] === 'X' && board[1][col] === '') {
                return [1, col];
            };
            if (board[1][col] === 'X' && board[2][col] === 'X' && board[0][col] === '') {
                return [0, col];
            };
        };
  
        if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === '') {
            return [2, 2];
        };
        if (board[0][0] === 'X' && board[2][2] === 'X' && board[1][1] === '') {
            return [1, 1];
        };
        if (board[1][1] === 'X' && board[2][2] === 'X' && board[0][0] === '') {
        return [0, 0];
        };
    
        if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === '') {
            return [2, 0];
        };
        if (board[0][2] === 'X' && board[2][0] === 'X' && board[1][1] === '') {
            return [1, 1];
        };
        if (board[1][1] === 'X' && board[2][0] === 'X' && board[0][2] === '') {
            return [0, 2];
        };
    
        return null;
    };
  
    function makeRandomMove(board) {

        const emptyPositions = [];
        
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (board[row][col] === '') {
                    emptyPositions.push([row, col]);
                };
            };
        };
        const randomIndex = Math.floor(Math.random() * emptyPositions.length);
        return emptyPositions[randomIndex];
    };
  
    function makeComputerMove(board) {
        const computerWinMove = checkImmediateWin(board, 'O');
        if (computerWinMove) {
            return computerWinMove;
        };

        const playerWinMove = checkPlayerWin(board);
        if (playerWinMove) {
            return playerWinMove;
        };

        return makeRandomMove(board);
    };

    var quadrado1Dificil = document.getElementById('content-1');
    var quad1Dificil = document.getElementById('content-1');
        
    quadrado1Dificil.addEventListener('click', function() {
        if(quad1Dificil.innerHTML === 'X' || quad1Dificil.innerHTML === 'O') {
            console.log('quadrado ocupado');
        }else{
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quadrado1Dificil.classList.add('x');
                quad1Dificil.style.cursor = 'not-allowed';
                quad1Dificil.innerHTML = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';

                board[0][0] = 'X';

               if(checarVitoria(board, 'X')) {
                setTimeout(function() {
                    telaWin.style.display = 'flex';
                }, 500);
                txtWin.innerHTML = 'X VENCEU!';
               }else {
                if(checarEmpate(board)) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'EMPATE!';
                    txtWin.style.textAlign = 'center';
                }else {
                    setTimeout(function() {
                        var computerMove = makeComputerMove(board);
                        var [row, col] = computerMove;
                        var computerSquare = document.getElementById('content-' + (row * 3 + col + 1));
    
                        board[row][col] = 'O';
                        computerSquare.classList.add('o');
                        computerSquare.style.cursor = 'not-allowed';
                        computerSquare.innerHTML = 'O';
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';
    
                        if(checarVitoria(board, 'O')) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'O VENCEU!';
                        };
                    }, 1000);
                };
               };
            };
        };
    });       

    var quadrado2Dificil = document.getElementById('content-2');
    var quad2Dificil = document.getElementById('content-2');

    quadrado2Dificil.addEventListener('click', function() {
        if(quad2Dificil.innerHTML === 'X' || quad2Dificil.innerHTML === 'O') {
            console.log('quadrado ocupado');
        }else {
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad2Dificil.classList.add('x');
                quad2Dificil.innerHTML = 'X';
                quad2Dificil.style.cursor = 'not-allowed';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
    
                board[0][1] = 'X';

                if(checarVitoria(board, 'X')) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                }else {
                    if(checarEmpate(board)) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'EMPATE!'
                        txtWin.style.textAlign = 'center';
                    }else{
                        setTimeout(function() {
                            const computerMove = makeComputerMove(board);
                            const [row, col] = computerMove;
                            const computerSquare = document.getElementById('content-' + (row * 3 + col + 1));
        
                            
                            board[row][col] = 'O';
                            computerSquare.classList.add('o');
                            computerSquare.style.cursor = 'not-allowed';
                            computerSquare.innerHTML = 'O';
                            rodada.innerHTML = 'VEZ DE: JOGADOR 1';
    
                            if(checarVitoria(board, 'O')) {
                                setTimeout(function() {
                                    telaWin.style.display = 'flex';
                                }, 500);
                                txtWin.innerHTML = 'O VENCEU!';
                            };
                        }, 1000);
                    };
                };
            };
        };
    });

    var quadrado3Dificil = document.getElementById('content-3');
    var quad3Dificil = document.getElementById('content-3');

    quadrado3Dificil.addEventListener('click', function() {
        if(quad3Dificil.innerHTML === 'X' || quad3Dificil.innerHTML === 'O') {
            console.log('quadrado ocupado');
        }else {
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad3Dificil.classList.add('x');
                quad3Dificil.innerHTML = 'X';
                quad3Dificil.style.cursor = 'not-allowed';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
    
                board[0][2] = 'X';

                if(checarVitoria(board, 'X')) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                }else {
                    if(checarEmpate(board)) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'EMPATE!';
                        txtWin.style.textAlign = 'center';
                    }else {
                        setTimeout(function() {
                        const computerMove = makeComputerMove(board);
                        const [row, col] = computerMove;
                        const computerSquare = document.getElementById('content-' + (row * 3 + col + 1));
                        
                        board[row][col] = 'O';
                        computerSquare.classList.add('o');
                        computerSquare.style.cursor = 'not-allowed';
                        computerSquare.innerHTML = 'O';
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';

                        if(checarVitoria(board, 'O')) {
                            setTimeout(function() {
                                telaWin.style.display = 'flex';
                            }, 500);
                            txtWin.innerHTML = 'O VENCEU!';
                        };
                    }, 1000);
                };
                };
            };
        };
    });

    var quadrado4Dificil = document.getElementById('content-4');
    var quad4Dificil = document.getElementById('content-4');

    quadrado4Dificil.addEventListener('click', function() {
        if(quad4Dificil.innerHTML === 'X' || quad4Dificil.innerHTML === 'O') {
            console.log('quadrado ocupado');
        }else {
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad4Dificil.classList.add('x');
                quad4Dificil.innerHTML = 'X';
                quad4Dificil.style.cursor = 'not-allowed';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';

                board[1][0] = 'X';

                if(checarVitoria(board, 'X')) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                }else {
                    if(checarEmpate(board)) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'EMPATE!';
                        txtWin.style.textAlign = 'center';
                    }else {
                        setTimeout(function() {
                        const computerMove = makeComputerMove(board);
                        const [row, col] = computerMove;
                        const computerSquare = document.getElementById('content-' + (row * 3 + col + 1));
                        
                        board[row][col] = 'O';
                        computerSquare.classList.add('o');
                        computerSquare.style.cursor = 'not-allowed';
                        computerSquare.innerHTML = 'O';
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';

                        if(checarVitoria(board, 'O')) {
                            setTimeout(function() {
                                telaWin.style.display = 'flex';
                            }, 500);
                            txtWin.innerHTML = 'O VENCEU!';
                        };
                    }, 1000);
                };
                };
            };
        };
    });

    var quadrado5Dificil = document.getElementById('content-5');
    var quad5Dificil = document.getElementById('content-5');

    quadrado5Dificil.addEventListener('click', function() {
        if(quad5Dificil.innerHTML === 'X' || quad5Dificil.innerHTML === 'O') {
            console.log('quadrado ocupado');
        }else {
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad5Dificil.classList.add('x');
                quad5Dificil.innerHTML = 'X';
                quad5Dificil.style.cursor = 'not-allowed';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';

                board[1][1] = 'X';

                if(checarVitoria(board, 'X')) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                }else {
                    if(checarEmpate(board)) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'EMPATE!';
                        txtWin.style.textAlign = 'center';
                    }else {
                        setTimeout(function() {
                        const computerMove = makeComputerMove(board);
                        const [row, col] = computerMove;
                        const computerSquare = document.getElementById('content-' + (row * 3 + col + 1));
                        
                        board[row][col] = 'O';
                        computerSquare.classList.add('o');
                        computerSquare.style.cursor = 'not-allowed';
                        computerSquare.innerHTML = 'O';
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';

                        if(checarVitoria(board, 'O')) {
                            setTimeout(function() {
                                telaWin.style.display = 'flex';
                            }, 500);
                            txtWin.innerHTML = 'O VENCEU!';
                        };
                    }, 1000);
                };
                };
            };
        };
    });

    var quadrado6Dificil = document.getElementById('content-6');
    var quad6Dificil = document.getElementById('content-6');

    quadrado6Dificil.addEventListener('click', function() {
        if(quad6Dificil.innerHTML === 'X' || quad6Dificil.innerHTML === 'O') {
            console.log('quadrado ocupado');
        }else {
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad6Dificil.classList.add('x');
                quad6Dificil.innerHTML = 'X';
                quad6Dificil.style.cursor = 'not-allowed';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';

                board[1][2] = 'X';

                if(checarVitoria(board, 'X')) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                }else {
                    if(checarEmpate(board)) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'EMPATE!';
                        txtWin.style.textAlign = 'center';
                    }else {
                        setTimeout(function() {
                        const computerMove = makeComputerMove(board);
                        const [row, col] = computerMove;
                        const computerSquare = document.getElementById('content-' + (row * 3 + col + 1));
                        
                        board[row][col] = 'O';
                        computerSquare.classList.add('o');
                        computerSquare.style.cursor = 'not-allowed';
                        computerSquare.innerHTML = 'O';
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';

                        if(checarVitoria(board, 'O')) {
                            setTimeout(function() {
                                telaWin.style.display = 'flex';
                            }, 500);
                            txtWin.innerHTML = 'O VENCEU!';
                        };
                    }, 1000);
                };
                };
            };
        };
    });

    var quadrado7Dificil = document.getElementById('content-7');
    var quad7Dificil = document.getElementById('content-7');

    quadrado7Dificil.addEventListener('click', function() {
        if(quad7Dificil.innerHTML === 'X' || quad7Dificil.innerHTML === 'O') {
            console.log('quadrado ocupado');
        }else {
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad7Dificil.classList.add('x');
                quad7Dificil.innerHTML = 'X';
                quad7Dificil.style.cursor = 'not-allowed';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';

                board[2][0] = 'X';

                if(checarVitoria(board, 'x')) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                }else {
                    if(checarEmpate(board)) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'EMPATE!';
                        txtWin.style.textAlign = 'center';
                    }else {
                        setTimeout(function() {
                        const computerMove = makeComputerMove(board);
                        const [row, col] = computerMove;
                        const computerSquare = document.getElementById('content-' + (row * 3 + col + 1));
                        
                        board[row][col] = 'O';
                        computerSquare.classList.add('o');
                        computerSquare.style.cursor = 'not-allowed';
                        computerSquare.innerHTML = 'O';
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';

                        if(checarVitoria(board, 'O')) {
                            setTimeout(function() {
                                telaWin.style.display = 'flex';
                            }, 500);
                            txtWin.innerHTML = 'O VENCEU!';
                        };
                    }, 1000);
                };
                };
            };
        };
    });

    var quadrado8Dificil = document.getElementById('content-8');
    var quad8Dificil = document.getElementById('content-8');

    quadrado8Dificil.addEventListener('click', function() {
        if(quad8Dificil.innerHTML === 'X' || quad8Dificil.innerHTML === 'O') {
            console.log('quadrado ocupado');
        }else {
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad8Dificil.classList.add('x');
                quad8Dificil.innerHTML = 'X';
                quad8Dificil.style.cursor = 'not-allowed';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';

                board[2][1] = 'X';

                if(checarVitoria(board, 'X')) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                }else {
                    if(checarEmpate(board)) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'EMPATE!';
                        txtWin.style.textAlign = 'center';
                    }else {
                        setTimeout(function() {
                        const computerMove = makeComputerMove(board);
                        const [row, col] = computerMove;
                        const computerSquare = document.getElementById('content-' + (row * 3 + col + 1));
                        
                        board[row][col] = 'O';
                        computerSquare.classList.add('o');
                        computerSquare.style.cursor = 'not-allowed';
                        computerSquare.innerHTML = 'O';
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';

                        if(checarVitoria(board, 'O')) {
                            setTimeout(function() {
                                telaWin.style.display = 'flex';
                            }, 500);
                            txtWin.innerHTML = 'O VENCEU!';
                        };
                    }, 1000);
                };
                };
            };
        };
    });

    var quadrado9Dificil = document.getElementById('content-9');
    var quad9Dificil = document.getElementById('content-9');

    quadrado9Dificil.addEventListener('click', function() {
        if(quad9Dificil.innerHTML === 'X' || quad9Dificil.innerHTML === 'O') {
            console.log('quadrado ocupado');
        }else {
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad9Dificil.classList.add('x');
                quad9Dificil.innerHTML = 'X';
                quad9Dificil.style.cursor = 'not-allowed';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';

                board[2][2] = 'X';

                if(checarVitoria(board, 'X')) {
                    setTimeout(function() {
                        telaWin.style.display = 'flex';
                    }, 500);
                    txtWin.innerHTML = 'X VENCEU!';
                }else {
                    if(checarEmpate(board)) {
                        setTimeout(function() {
                            telaWin.style.display = 'flex';
                        }, 500);
                        txtWin.innerHTML = 'EMPATE!';
                        txtWin.style.textAlign = 'center';
                    }else {
                        setTimeout(function() {
                        const computerMove = makeComputerMove(board);
                        const [row, col] = computerMove;
                        const computerSquare = document.getElementById('content-' + (row * 3 + col + 1));
                        
                        board[row][col] = 'O';
                        computerSquare.classList.add('o');
                        computerSquare.style.cursor = 'not-allowed';
                        computerSquare.innerHTML = 'O';
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';

                        if(checarVitoria(board, 'O')) {
                            setTimeout(function() {
                                telaWin.style.display = 'flex';
                            }, 500);
                            txtWin.innerHTML = 'O VENCEU!';
                        };
                    }, 1000);
                };
                };
            };
        };
    });
});
