var rodada = document.getElementById('h1-rodada');

var dificuldades = document.getElementById('select-dificuldades');
var dificuldadeSiMesmo = document.getElementById('modo-jogar-contra-si');
var dificuldadeMedio = document.getElementById('modo-medio');
var dificuldadeDificil = document.getElementById('modo-dificil');
var dificuldadeImpossivel = document.getElementById('modo-impossivel');





dificuldades.addEventListener('change', function() {

    var opcaoSelecionada = dificuldades.options[dificuldades.selectedIndex];

    if(opcaoSelecionada.id === 'modo-jogar-contra-si') {
        let quad1 = document.getElementById('content-1');
    // let quad2 = document.getElementById('content-2');
    // let quad3 = document.getElementById('content-3');
    // let quad4 = document.getElementById('content-4');
    // let quad5 = document.getElementById('content-5');
    // let quad6 = document.getElementById('content-6');
    // let quad7 = document.getElementById('content-7');
    // let quad8 = document.getElementById('content-8');
    // let quad9 = document.getElementById('content-9');


    var quadrado1 = document.getElementById('content-1');

    quadrado1.addEventListener('click', function() {
        if(quadrado1.classList.contains('x') || quadrado1.classList.contains('o')) {
            console.log('quadrado ja ocupado-1');
        } else {
            quadrado1.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad1.innerHTML = 'X';


                if(quadrado5.innerHTML === 'X' && quadrado1.innerHTML === 'X' && quadrado9.innerHTML === 'X') {
                    alert('GG-1-5-9_3')
                };
                if(quadrado1.innerHTML === 'X' && quadrado2.innerHTML === 'X' && quadrado3.innerHTML === 'X') {
                    alert('GG-1-2-3_1');
                };
                if(quadrado1.innerHTML === 'X' && quadrado4.innerHTML === 'X' && quadrado7.innerHTML === 'X'){
                    alert('GG-1-4-7_1');
                };


                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                console.log('marcado como X-1');
            } else if(rodada.innerHTML === 'VEZ DE: JOGADOR 2') {
                quad1.innerHTML = 'O';


                if(quadrado1.innerHTML === 'O' && quadrado4.innerHTML === 'O' && quadrado7.innerHTML === 'O'){
                    alert('GG-1-4-7_1');
                };
                if(quadrado5.innerHTML === 'O' && quadrado1.innerHTML === 'O' && quadrado9.innerHTML === 'O') {
                    alert('GG-1-5-9_3')
                };
                if(quadrado1.innerHTML === 'O' && quadrado2.innerHTML === 'O' && quadrado3.innerHTML === 'O') {
                    alert('GG-1-2-3_1');
                };


                rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                console.log('marcado como O-1');
                quadrado1.classList.add('o');
            };
        };
    });
    quad1.style.fontSize = '70px';


    // --------------------------------------------------------------------------------------
    // let quad1 = document.getElementById('content-1');
    let quad2 = document.getElementById('content-2');
    // let quad3 = document.getElementById('content-3');
    // let quad4 = document.getElementById('content-4');
    // let quad5 = document.getElementById('content-5');
    // let quad6 = document.getElementById('content-6');
    // let quad7 = document.getElementById('content-7');
    // let quad8 = document.getElementById('content-8');
    // let quad9 = document.getElementById('content-9');


    var quadrado2 = document.getElementById('content-2');

    quadrado2.addEventListener('click', function() {
        if(quadrado2.classList.contains('x') || quadrado2.classList.contains('o')) {
            console.log('quadrado ja ocupado-2');
        }else {
            quadrado2.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad2.innerHTML = 'X';


                if(quadrado1.innerHTML === 'X' && quadrado2.innerHTML === 'X' && quadrado3.innerHTML === 'X') {
                    alert('GG-1-2-3_2');
                };
                if(quadrado2.innerHTML === 'X' && quadrado5.innerHTML === 'X' && quadrado8.innerHTML === 'X') {
                    alert('GG-2-5-8_1');
                };


                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                console.log('marcado como X-2');
            }else if(rodada.innerHTML === 'VEZ DE: JOGADOR 2') {
                quad2.innerHTML = 'O';


                if(quadrado1.innerHTML === 'O' && quadrado2.innerHTML === 'O' && quadrado3.innerHTML === 'O') {
                    alert('GG-1-2-3_2');
                };
                if(quadrado2.innerHTML === 'O' && quadrado5.innerHTML === 'O' && quadrado8.innerHTML === 'O') {
                    alert('GG-2-5-8_1');
                };


                rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                console.log('marcado como O-2');
                quadrado2.classList.add('o');
            };
        };
    });
    quad2.style.fontSize = '70px';


    // --------------------------------------------------------------------------------------
    // let quad1 = document.getElementById('content-1');
    // let quad2 = document.getElementById('content-2');
    let quad3 = document.getElementById('content-3');
    // let quad4 = document.getElementById('content-4');
    // let quad5 = document.getElementById('content-5');
    // let quad6 = document.getElementById('content-6');
    // let quad7 = document.getElementById('content-7');
    // let quad8 = document.getElementById('content-8');
    // let quad9 = document.getElementById('content-9');

    var quadrado3 = document.getElementById('content-3');

    quadrado3.addEventListener('click', function() {
        if(quadrado3.classList.contains('x') || quadrado3.classList.contains('o')) {
            console.log('quadrado ja ocupado-3');
        }else {
            quadrado3.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad3.innerHTML = 'X';


                if(quadrado7.innerHTML === 'X' && quadrado5.innerHTML === 'X' && quadrado3.innerHTML === 'X') {
                    alert('GG-7-5-3_3');
                };
                if(quadrado1.innerHTML === 'X' && quadrado2.innerHTML === 'X' && quadrado3.innerHTML === 'X') {
                    alert('GG-1-2-3_3');
                };
                if(quadrado3.innerHTML === 'X' && quadrado6.innerHTML === 'X' && quadrado9.innerHTML === 'X') {
                    alert('GG-3-6-9_1');
                };


                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                console.log('marcado como X-3');
            }else if(rodada.innerHTML === 'VEZ DE: JOGADOR 2') {
                quad3.innerHTML = 'O';


                if(quadrado7.innerHTML === 'O' && quadrado5.innerHTML === 'O' && quadrado3.innerHTML === 'O') {
                    alert('GG-7-5-3_3');
                };
                if(quadrado1.innerHTML === 'O' && quadrado2.innerHTML === 'O' && quadrado3.innerHTML === 'O') {
                    alert('GG-1-2-3_3');
                };
                if(quadrado3.innerHTML === 'O' && quadrado6.innerHTML === 'O' && quadrado9.innerHTML === 'O') {
                    alert('GG-3-6-9_1');
                };


                rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                console.log('marcado como O-3');
                quadrado3.classList.add('o');
            };
        };
    });
    quad3.style.fontSize = '70px';


    // --------------------------------------------------------------------------------------
    // let quad1 = document.getElementById('content-1');
    // let quad2 = document.getElementById('content-2');
    // let quad3 = document.getElementById('content-3');
    let quad4 = document.getElementById('content-4');
    // let quad5 = document.getElementById('content-5');
    // let quad6 = document.getElementById('content-6');
    // let quad7 = document.getElementById('content-7');
    // let quad8 = document.getElementById('content-8');
    // let quad9 = document.getElementById('content-9');

    var quadrado4 = document.getElementById('content-4');

    quadrado4.addEventListener('click', function() {
        if(quadrado4.classList.contains('x') || quadrado4.classList.contains('o')) {
            console.log('quadrado ja ocupado-4');
        }else {
            quadrado4.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad4.innerHTML = 'X';


                if(quadrado4.innerHTML === 'X' && quadrado5.innerHTML === 'X' && quadrado6.innerHTML === 'X') {
                    alert('GG-4-5-6_1');
                };
                if(quadrado1.innerHTML === 'X' && quadrado4.innerHTML === 'X' && quadrado7.innerHTML === 'X'){
                    alert('GG-1-4-7_2');
                };


                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                console.log('marcado como X-4');
            }else if(rodada.innerHTML === 'VEZ DE: JOGADOR 2') {
                quad4.innerHTML = 'O';


                if(quadrado4.innerHTML === 'O' && quadrado5.innerHTML === 'O' && quadrado6.innerHTML === 'O') {
                    alert('GG-4-5-6_1');
                };
                if(quadrado1.innerHTML === 'O' && quadrado4.innerHTML === 'O' && quadrado7.innerHTML === 'O'){
                    alert('GG-1-4-7_2');
                };


                rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                console.log('marcado como O-4');
                quadrado4.classList.add('o');
            };
        };
    });
    quad4.style.fontSize = '70px';


    // --------------------------------------------------------------------------------------
    // let quad1 = document.getElementById('content-1');
    // let quad2 = document.getElementById('content-2');
    // let quad3 = document.getElementById('content-3');
    // let quad4 = document.getElementById('content-4');
    let quad5 = document.getElementById('content-5');
    // let quad6 = document.getElementById('content-6');
    // let quad7 = document.getElementById('content-7');
    // let quad8 = document.getElementById('content-8');
    // let quad9 = document.getElementById('content-9');

    var quadrado5 = document.getElementById('content-5');

    quadrado5.addEventListener('click', function() {
        if(quadrado5.classList.contains('x') || quadrado5.classList.contains('o')) {
            console.log('quadrado ja ocupado-5');
        }else {
            quadrado5.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1'){
                quad5.innerHTML = 'X';

                if(quadrado5.innerHTML === 'X' && quadrado1.innerHTML === 'X' && quadrado9.innerHTML === 'X') {
                    alert('GG-1-5-9_2')
                };
                if(quadrado7.innerHTML === 'X' && quadrado5.innerHTML === 'X' && quadrado3.innerHTML === 'X') {
                    alert('GG-7-5-3_2');
                };
                if(quadrado4.innerHTML === 'X' && quadrado5.innerHTML === 'X' && quadrado6.innerHTML === 'X') {
                    alert('GG-4-5-6_2');
                };
                if(quadrado2.innerHTML === 'X' && quadrado5.innerHTML === 'X' && quadrado8.innerHTML === 'X') {
                    alert('GG-2-5-8_2');
                };


                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                console.log('marcado como X-5');
            }else if(rodada.innerHTML === 'VEZ DE: JOGADOR 2') {
                quad5.innerHTML = 'O';


                if(quadrado5.innerHTML === 'O' && quadrado1.innerHTML === 'O' && quadrado9.innerHTML === 'O') {
                    alert('GG-1-5-9_2')
                };
                if(quadrado7.innerHTML === 'O' && quadrado5.innerHTML === 'O' && quadrado3.innerHTML === 'O') {
                    alert('GG-7-5-3_2');
                };
                if(quadrado4.innerHTML === 'O' && quadrado5.innerHTML === 'O' && quadrado6.innerHTML === 'O') {
                    alert('GG-4-5-6_2');
                };
                if(quadrado2.innerHTML === 'O' && quadrado5.innerHTML === 'O' && quadrado8.innerHTML === 'O') {
                    alert('GG-2-5-8_2');
                };


                rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                console.log('marcado como O-5');
                quadrado5.classList.add('o');
            };
        };
    });
    quad5.style.fontSize = '70px';


    // --------------------------------------------------------------------------------------
    // let quad1 = document.getElementById('content-1');
    // let quad2 = document.getElementById('content-2');
    // let quad3 = document.getElementById('content-3');
    // let quad4 = document.getElementById('content-4');
    // let quad5 = document.getElementById('content-5');
    let quad6 = document.getElementById('content-6');
    // let quad7 = document.getElementById('content-7');
    // let quad8 = document.getElementById('content-8');
    // let quad9 = document.getElementById('content-9');

    var quadrado6 = document.getElementById('content-6');

    quadrado6.addEventListener('click', function() {
        if(quadrado6.classList.contains('x') || quadrado6.classList.contains('o')) {
            console.log('quadrado ja ocupado-6');
        }else {
            quadrado6.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad6.innerHTML = 'X';


                if(quadrado4.innerHTML === 'X' && quadrado5.innerHTML === 'X' && quadrado6.innerHTML === 'X') {
                    alert('GG-4-5-6_3');
                };
                if(quadrado3.innerHTML === 'X' && quadrado6.innerHTML === 'X' && quadrado9.innerHTML === 'X') {
                    alert('GG-3-6-9_2');
                };


                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                console.log('marcado como X-6');
            }else if(rodada.innerHTML === 'VEZ DE: JOGADOR 2') {
                quad6.innerHTML = 'O';


                if(quadrado4.innerHTML === 'O' && quadrado5.innerHTML === 'O' && quadrado6.innerHTML === 'O') {
                    alert('GG-4-5-6_3');
                };
                if(quadrado3.innerHTML === 'O' && quadrado6.innerHTML === 'O' && quadrado9.innerHTML === 'O') {
                    alert('GG-3-6-9_2');
                };


                rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                console.log('marcado como O-6');
                quadrado6.classList.add('o');
            };
        };
    });
    quad6.style.fontSize = '70px';


    // --------------------------------------------------------------------------------------
    // let quad1 = document.getElementById('content-1');
    // let quad2 = document.getElementById('content-2');
    // let quad3 = document.getElementById('content-3');
    // let quad4 = document.getElementById('content-4');
    // let quad5 = document.getElementById('content-5');
    // let quad6 = document.getElementById('content-6');
    let quad7 = document.getElementById('content-7');
    // let quad8 = document.getElementById('content-8');
    // let quad9 = document.getElementById('content-9');

    var quadrado7 = document.getElementById('content-7');

    quadrado7.addEventListener('click', function() {
        if(quadrado7.classList.contains('x') || quadrado7.classList.contains('o')) {
            console.log('quadrado ja ocupado-7');
        }else {
            quadrado7.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad7.innerHTML = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';


                if(quadrado9.innerHTML === 'X' && quadrado8.innerHTML === 'X' && quadrado7.innerHTML === 'X') {
                    alert('GG-7-8-9_3');
                };
                if(quadrado7.innerHTML === 'X' && quadrado5.innerHTML === 'X' && quadrado3.innerHTML === 'X') {
                    alert('GG-7-5-3_1');
                };
                if(quadrado1.innerHTML === 'X' && quadrado4.innerHTML === 'X' && quadrado7.innerHTML === 'X'){
                    alert('GG-1-4-7_3');
                };


                console.log('marcado como X-7')
            }else if(rodada.innerHTML === 'VEZ DE: JOGADOR 2') {
                quad7.innerHTML = 'O';


                if(quadrado9.innerHTML === 'O' && quadrado8.innerHTML === 'O' && quadrado7.innerHTML === 'O') {
                    alert('GG-7-8-9_3');
                };
                if(quadrado7.innerHTML === 'O' && quadrado5.innerHTML === 'O' && quadrado3.innerHTML === 'O') {
                    alert('GG-7-5-3_1');
                };
                if(quadrado1.innerHTML === 'O' && quadrado4.innerHTML === 'O' && quadrado7.innerHTML === 'O'){
                    alert('GG-1-4-7_3');
                };


                rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                console.log('marcado como O-7');
                quadrado7.classList.add('o');
            };
        };
    });
    quad7.style.fontSize = '70px';


    // --------------------------------------------------------------------------------------
    // let quad1 = document.getElementById('content-1');
    // let quad2 = document.getElementById('content-2');
    // let quad3 = document.getElementById('content-3');
    // let quad4 = document.getElementById('content-4');
    // let quad5 = document.getElementById('content-5');
    // let quad6 = document.getElementById('content-6');
    // let quad7 = document.getElementById('content-7');
    let quad8 = document.getElementById('content-8');
    // let quad9 = document.getElementById('content-9');

    var quadrado8 = document.getElementById('content-8');

    quadrado8.addEventListener('click', function() {
        if(quadrado8.classList.contains('x') || quadrado8.classList.contains('o')) {
            console.log('quadrado ja ocupado-8');
        }else {
            quadrado8.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad8.innerHTML = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';


                if(quadrado7.innerHTML === 'X' && quadrado9.innerHTML === 'X' && quadrado8.innerHTML === 'X') {
                    alert('GG-7-8-9_2');
                };
                if(quadrado2.innerHTML === 'X' && quadrado5.innerHTML === 'X' && quadrado8.innerHTML === 'X') {
                    alert('GG-2-5-8_1');
                };


                console.log('marcado como X-8');
            }else if(rodada.innerHTML === 'VEZ DE: JOGADOR 2') {
                quad8.innerHTML = 'O';


                if(quadrado7.innerHTML === 'O' && quadrado9.innerHTML === 'O' && quadrado8.innerHTML === 'O') {
                    alert('GG-7-8-9_2');
                };
                if(quadrado2.innerHTML === 'O' && quadrado5.innerHTML === 'O' && quadrado8.innerHTML === 'O') {
                    alert('GG-2-5-8_1');
                };


                rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                console.log('marcado como O-8');
                quadrado8.classList.add('o');
            };
        };
    });
    quad8.style.fontSize = '70px';


    // --------------------------------------------------------------------------------------
    // let quad1 = document.getElementById('content-1');
    // let quad2 = document.getElementById('content-2');
    // let quad3 = document.getElementById('content-3');
    // let quad4 = document.getElementById('content-4');
    // let quad5 = document.getElementById('content-5');
    // let quad6 = document.getElementById('content-6');
    // let quad7 = document.getElementById('content-7');
    // let quad8 = document.getElementById('content-8');
    var quad9 = document.getElementById('content-9');

    var quadrado9 = document.getElementById('content-9');

    quadrado9.addEventListener('click', function() {
        if(quadrado9.classList.contains('x') || quadrado9.classList.contains('o')) {
            console.log('quadrado ja ocupado-9');
        }else {
            quadrado9.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad9.innerHTML = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';


                if(quadrado8.innerHTML === 'X' && quadrado7.innerHTML === 'X' && quadrado9.innerHTML === 'X') {
                    alert('GG-7-8-9_1');
                };
                if(quadrado5.innerHTML === 'X' && quadrado1.innerHTML === 'X' && quadrado9.innerHTML === 'X') {
                    alert('GG-1-5-9_1')
                };
                if(quadrado3.innerHTML === 'X' && quadrado6.innerHTML === 'X' && quadrado9.innerHTML === 'X') {
                    alert('GG-3-6-9_3');
                };


                console.log('marcado como X-9');
            }else if(rodada.innerHTML === 'VEZ DE: JOGADOR 2') {
                quad9.innerHTML = 'O';


                if(quadrado8.innerHTML === 'O' && quadrado7.innerHTML === 'O' && quadrado9.innerHTML === 'O') {
                    alert('GG-7-8-9_1');
                };
                if(quadrado5.innerHTML === 'O' && quadrado1.innerHTML === 'O' && quadrado9.innerHTML === 'O') {
                    alert('GG-1-5-9_1')
                };
                if(quadrado3.innerHTML === 'O' && quadrado6.innerHTML === 'O' && quadrado9.innerHTML === 'O') {
                    alert('GG-3-6-9_3');
                };


                rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                console.log('marcado como O-9');
                quadrado9.classList.add('o');
            };
        };
    });
    quad9.style.fontSize = '70px';
