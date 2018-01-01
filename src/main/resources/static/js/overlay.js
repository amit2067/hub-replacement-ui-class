
var _layersBgExtraHeight = 1125; 
function _(s){return s;}

function showLayer(layerGroup,idGroup,stat,zValue,msg,funtionStringBtn1,funtionStringBtn2)
{

if(!funtionStringBtn1)
	{funtionStringBtn1="";}
if(!funtionStringBtn2)
	funtionStringBtn2="";
	
if(stat)
	{
	var proAlt= _("Processing… Please wait");
	var closeAlt= _("Close");
	var adobeAlt= _("Get Adobe Reader");
	var yesAlt= _("Yes");
	var noAlt= _("No");
	var cancelAlt= _("Cancel");
	var continueAlt= _("Continue");
	var okAlt= _("OK");


 	if(document.getElementById(idGroup))
			{document.body.removeChild(document.getElementById(idGroup));}
			
			
			if(!zValue){zValue=30;}

			switch(layerGroup)
			{
				case 'process':
				var popUpDiv = document.createElement('div');
				popUpDiv.setAttribute('id',idGroup);
				popUpDiv.innerHTML = '<div id="'+idGroup+'Div" style="position:absolute; width:330px; height:300px; border-bottom-color:#C6C1AB; border-bottom-style:solid; border-bottom-width:1px; border-right-color:#C6C1AB; border-right-style:solid; border-right-width:1px; background-color:#FFFFFF; z-index:'+zValue+';" ><div style="border-color:#A19A87; border-width:1px; border-style:solid; width:330px; height:300px; "><div style="padding-left:45px; padding-top:42px;  "><img alt="' + proAlt + '" title="' + proAlt + '" src="'+_baseImgPath+'hrd-processing_please.gif" /></div><div style="padding-top:45px;" align="center"><img alt="' + proAlt + '" title="' + proAlt + '" src="'+_baseImgPath+'img-process-anim.gif" /></div></div></div>';
				document.body.appendChild(popUpDiv);
				break;
				
				case 'alert':
				var popUpDiv = document.createElement('div');
				popUpDiv.setAttribute('id',idGroup);
				popUpDiv.innerHTML = '<div id="'+idGroup+'Div" style="position:absolute; width:381px; border-bottom-color:#C6C1AB; border-bottom-style:solid; border-bottom-width:1px; border-right-color:#C6C1AB; border-right-style:solid; border-right-width:1px; background-color:#FFFFFF; z-index:'+zValue+'; border-color:#A19A87; border-width:1px; border-style:solid;"><div><div style="padding-left:2px; padding-right:2px; padding-top:15px; padding-bottom:7px; margin-left:15px; margin-right:15px; " ><span class="W">'+msg+'</span></div></div><div style="padding-top:25px; padding-right:12px; padding-bottom:5px; height:35px;"><a title="'+ closeAlt +'" href="javascript:showLayer(\'alert\',\''+idGroup+'\',false,\'\'); '+funtionStringBtn1+' "><img style="float:right;" title="'+ closeAlt +'" src="'+_baseImgPath+'btn-close.gif"  alt="'+ closeAlt +'" align="right"  /></a></div></div>';
				document.body.appendChild(popUpDiv);
				break;

				case 'alertOk':
				case 'alertok':
				case 'alertOK':				
				var popUpDiv = document.createElement('div');
				popUpDiv.setAttribute('id',idGroup);
				popUpDiv.innerHTML = 
//				'<div id="'+idGroup+'Div" style="position:absolute; width:381px; border-bottom-color:#C6C1AB; border-bottom-style:solid; border-bottom-width:1px; border-right-color:#C6C1AB; border-right-style:solid; border-right-width:1px; background-color:#FFFFFF; z-index:'+zValue+'; border-color:#A19A87; border-width:1px; border-style:solid;"><div><div style="padding-left:2px; padding-right:2px; padding-top:15px; padding-bottom:7px; margin-left:15px; " ><span class="W">'+msg+'</span></div></div><div style="padding-top:25px; padding-right:12px; padding-bottom:5px; height:35px;"><a  style="float:right;" title="'+ okAlt +'" href="javascript:showLayer(\'alert\',\''+idGroup+'\',false,\'\'); '+funtionStringBtn1+' "><img title="'+ okAlt +'" src="'+_baseImgPath+'btn-ok.gif"  alt="'+ okAlt +'" align="right"  /></a></div></div>';
				
				'<div id="'+idGroup+'Div" style="width:475px; z-index:'+zValue+';">'+
				'<div class="bg-layer-top-sm"></div>'+
				'<div class="bg-layer-mid-sm">'+
				'<div style="padding-left:435px;" onclick="javascript:showLayer(\'alert\',\''+idGroup+'\',false,\'\');"><div class="icn-alert-close-x pointer"></div></div>'+
				          ' <div style="padding-left:45px">'+

				            ' <div  class="textstyle1 container" style="padding-top:30px;padding-right:45px;text-align:center">'+msg+'</div>'+
							         ' <div class="ContinueButton" style="padding-top:38px;padding-left:155px;padding-bottom:34px;">'+
				                     '  <a href="javascript:showLayer(\'alert\',\''+idGroup+'\',false,\'\'); '+funtionStringBtn1+'" onclick="" class="pointer" style="text-decoration:none"><div class="left btn-blue-lt1"></div>'+
				                      ' <div class="left btn-blue-mid btn-blue-text">Continue</div>'+
				                      ' <div class="left btn-blue-rt1"></div></a>'+
				                      ' <div class="clear"></div>'+
				                     '  </div>'+
							
							
							
						 ' </div>'+

				'</div>'+
				'<div class="bg-layer-bot-sm"></div>'+
				'</div>'
				
				
				
				document.body.appendChild(popUpDiv);
				break;


				
				case 'adobe':
				var popUpDiv = document.createElement('div');
				popUpDiv.setAttribute('id',idGroup);
				popUpDiv.innerHTML =  
				'<div id="'+idGroup+'Div" style="position:absolute; width:381px; border-bottom-color:#C6C1AB; border-bottom-style:solid; border-bottom-width:1px; border-right-color:#C6C1AB; border-right-style:solid; border-right-width:1px; background-color:#FFFFFF; z-index:'+zValue+';">'+
				'<div style="border:#A19A87 1px solid; height:100%;" >'+
				'<div style="height:38px; border-bottom-width:1px; border-bottom-color:#CCCCCC; border-bottom-style:solid;">'+
					'<div align="left" style="float:left; width:199px; padding-top:15px; padding-bottom:12px; margin-left:5px;">'+
						'<img title="'+ adobeAlt +'" alt="'+ adobeAlt +'" src="'+_baseImgPath+'hdr-getadobe.gif" /></div>'+
					'<div style="float:left; width:160px; padding-top:10px; padding-right:10px; height:100%;" align="right" >'+
						'<a title="'+ closeAlt +'" href="javascript:void(0)"><img title="'+ closeAlt +'" src="'+_baseImgPath+'icn-x-close.gif" alt="'+ closeAlt +'" onclick="showLayer(\'adobe\',\''+idGroup+'\',false,\'\'); '+funtionStringBtn1+' " /></a>'+
					'</div></div><div>'+				
					'<div style="padding-left:2px; padding-right:2px; padding-top:7px; padding-bottom:7px; margin-left:15px; " >'+
					'<span class="B">' + _adobeText +  '</span></div></div>'+
				'<div style="padding-top:25px; padding-right:12px; padding-bottom:5px; height:35px;">'+
				'<a title="'+ closeAlt +'" href="javascript:showLayer(\'adobe\',\''+idGroup+'\',false,\'\'); '+funtionStringBtn1+' ">' + _adobeImg + ' align="right" /></a>'+
				'</div></div>';
				document.body.appendChild(popUpDiv);
				break;

				case 'alertYesNo':
				case 'alertyesno':				
				var popUpDiv = document.createElement('div');
				popUpDiv.setAttribute('id',idGroup);
				popUpDiv.innerHTML = 
				'<div id="'+idGroup+'Div"  style="border-bottom:2px; border-right:2px; border-left:1px;  border-top:1px; border-right-color:#A4A4A4; border-right-style:solid; border-left-color:#A4A4A4; border-left-style:solid; border-top-color:#A4A4A4; border-top-style:solid; border-bottom-color:#A4A4A4; border-bottom-style:solid; background:#FFFFFF; color:#CCCCCC; width:200px; padding:0px; margin:0px; display:block; z-index:'+zValue+'; " class="tmpmilan">'+
				'<div id="alertText" style="border:none; background-color:#FFFFFF; padding-top:15px; padding-left:20px; margin-right:4px;" class="W">'+msg+'</div>'+
				'<div id="alertButton" style="border:none; background-color:#FFFFFF; padding-top:20px; padding-left:8px; padding-right:5px; padding-bottom:5px; height:20px;"  >'+				
				'<a title="'+ yesAlt +'" href="javascript:showLayer(\'alertYesNo\',\''+idGroup+'\',false); '+funtionStringBtn1+' "><img title="'+ yesAlt +'" src="'+_baseImgPath+'btn-yes.gif"  alt="'+ yesAlt +'"  style="float:left;"/></a>'+
				'<a title="'+ noAlt +'" href="javascript:showLayer(\'alertYesNo\',\''+idGroup+'\',false);'+funtionStringBtn2+' "><img title="'+ noAlt +'" src="'+_baseImgPath+'btn-no.gif"  alt="'+ noAlt +'"   style="float:right;"/></a>'+
				'</div>	</div>';
				document.body.appendChild(popUpDiv);
				break;

				case 'externalLinkNotice':
				case 'externallinknotice':				
						msg='<div  style="border:none; background-color:#FFFFFF; padding-right:15px;" class="W"><div style="padding-bottom:10px">By clicking the CONTINUE button, you will leave the Merchant Toolkit and be taken to a site powered by a third party to complete your customized check presenter order.  Please be aware that the American Express Website Rules and Regulations and the American Express Privacy Statement only apply to your use of the Merchant Toolkit. We recommend you review the terms of use and the privacy statement for the site you are going to.</div>			<div style="padding-bottom:10px"> All other orders, including those for non-customized check presenters, must be completed on the Merchant Toolkit.  Click CANCEL to return to that page.</div>			<div style="padding-bottom:5px;"> To protect your safety online, we automatically log out users after extended periods of inactivity on our site.  Activity on any third party site will not count as activity on this page.  If this page times out, however, anything you put in your Cart will be saved for 30 days and accessible to you upon your return log in.</div>		</div>';

				case 'alertCancelContinue':
				case 'alertcancelcontinue':				
				var popUpDiv = document.createElement('div');
				popUpDiv.setAttribute('id',idGroup);
				popUpDiv.innerHTML = 
				'<div id="'+idGroup+'Div"  style="border-bottom:2px; border-right:2px; border-left:1px;  border-top:1px; border-right-color:#A4A4A4; border-right-style:solid; border-left-color:#A4A4A4; border-left-style:solid; border-top-color:#A4A4A4; border-top-style:solid; border-bottom-color:#A4A4A4; border-bottom-style:solid; background:#FFFFFF; color:#CCCCCC; width:380px; padding:0px; margin:0px; display:block; z-index:'+zValue+'; position:absolute;">'+
				'<div id="alertText" style="border:none; background-color:#FFFFFF; padding-top:15px; padding-left:20px;  padding-right:10px; " class="W">'+msg+'</div>'+
				'<div id="alertButton" style="border:none; background-color:#FFFFFF; padding-top:20px; padding-left:8px; padding-right:5px; padding-bottom:5px; height:20px;"  >'+				
				'<a title="'+ cancelAlt +'" href="javascript:showLayer(\'alertCancelContinue\',\''+idGroup+'\',false); '+funtionStringBtn1+' "><img title="'+ cancelAlt +'" src="'+_baseImgPath+'btn-cancel.gif"  alt="'+ cancelAlt +'"  style="float:left;"/></a>'+
				'<a title="'+ cancelAlt +'" href="javascript:showLayer(\'alertCancelContinue\',\''+idGroup+'\',false);'+funtionStringBtn2+' "><img title="'+ continueAlt +'" src="'+_baseImgPath+'btn-continue.gif"  alt="'+ continueAlt +'" style="float:right;"/></a>'+
				'</div>	</div>';
				document.body.appendChild(popUpDiv);
				break;
				
				
				case 'alertContinue':
				case 'alertcontinue':				
					var popUpDiv = document.createElement('div');
					popUpDiv.setAttribute('id',idGroup);
					popUpDiv.innerHTML = 
					'<div id="'+idGroup+'Div" class="" style="width:885">'+
					'<div class="bg-layer-top-lg"></div>'+
					'<div class="bg-layer-mid-lg">'+
					'<div style="float:right;" class="overlay_padding12">'+'<div class="icn-alert-close-x pointer" onclick="javascript:showLayer(\'alertContinue\',\''+idGroup+'\',false); ">'+'</div></div>'+
					           '<div style="padding-top:30px">'+

					            '<div align="center" class="textstyle1 container">You are now leaving this American Express Website.</div>'+
					             '<div align="center" class="textstyle2 overlay_padding44" style=" text-align:center">'+msg+'</div>'+ 
								  
								         ' <div class="ContinueButton ContinueButton1"  style="">'+
					                       '<a href="javascript:showLayer(\'alertContinue\',\''+idGroup+'\',false);" title="Select to cancel navigating to this site" class="pointer" style="text-decoration:none">'+'<div class="">'+'</div>'+
					                       '<div class="pad"><div class="left btn-blue-lt1">'+'</div>'+
					                       '<div class="left btn-blue-mid btn-blue-text">'+cancelAlt+'</div>'+
					                       '<div class="left btn-blue-rt1">'+'</div>'+'</div></a>'+
					                       
					                       '<a href="javascript:showLayer(\'alertContinue\',\''+idGroup+'\',false);'+funtionStringBtn1+'" title="Select to continue navigating to this site" class="pointer" style="text-decoration:none">'+'<div class="">'+'</div>'+
					                       '<div style="margin-left:30px;" class="left btn-blue-lt1">'+'</div>'+
					                       '<div class="left btn-blue-mid btn-blue-text">'+continueAlt+'</div>'+
					                       '<div class="left btn-blue-rt1">'+'</div>'+'</a>'+
					                       '<div class="clear"></div>'+
					                       '</div>'+
									 ' </div>'+

					'</div>'+
					'<div class="bg-layer-bot-lg">'+'</div>'+
					'</div>'
					document.body.appendChild(popUpDiv);
					break;
				
			}		
		showOverLay(idGroup,stat,zValue-100);		
		}
	
else {
	try{
		showOverLay(idGroup,stat,zValue-100);	   
	}catch(e){}
	}
}


