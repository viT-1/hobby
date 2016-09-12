<!--
function fSetSiteStyle(sId){
	//ОШИБОЧНО работает в IE при попытке сменить стиль на себя же!
	var arrStyles = ["","001winter/screen.css","002summer/screen.css"];
	var iStyle = parseInt(sId.substring(3,sId.length));
	if ((iStyle < 0) || (iStyle > arrStyles.length)) return;

	var sAllCssDir = https://vit-1.github.io/hobby/navigate/css/";
	var sCurrentCss;
	var oLinkScrStyle = document.getElementById("screen");
	
	//Показываем кнопки всех стилей и убираем выбранный
	document.getElementById("jst0").style.display="inline";
	document.getElementById("jst1").style.display="inline";
	document.getElementById("jst2").style.display="inline";
	document.getElementById(sId).style.display="none";

	sCurrentCss = arrStyles[iStyle];
	if (iStyle == 0) {
		sAllCssDir = "";
	}
	//fCssOnOff(iStyle);

try{
	oLinkScrStyle.href = sAllCssDir + sCurrentCss;
}
catch(e){alert("fSetSiteStyle: "+e.number+": "+e.description);}
}

function fCssOnOff(iOff) {
	//Убрать/восстановить пустые пункты меню
	var oheadmenu_gr1 = document.getElementById("headmenu_gr1");
	var	oheadmenu_gr2 = document.getElementById("headmenu_gr2");
	if ((oheadmenu_gr1 == null) || (oheadmenu_gr2 == null)) return;
	
	var re = new RegExp("<li[^<>]*></li>","gi");
	var headmenu_gr1, headmenu_gr2;
	
	if (iOff == 0) {
		headmenu_gr1 = oheadmenu_gr1.innerHTML;
		headmenu_gr2 = oheadmenu_gr2.innerHTML;
		oheadmenu_gr1.innerHTML = headmenu_gr1.replace(re,"");
		oheadmenu_gr2.innerHTML = headmenu_gr2.replace(re,"");
	} else {
		if (headmenu_gr1.length + headmenu_gr2.length > 0){
			oheadmenu_gr1.innerHTML = headmenu_gr1;
			oheadmenu_gr2.innerHTML = headmenu_gr2;
		}
	}
}
//-->