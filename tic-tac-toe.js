"use strict";
var state = [];

document.addEventListener('DOMContentLoaded', function () {
	setgrid();
	console.log('Content has been loaded...');
}, false);


var setgrid = function(){
    var board = document.getElementById("board");
    var divs = board.querySelectorAll("div");
    for (var x=0; x<divs.length; x++) {
        divs[x].className = ("square");
        }
}

var mark = function(){
    
}

