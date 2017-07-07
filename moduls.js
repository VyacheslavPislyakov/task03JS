function addData(objJSON, title, body) { //Add data to JSON file
	var flag = false;
	for (var item in objJSON) {
		flag = objJSON[item]['title'] === title ? true : false;
	}
	flag ? console.log("We already have a string with this TITLE. Please insert a string with new TITLE"): objJSON.push({'title': title, 'body': body});
	return objJSON;
}

function listDatas(objJSON) { //get list datas of JSON file
	if (objJSON == {}) {
		for (var item in objJSON) {
			console.log('title - ' + objJSON[item]['title'] + '; body - ' + objJSON[item]['body']);
		}
	} else {
		console.log("У вас пустой JSON файл");
	}

}

function readData(objJSON, title) { //read string from JSON file
	var flag = false;
	for (var item in objJSON) {
		if (objJSON[item]['title'] === title){
			console.log('title - ' + objJSON[item]['title'] + '; body - ' + objJSON[item]['body']);
			flag = false;
			break;
		} else {
			flag = true;
		}
	}
	if (flag){
		console.log("Please write a correct TITLE");
	}
}

function removeData(objJSON, title) { //remove string from JSON file
	var flag = false;
	for (var item in objJSON) {
		if (objJSON[item]['title'] === title){
			objJSON.splice(item, 1);
			flag = false;
		} else {
			var flag = true;
		}
	}
	if (flag){
		console.log("Please write a correct TITLE");
	}
	return objJSON;
}

exports.addData = addData;
exports.listDatas = listDatas;
exports.readData = readData;
exports.removeData = removeData;
