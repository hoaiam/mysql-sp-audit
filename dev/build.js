console.log('Building MySQL SP Audit Script ...');

var result = '', data;

data = readFile(__dirname + '/tbl_zaudit.sql');	
if (!data) { process.exit(1); }
result += data;

data = readFile(__dirname + '/zsp_generate_audit.sql');
if (!data) { process.exit(1); }
result += removeHeader(data);

data = readFile(__dirname + '/zsp_generate_batch_audit.sql');
if (!data) { process.exit(1); }
result += removeHeader(data);	

data = readFile(__dirname + '/zsp_generate_remove_audit.sql');
if (!data) { process.exit(1); }
result += removeHeader(data);


writeFile(__dirname + '/../mysql_sp_audit_setup.sql', result);





function readFile(file){
	var fs = require('fs');
	return trim(fs.readFileSync(file).toString());
}

function writeFile(file, data){
	var fs = require('fs');
	fs.writeFile(file, data, function(err){
		if (err){
			console.log('Error: ' + err);
		}
	});
}

function removeHeader(data){
	var separator = 'DELIMITER $$';
	return data.substring(data.indexOf(separator) + separator.length);
}

function trim (str) {
    return str.replace(/^[\s\xA0]+|[\s\xA0]+$/g, '');
}