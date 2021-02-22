
	var ajax = new XMLHttpRequest()
	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode
	ajax.open("GET", "/INTERSHOP/static/WFS/Fabfab-DE-Site/-/-/de_DE/responsive/images/icons.svg", !isIE11)
	ajax.send()
	if (isIE11) {
	    appendSvg()
	} else {
		ajax.onload = function(e) {
		  var div = document.createElement("div");
		  div.setAttribute('style', 'display: none;');
		  div.innerHTML = ajax.responseText;
		  document.body.insertBefore(div, document.body.childNodes[0]);
		}
	}
	function appendSvg() {
		var div = document.createElement("div")
		div.setAttribute('style', 'display: none;')
		div.innerHTML = ajax.responseText
		document.body.insertBefore(div, document.body.childNodes[0])
	}
