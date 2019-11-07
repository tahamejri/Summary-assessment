$('#create').on('click',function(){
var num1 = 0 ;
var num2 = 0 ;
var num3 = 0 ;

if ($("#check1").prop('checked')){
 num1 = 1 ;
}
if ($("#check2").prop('checked')){
 num2 = 1 ;
}

if ($("#check3").prop('checked')){
 num3 = 1 ;
}
var sum = num1 + num2 + num3 ;

if(sum === 3){
	var blackw = $('<li></li>') ;
	blackw.html('<li>black</li>') ;
	
	$('#ulist').append(blackw)
	}
if(sum === 2){
	var blackw = $('<li></li>') ;
	blackw.html('<li>purple = blue + red</li><br><li>green = blue + yellow</li><br><li>orange = red + yellow</li>') ;
	
	$('#ulist').append(blackw)
	}
if(sum === 1){
	var blackw = $('<li></li>') ;
	blackw.html('<li>yellow, blue or red</li>') ;
	
	$('#ulist').append(blackw)
	}

 })


$('#remove').on('click',function(){
	$('#ulist').html('')
})
