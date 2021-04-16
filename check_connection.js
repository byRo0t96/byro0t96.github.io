/*s*/
function checkconnection(){
	var dot=document.getElementById("dot");
    var status=navigator.onLine;
    if(status){
		if(dot.classList.contains("dot_red")){
			dot.classList.remove("dot_red");
			dot.classList.add("dot_green");
			console.log('%cReturn Internet Connection',"color:green;");
		}
    }else{
        if(dot.classList.contains("dot_green")){
			dot.classList.remove("dot_green");
			dot.classList.add("dot_red");
			console.log('%cNo Internet Connection!.',"color:red;");
		}
    }
}
checkconnection();
setInterval(function(){checkconnection()},10000);
/*e*/