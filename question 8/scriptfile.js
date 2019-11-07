


var button = document.getElementById('addbutton')



button.onclick = function(){


var color = document.getElementById("inputColor").value
var inputtext = document.getElementById("inputText").value
inputtext.className = color ;
document.getElementById('ulist').append(inputtext) ;

}