function isIE6()
{
	if ((vIE() < 7) && (vIE()!=-1) ) 
		return true;
	else false;
}
 
function vIE(){
return (navigator.appName=='Microsoft Internet Explorer')?parseFloat((new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})")).exec(navigator.userAgent)[1]):-1;
}

function getSelectBoxBody(id,stat)
{
	if(stat)//show i.e hide select
	{
		for(var i=0; i<document.body.childNodes.length;i++)
		{
			if(document.getElementById(id)  ==  document.body.childNodes[i] )
					setSelectBox( document.body.childNodes[i],true,id);
			else setSelectBox( document.body.childNodes[i],false,id);
			
 
			
			if(document.body.childNodes[i].type && document.body.childNodes[i].type=='select-one')
			{
				document.body.childNodes[i].style.visibility =  !stat?"visible":"hidden";
			}
		}
	}
	else
	{
	var dispEle = document.body;
		for(var i=0; i<document.body.childNodes.length;i++)
		{
			
			
			
			if(document.body.childNodes[i].style && document.body.childNodes[i].style.display !="none"  )
				{
					if( document.body.childNodes[i].style.zIndex < document.getElementById(id).style.zIndex )
						{
						if(  dispEle.style  && dispEle.style.zIndex < document.body.childNodes[i].style.zIndex)
							try{
							dispEle = document.body.childNodes[i];
							}catch(e){}
						}
				}
			 
		}
		
		setSelectBox(dispEle,true,id);
	
	}

}

