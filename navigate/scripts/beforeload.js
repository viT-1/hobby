<!--
//��������� ������ ����������
var htmlcode;
htmlcode = '<div id="jbtns_head"><span id="jst0" title="��� �����">&nbsp;&nbsp;</span>'+
'<span class="jbtnstext"> ����� </span><span id="jst1" title="���������� ����� - ����">����</span> <span id="jst2" title="���������� ����� - ����">����</span> '+
'<br /><span id="incFSize" title="���������">+</span><span class="jbtnstext"> �����'+
' </span><span id="decFSize"title="���������">-</span></div><hr class="hidden" />'
document.write(htmlcode);

//��������� �������� cookie ��������� � ������� ������
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

//�������� �������� ����� �������� ����
fSetCurrentMenu();
//-->