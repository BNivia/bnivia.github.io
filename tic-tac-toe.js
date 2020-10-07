//Naomi Benjamin
//tic-tac-toe

//Function to display grid
var setgrid = function(){
    var board = document.getElementById("board");
    var divs = board.querySelectorAll("div");
    for (var x=0; x<divs.length; x++) {
        divs[x].className = ("square");
        }
}

//array that holds all winning combinations
let wins = [];

document.addEventListener('DOMContentLoaded', function () {
    var status = document.querySelector('#status');
    var button = document.querySelector('.btn');
    var state = [];
    let o = true;

    setgrid();

    let sq = document.querySelectorAll('.square');
    
    sq.forEach(square => {
        square.addEventListener('click', () =>{
            if (o && square.textContent == ''){
                square.textContent = 'O';
                square.classList.add("O");
                o = false;
                state.push(square.textContent);
            }

            else if(!o && square.textContent == ''){
                square.textContent = 'X';
                square.classList.add("X");
                o = true;
                state.push(square.textContent);
            }


            
            console.log(state);

            

            

        });
    });

	//console.log('Content has been loaded...');
}, false);





