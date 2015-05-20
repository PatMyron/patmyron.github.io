function addRow (cellOne, cellTwo) {
	if (cellOne == "[deleted]") { // dont include
		return;
	}
	var table = document.getElementById("myTable");
	var row = table.insertRow(-1); // last row
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = cellOne;
	cell2.innerHTML = cellTwo;
}
function deleteRows () {
	var table = document.getElementById("myTable");
	for(var i = 1; i < table.rows.length; i += 0) { // DONT INCREMENT
		table.deleteRow(i);
	}
}
function addRows () {	// ENTRY POINT     int main() lol
	var subreddit = document.getElementById("myText").value;
	var time = document.getElementById("time").value;
	//  var type = document.getElementById("type").value;
	var url = "https://www.reddit.com/r/";
	url += subreddit+"/top/?sort=top&t="+time;
	map = new Array();
	deleteRows();
	var lim = 10000; // number of posts to get
	reddit.top(subreddit).t(time).limit(lim).fetch(function(res) {
		for(var i = 0; i < lim; i++) {
			try {
				user = res.data.children[i].data.author;
				score = res.data.children[i].data.score;
			}
			catch(err) {
				continue;
			}
			if (isNaN(map[user])) {
				map[user] = 0;
			}
			map[user] += score;
		} 
		
		/************************************
		IMPLEMENT A SORT BY VALUE
		THAT PRESERVES THE SCORE (VALUE)
		**********************************/
		var keysSorted = getSortedKeys(map);
		console.log(keysSorted);
		for (key in keysSorted) {
			addRow(key, map[key]);
		}
	});
}
function getSortedKeys(obj) {
    var keys = []; for(var key in obj) keys.push(key);
    return keys.sort(function(a,b){return obj[a]-obj[b]});
}
/*
function addRow (cellOne, cellTwo, cellThree) {
	// Find a <table> element with id="myTable":
	var table = document.getElementById("myTable");

	// Create an empty <tr> element and add it to the 1st position of the table:
	var row = table.insertRow(-1);

	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);

	// Add some text to the new cells:
	cell1.innerHTML = cellOne;
	cell2.innerHTML = cellTwo;
	cell3.innerHTML = cellThree;
}

function addRow (cellOne, cellTwo, cellThree, cellFour) {
	// Find a <table> element with id="myTable":
	var table = document.getElementById("myTable");

	// Create an empty <tr> element and add it to the 1st position of the table:
	var row = table.insertRow(-1);

	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);


	// Add some text to the new cells:
	cell1.innerHTML = cellOne;
	cell2.innerHTML = cellTwo;
	cell3.innerHTML = cellThree;
	cell4.innerHTML = cellFour;
}
*/