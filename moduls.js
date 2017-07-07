function addData(objJSON, title, body) {
	objJSON.push({'title': title, 'body': body});
	return objJSON;
}

function listDatas(objJSON) {
	for (var item in objJSON) {
		console.log('title - ' + objJSON[item]['title'] + '; body - ' + objJSON[item]['body']);
	}
}

function readData(objJSON, title) {
	for (var item in objJSON) {
		if (objJSON[item]['title'] === title){
			console.log('title - ' + objJSON[item]['title'] + '; body - ' + objJSON[item]['body']);
		}
	}
}

function removeData(objJSON, title) {
	for (var item in objJSON) {
		if (objJSON[item]['title'] === title){
			objJSON.splice(item, 1);
		}
	}
	return objJSON;
}

exports.addData = addData;
exports.listDatas = listDatas;
exports.readData = readData;
exports.removeData = removeData;
