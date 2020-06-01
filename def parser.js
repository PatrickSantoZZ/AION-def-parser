const path = require('path'),
	  fs = require('fs');


	  fs.readFile('client_def.txt', 'utf8', (err, data) =>{
	  if (err) {
	  console.log('error', err)
	  }
	})
	
	var lineReader = require('readline').createInterface({
	  input: require('fs').createReadStream('servr_def.txt')
	});
	var content = '';
	lineReader.on('line', function (line) {
		console.log(line)
		var file = line;
	  fs.writeFile(file, content, (err)=>{
	  	if (err) throw err;
	  	console.log('new')
	  });
	});