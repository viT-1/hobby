<!--
//Добавляем панель управления
var htmlcode;
htmlcode = '<div id="jbtns_head"><span id="jst0" title="без стиля">&nbsp;&nbsp;</span>'+
'<span class="jbtnstext"> стиль </span><span id="jst1" title="установить стиль - зима">зима</span> <span id="jst2" title="установить стиль - лето">лето</span> '+
'<br /><span id="incFSize" title="увеличить">+</span><span class="jbtnstext"> шрифт'+
' </span><span id="decFSize"title="уменьшить">-</span></div><hr class="hidden" />'
document.write(htmlcode);

//Считываем значение cookie выбранной в прошлом сеансе
if (navigator.cookieEnabled) {
	var sLStyle = getCookie("sitestyle");
	if (sLStyle != null) {
		fSetSiteStyle(sLStyle);
	}
	var sLSize = getCookie("fontsize");
	sLSize = parseInt(sLSize);
	if ((sLSize > -1) && (sLSize != 1)) {
		fSetFontSize(sLSize);
	}
}

//Выделяем активный пункт главного меню
fSetCurrentMenu();
//-->