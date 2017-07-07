var fs = require('fs');
var modul = require('./moduls');

function getJSONfile() {
	var obj = JSON.parse(fs.readFileSync('datas.json'));
	return obj;
}

switch (process.argv[2]) {
	case 'add':
		var objJSON = modul.addData(getJSONfile(), process.argv[3], process.argv[4]);
		fs.writeFileSync('datas.json', JSON.stringify(objJSON));
		break;
	case 'list':
		var objJSON = modul.listDatas(getJSONfile(), process.argv[3], process.argv[4]);
		break;
	case 'read':
		var objJSON = modul.readData(getJSONfile(), process.argv[3], process.argv[4]);
		break;
	case 'remove':
		var objJSON = modul.removeData(getJSONfile(), process.argv[3], process.argv[4]);
		fs.writeFileSync('datas.json', JSON.stringify(objJSON));
		break;
	default:
		console.log("Please write a method");
}
