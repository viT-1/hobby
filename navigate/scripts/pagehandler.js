<!--
function fClickHandler(evt) {
	evt = (evt) ? evt : ((window.event) ? event : null);
	if (evt){
		var elem = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
		if (elem.nodeType == 3) {
			elem = elem.parentNode;
		}
		if (elem) {
			var sElId = elem.getAttribute("id");
			switch (sElId) {
				case "incFSize": fIncreaseFontSize();
					break;
				
				case "decFSize": fDecreaseFontSize();
					break;
				default: break;
			}
			
			if (sElId.substring(0,3) == "jst") {
				fSetSiteStyle(sElId);
				
				//Сохранить выбранный стиль в cookie
				if (navigator.cookieEnabled) {
					var expDate = getExpDate(100,0,0);
					setCookie("sitestyle", sElId, expDate, "/hobby/");
				}
			}
		}
	}
}

function fInitEvents(){
try{
	//Подключаем глобальный обработчик нажатий клавиш мыши,
	//для браузеров поддерживающих DOM1
	if (document.getElementById)
		document.body.onclick = fClickHandler;
	}
catch(e){return 0;}
}
//-->