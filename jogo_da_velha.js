var rodada = document.getElementById('h1-rodada');


// --------------------------------------------------------------------------------------
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
let quad9 = document.getElementById('content-9');

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
