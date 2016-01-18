//var vicNum = prompt("How many victims?");
var volNum = 0;
var victims = [];
var volunteers = [];

function alertPing() {
	alert("Alarum")
}

function getInfo (form, destinationArray) {
	var out = {};
	out["name"] = form.name.value;
	out["phone"] = form.phone.value;
	out["street"] = form.street.value;
	destinationArray.push(out);
}

function createOutput (srcArr) {
	var out = [];
	var keys = Object.keys(srcArr[0]);
	for (var i = srcArr.length - 1; i >= 0; i--) {
		for (var k = 0; k < keys.length; k++) {
			out.push(keys[k] + " : " + srcArr[i][keys[k]]);
		}
	};

	return out.join("\n");

}

// for (var i = 0; i < vicNum; i++) {
// 	getInfo(victims);
// }

//volNum = prompt("How many volunteers?")

// for (var i = 0; i < volNum; i++) {
// 	getInfo(volunteers)
// };



//alert("Victims: "+vicNum +"\n" + "Volunteers: " + volNum + "\n" + createOutput(victims) + "\n" + createOutput(volunteers) )