<!--
function fSetCurrentMenu(){
	var arrMenuNames = [["btn1","velo",2],["btn2","coll",2],["btn3","design",2],["btn5","viT",2],["btn7","links",2],["btn8","map",2]];
	var itemId, itemName, itemLevel;
	var path = location.pathname;
	var InnerT = "";
	try{
		//Problems with IE501 - no RegExp???
		var re = new RegExp("<.*?>","gi");
	}
	catch(e){
		//return "";
		//alert(e.number.toString(16)+": "+e.description);
	}
		
	for (var i = 0; i < arrMenuNames.length; i++){
		itemId = arrMenuNames[i][0];
		itemName = arrMenuNames[i][1];
		itemLevel = arrMenuNames[i][2];
		if (fIsInPath(itemName,itemLevel)==1){
			var elem = document.getElementById(itemId);
			elem.className = "current";
			if (path.substr(path.length-itemName.length-1)==(itemName+"/")){
				InnerT = elem.innerHTML;
				InnerT = InnerT.replace(re,"");
				elem.innerHTML = InnerT;
			}
		}	
	}
}

function fIsInPath(name, level){
	if (name.length == 0) return(0);
	
	var path = location.pathname;
	var re = new RegExp(name,"g");
	path = path.replace(re,"");
	re = RegExp("//","g");
	path = path.replace(re,"/#/");
	re = RegExp("[^/#]","g");
	path = path.replace(re,"");
	if (level > path.length - 1) return(0);
	return((path.charAt(level) == "#")?1:0);
}
//-->