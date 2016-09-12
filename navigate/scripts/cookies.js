<!--
function getExpDate(days, hours, minutes){
	var expDate = new Date();
	if (typeof days == "number" && typeof hours == "number" && typeof minutes == "number") {
		expDate.setDate(expDate.getDate() + parseInt(days));
		expDate.setHours(expDate.getHours() + parseInt(hours));
		expDate.setSeconds(expDate.getSeconds() + parseInt(minutes)*60);
		return expDate.toGMTString();
	}
}

function getCookie(name) {
    var prefix = name + "=";
    var cookieStartIndex = document.cookie.indexOf(prefix);
    if (cookieStartIndex == -1)
		return null;
	
    var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);
    if (cookieEndIndex == -1)
        cookieEndIndex = document.cookie.length;
    return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
}

function setCookie (name, value, expires, path, domain, secure) {
	//expires.toGMTString() нельзя
    var curCookie = name + "=" + escape(value) +
            ((expires) ? "; expires=" + expires : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
    // try{} catch(e){alert("Err2: "+e.number+": "+e.description);}
    //if (!caution || (name + "=" + escape(value)).length <= 4000)
        document.cookie = curCookie;
    /*else
        if (confirm("Cookie превышает 4KB и будет вырезан !"))
            document.cookie = curCookie;
    */
}

function deleteCookie (name, path, domain) {
	var d = new Date();
	var y = d.getFullYear()
	y = y.toString();
	//y = y.substr(2,2);
	//y = "70";

	if (getCookie(name)) {
	document.cookie = name + "=" + 
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		"; expires=Thu, 01-Jan-" + y + " 00:00:01 GMT";		
	}
}
//-->