function setSelectBox(pnode,stat,id)
{

	
	for(var i=0; i< pnode.childNodes.length; i++)
		{
		if(!stat && pnode.childNodes[i] == document.getElementById(id) )
			{
			continue;
			}
		if(pnode.childNodes[i].type && pnode.childNodes[i].type=='select-one')
			{
				try{
				pnode.childNodes[i].style.visibility =  stat?"visible":"hidden";
				}catch(e){}
			}
			setSelectBox(pnode.childNodes[i],stat,id);
		}
	 
}

function getBlurBackground(idGroup,zi)
{
	return '<div id="'+idGroup+'Background" class="blurBg" style="z-index:'+(zi-1)+';">&nbsp;</div>';
}

function iebody() //will be called only for Internet explorer.
{
    // Sense the difference between Strict and Quirks mode
    return (document.compatMode != "BackCompat"? document.documentElement : document.body);
}



 
function findFocusEle(handle,tag )
{
for (var i=0;i<handle.childNodes.length;i++ )
{
   if(handle.childNodes[i].tagName && handle.childNodes[i].tagName.toUpperCase()==tag.toUpperCase())
	 {
	   return handle.childNodes[i];
	 }
	var m = findFocusEle(handle.childNodes[i],tag);
	if(m)return m;
}
return false;
}
function getFocus(id)
{
var m = findFocusEle($(id),"input");
if(m && m.focus){m.focus();return m;}
m = findFocusEle($(id),"a");
if(m && m.focus){m.focus();return m;}
return false;
}



