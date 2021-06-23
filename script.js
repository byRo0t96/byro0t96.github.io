/*s*/
console.log('%cAll codes on this site were programmed by Yasser BDJ (byRo0t96) \nE-mail  : by.root96@gmail.com\nWebSite : https://byro0t96.github.io/\nPhone   : +213(0)699.50.63.17',"display:inline-block;background-color:gold;color:black;font-weight:bold;padding: 3px 7px 3px 7px;border-radius: 3px 3px 3px 3px;");

console.log('%cMADE IN My Computer',"font-weight: bold;font-size:30px;color:green;text-shadow:1px 1px 0px black,1px -1px 0px black,-1px 1px 0px black,-1px -1px 0px black;");

console.log("%c"+'Powered By : Yasser BDJ v1.0.0[beta]',"display:inline-block;background-color:#e0005a;color:#ffffff;font-weight:bold;padding:3px 7px 3px 7px;border-radius:3px 3px 3px 3px ;");

//gup:
function gup( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}

//c:
if (gup('c')!="" && gup('c')!=null){
	var res=gup('c').split(":");
    //Colorscheme:
    var config={
        textColor:'#'+res[0],
        cursorColor:'#'+res[1],
        backgroundColor:'#'+res[2],
    };
}else{
    //Colorscheme:
    var config={
        textColor:'#f5f5f5',
        cursorColor:'#f5f5f5',
        backgroundColor:'#000000',
    };
}
//Init:
cliPlugin.init(config);

//First print:
cliPlugin.print('Hi!<br>Welcome to Yasser BDJ - CLI.<br><br>Write "help" for more information.<br><br>');

//Commands:
//clear:
cliPlugin.bind('clear',function(){
  cliPlugin.clear();
});

//exit:
cliPlugin.bind('exit',function(){
  window.close();
});

//help:
cliPlugin.bind('help',function(){
  cliPlugin.print('<p>available commands:</p>'+
                  '<ul>'+
                  '<li><span>clear</span>clear the screen.</li><br>'+
                  '<li><span>help</span>Show this overview.</li>'+
				  '<li><span>about</span>About Me.</li>'+
				  '<li><span>ls</span>Programs List.</li>'+
				  '<li><span>exit</span>Close this window.</li>'+
				  '</ul>');
});

//ls:
cliPlugin.bind('ls',function(){
  cliPlugin.print('<p>Available Programs:</p>'+
                  '<ul>'+
                  '<li><span>ashar :</span><span>Ashar Encryption and decryption.</span></li><br>'+
                  '<li><span>donotimport :</span><span>A simple package to prevent the abusive use of the import statement in Python.</span></li><br>'+
				  '<li><span>hexor :</span><span>hexor for color the texts in hex or rgb colors.</span></li><br>'+
				  '<li><span>hiphp :</span><span>hiphp for control php websites.</span></li><br>'+
				  '<li><span>pipincluder :</span><span>To import packages if they are found, or download them from pypi if they are not present.This project is in order to bypass errors during importing any package.</span></li><br>'+
				  '<li><span>easy4py :</span><span>Scripts that help me in my programming life :).</span></li><br>'+
				  '</ul>');
});

//about:
cliPlugin.bind('about',function(){
  cliPlugin.print('<p>About Yasser BDJ - CLI:</p>'+
                  "<p>I'm a web developer & software engineer from Algeria. I love building new and exciting things for computers. When I am not busy working on various projects, you'll find me sleeping or watching movies.<br>I built this simple website with a command line interface to showcase some of my free and open source works.<br>Enjoy! 😊😊</p>");
});



/*
cliPlugin.bind('about', function () {
  cliPlugin.print('<p>This project is a simple and easy to use command-line interface (CLI) for web applications.</p>');
  cliPlugin.print('<p>Inspired by minimalistic user interfaces that are rich in functionality.</p>');
  cliPlugin.print('<p>Designed for simplicity and built to empower.</p>');
  cliPlugin.print('<p>Very light weight.</p>');
});



cliPlugin.bind('sources', function () {
  cliPlugin.print('<p>CLI plugin was made using:</p>');
  cliPlugin.print('<ul><li>html, css, javascript</li><li>made with <3 in vim</li><br/><li><a href="https://github.com/g1eb/cli-plugin">> view the source on github</a></li></ul>');
});*/
/*e*/