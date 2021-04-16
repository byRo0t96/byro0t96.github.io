/*s*/
console.log('%cAll codes on this site were programmed by Yasser BDJ (byRo0t96) \nE-mail  : by.root96@gmail.com\nWebSite : https://byro0t96.github.io/\nPhone   : +213(0)699.50.63.17',"display:inline-block;background-color:gold;color:black;font-weight:bold;padding: 3px 7px 3px 7px;border-radius: 3px 3px 3px 3px;");

console.log('%cMADE IN My Computer',"font-weight: bold;font-size:30px;color:green;text-shadow:1px 1px 0px black,1px -1px 0px black,-1px 1px 0px black,-1px -1px 0px black;");

console.log("%c"+'Powered By : Yasser BDJ v1.0.0[beta]',"display:inline-block;background-color:#e0005a;color:#ffffff;font-weight:bold;padding:3px 7px 3px 7px;border-radius:3px 3px 3px 3px ;");


//Colorscheme:
var config={
  textColor:'#f5f5f5',
  cursorColor:'#f5f5f5',
  backgroundColor:'#000000',
};

//Init:
cliPlugin.init(config);

//First print:
cliPlugin.print('Write "help" for more information.<br/>');

//Commands:
//clear:
cliPlugin.bind('clear',function(){
  cliPlugin.clear();
});

//help:
cliPlugin.bind('help', function () {
  cliPlugin.print('<p>available commands:</p>');
  cliPlugin.print('<ul>'+
                  '<li><span>clear</span>clear the screen.</li><br>'+
                  '<li><span>help</span>show this overview.</li>'+
				  '<li><span>about</span>about Me.</li>'+
				  '</ul>');
});

//about:
cliPlugin.bind('about', function () {
  cliPlugin.print('<p>about Yasser BDJ - CLI:</p>');
  cliPlugin.print('<ul><li><span>clear</span> clear the screen</li><br/><li><span>help</span> show this overview</li></ul>');
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