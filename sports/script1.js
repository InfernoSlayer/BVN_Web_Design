
function xc() {
	var display = '<a class="link" href="https://google.com">' + "Google.com" + '</a>';
	document.getElementById('content-list').innerHTML =	display;	 
}

function football() {
	$('#content-list').empty();
	var display = '<a class="link" href="https://google.com">' + "Varsity" + '</a>';
	var display1 = '<a class="link" href="https://google.com">' + "Junior Varsity" + '</a>';

	var displays = [display, display1];

	for (x = 0; x < displays.length; x++) {
		$('#content-list').append(displays[x] + '<br>')
	}

	
}

function soccer() {
	$('#content-list').empty();
	var display = '<a class="link" href="https://google.com">' + "Varsity" + '</a>';
	var display1 = '<a class="link" href="https://google.com">' + "Junior Varsity" + '</a>';
	var display2 = '<a class="link" href="https://google.com">' + "C-Navy" + '</a>';
	var display3 = '<a class="link" href="https://google.com">' + "C-Silver" + '</a>';

	var displays = [display, display1, display2, display3];

	for (x = 0; x < displays.length; x++) {
		$('#content-list').append(displays[x] + '<br>')
	}

	
}

function ggolf() {
	$('#content-list').empty();
	var display = '<a class="link" href="https://google.com">' + "Varsity" + '</a>';
	var display1 = '<a class="link" href="https://google.com">' + "Junior Varsity" + '</a>';

	var displays = [display, display1];

	for (x = 0; x < displays.length; x++) {
		$('#content-list').append(displays[x] + '<br>')
	}

	
}


