function addRow (cellOne, cellTwo) {
	// Find a <table> element with id="myTable":
	var table = document.getElementById("myTable");

	// Create an empty <tr> element and add it to the 1st position of the table:
	var row = table.insertRow(-1);

	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);

	// Add some text to the new cells:
	cell1.innerHTML = cellOne;
	cell2.innerHTML = cellTwo;
}
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
function addRows () {
	var subreddit = document.getElementById("myText").value;
	var time = document.getElementById("time").value;
	var type = document.getElementById("type").value;
	var url0 = "https://www.reddit.com/r/";
	url0 += subreddit+"/top/?sort=top&t="+time;
	addRow(subreddit,time,type,url0);


	reddit.top('funny').t('all').limit(5).fetch(function(res) {
		console.log(res);
	});
}