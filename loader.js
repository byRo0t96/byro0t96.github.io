/*s*/
function loader(){
    if(document.all){
        document.all["loading"].style.visibility="hidden";
        document.all["content"].style.visibility="visible";
    }else if(document.getElementById){
        node=document.getElementById("loading").style.visibility='hidden';
        node=document.getElementById("content").style.visibility='visible';
    }
}
/*e*/