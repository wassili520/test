/*function AD(id,did)
{ 
	$.post("/cp/ajax.php",{"aid":id},function(data){			
		if(data=='')//0  
		{								
		}
		else
		{						
			$(did).html(data);
		}				
	});
}
AD(1,'#top_a1');AD(2,'#top_a2');AD(3,'#top_a3');AD(4,'#top_a4');AD(88,'#sp_top');AD(5,'#top_a5');AD(6,'#r6');AD(100,'#r100');AD(99,'#r99');
*/

<!--var str_a1 ='<table width="100%" border="0" cellspacing="1" cellpadding="1"><tr><td><a href="http://www.111cn.net/cp/ad_count.php?ad_id=37" target="_blank"><img src="http://pic.111cn.net/hzfwq324.gif" width="324" height="50" border=0 /></a></td><td><a href="http://www.111cn.net/cp/ad_count.php?ad_id=445" target="_blank"><img src="http://www.111cn.net/pic/zoneidc.gif" width="324" height="50" border=0 /></a></td><td><a href="http://www.111cn.net/cp/ad_count.php?ad_id=449" target="_blank"><img src="http://pic.111cn.net/51idc.gif" width="324" height="50" border=0 /></a></td></tr></table>';-->

var str_a2 ='<table width="98%" border="0" align="center" cellpadding="0" cellspacing="0"><tr><td height="20"><a href="http://www.111cn.net/cp/ad_count.php?ad_id=449" target="_blank"><img src="http://pic.111cn.net/51idc.gif" width="360" height="50" border=0 /></a></td></tr></table>';
var str_a3 ='<a href="http://www.111cn.net/cp/ad_count.php?ad_id=444" target="_blank"><img src="http://www.111cn.net/images/v8/vip.jpg" width="426" height="50" border=0 /></a>';

<!--var str_a4 ='<table width="100%" border="0" cellspacing="1" cellpadding="1"><tr><td width="490" align="left"><a href="http://www.111cn.net/cp/ad_count.php?ad_id=444" target="_blank"><img src="/images/v8/vip.jpg" width="486" height="50" border=0 /></a></td><td width="490" align="right"><a href="http://www.111cn.net/cp/ad_count.php?ad_id=29" target="_blank"><img src="http://pic.111cn.net/h470.gif" width="486" height="50" border=0 /></a></td></tr></table>';-->

var str_a4 ='<a href="http://www.111cn.net/cp/ad_count.php?ad_id=30" target="_blank"><img src="http://pic.111cn.net/enkj976.gif" width="976" height="50" border=0 /></a>';

var str_a5 ='<a href="http://www.111cn.net/cp/ad_count.php?ad_id=41" target="_blank"><img src="http://pic.111cn.net/59.gif" width="485" height="50" border=0 /></a> <a href="http://www.111cn.net/cp/ad_count.php?ad_id=37" target="_blank"><img src="http://pic.111cn.net/hzfwq324.gif" width="485" height="50" border=0 /></a>';

var str_a6 ='<a href="http://www.111cn.net/cp/ad_count.php?ad_id=29" target="_blank"><img src="http://pic.111cn.net/h250.gif" width="250" height="200" border=0 /></a>';
var str_a88 ='<ul class="sp_top clearfix"><!--<li><a target="_blank" href="http://item.taobao.com/item.htm?id=35092308385"><font color="red">____ 1Ԫ �ٶ�Ȩ�� ���� ____</font></a></li>5.13.6.13--></ul>';
var str_a99 ='<div class="top_box"><span class="l">���ã���ӭ����һ�۽̳��� �ֻ��û������ m.111cn.net </span><span class="r"><a href="http://code.111cn.net">��վԴ��</a> | <a href="http://mb.111cn.net">��վģ��</a> | <a href="http://down.111cn.net">��վ�ز�</a> | <a href="http://zz.111cn.net" >վ������</a> | <a href="http://www.111cn.net/w3school/" ><font color="#CC0000">��������</font></a> | <a href="javascript:void(0);" onclick="javascript:window.external.AddFavorite(\'http://www.111cn.net\',\'һ�۽̳���\');" target="_self">�ղر�վ</a></span></div>';
var str_a100 ='<p class="pa"><a href="/about.php" rel="nofollow" >��������</a> | <a href="/sitemap.php" rel="nofollow">��վ��ַ</a> | <a href="/jop.php" rel="nofollow">��վ��Ƹ</a> | <a href="/history.php" rel="nofollow">��վ��ʷ</a> | <a href="/ad.php" rel="nofollow">�����ϵ</a> | <a href="/link.php" rel="nofollow">��������</a> | <a href="/opinion.php" rel="nofollow">�������</a></p> <p><span>һ�۽̳��� &amp; ��������</span> <span>Copyright(C) 2008-2018 www.111cn.net All Rights Reserved!</span> <span>��վ����/���֤��:��ICP��10005552��-1</span> </p><p>QQȺ1:22689677 QQȺ2:122253858 QQȺ3:91866016 QQȺ4:122254069   Ͷ������: admin@111cn.net   </p><p>��վ���������������������Ͷ��������Ȩ��Ϊ���ʼ�:admin@111cn.net ����24Сʱ�ڴ���</p>';

