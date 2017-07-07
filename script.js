var fs = require('fs');
var modul = require('./moduls');

function getJSONfile() {
	var obj = {};
	if (fs.readFileSync('datas.json').length !== 0) {
		obj = JSON.parse(fs.readFileSync('datas.json'));
	}
	// console.log("object - " + obj.length);
	return obj;
}

switch (process.argv[2]) {
	case 'add':
		if (process.argv[3] === undefined){
			console.log("Please insert TITLE");
		} else if (process.argv[4] === undefined) {
			console.log("Please insert BODY");
		} else {
			var objJSON = modul.addData(getJSONfile(), process.argv[3], process.argv[4]);
			fs.writeFileSync('datas.json', JSON.stringify(objJSON));
		}
		break;
	case 'list':
		modul.listDatas(getJSONfile());
		break;
	case 'read':
		if (process.argv[3] === undefined){
			console.log("Please insert TITLE");
		} else {
			modul.readData(getJSONfile(), process.argv[3]);
		}
		break;
	case 'remove':
		if (process.argv[3] === undefined){
			console.log("Please insert TITLE");
		} else {
			var objJSON = modul.removeData(getJSONfile(), process.argv[3]);
			fs.writeFileSync('datas.json', JSON.stringify(objJSON))
		}
		break;
	default:
		console.log("Please write any method");
		getJSONfile();
}