// --------------------------------------------------------------------------------------
    };

    if(opcaoSelecionada.id === 'modo-medio') {

        function sortearNumeros () {
            var min = 2
            var max = 9

            var teste1 = Math.ceil(min);
            var teste2 = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        };


        let quad1Medio = document.getElementById('content-1');
        var quadrado1Medio = document.getElementById('content-1');

        quadrado1Medio.addEventListener('click' , function() {

            if(quadrado1Medio.classList.contains('x') || quadrado1Medio.classList.contains('o')) {
                console.log('quadrado ja ocupado-9Medio');
            }else {
                quadrado1Medio.classList.add('x');
                if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                    quad1Medio.innerHTML = 'X';
                    rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                    var teste3 = sortearNumeros();
                    console.log(teste3);
                    if(teste3 === 2 && quadrado2Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado2Medio.classList.contains('o') == false) {
                        setTimeout(function() {
                            quad2Medio.innerHTML = 'O';
                        }, 1000);
                        quadrado2Medio.classList.add('o');
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    }else if(teste3 === 3 && quadrado3Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado3Medio.classList.contains('o') == false) {
                        setTimeout(function() {
                            quad3Medio.innerHTML = 'O';
                        }, 1000);
                        quadrado3Medio.classList.add('o');
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    }else if(teste3 === 4 && quadrado4Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado4Medio.classList.contains('o') == false) {
                        setTimeout(function() {
                            quad4Medio.innerHTML = 'O';
                        }, 1000);
                        quadrado4Medio.classList.add('o');
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    }else if(teste3 === 5 && quadrado5Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado5Medio.classList.contains('o') == false) {
                        setTimeout(function() {
                            quad5Medio.innerHTML = 'O';
                        }, 1000);
                        quadrado5Medio.classList.add('o');
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    }else if(teste3 === 6 && quadrado6Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado6Medio.classList.contains('o') == false) {
                        setTimeout(function() {
                            quad6Medio.innerHTML = 'O';
                        }, 1000);
                        quadrado6Medio.classList.add('o');
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    }else if(teste3 === 7 && quadrado7Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado7Medio.classList.contains('o') == false) {
                        setTimeout(function() {
                            quad7Medio.innerHTML = 'O';
                        }, 1000);
                        quadrado7Medio.classList.add('o');
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    }else if(teste3 === 8 && quadrado8Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado8Medio.classList.contains('o') == false) {
                        setTimeout(function() {
                            quad8Medio.innerHTML = 'O';
                        }, 1000);
                        quadrado8Medio.classList.add('o');
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    }else if(teste3 === 9 && quadrado9Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado9Medio.classList.contains('o') == false) {
                        setTimeout(function() {
                            quad9Medio.innerHTML = 'O';
                        }, 1000);
                        quadrado9Medio.classList.add('o');
                        rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                    };
                };
            };

        });
        quad1Medio.style.fontSize = '70px';

        // --------------------------------------------------------------------------------------

        function sortearNumeros2() {
            var min = 1
            var naoPode = 2
            var max = 9
          
            var sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
          
            // Verifica se o número sorteado é igual a 2 e sorteia novamente se for
            while (sorteado === naoPode) {
              sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
            };
          
            return sorteado;
          };
          

        let quad2Medio = document.getElementById('content-2');
        var quadrado2Medio = document.getElementById('content-2');

        quadrado2Medio.addEventListener('click', function() {

            if(quadrado2Medio.classList.contains('x') || quadrado2Medio.classList.contains('o')) {
                console.log('quadrado ja ocupado-2Medio');
            }else {
              quadrado2Medio.classList.add('x');
              if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad2Medio.innerHTML = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                var teste4 = sortearNumeros2();
                console.log(teste4);
                if(teste4 === 1 && quadrado1Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado1Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad1Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado1Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste4 === 3 && quadrado3Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado3Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad3Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado3Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste4 === 4 && quadrado4Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado4Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad4Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado4Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste4 === 5 && quadrado5Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado5Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad5Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado5Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste4 === 6 && quadrado6Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado6Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad6Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado6Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste4 === 7 && quadrado7Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado7Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad7Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado7Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste4 === 8 && quadrado8Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado8Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad8Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado8Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste4 === 9 && quadrado9Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado9Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad9Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado9Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                };
              };
            };

        });
        quad2Medio.style.fontSize = '70px';
    
    };

    // --------------------------------------------------------------------------------------

    function sortearNumeros3() {
        var min = 1
        var naoPode = 3
        var max = 9
      
        var sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
      
        // Verifica se o número sorteado é igual a 2 e sorteia novamente se for
        while (sorteado === naoPode) {
          sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
        };
      
        return sorteado;
      };

    let quad3Medio = document.getElementById('content-3');
    var quadrado3Medio = document.getElementById('content-3');

    let quad2Medio_2 = document.getElementById('content-2');

    let quad1Medio_2 = document.getElementById('content-1');

    quadrado3Medio.addEventListener('click', function() {

        if(quadrado3Medio.classList.contains('x') || quadrado3Medio.classList.contains('o')) {
            console.log('quadrado ja ocupado-3Medio');
        }else {
            quadrado3Medio.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad3Medio.innerHTML = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                var teste5 = sortearNumeros3();
                console.log(teste5);
                if(teste5 === 1 && quadrado1Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado1Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad1Medio_2.innerHTML = 'O';
                    }, 1000);
                    quadrado1Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste5 === 2 && quadrado2Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado2Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad2Medio_2.innerHTML = 'O';
                    }, 1000);
                    quadrado2Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste5 === 4 && quadrado4Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado4Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad4Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado4Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste5 === 5 && quadrado5Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado5Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad5Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado5Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste5 === 6 && quadrado6Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado6Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad6Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado6Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste5 === 7 && quadrado7Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado7Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad7Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado7Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste5 === 8 && quadrado8Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado8Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad8Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado8Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste5 === 9 && quadrado9Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado9Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad9Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado9Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                };
            };
        };

    });
    quad3Medio.style.fontSize = '70px';

    // --------------------------------------------------------------------------------------

    function sortearNumeros4() {
        var min = 1
        var naoPode = 4
        var max = 9
      
        var sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
      
        // Verifica se o número sorteado é igual a 2 e sorteia novamente se for
        while (sorteado === naoPode) {
          sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
        };
      
        return sorteado;
      };

    let quad4Medio = document.getElementById('content-4');
    var quadrado4Medio = document.getElementById('content-4');

    quadrado4Medio.addEventListener('click', function() {

        if(quadrado4Medio.classList.contains('x') || quadrado4Medio.classList.contains('o')) {
            console.log('quadrado ja ocupado-4Medio');
        }else {
            quadrado4Medio.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad4Medio.innerHTML = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                var teste6 = sortearNumeros4();
                console.log(teste6);
                if(teste6 === 1 && quadrado1Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado1Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad1Medio_2.innerHTML = 'O';
                    }, 1000);
                    quadrado1Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste6 === 2 && quadrado2Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado2Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad2Medio_2.innerHTML = 'O';
                    }, 1000);
                    quadrado2Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste6 === 3 && quadrado3Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado3Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad3Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado3Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste6 === 5 && quadrado5Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado5Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad5Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado5Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste6 === 6 && quadrado6Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado6Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad6Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado6Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste6 === 7 && quadrado7Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado7Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad7Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado7Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste6 === 8 && quadrado8Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado8Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad8Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado8Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste6 === 9 && quadrado9Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado9Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad9Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado9Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                };
            };
        };

    });
    quad4Medio.style.fontSize = '70px';

    // --------------------------------------------------------------------------------------

    function sortearNumeros5() {
        var min = 1
        var naoPode = 5
        var max = 9

        var sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
      
        // Verifica se o número sorteado é igual a 2 e sorteia novamente se for
        while (sorteado === naoPode) {
          sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
        };
      
        return sorteado;
    };

    let quad5Medio = document.getElementById('content-5');
    var quadrado5Medio = document.getElementById('content-5');

    quadrado5Medio.addEventListener('click', function() {

        if(quadrado5Medio.classList.contains('x') | quadrado5Medio.classList.contains('o')) {
            console.log('quadrado ja ocupado-5Medio');
        }else{
            quadrado5Medio.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad5Medio.innerHTML = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                var teste7 = sortearNumeros5();
                console.log(teste7);
                if(teste7 === 1 && quadrado1Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado1Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad1Medio_2.innerHTML = 'O';
                    }, 1000);
                    quadrado1Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste7 === 2 && quadrado2Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado2Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad2Medio_2.innerHTML = 'O';
                    }, 1000);
                    quadrado2Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste7 === 3 && quadrado3Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado3Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad3Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado3Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste7 === 4 && quadrado4Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado4Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad4Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado4Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste7 === 6 && quadrado6Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado6Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad6Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado6Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste7 === 7 && quadrado7Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado7Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad7Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado7Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste7 === 8 && quadrado8Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado8Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad8Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado8Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste7 === 9 && quadrado9Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado9Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad9Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado9Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                };
            };
        };

    });
    quad5Medio.style.fontSize = '70px';

    // --------------------------------------------------------------------------------------

    function sortearNumeros6() {
        var min = 1
        var naoPode = 6
        var max = 9

        var sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
      
        // Verifica se o número sorteado é igual a 2 e sorteia novamente se for
        while (sorteado === naoPode) {
          sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
        };
      
        return sorteado;
    };

    let quad6Medio = document.getElementById('content-6');
    var quadrado6Medio = document.getElementById('content-6');

    quadrado6Medio.addEventListener('click', function() {

        if(quadrado6Medio.classList.contains('x') | quadrado6Medio.classList.contains('o')) {
            console.log('quadrado ja ocupado-6Medio');
        }else {
            quadrado6Medio.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad6Medio.innerHTML = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                var teste8 = sortearNumeros6();
                console.log(teste8);
                if(teste8 === 1 && quadrado1Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado1Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad1Medio_2.innerHTML = 'O';
                    }, 1000);
                    quadrado1Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste8 === 2 && quadrado2Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado2Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad2Medio_2.innerHTML = 'O';
                    }, 1000);
                    quadrado2Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste8 === 3 && quadrado3Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado3Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad3Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado3Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste8 === 4 && quadrado4Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado4Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad4Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado4Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste8 === 5 && quadrado5Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado5Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad5Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado5Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste8 === 7 && quadrado7Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado7Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad7Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado7Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste8 === 8 && quadrado8Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado8Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad8Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado8Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste8 === 9 && quadrado9Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado9Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad9Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado9Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                };
            };
        };

    });
    quad6Medio.style.fontSize = '70px';

    // --------------------------------------------------------------------------------------

    function sortearNumeros7() {
        var min = 1
        var naoPode = 7
        var max = 9

        var sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
      
        // Verifica se o número sorteado é igual a 2 e sorteia novamente se for
        while (sorteado === naoPode) {
          sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
        };
      
        return sorteado;
    };

    let quad7Medio = document.getElementById('content-7');
    var quadrado7Medio = document.getElementById('content-7');

    quadrado7Medio.addEventListener('click', function() {

        if(quadrado7Medio.classList.contains('x') || quadrado7Medio.classList.contains('o')) {
            console.log('quadrado ja ocupado-7Medio');
        }else {
            quadrado7Medio.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad7Medio.innerHTML = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                var teste9 = sortearNumeros7();
                console.log(teste9);
                if(teste9 === 1 && quadrado1Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado1Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad1Medio_2.innerHTML = 'O';
                    }, 1000);
                    quadrado1Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste9 === 2 && quadrado2Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado2Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad2Medio_2.innerHTML = 'O';
                    }, 1000);
                    quadrado2Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste9 === 3 && quadrado3Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado3Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad3Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado3Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste9 === 4 && quadrado4Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado4Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad4Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado4Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste9 === 5 && quadrado5Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado5Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad5Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado5Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste9 === 6 && quadrado6Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado6Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad6Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado6Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste9 === 8 && quadrado8Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado8Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad8Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado8Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste9 === 9 && quadrado9Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado9Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad9Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado9Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                };
            };
        };

    });
    quad7Medio.style.fontSize = '70px';

    // --------------------------------------------------------------------------------------

    function sortearNumeros8() {
        var min = 1
        var naoPode = 8
        var max = 9

        var sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
      
        // Verifica se o número sorteado é igual a 2 e sorteia novamente se for
        while (sorteado === naoPode) {
          sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
        };
      
        return sorteado;
    };

    let quad8Medio = document.getElementById('content-8');
    var quadrado8Medio = document.getElementById('content-8');

    quadrado8Medio.addEventListener('click', function() {

        if(quadrado8Medio.classList.contains('x') || quadrado8Medio.classList.contains('o')) {
            console.log('quadrado ja ocupado-8Medio');
        }else {
            quadrado8Medio.classList.add('x');
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad8Medio.innerHTML = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                var teste10 = sortearNumeros8();
                console.log(teste10)
                if(teste10 === 1 && quadrado1Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado1Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad1Medio_2.innerHTML = 'O';
                    }, 1000);
                    quadrado1Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste10 === 2 && quadrado2Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado2Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad2Medio_2.innerHTML = 'O';
                    }, 1000);
                    quadrado2Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste10 === 3 && quadrado3Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado3Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad3Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado3Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste10 === 4 && quadrado4Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado4Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad4Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado4Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste10 === 5 && quadrado5Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado5Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad5Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado5Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste10 === 6 && quadrado6Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado6Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad6Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado6Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste10 === 7 && quadrado7Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado7Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad7Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado7Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste10 === 9 && quadrado9Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado9Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad9Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado9Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                };
            };
        };

    });
    quad8Medio.style.fontSize = '70px';

    // --------------------------------------------------------------------------------------

    function sortearNumeros9() {
        var min = 1
        // var naoPode
        var max = 8

        var sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
      
        // Verifica se o número sorteado é igual a 2 e sorteia novamente se for
        // while (sorteado === naoPode) {
        //   sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
        // };
      
        return sorteado;
    };

    let quad9Medio = document.getElementById('content-9');
    var quadrado9Medio = document.getElementById('content-9');

    quadrado9Medio.addEventListener('click', function() {

        if(quadrado9Medio.classList.contains('x') || quadrado9Medio.classList.contains('o')) {
            console.log('quadrado ja ocupado-9Medio');
        }else{
            quadrado9Medio.classList.add('x')            ;
            if(rodada.innerHTML === 'VEZ DE: JOGADOR 1') {
                quad9Medio.innerHTML = 'X';
                rodada.innerHTML = 'VEZ DE: JOGADOR 2';
                var teste11 = sortearNumeros9();
                console.log(teste11);
                if(teste11 === 1 && quadrado1Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado1Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad1Medio_2.innerHTML = 'O';
                    }, 1000);
                    quadrado1Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste11 === 2 && quadrado2Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado2Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad2Medio_2.innerHTML = 'O';
                    }, 1000);
                    quadrado2Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste11 === 3 && quadrado3Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado3Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad3Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado3Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste11 === 4 && quadrado4Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado4Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad4Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado4Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste11 === 5 && quadrado5Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado5Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad5Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado5Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste11 === 6 && quadrado6Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado6Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad6Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado6Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste11 === 7 && quadrado7Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado7Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad7Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado7Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                }else if(teste11 === 8 && quadrado8Medio.classList.contains('x') == false && rodada.innerHTML === 'VEZ DE: JOGADOR 2' && quadrado8Medio.classList.contains('o') == false) {
                    setTimeout(function() {
                        quad8Medio.innerHTML = 'O';
                    }, 1000);
                    quadrado8Medio.classList.add('o');
                    rodada.innerHTML = 'VEZ DE: JOGADOR 1';
                };
            };
        };

    });
    quad9Medio.style.fontSize = '70px';

});
