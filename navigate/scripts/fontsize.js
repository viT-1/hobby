<!--
var currentSize = 1;
//var sizes=['x-small','small','medium','large'];
var sizes=['76%','88%','110%','122%'];

function fSetFontSize(position){
    if (position < 0) position = 0;
    if (position > 3) position = 3;

    if (position > 0)
        document.getElementById("decFSize").style.display="inline";
    else
        document.getElementById("decFSize").style.display="none";
    
    if (position < 3)
        document.getElementById("incFSize").style.display="inline";
    else
        document.getElementById("incFSize").style.display="none";

    if (document.getElementsByTagName){
		currentSize = position;
		document.getElementsByTagName("body")[0].style.fontSize = sizes[currentSize];
		//√асим переход по ссылке (нужно было только при вызове с элемента <a href...>)
		//if (window.event) window.event.returnValue = false else ev.preventDefault()
    }
    
	//—охранить выбранный размер в cookie
	if (navigator.cookieEnabled) {
		var expDate = getExpDate(100,0,0);
		setCookie("fontsize", parseInt(position), expDate, "/hobby/");
	}
}

function fDecreaseFontSize(){
	//—читать размер из cookie
	if (navigator.cookieEnabled) {
		var vLastFont = getCookie("fontsize");
		vLastFont = parseInt(vLastFont);
		if (vLastFont > -1) {
			currentSize = vLastFont;
		}
	}
    fSetFontSize(currentSize - 1);
}

function fIncreaseFontSize(){
	if (navigator.cookieEnabled) {
		var vLastFont = getCookie("fontsize");
		vLastFont = parseInt(vLastFont);
		if (vLastFont > -1) {
			currentSize = vLastFont;
		}
	}
    fSetFontSize(currentSize + 1);
}
//-->