function insertBackground(idGroup,zValue)
{
if(!idGroup)return;

	var	bgDiv = document.getElementById(idGroup+"Background_parent");
if(bgDiv==null)
{
		bgDiv=document.createElement('div');
		bgDiv .setAttribute('id',idGroup+"Background_parent");
        bgDiv .setAttribute('bgForId',idGroup+"");
        bgDiv .setAttribute('class',"background_parent");
        bgDiv .setAttribute('zValue',zValue);

        bgDiv .innerHTML =getBlurBackground(idGroup,zValue);
	document.body.appendChild(bgDiv);
}
}



function showOverLay(idGroup,stat,zValue)
{ var tp;
	if(!zValue)
	{
		zValue=30;
	}
		zValue += 5000;
	if(stat)
	{
			//document.getElementById(idGroup).style.display="block";
			//document.getElementById(idGroup).style.zIndex= zValue-1+100;
			//document.getElementById(idGroup).style.top="0px";
			insertBackground(idGroup,zValue);
		
			document.getElementById(idGroup+"Background").style.top="0px";
			document.getElementById(idGroup+"Background").style.zIndex = zValue-1+100;
			document.getElementById(idGroup+"Background").style.visibility="visible";
			document.getElementById(idGroup+"Background").style.display="block";
			document.getElementById(idGroup+"").style.visibility="visible";
			document.getElementById(idGroup+"").style.display="block";
			document.getElementById(idGroup+"").style.zIndex = zValue+100;
			document.getElementById(idGroup+"").style.margin="0";
			if(isIE6() ||document.getElementById(idGroup+"").clientHeight == 0 || document.getElementById(idGroup+"").clientHeight+40>iebody().clientHeight )
				{
					document.getElementById(idGroup+"").style.position='absolute';										
					if(document.getElementById(idGroup+"").clientHeight == 0)
						 document.getElementById(idGroup+"").style.top=($(window).scrollTop())+"px";
					else {
						 tp = ((iebody().clientHeight - document.getElementById(idGroup+"").clientHeight)/2 + $(window).scrollTop());
						document.getElementById(idGroup+"").style.top=(tp<40?40:tp)+"px";						
					}

					tp = (iebody().clientWidth - document.getElementById(idGroup+"").clientWidth)/2;
					tp=tp<0?0:tp;
					document.getElementById(idGroup+"").style.left=tp+"px";
					document.getElementById(idGroup+"Background").style.position='absolute';
					document.getElementById(idGroup+"Background").style.width= document.body.scrollWidth + "px";
					document.getElementById(idGroup+"Background").style.height= (_layersBgExtraHeight+document.body.scrollHeight) + "px";			
				}
			else{
					document.getElementById(idGroup+"").style.position='fixed';
					document.getElementById(idGroup+"").style.top=((iebody().clientHeight - document.getElementById(idGroup+"").clientHeight)/2 )+"px";
					tp=(iebody().clientWidth - document.getElementById(idGroup+"").clientWidth)/2;
					tp=tp<0?0:tp;
					document.getElementById(idGroup+"").style.left=tp+"px";

					document.getElementById(idGroup+"Background").style.position='fixed';
					document.getElementById(idGroup+"Background").style.width= iebody().clientWidth+ "px";
					document.getElementById(idGroup+"Background").style.height= (_layersBgExtraHeight+ iebody().clientHeight) + "px";			
 				}
			



	}
	else  {
 
		document.getElementById(idGroup+"").style.visibility="hidden";
		document.getElementById(idGroup+"").style.display="none";		
		document.getElementById(idGroup+"Background").style.visibility="hidden";
		document.getElementById(idGroup+"Background").style.display="none";
	}

	try{
		if(isIE6())
			getSelectBoxBody(idGroup,stat);			
	
	}catch(e){}
	try{
	getFocus(idGroup);
	}catch(e){}
}



