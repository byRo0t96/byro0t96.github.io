// Colorscheme
var config = {
  textColor: 'whitesmoke',
  cursorColor: 'whitesmoke',
  backgroundColor: 'black',
};

// Init
cliPlugin.init(config);

// Register commands
cliPlugin.bind('test', function () {
  cliPlugin.print('test!');
});

/*cliPlugin.bind('help', function () {
  cliPlugin.print('<p>available commands:</p>');
  cliPlugin.print('<ul><li><span>about</span> general information</li><li><span>clear</span> clear the screen</li><li><span>sources</span> how this is made</li><br/><li><span>help</span> show this overview</li></ul>');
});

cliPlugin.bind('about', function () {
  cliPlugin.print('<p>This project is a simple and easy to use command-line interface (CLI) for web applications.</p>');
  cliPlugin.print('<p>Inspired by minimalistic user interfaces that are rich in functionality.</p>');
  cliPlugin.print('<p>Designed for simplicity and built to empower.</p>');
  cliPlugin.print('<p>Very light weight.</p>');
});

cliPlugin.bind('clear', function () {
  cliPlugin.clear();
});

cliPlugin.bind('sources', function () {
  cliPlugin.print('<p>CLI plugin was made using:</p>');
  cliPlugin.print('<ul><li>html, css, javascript</li><li>made with <3 in vim</li><br/><li><a href="https://github.com/g1eb/cli-plugin">> view the source on github</a></li></ul>');
});*/