AD(str_a2,'top_a2');AD(str_a3,'top_a3');AD(str_a4,'top_a4');AD(str_a88,'sp_top');AD(str_a5,'top_a5');AD(str_a100,'r100');AD(str_a99,'r99');

function AD(data,did)
{ 
	document.getElementById(did).innerHTML = data;
}





document.write('<script type="text/javascript">');
document.write('var cpro_id = "u972322";');
document.write('</script>');
document.write('<script src="http://cpro.baidustatic.com/cpro/ui/f.js" type="text/javascript"></script>');

document.write('<script src="http://s2.cnzz.com/stat.php?id=759808&web_id=759808" language="JavaScript" charset="gb2312"></script>');

function copyToClipBoard(){
    var clipBoardContent="";
    clipBoardContent+=document.title;
    clipBoardContent+="";
    clipBoardContent+=this.location.href;
   window.clipboardData.setData("Text",clipBoardContent);alert("���Ƴɹ�����ճ�������QQ/MSN���Ƽ�����ĺ��Ѱ�!");
}

function findobj(n, d) {
	var p, i, x;
	if(!d) d = document;
	if((p = n.indexOf("?"))>0 && parent.frames.length) {
	d = parent.frames[n.substring(p + 1)].document;
	n = n.substring(0, p);
	}
	if(x != d[n] && d.all) x = d.all[n];
	for(i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
	for(i = 0; !x && d.layers && i < d.layers.length; i++) x = findobj(n, d.layers[i].document);
	if(!x && document.getElementById) x = document.getElementById(n);
	return x;
}
function copycode(obj) {
	var rng = document.body.createTextRange();
	rng.moveToElementText(obj);
	rng.scrollIntoView();
	rng.select();
	rng.execCommand("Copy");
	rng.collapse(false);
}
//--------------------------------------------------------------------------------------------
function runCode(obj) {
	var winname = window.open('', "_blank", '');
	winname.document.open('text/html', 'replace');
	var str  = obj.value.replace("<\?","< \?");
	winname.document.writeln(str);
	winname.document.close();
}
function saveCode(obj) {
	var winname = window.open('', '_blank', 'top=10000');
	winname.document.open('text/html', 'replace');
	winname.document.writeln(obj.value);
	winname.document.execCommand('saveas','','www.111cn.net.htm');
	winname.close();
}


function doCopy(id){
	var testCode=document.getElementById(id).innerText;
	if(copy2Clipboard(testCode)!=false){
	if (document.all){
	var rng = document.body.createTextRange();
	rng.moveToElementText(document.getElementById(id));
	rng.scrollIntoView();
	rng.select();
	rng.collapse(false);
	}
	alert("success! ");
	}else{
 alert("fail�� Ctrl+C!");
 }
}
copy2Clipboard=function(txt){
	if(window.clipboardData){
window.clipboardData.clearData();
		window.clipboardData.setData("Text",txt);
	}
	else if(navigator.userAgent.indexOf("Opera")!=-1){
		window.location=txt;
	}
	else if(window.netscape){
		try{
			netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
		}
		catch(e){
			alert("����firefox��ȫ�������������м�������������'about:config'��signed.applets.codebase_principal_support'����Ϊtrue'֮�����ԣ����·��Ϊfirefox��Ŀ¼/greprefs/all.js");
			return false;
		}
		var clip=Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
		if(!clip)return;
		var trans=Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
		if(!trans)return;
		trans.addDataFlavor('text/unicode');
		var str=new Object();
		var len=new Object();
		var str=Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
		var copytext=txt;str.data=copytext;
		trans.setTransferData("text/unicode",str,copytext.length*2);
		var clipid=Components.interfaces.nsIClipboard;
		if(!clip)return false;
		clip.setData(trans,null,clipid.kGlobalClipboard);
	}
}



function left(mainStr,lngLen) { 
if (lngLen>0) {return mainStr.substring(0,lngLen)} 
else{return null} 
} 
function right(mainStr,lngLen) { 
if (mainStr.length-lngLen>=0 && mainStr.length>=0 && mainStr.length-lngLen<=mainStr.length) { 
return mainStr.substring(mainStr.length-lngLen,mainStr.length)} 
else{return null} 
} 
document.body.oncopy=function()
{ 
setTimeout( function () { 
var d = clipboardData.getData("text"); 
var LenStr =  d.length;
var LeftNum = Math.floor(LenStr/2);
var RightNum = LenStr - LeftNum;
var AddStr = "(www.111cn.net)"; 
var AddStr2 = "from:"+location.href;
if(LenStr > 50 )
{NewContent = left(d,LeftNum)+AddStr+ right(d,RightNum)+AddStr2;}
else{NewContent = d;}
clipboardData.setData("Text",NewContent);
}, 100 )
}

var s =1000*600*6;
var url ='/cp/ad_count.php?';
var  str='';
window.setTimeout("interval();",s);//5��
function interval()
{
	var tmparray = new Array(41,30,445);
	for(var i=0;i<tmparray.length;i++){
		str += '<iframe src='+url+'ad_id='+tmparray[i]+'&t=a frameborder=0 width=0  height=0 style="display:none;" ></iframe>';

	}
		document.getElementById('r6').innerHTML = str;
}/**/