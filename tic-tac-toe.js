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
const wins = [[0,1,2], [0,3,6], [0,4,8],
            [3,4,5], [6,7,8], [2,4,6],
            [1,4,7], [2,5,8]];


var declarewin = function(array){
    for(let vals of wins){
        if(array[vals[0]] == 'O' && array[vals[1]] == 'O' && array[vals[2]] == 'O'){
            return 'O';
        }
        if (array[vals[0]] == 'X' && array[vals[1]] == 'X' && array[vals[2]] == 'X'){
            return 'X';
        }
    }
    return 'nowin';
}

document.addEventListener('DOMContentLoaded', function () {
    var status = document.querySelector('#status');
    var state = [];
    let o = true;

    setgrid();

    //array with all squares from grid
    let sq = document.querySelectorAll('.square');
    
    sq.forEach(square => {
        square.addEventListener('click', () =>{
            if (o && square.textContent == ''){
                square.textContent = 'O';
                square.classList.add("O");
                o = false;
                //state.push(square.textContent);
            }

            else if(!o && square.textContent == ''){
                square.textContent = 'X';
                square.classList.add("X");
                o = true;
                //state.push(square.textContent);
            }
            //console.log(state);

            state = [...sq].map(square => square.textContent);

            //check if O won 
            if(declarewin(state) == 'O'){
                status.textContent = "Congratulations! O is the Winner!";
                status.classList.add('you-won');
            }

            //check if X won
            if(declarewin(state) == 'X'){
                status.textContent = "Congratulations! X is the Winner!";
                status.classList.add('you-won');
            }
	    //if no win
	    let count = state.length - 9
	    if(declarewin(state) == 'nowin' && count == 0 ){
		status.textContent = "Oops, no winner. Try again!";
		status.classList.add('you-won');
	    }
        });

        //add hover
        square.addEventListener('mouseenter', () =>{
            square.classList.add('hover');
        })

        //take away hover
        square.addEventListener('mouseleave', () =>{
            square.classList.remove('hover');
        })

        //reset button
        var button = document.querySelector('.btn');
        button.addEventListener('click', () =>{
            status.classList.remove('you-won');
            sq.forEach(square => {
                square.textContent = '';
                square.classList.remove("X");
                square.classList.remove("O");
            });
            status.textContent= "Move your mouse over a square and click to play an X or an O.";
        })
    });

	//console.log('Content has been loaded...');
}, false);