function addCSSStyle(cssText){
		//var css = 'h1 { background: red; }',
		var head = document.getElementsByTagName('head')[0];
		var style = document.createElement('style');

	style.type = 'text/css';
	if (style.styleSheet){
	  style.styleSheet.cssText = cssText;
	} else {
	  style.appendChild(document.createTextNode(cssText));
	}

	head.appendChild(style);

}



function printElement(mainTextId,titleText)
{
if(!titleText) titleText="";


var printDiv;
if(document.getElementById("printData"))
	printDiv= document.getElementById("printData");
else {
		printDiv= document.createElement('div');
		printDiv.setAttribute('id','printData');
		document.body.appendChild(printDiv);
	 }

printDiv.innerHTML = '<table id="printDisplayTrueDiv" class="printDisplayTrue"> <tr><td scope="row" ><b> <i><h1>'+titleText+'<br /></h1></i> </b><hr /></td></tr>'+
						'<tr><td scope="row">'+document.getElementById(mainTextId).innerHTML+'</td></tr></table>';

try{

addCSSStyle("@media  print{  body>*{display:none!important} #printData{display:block!important}  }    @media screen{  #printData{display:none} }");


}catch(e){}


window.print();
}


try{
$(window).resize(function() {
try{
$(".blurBg:visible").each(function(a){showOverLay($(this).parent().attr("bgForId"),true,$(this).parent().attr("zValue"))});
}catch(e){}
})

}catch(e){}

