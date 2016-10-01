
function xc() {
	var display = '<a class="link" href="https://google.com">' + "Google.com" + '</a>';
	document.getElementById('content-list').innerHTML =	display;	 
}

function football() {
	$('#content-list').empty();
	var display = '<a class="link" href="https://google.com">' + "a" + '</a>';
	var display1 = '<a class="link" href="https://google.com">' + "b" + '</a>';
	var display2 = '<a class="link" href="https://google.com">' + "c" + '</a>';
	var display3 = '<a class="link" href="https://google.com">' + "d" + '</a>';
	var display4 = '<a class="link" href="https://google.com">' + "e" + '</a>';
	var display5 = '<a class="link" href="https://google.com">' + "f" + '</a>';

	var displays = [display, display1, display2, display3, display4, display5];

	for (x = 0; x < displays.length; x++) {
		$('#content-list').append(displays[x] + '<br>')
	}

	
}


