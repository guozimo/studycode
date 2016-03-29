//****************************************************
// Filename             : table.js
// Short description   : 数据表格
// Author           : Yang Fan
// E-Mail           : albertyang@263.net
// Version          : v1.2
// Last Modified      : 2002.12.12
//****************************************************
var h=1;
var h1;
var db;
var m="" ;
var ml;
var n;
var l;
var a;
var mm=new Array();

var SummitFile;
//row 行 colum列
var MainListTableRow,MainListTableCol,MainListTableName;
var MainListColName=new Array();
//主表列名称 每一列的列头
var mainListcolshowvalue;
//主表列展示的值
var mainListcoltruevalue;
var mainListcolclassify;
//主表列分类

var MainListBizName=new Array();
var MainListColText=new Array();
//每一列的内容
var MainListColStyle_Event=new Array();
//每一列的样式事件
var MainListColWidth=new Array();
//每一列的列宽
var MainListColAlign=new Array();
//列宽对齐
var MainListColIcon=new Array();
//图标数组
//2014.9.29 吕斌 add
var MainListColShowValueStyle=new Array();//显示值样式

var MainListColshowvalue=new Array();
var    MainListColtruevalue=new Array();
//列真值
var MainListColclassify=new Array();
//聚类标识，即一列多值情况，值间用逗号间隔
var MainListColKind=new Array();
//列的种类
var MainListColMerge=new Array();//合并格
var showvalueArray =new Array();
//展示值数组
var truevalueArray =new Array();
//真值的数组
var MainListColVisible =new Array();
//可见列
var MainListConfirmText =new Array();
//确定文本

var mainListcolshowimage;
var MainListColshowImage=new Array();

var MainListColChildPageTarget=new Array();
//列的子页目标
var PostValue=new Array();
//投递值
var AlarmFlag=new Array();
//报警
var MainListTableHeight;
//主表高度

var NoDataRowNum;
var NoDataRowNumber;
//数据行数字

var MainListInitValue=new Array();
//初始化值
var showMainListInitValue;
var backData=new Array();

//返回数据

var MainListTableHTML;
//表格页面
var MainListTableKind;
//表格种类
var SummitFileName;
//峰会文件名

var command;
//命令
var commandcol;
//命令列
var taskFramePN;
//任务框架PN
var PoolName;
//池名
var MainListTableTakeData;
//表格拿去数据
var MainListTableCurrentOrderby;
//表格当前排序依据
var FileSummitFileName=new Array();
//文件峰会名字
var Filecommand=new Array();
//文件命令
var FiletaskFramePN=new Array();
//文件任务框架PN
var FilePoolName=new Array();
//文件池名字
var FileTakeData=new Array();
//文件拿取数据
var MainListColShowColorFieldPN=new Array();
//列展示颜色领域PN
var MainListColShowColor=new Array();
//列展示文件
var MainListColRowSelectForbidCondition=new Array();
//行列选择避免条件
var MainListColCheckBoxSelectForbidConditionFieldName=new Array();
//列 选择避免条件文件名
var MainListColCheckBoxSelectForbidCondition=new Array();
//列选择框避免条件
var MainListFileName = "";
//文件名称
var MainListLabelText = "";
//标签名文档
var MainListColflag=new Array();
//列标识
var curPageSize = 0;
//当前页的长度
//var newColor    = "#75B3EC";
//var oddColColor ="#EDF6FF";
//var evenColColor ="#E2E3DE";

var newColor;
//新颜色
var oddColColor;
//奇数列颜色
var evenColColor;
//偶数列颜色
var oddColColorStyle_Event="";
//偶数列颜色事件
var evenColColorStyle_Event="";
//奇数列颜色事件
var newColorStyle_Event="";
//新颜色事件

var tar="";

var targetWindow="_blank";
//目标窗口

//获得skin路径
var skinpath=getSkinPath();
//获取CSS样式的路径

var MainListCheckBox_Check = new Image();
//选择框选择
var MainListCheckBox_Uncheck = new Image();
//选择框不选择
var MainListCheckBox_Disabcheck = new Image();
//选择框不能选择
MainListCheckBox_Check.src=skinpath+"image/imagejs/checkbox_check.gif";
//选择框选择的图片路径
MainListCheckBox_Uncheck.src=skinpath+"image/imagejs/checkbox_uncheck.gif";
//选择框不能选择的路径
MainListCheckBox_Disabcheck.src=skinpath+"image/imagejs/checkbox_disabcheck.gif";
var MainListRadioBox_Check = new Image();
//单选框图片
var MainListRadioBox_Uncheck = new Image();
//单选框不选择
var MainListRadioBox_Disabcheck = new Image();
//单选框不能选择
MainListRadioBox_Check.src=skinpath+"image/imagejs/radio_check.gif";
MainListRadioBox_Uncheck.src=skinpath+"image/imagejs/radio_uncheck.gif";
MainListRadioBox_Disabcheck.src=skinpath+"image/imagejs/radio_disabcheck.gif";
var MainListFile = new Image();
//列表文件图片
MainListFile.src=skinpath+"image/imagejs/fujian1.gif";
//列对象数组
var MainTableColArray=new Array();
//表格列数组

var mainlisttablewidth;

//表格宽度
var backData=new Array();
//返回值
var MainListShowConditionColor=new Array();

//显示颜色的条件
var MainListColShowConditionBGColor= new Array();
//列展示背景颜色条件
var MainListColShowConditionColor=new Array();
//列展示颜色条件
var ifradio;
var OpenType1;
//提交后的数据名为： tabledata_列名_行号
var GroupPageAArray = new Array();
//页面组A
var GroupPageOArray = new Array();
//页面组O

var MainTableStyle_Event="";
//表格样式事件
var MainTableBodyTdStyle_Event="";
//表格样式body中td的样式
var Main3RowTableStyle_Event="";
var MainTableHeadRowTableStyle_Event="";
//表格头行表格样式事件
var MainTableHeadColTableStyle_Event="";
//表格头列表格样式事件

var MainTableHeadRowTop = new Array();
//定义tr到第一个BODY的距离

var MainTableStaticOderby = new Array();
//定义去重后的数组
var MainTableStaticOderbyTemp = new Array();
//定义去重后的数组 end
var xilineselectedID="";
var xilineselectedTableName="";

var ShowTypes = "";
var ThisOndblclick ; //当前双击的行
var mainTableHeadRowNum = ''; //表头行数
var MainTableStaticSortRow = new Array(); //当前选择行的序号列表
var MainTableAfterFun = ''; //AfterFun函数
//************************************************************************
//局部刷新 2013.10.15 张家林 add

var RefreshInterval=0;
var RefreshCommand="";
var RefreshFrame="";
var RefreshModelIDPN="";
var isRefreshTableData=0;
var timer;
var RefreshUrl ="";
var ManiListTable_Attribute = [];
var PagesRecords_Attribute = [];

//************************************************************************

function SetMainListTableStyleAndEvent(style)
{
	MainTableStyle_Event=getStrVariableValue(style);
}

function SetMainListTableBodyTdStyleAndEvent(style)
{
	MainTableBodyTdStyle_Event=getStrVariableValue(style);
}

function SetMainTableHeadRowTableStyleAndEvent(style)
{
	MainTableHeadRowTableStyle_Event=getStrVariableValue(style);
}

function SetMainTableHeadColTableStyleAndEvent(style)
{
	MainTableHeadColTableStyle_Event=getStrVariableValue(style);
}

var HeadRivet=0;
var Rivet=0;
var RivetCol=1;
var RivetColNum=1;
//设置固定的列
function SetColRivet(RCol,RColNum)
{
	RivetCol=RCol;
	RivetColNum=RColNum;
}
function ColRivet(RCol,RColNum)
{
	var RHtml="";
	RHtml+="<table id=ListTable2 border=0 class=tablecellspacing2 cellpadding=0 cellspacing=1 style=position:absolute;>";
	for (i=MainTableHeadRowNum-1;i<=MainTableHeadRowNum+MainListTableRow-1;i++)
	{
		if(i==MainTableHeadRowNum-1)
			RHtml+="<tr>";
		else
			RHtml+=document.getElementById("ListTable").rows[i].outerHTML.replace(document.getElementById("ListTable").rows[3].innerHTML,"").substring(0,document.getElementById("ListTable").rows[i].outerHTML.replace(document.getElementById("ListTable").rows[i].innerHTML,"").length-5)
		for(j=0;j<(parseInt(MainTableColNum)+parseInt(RColNum));j++)
			RHtml+=document.getElementById("ListTable").rows[i].cells[j].outerHTML
		RHtml+="</tr>";
	}
	RHtml+="</table>";
	//MainListTableHTML=MainListTableHTML.replace("<!-- RHtml -->\n",RHtml);
	//document.writeln(RHtml);
	document.getElementById("shs").insertAdjacentHTML("afterBegin",RHtml);
	document.getElementById("shs").style.top="-1"
	document.getElementById("shs").style.left="-1"
	for(var i=0;i<MainTableHeadEndArray.length;i++)
	{
		if(MainTableHeadEndArray[i].kind.toLowerCase()=="xilineselected")
			selectedcol=i
	}
	for(jj=1;jj<=MainListTableRow;jj++)
	{
		ContentHTML="<img name='"+MainListTableName+"checkimage_"+jj+"_1' src='";
		if(MainListInitValue[jj][1]=="1")
		{
			//判断是否是单选框
			if(ifradio==0&&(OpenType1==0||OpenType1==1||OpenType1==3))
				ContentHTML+=MainListCheckBox_Check.src;
			else if(ifradio==1&&(OpenType1==0||OpenType1==1||OpenType1==3))
				ContentHTML+=MainListRadioBox_Check.src;
			MainListColflag[jj]=1;
		}
		else
		{
			//判断是否是单选框
			if(ifradio==0&&(OpenType1==0||OpenType1==1||OpenType1==3))
				ContentHTML+=MainListCheckBox_Uncheck.src;
			else if(ifradio==1&&(OpenType1==0||OpenType1==1||OpenType1==3))
				ContentHTML+=MainListRadioBox_Uncheck.src;
			MainListColflag[jj]=0;
		}

		ContentHTML+="'";
		ContentHTML+="";
		ContentHTML+=">\n";
		ContentHTML+="<input type='text' style='display:none' name='"+MainListTableName+"_"+jj+"_1' id='"+MainListTableName+"_"+jj+"_1' value=\"";
		if(MainListColflag[jj]==0){ContentHTML+=0;}
		else if(MainListColflag[jj]==1) {ContentHTML+=MainListInitValue[j][1];}
		ContentHTML+="\">\n";
		var tr=document.getElementById("ListTable2").rows[jj]
		document.getElementById("ListTable2").rows[jj].cells[selectedcol].insertAdjacentHTML("afterBegin",ContentHTML);
		//document.getElementById("ListTable2").rows[jj].attachEvent("onclick",function(){setrowColor1(tr);});
		//alert(tr.outerHTML)
	}
}

function ColR(o)
{
	if(document.getElementById("ListTable2")!=null)
	{
//    if(o.scrollLeft==0)
//       document.getElementById("ListTable2").style.display="none";
//    else
//       document.getElementById("ListTable2").style.display="block";
		if((document.getElementById("ListTable2").style.display=="block"||document.getElementById("ListTable2").style.display=="")&&typeof(o)=="undefined")
		{
			document.getElementById("ListTable2").style.display="block";
			document.getElementById("ListTable2").style.left=document.getElementById("ListTable").rows[MainTableHeadRowNum].cells[0].offsetLeft
		}
		else if(typeof(o)!="undefined")
		{
//       if(o.scrollLeft==0)
//       {
			document.getElementById("ListTable2").style.left=o.scrollLeft
//       }
		}
		else
			document.getElementById("ListTable2").style.left=document.getElementById("ListTable").rows[MainTableHeadRowNum].cells[0].offsetLeft

		document.getElementById("ListTable2").style.top=document.getElementById("ListTable").rows[MainTableHeadRowNum-1].offsetTop//+document.getElementById("stattablediv_"+MainListTableName).offsetTop-1


		for(i=0;i<document.getElementById("ListTable2").rows.length;i++)
		{
			for(j=0;j<document.getElementById("ListTable2").rows[i].cells.length;j++)
			{
				if(RivetColNum==1) RivetColNum1=1
				else RivetColNum1=RivetColNum-1;

				document.getElementById("ListTable2").rows[i].cells[j].width=document.getElementById("ListTable").rows[i+parseInt(MainTableHeadRowNum)-1].cells[j+parseInt(RivetColNum1)-1].clientWidth
				if(i==0)
					document.getElementById("ListTable2").rows[i].cells[j].height=document.getElementById("ListTable").rows[i+parseInt(MainTableHeadRowNum)-1].cells[j].offsetHeight
				else
					document.getElementById("ListTable2").rows[i].cells[j].height=document.getElementById("ListTable").rows[MainTableHeadRowNum].cells[j].height
				//alert(document.getElementById("ListTable1").rows[i].cells[j].width)
			}
		}
	}
}

//建立对象
function ChildPageObj()
{
	this.tablename;
	this.attributename;
	this.attribute;
	this.DblClickType;
}

function ChildPageAttribute()
{
	this.target;
	this.top;
	this.left;
	this.width;
	this.height;
	this.resizable;
	this.location;
	this.status;
	this.menubar;
	this.scrollbars;
	this.center;
}

var maintableShowTickComparePN; //回显时勾选比较字段
var maintableShowTickCompareValue; //回显时勾选比较值  如果勾选比较字段对应的值在勾选比较值中，则显示时自动打勾,只使用与有checkbox的情况
var maintableShowTickComparePNColNum;//得到的比较列号

function StartManiListTable(name,width,height,DblClickType,summitFile,com,Frame,ConnectionPoolName,TakeData,OddColColor,EvenColColor,SelectColor,cellpadding,cellspacing,col,targetA,ShowType,ShowColorType,scrollflag,CurrentOrderby,NoDataRowNum,row,refreshInterval,refreshCommand,refreshFrame,refreshModelIDPN,OpenType,OpenName,AfterFun,ShowTickComparePN,ShowTickCompareValue)
//创建表格
//name:表格名
//row：行数
//col:列数
{
	if(isRefreshTableData == 0)
	{
		for(var i=0;i<arguments.length;i++)
		{
			ManiListTable_Attribute.push(arguments[i]);
		}

		if(refreshInterval.length == 0)  RefreshInterval=0;
		else  RefreshInterval=parseInt(refreshInterval);

		if(refreshCommand.length != 0)
			RefreshCommand=refreshCommand;

		if(refreshFrame.length != 0)
			RefreshFrame=refreshFrame;

		if(refreshModelIDPN.length !=0)
			RefreshModelIDPN=refreshModelIDPN;

		MainListTableHeight=height;
		SummitFile=summitFile;
		tar=OpenName;

		if(ShowTickComparePN!="")    maintableShowTickComparePN=ShowTickComparePN;
		if(ShowTickCompareValue!="") maintableShowTickCompareValue=ShowTickCompareValue;

		mainlisttablewidth=width;
		SummitFileName=summitFile;
		command=com;
		taskFramePN=Frame;
		PoolName=ConnectionPoolName;
		MainListTableTakeData=TakeData;
		MainListTableCurrentOrderby=CurrentOrderby;

		var MainTableChildPageTarget=targetA;

		// if(OddColColor.length!=0)oddColColor=OddColColor;
		// if(EvenColColor.length!=0)evenColColor=EvenColColor;
		// if(SelectColor.length!=0)newColor=SelectColor;

		oddColColor=getTextBeforeComma(OddColColor);
		evenColColor=getTextBeforeComma(EvenColColor);
		newColor=getTextBeforeComma(SelectColor);

		oddColColorStyle_Event=getAttriAfterComma(OddColColor);
		evenColColorStyle_Event=getAttriAfterComma(EvenColColor);
		newColorStyle_Event=getAttriAfterComma(SelectColor);

		//选框的显示方式默认值
		ShowTypes = ShowType;
		if(ShowType.length==0&&(OpenType==0||OpenType==3)){ ifradio=0; }
		else if(ShowType.length==0&&OpenType==1){ ifradio=1; }
		else { ifradio=ShowType.split(",")[0]; }
		OpenType1=OpenType;

		//是否有下拉滚动条
		if(scrollflag.length==0) scrollflag=0;

		if (width==0) { MainListTableKind=0; }
		else if (width<0){ MainListTableKind=2; }
		else { MainListTableKind=1; }

		width=Math.abs(width);
	}


	MainListTableHTML="";//MainListTableHTML+="<body onload='minit();'>";
	//if (MainListTableKind==2)
	if (false)
	{
		MainListTableHTML+="<table class=mltablebox width="+width+"% height="+height+"% border=0 cellpadding=0 cellspacing=0>\n";
		MainListTableHTML+="<tr style='height:0px'><td><!-- TopPagesRecords -->\n</td></tr>\n";
		MainListTableHTML+="<tr><td width=100% height=100%><table class=mltablemain width=100% height=100% border=0 cellpadding=0 cellspacing=0 style=table-layout:fixed;>\n";
		MainListTableHTML+="<tr><td><div id=stattablediv_"+name+" class=stattablediv style='overflow:hidden;width:100%;height:100%;'>\n";
		MainListTableHTML+="<div style=width:100%;overflow:hidden;visibility:hidden;position:absolute; id='hs'>\n";
		MainListTableHTML+="<table class=tableheadcellspacing border=0 cellpadding=0 cellspacing=0 id='headers' style=table-layout:fixed;>\n";
		MainListTableHTML+="<!-- TableHead -->\n";
		MainListTableHTML+="</table></div>\n";
		MainListTableHTML+="<div style=width:100%;height:100%;overflow:auto; id='ds'>\n";
		//MainListTableHTML+="<table class=tablecellspacing width=100% border=0 cellpadding=0 cellspacing=0 style=table-layout:fixed; id='ListTable'>\n";
		//2013.5.3 吕斌 add

		MainListTableHTML+="<table class=tablepagesrecords width=100% border=0 cellpadding=0 cellspacing=1 id='ListTable'>\n";
		MainListTableHTML+="<!-- TableHead1 -->\n";
		MainListTableHTML+="<!-- TableCode1 -->\n";
		MainListTableHTML+="<!-- TableCode -->\n";
		MainListTableHTML+="<!-- TableCode2 -->\n";
		MainListTableHTML+="<!-- TableEnd -->\n";
		MainListTableHTML+="</table></div>\n";
		MainListTableHTML+="</div></td></tr></table></td></tr>\n";
		MainListTableHTML+="<!-- RHtml -->\n";
		MainListTableHTML+="<tr style='height:0px'><td><!-- EndPagesRecords -->\n</td></tr>\n";
		MainListTableHTML+="</table>\n";
	}
	else
	{
		MainListTableHTML+="<div id=stattablediv_"+name+" "+MainTableStyle_Event+" class=stattablediv style='";

		if (width>0) //MainListTableHTML+="overflow:auto;  width:"+width+"; ";
		{
			MainListTableHTML+="overflow:hidden; ";
			//MainListTableHTML+="<!-- MainListTableWidth -->\n";
			if(HeadRivet==1||Rivet==1)
				MainListTableHTML+="width:100%;";
			else if(HeadRivet==0)
				MainListTableHTML+="width:"+width+"%;";
		}
		//if (height>0) MainListTableHTML+="height:"+(height+20)+"; ";
		if (height>0&&scrollflag==1) MainListTableHTML+="height:"+height+"%; ";
		//MainListTableHTML+="position:relative;  ";
		MainListTableHTML+="'>\n";

		//设置默认值cellpadding,cellspacing
		if(cellpadding.length==0)cellpadding=0;
		//if(cellspacing.length==0)cellspacing=0;
		if(MainListTableKind==0){
			cellspacing=0;
			document.write("<style type='text/CSS'>");
			document.write("#ListTable { border-top: solid 1px #ccc;  border-left: solid 1px #ccc; }");
			document.write("#ListTable thead td { border-bottom: solid 1px #ccc;  border-right: solid 1px #ccc;}");
			document.write("#ListTable tbody td { border-bottom: solid 1px #ccc;  border-right: solid 1px #ccc;}");
			document.write("</style>");
		}
		else if(cellspacing.length==0){ cellspacing=1; }

		//MainListTableHTML+="<table border=0 cellpadding=0 cellspacing=0 style='background:#000000;'><tr><td>\n"
		//MainListTableHTML+="<table ID='ListTable' class=stattable border=0 cellpadding=0 cellspacing=1>\n";
		//MainListTableHTML+="<!-- TableHead -->\n";
		//MainListTableHTML+="<!-- TableCode -->\n";
		//MainListTableHTML+="</table></td></tr><tr><td align=left></td></tr></table>";

		//MainListTableHTML+="<table border=0 style='width:100%;'><tr><td style='width:100%;'>\n";
		MainListTableHTML+="<!-- TopPagesRecords -->\n";
		MainListTableHTML+="<!-- TopPageImgButton -->\n";
		//MainListTableHTML+="</td></tr></table>";
		if(HeadRivet==0&&Rivet==0)
		{
			MainListTableHTML+="<div style=width:100%;overflow:hidden;visibility:hidden;position:absolute; id='hs' >";
			MainListTableHTML+="<table " + MainTableHeadRowTableStyle_Event + " border=0 class=tableheadcellspacing cellpadding="+cellpadding+" cellspacing="+cellspacing+" ID='headers'>";
			MainListTableHTML+="<!-- TableHead -->\n";
			MainListTableHTML+="</table></div>\n";
		}
		if(Rivet==1)
		{
			//MainListTableHTML+="<div style=width:100%;height:93%;overflow:hidden;visibility:visible;position:absolute; id='shs' >";
			//2013 4.20 吕斌update
			MainListTableHTML+="<div style=width:100%;overflow:hidden;visibility:visible;position:absolute; id='shs' >";
			MainListTableHTML+="</div>\n";
			MainListTableHTML+="<div style=width:100%;overflow:auto;overflow-y:hidden; id='ds'>";
		}
		else
		{
			if(height<=100){
				//2013 4.20 吕斌update
				//MainListTableHTML+="<div style='width:100%;height:93%;overflow:auto;' id='ds'>";
				MainListTableHTML+="<div style='width:100%;overflow:hidden;' id='ds'>";
			}
			else
				MainListTableHTML+="<div style='width:100%;overflow:auto;' id='ds'>";
		}

		MainListTableHTML+="<table border=0 " + MainTableStyle_Event + " class=tablecellspacing cellpadding="+cellpadding+" cellspacing="+cellspacing;
		if(Rivet==1||HeadRivet==1) MainListTableHTML+=" width="+width+"%";
		else if(HeadRivet==0)      MainListTableHTML+=" width=100%";
		MainListTableHTML+=" ID='ListTable'>";

		MainListTableHTML+="<!-- TableHead1 -->\n";
		//lili added on 2010.05
		MainListTableHTML+="<!-- TableCode1 -->\n";
		MainListTableHTML+="<!-- TableCode -->\n";
		MainListTableHTML+="<!-- TableCode2 -->\n";
		MainListTableHTML+="<!-- TableEnd -->\n";
		MainListTableHTML+="</table>";

		if(HeadRivet==1)
			MainListTableHTML+="<!-- TableCode1 -->\n";
		MainListTableHTML+="<!-- RHtml -->\n";
		MainListTableHTML+="<!-- EndPagesRecords -->\n";

		MainListTableHTML+="</div>\n";


		MainListTableHTML+="</div>";
	}

	//TableHTML+="</div>\n";
	//TableHTML+="</form>\n";
	//TableHTML+="<div onclick='statform_"+name+".submit();' style='cursor:hand;'><img src=submit.gif></div>\n";
	//TableHTML+="<img src=submit.gif onclick='document.all(\"statform_"+name+"\").submit();'>\n";
	//上面那行是一个提交按钮，这里用的是一个图片，其实可以做成任何形状任何对象，甚至不需要在form里都可以

	//判断打开窗口所在的位置和无记录时显示的空行数
	if(NoDataRowNum.length==0)NoDataRowNum=5;

	var ChildPageA = new ChildPageAttribute();
	var ChildPageO = new ChildPageObj();

	//添加组对象
	ChildPageA.target = MainTableChildPageTarget
	GroupPageAArray.push(ChildPageA);

	ChildPageO.name = name;
	ChildPageO.attributename = "childpage";
	ChildPageO.attribute = GroupPageAArray;
	ChildPageO.DblClickType=DblClickType;
	GroupPageOArray.push(ChildPageO);

	MainListTableRow=row;NoDataRowNumber=NoDataRowNum;
	//MainListTablCol=col;
	curPageSize=row;
	MainListTableName=name;
	for (i=1;i<=row;i++)
		if(MainListInitValue[i] == null)
			MainListInitValue[i]=new Array();
	//for (i=1;i<=row;i++) ReadOnlyValue[i]=new Array();
	//for (i=1;i<=row;i++) MainListHiddenValue[i]=new Array();


	//MainListTableHTML+="<input type='hidden' name="+MainListTableName+"tableCol  value="+MainListTablCol+" ><input type='hidden' name=colname   value="+MainListTableName+" ><input type='hidden' name="+MainListTableName+"tableRow   value="+MainListTableRow+" >";
	MainListTableHTML+="<input type='text' style='display:none' name="+MainListTableName+"tableCol id="+MainListTableName+"tableCol  value=<!-- MainListTablCol --> ><input type='text' style='display:none' name=colname id=colname   value="+MainListTableName+" ><input type='text' style='display:none' name="+MainListTableName+"tableRow id="+MainListTableName+"tableRow value="+MainListTableRow+" >";
	//存放放大镜弹出列表所需参数
	if(OpenType1==1||OpenType1==3)
	{
		MainListTableHTML+="<input type='text' style='display:none'  name='opentype' id='opentype' value='"+OpenType1+"'>";
		MainListTableHTML+="<input type='text' style='display:none'  name='colname' id='colname' value='"+OpenName+"'>";
	}
	//存放列表显示行数所需参数
	MainListTableHTML+="<input type='text' style='display:none'  name='linesperpage' id='linesperpage' value='"+NoDataRowNum+"'>"
	//存放排序字段持久化名
	MainListTableHTML+="<input type='text' style='display:none'  id='orderbyname' name='orderbyname' value='"+CurrentOrderby+"'>";

	MainListTableHTML+="<input type='text' style='display:none'  id=tabletype_"+name+" name=tabletype_"+name+" value='MainListTable'>";
	//MainListTableHTML+="</body>"
	//alert(MainListTableHTML)
	document.onclick=MenuOnClick;

	MainTableAfterFun = AfterFun; //2013.12.18 吕斌add
}
//********************************************************************************************************
var FristPageMoveOutPicture="";
var FristPageMoveInPicture="";
var FristPageMoveDownPicture="";
var FristPageNoUsePicture="";
var PrevPageMoveOutPicture="";
var PrevPageMoveInPicture="";
var PrevPageMoveDownPicture="";
var PrevPageNoUsePicture="";
var NextPageMoveOutPicture="";
var NextPageMoveInPicture="";
var NextPageMoveDownPicture="";
var NextPageNoUsePicture="";
var LastPageMoveOutPicture="";
var LastPageMoveInPicture="";
var LastPageMoveDownPicture="";
var LastPageNoUsePicture="";
//表记录数
//Command命令

//IsDisp是否有权限显示
function creatMPagesRecords(
	type, pageNumber,showInput,
	place,TextFont,TextSize,TextColor
	,Command,SetInitValue,isPage,isDisp,lines,languageClass)
{
	if(isRefreshTableData == 0)
	{
		PagesRecords_Attribute = [];
		for(var i=0;i<arguments.length;i++){
			//console.log(arguments[i]);
			PagesRecords_Attribute.push(arguments[i]);
		}

		//默认值
		if(FristPageMoveOutPicture=="")FristPageMoveOutPicture=skinpath+"image/niu/sy-1.jpg";
		if(FristPageMoveInPicture=="")FristPageMoveInPicture=skinpath+"image/niu/sy-3.jpg";
		if(FristPageMoveDownPicture=="")FristPageMoveDownPicture=skinpath+"image/niu/sy-3.jpg";
		if(FristPageNoUsePicture=="")FristPageNoUsePicture=skinpath+"image/niu/sy-3.jpg";
		if(PrevPageMoveOutPicture=="")PrevPageMoveOutPicture=skinpath+"image/niu/qy-1.jpg"
		if(PrevPageMoveInPicture=="")PrevPageMoveInPicture=skinpath+"image/niu/qy-3.jpg"
		if(PrevPageMoveDownPicture=="")PrevPageMoveDownPicture=skinpath+"image/niu/qy-3.jpg"
		if(PrevPageNoUsePicture=="")PrevPageNoUsePicture=skinpath+"image/niu/qy-3.jpg"
		if(NextPageMoveOutPicture=="")NextPageMoveOutPicture=skinpath+"image/niu/hy-1.jpg";
		if(NextPageMoveInPicture=="")NextPageMoveInPicture=skinpath+"image/niu/hy-3.jpg";
		if(NextPageMoveDownPicture=="")NextPageMoveDownPicture=skinpath+"image/niu/hy-3.jpg";
		if(NextPageNoUsePicture=="")NextPageNoUsePicture=skinpath+"image/niu/hy-3.jpg";
		if(LastPageMoveOutPicture=="")LastPageMoveOutPicture=skinpath+"image/niu/my-1.jpg";
		if(LastPageMoveInPicture=="")LastPageMoveInPicture=skinpath+"image/niu/my-3.jpg";
		if(LastPageMoveDownPicture=="")LastPageMoveDownPicture=skinpath+"image/niu/my-3.jpg";
		if(LastPageNoUsePicture=="")LastPageNoUsePicture=skinpath+"image/niu/my-3.jpg";
	}

	var Type = type != "" ? type : "1";
//type缺省

	var PageNumber = pageNumber != "" ? parseInt(pageNumber) : 10;
	//console.log(PageNumber);
	var ShowInput = showInput != "" ? showInput : "1";

	//若页数小于2 则 重置PageNumber等于2
	PageNumber = PageNumber <= 2 ? 2 : PageNumber;

	var MPagesRecordsHTML,MPagesRecordsPlace;
	var disp=1;

	if(isDisp===0)
		disp=isDisp;

	MPagesRecordsPlace=place.split("-")[0];
	if((TextFont.length!=0||TextSize.length!=0||TextColor.length!=0)&&(TextFont.length+TextSize.length+TextColor.length)!=0)
	{
		if(TextFont.length==0)TextFont="黑体";
		if(TextSize.length==0)TextSize="16";
		if(TextColor.length==0)TextColor="#000000";
	}
	MPagesRecordsHTML="";
	MPagesRecordsHTML+="<table class=tablepagesrecords border=0 width=100% cellpadding=0 cellspacing=0><tr><td width=100%>\n";

	if (MainListTableKind!=2){
		MPagesRecordsHTML+="<div id='MPagesRecords' style=width:100%;height:100%;overflow:hidden;>";
	}
	MPagesRecordsHTML+="<table width=100% border=0 cellpadding=0 cellspacing=1><tr><td valign=\"middle\" align="+place.split("-")[1]+">";
	MPagesRecordsHTML+="<font class='pagerecords' id='cur' style='font-size: "+TextSize+"px;font-family: "+TextFont+";color:"+TextColor+"'>当前页: "+SetInitValue.split("|")[0]+"</font>";
	MPagesRecordsHTML+="<font class='pagerecords' id='tot' style='font-size: "+TextSize+"px;font-family: "+TextFont+";color:"+TextColor+"'>/"+SetInitValue.split("|")[1]+"</font>";
	//+SetInitValue.split("|")[1]+
	MPagesRecordsHTML+="<font class='pagerecords' style='font-size: "+TextSize+"px;font-family: "+TextFont+";color:"+TextColor+"'>&nbsp;&nbsp;共"+SetInitValue.split("|")[2]+"条记录</font>";

	MPagesRecordsHTML+="<input type='text' style='display:none' name='currentPage' id='currentPage' value="+SetInitValue.split("|")[0]+">";
	MPagesRecordsHTML+="<input type='text' style='display:none' name='totalPages' id='totalPages' value="+SetInitValue.split("|")[1]+">";
	MPagesRecordsHTML+="<input type='text' style='display:none' name='totalRds' id='totalRds' value="+SetInitValue.split("|")[2]+">";



	//添加占位并且赋值
	//第一条是匹配option中默认的那条
	//传递第一个到第四个参数
	MPagesRecordsHTML+="<input type='text' style='display:none' id='currentSize0' value="+lines.split("|")[0]+">";
	MPagesRecordsHTML+="<input type='text' style='display:none' id='currentSize1' value="+lines.split("|")[1]+">";
	MPagesRecordsHTML+="<input type='text' style='display:none' id='currentSize2' value="+lines.split("|")[2]+">";
	MPagesRecordsHTML+="<input type='text' style='display:none' id='currentSize3' value="+lines.split("|")[3]+">";
	MPagesRecordsHTML+="<input type='text' style='display:none' id='currentSize4' value="+lines.split("|")[4]+">";
	MPagesRecordsHTML+="<input type='text' style='display:none' id='currentSize5' value="+lines.split("|")[5]+">";
	MPagesRecordsHTML+="<input type='text' style='display:none' id='currentSize6' value="+lines.split("|")[6]+">";
	MPagesRecordsHTML+="<input type='text' style='display:none' id='currentSize7' value="+lines.split("|")[7]+">";
	MPagesRecordsHTML+="<input type='text' style='display:none' id='currentSize8' value="+lines.split("|")[8]+">";
	MPagesRecordsHTML+="<input type='text' style='display:none' id='currentSize9' value="+lines.split("|")[9]+">";





	//当前页 总页数 总条数
	//命令为空则无翻页按钮
	//console.log(SetInitValue.split["|"]);
	if(Command.length>0||Command!='')
	{
		//前;后;首;末页图片按钮控件
		//Prev|Next|Frist|Last
		//页标记：0-首页，1-前页，2-后页，3-末页 显示层对应变量：pageFlag
		MPagesRecordsHTML+="<input type='text' style='display:none' name='pageFlag' id='pageFlag' value=''>";
		MPagesRecordsHTML+="&nbsp;&nbsp;";

		if(disp==1)
		{
			//默认类型为1
			if(Type=="1"){
				//Frist
				if(isPage.split("|")[2]==1)
				{
					MPagesRecordsHTML+="<img title='首页'src='"+FristPageMoveOutPicture+"' onclick=\"setpoolname('"+PoolName+"');pageFlag_CMD('"+Command+"','0')\" onmouseover=this.src='"+FristPageMoveInPicture+"'   onmouseout=this.src='"+FristPageMoveOutPicture+"' onMouseDown=this.src='"+FristPageMoveDownPicture+"' onMouseUp=this.src='"+FristPageMoveInPicture+"' border=0 style='cursor:pointer;vertical-align:middle;'>&nbsp;&nbsp;";
				}
				else
				{
					MPagesRecordsHTML+="<img title='首页' src='"+FristPageNoUsePicture+"' style='vertical-align:middle;'>&nbsp;";
				}
				//Prev
				if(isPage.split("|")[0]==1)
				{
					MPagesRecordsHTML+="<img title='前一页' src='"+PrevPageMoveOutPicture+"' onclick=\"setpoolname('"+PoolName+"');pageFlag_CMD('"+Command+"','1')\" onmouseover=this.src='"+PrevPageMoveInPicture+"'   onmouseout=this.src='"+PrevPageMoveOutPicture+"' onMouseDown=this.src='"+PrevPageMoveDownPicture+"' onMouseUp=this.src='"+PrevPageMoveInPicture+"'     border=0 style='cursor:pointer;vertical-align:middle;'>&nbsp;&nbsp;";
				}
				else
				{
					MPagesRecordsHTML+="<img title='前一页' src='"+PrevPageNoUsePicture+"' style='vertical-align:middle;'>&nbsp;";
				}
				//Next
				if(isPage.split("|")[1]==1)
				{
					MPagesRecordsHTML+="<img title='后一页' src='"+NextPageMoveOutPicture+"' onclick=\"setpoolname('"+PoolName+"');pageFlag_CMD('"+Command+"','2')\" onmouseover=this.src='"+NextPageMoveInPicture+"'   onmouseout=this.src='"+NextPageMoveOutPicture+"' onMouseDown=this.src='"+NextPageMoveDownPicture+"' onMouseUp=this.src='"+NextPageMoveInPicture+"'     border=0 style='cursor:pointer;vertical-align:middle;'>&nbsp;&nbsp;";
				}
				else
				{
					MPagesRecordsHTML+="<img title='后一页' src='"+NextPageNoUsePicture+"' style='vertical-align:middle;'>&nbsp;";
				}
				//Last
				if(isPage.split("|")[3]==1)
				{
					MPagesRecordsHTML+="<img title='末页' src='"+LastPageMoveOutPicture+"' onclick=\"setpoolname('"+PoolName+"');pageFlag_CMD('"+Command+"','3')\" onmouseover=this.src='"+LastPageMoveInPicture+"'   onmouseout=this.src='"+LastPageMoveOutPicture+"' onMouseDown=this.src='"+LastPageMoveDownPicture+"' onMouseUp=this.src='"+LastPageMoveInPicture+"'      border=0 style='cursor:pointer;vertical-align:middle;'>&nbsp;&nbsp;";
				}
				else
				{
					MPagesRecordsHTML+="<img title='末页' src='"+LastPageNoUsePicture+"' style='vertical-align:middle;'>&nbsp;";
				}
			}
			else if(Type == "2"){//类型为2 类似百度
				var _tempPage = SetInitValue.split("|");

				MPagesRecordsHTML += '<a href="javascript:;" class="UnCurrentPage" onclick="ClickPageList(this,\''+Command+'\')">&lt;</a>';

				if(_tempPage[1] == '1'){ //1.只有一页
					MPagesRecordsHTML += '<a href="javascript:;" class="UnCurrentPage">1</a>';
				}
				else if(_tempPage[0] < PageNumber){//2.当前页小于分页数
					if(PageNumber < _tempPage[1]){//2.1 分页数小于总页数
						for(var p=1;p<=PageNumber;p++){
							if(_tempPage[0] == p){
								MPagesRecordsHTML += '<a href="javascript:;" class="CurrentPage" onclick="ClickPageList(this,\''+Command+'\')">'+p+'</a>';
							}
							else{
								MPagesRecordsHTML += '<a href="javascript:;" class="UnCurrentPage" onclick="ClickPageList(this,\''+Command+'\')">'+p+'</a>';
							}
						}
						//MPagesRecordsHTML += '<a href="javascript:;" class="CurrentPageText">......</a>';
						//MPagesRecordsHTML += '<a href="javascript:;" class="UnCurrentPage" onclick="ClickPageList(this,\''+Command+'\')">'+_tempPage[1]+'</a>';
					}
					else{//2.2 分页数大于等于总页数，以总页数为准
						for(var p=1;p<=_tempPage[1];p++){
							if(_tempPage[0] == p){
								MPagesRecordsHTML += '<a href="javascript:;" class="CurrentPage" onclick="ClickPageList(this,\''+Command+'\')">'+p+'</a>';
							}
							else{
								MPagesRecordsHTML += '<a href="javascript:;" class="UnCurrentPage" onclick="ClickPageList(this,\''+Command+'\')">'+p+'</a>';
							}
						}
					}
				}
				else if(parseInt(_tempPage[0])+PageNumber < _tempPage[1]){//3.当前页+分页数小于总页数
					//局部页面
					var remainderLeft = parseInt(_tempPage[0])%PageNumber;
					var remainderRight = parseInt(_tempPage[0]) + PageNumber - remainderLeft + 1;

					for(var p = parseInt(_tempPage[0]) - remainderLeft -1; p<= parseInt(_tempPage[0]); p++) {
						if(_tempPage[0] == p){
							MPagesRecordsHTML += '<a href="javascript:;" class="CurrentPage" onclick="ClickPageList(this,\''+Command+'\')">'+p+'</a>';
						}
						else{
							MPagesRecordsHTML += '<a href="javascript:;" class="UnCurrentPage" onclick="ClickPageList(this,\''+Command+'\')">'+p+'</a>';
						}
					}

					for(var p = parseInt(_tempPage[0])+1; p<remainderRight;p++){

						MPagesRecordsHTML += '<a href="javascript:;" class="UnCurrentPage" onclick="ClickPageList(this,\''+Command+'\')">'+p+'</a>';

					}

					//MPagesRecordsHTML += '<a href="javascript:;" class="CurrentPageText">......</a>';
					//MPagesRecordsHTML += '<a href="javascript:;" class="UnCurrentPage" onclick="ClickPageList(this,\''+Command+'\')">'+_tempPage[1]+'</a>';

				}
				else if(parseInt(_tempPage[0])+PageNumber >= _tempPage[1]){//4.当前页+分页数大于等于总页数
					//MPagesRecordsHTML += '<a href="javascript:;" class="UnCurrentPage" onclick="ClickPageList(this,\''+Command+'\')">1</a>';
					//MPagesRecordsHTML += '<a href="javascript:;" class="CurrentPageText">......</a>';

					if(PageNumber < _tempPage[1]){
						for(var p=parseInt(_tempPage[1])-PageNumber-1; p<=parseInt(_tempPage[1]); p++){
							if(_tempPage[0] == p){
								MPagesRecordsHTML += '<a href="javascript:;" class="CurrentPage" onclick="ClickPageList(this,\''+Command+'\')">'+p+'</a>';
							}
							else if(p==0){ /*防止出现页码小于1的情况 2013.5.29 吕斌 add*/ }
							else{
								MPagesRecordsHTML += '<a href="javascript:;" class="UnCurrentPage" onclick="ClickPageList(this,\''+Command+'\')">'+p+'</a>';
							}
						}
					}
					else {
						for(var p=parseInt(_tempPage[1])-PageNumber+1; p<=parseInt(_tempPage[1]); p++){
							if(_tempPage[0] == p){
								MPagesRecordsHTML += '<a href="javascript:;" class="CurrentPage" onclick="ClickPageList(this,\''+Command+'\')">'+p+'</a>';
							}
							else{
								MPagesRecordsHTML += '<a href="javascript:;" class="UnCurrentPage" onclick="ClickPageList(this,\''+Command+'\')">'+p+'</a>';
							}
						}
					}
				}
				MPagesRecordsHTML += '<a href="javascript:;" class="UnCurrentPage" onclick="ClickPageList(this,\''+Command+'\')">&gt;</a>';
			}

			//显示页输入框
			if(ShowInput == "1"){

				MPagesRecordsHTML+="<input type='text' name='inputPage' id='inputPage' style='width:30px; height:16px; font-size:12px; pading:0px; margin:0px; ' value=''>";

				MPagesRecordsHTML+="<a href='javascript:;' onclick='SubmitInputPage(\""+Command+"\"" +",\""+lines+"\",\""+languageClass +"\");' style='color:#416aa3; width:25px; height:16px; font-size:12px; line-height:16px; pading:0px; margin:0px; margin-left:3px; text-align:center;'>Go</a>";
				//MPagesRecordsHTML+="<div 'width:25px; height:16px; font-size:12px;border:1px solid #ccc;float:right'>Go</div>";
			}

		}
		else
		{
			//这是放图片切换的
			MPagesRecordsHTML+="<img title='首页' src='"+FristPageNoUsePicture+"' style='vertical-align:middle;'>&nbsp;&nbsp;";
			MPagesRecordsHTML+="<img title='前一页' src='"+PrevPageNoUsePicture+"' style='vertical-align:middle;'>&nbsp;&nbsp;";
			MPagesRecordsHTML+="<img title='后一页' src='"+NextPageNoUsePicture+"' style='vertical-align:middle;'>&nbsp;&nbsp;";
			MPagesRecordsHTML+="<img title='末页' src='"+LastPageNoUsePicture+"' style='vertical-align:middle;'>&nbsp;&nbsp;";
		}

}


	if(lines){
		var str="";
		str+="<div style='width:60px;height:24px; position:relative;top:-22px;left:400px;'>"
		str+="<select  onchange='setCookie(\"lines\",this.selectedIndex);SubmitInputPage(\""+Command+"\"" +",\""+lines+"\",\""+languageClass+"\");' name="+'choose'+" id="+'lines'+" style='width:60px;height:24px;position:absolute;top:2px;left:0;'>";
		var str1=lines.split("|");
		str+="<option value='请选择条数' id="+'sel'+">"+'请选择条数'+"</option>";
		for(var i = 0; i < str1.length;i ++){
			str+="<option value='"+str1[i] +"'name="+'opt'+" id="+'opt'+" class="+'opt'+">" +str1[i]+ "</option>"
		}
		str+="</select>";
		str+="</div>";

		MPagesRecordsHTML+=str;
	}


	MPagesRecordsHTML+="</td></tr></table>";

	if (MainListTableKind!=2)
		MPagesRecordsHTML+="</div>";
	MPagesRecordsHTML+="</td></tr></table>";

	//if(MPagesRecordsPlace.toLowerCase()=="top")
	//MPagesRecordsHTML+="</td></tr></table>";

	//alert(MPagesRecordsHTML);
	if(MPagesRecordsPlace.toLowerCase()=="top")
		MainListTableHTML=MainListTableHTML.replace("<!-- TopPagesRecords -->\n",MPagesRecordsHTML);
	else if(MPagesRecordsPlace.toLowerCase()=="end")
		MainListTableHTML=MainListTableHTML.replace("<!-- EndPagesRecords -->\n",MPagesRecordsHTML);

}
//$("#choose").find("option:selected").text(1);
function ClickPageList(obj,CMD){
	//alert(obj.innerHTML +"\n"+ CMD);

	var pageNumber = 0;

	switch(obj.innerHTML){
		case "&lt;" : {
			if("1" == eval(document.form.currentPage).value){ return ; }//当前页是第一页
			else {
				pageNumber = parseInt(eval(document.form.currentPage).value)-1;
			}
		}; break;
		case "&gt;" : {
			if(eval(document.form.currentPage).value == eval(document.form.totalPages).value){ return ; }//当前页是最后一页
			else{
				pageNumber = parseInt(eval(document.form.currentPage).value)+1;
			}
		}; break;
		default : { pageNumber = parseInt(obj.innerHTML); }; break;
	}

	eval(document.form.currentPage).value = pageNumber;

	pageFlag_CMD(CMD,'4');
}
//$("#choose").children("option[value=8]").text("luger");

function setCookie(name, value) {
	var exp = new Date();
	exp.setTime(exp.getTime() + 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function getCookie(name)
{
	var regExp = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	var arr = document.cookie.match(regExp);
	if (arr == null) {
		return null;
	}
	return unescape(arr[2]);
}


//2013.4.22 吕斌 add 输入页并跳转
function SubmitInputPage(CMD,lines,languageClass){
	var _currentPage = eval(document.form.currentPage).value; //动态获取当前页
	//这是不确定的 根据输入的来
	var _totalPages = eval(document.form.totalPages).value; //总页数
	var _pageFlag = eval(document.form.pageFlag).value; //页标示 0首 1上 2下 3末
	var _inputPage = eval(document.form.inputPage);
	//console.log(_inputPage);
	//这是那个输入框  匹配1到多个数字
	var reg = /^\d+$/;
	//给占位赋值
	var opp=document.getElementsByClassName("opt");
	for(var i=0;i<opp.length;i++){

	}
	var _Sizeopt1 = eval(opp[0]);
	var _Sizeopt2 = eval(opp[1]);
	var _Sizeopt3 = eval(opp[2]);
	var _Sizeopt4 = eval(opp[3]);

	//alert($("#choose").get(0).selectedIndex);
	//下面的代码是防止同样的lines到后台后后面把前面覆盖 所以点击哪个让哪个加上lines]
	//console.log(document.cookie);
	//var selectedIndex = getCookie("choose");
	////输出的是每一次点击的那个索引
	//console.log(selectedIndex);
	//if(selectedIndex != null) {
	//	document.getElementById("choose").selectedIndex = selectedIndex;
	//}


	if($("#lines").get(0).selectedIndex==1){
		$("#currentSize0").attr("name","lines").siblings("#currentSize1").removeAttr("name");
		$("#currentSize0").siblings("#currentSize2").removeAttr("name");
	$("#currentSize0").siblings("#currentSize3").removeAttr("name");
		$("#currentSize0").siblings("#currentSize4").removeAttr("name");
		$("#currentSize0").siblings("#currentSize5").removeAttr("name");
		$("#currentSize0").siblings("#currentSize6").removeAttr("name");
		$("#currentSize0").siblings("#currentSize7").removeAttr("name");
		$("#currentSize0").siblings("#currentSize8").removeAttr("name");
		$("#currentSize0").siblings("#currentSize9").removeAttr("name");
//		$(document).ready(function(){
//				var selectedIndex = getCookie("choose");
////输出的是每一次点击的那个索引
////	console.log(selectedIndex);
//				if(selectedIndex != null) {
//					document.getElementById("choose").selectedIndex = selectedIndex;
//				}
//				//console.log(document.getElementById("choose").selectedIndex);
//
//			}
//		)



	}else if($("#lines").get(0).selectedIndex==2){
		$("#currentSize1").attr("name","lines").siblings("#currentSize0").removeAttr("name");
		$("#currentSize1").siblings("#currentSize2").removeAttr("name");
	$("#currentSize1").siblings("#currentSize3").removeAttr("name");
		$("#currentSize1").siblings("#currentSize4").removeAttr("name");
		$("#currentSize1").siblings("#currentSize5").removeAttr("name");
		$("#currentSize1").siblings("#currentSize6").removeAttr("name");
		$("#currentSize1").siblings("#currentSize7").removeAttr("name");
		$("#currentSize1").siblings("#currentSize8").removeAttr("name");
		$("#currentSize1").siblings("#currentSize9").removeAttr("name");
	}else if($("#lines").get(0).selectedIndex==3){
		$("#currentSize2").attr("name","lines").siblings("#currentSize0").removeAttr("name");
		$("#currentSize2").siblings("#currentSize1").removeAttr("name");
	$("#currentSize2").siblings("#currentSize3").removeAttr("name");
		$("#currentSize2").siblings("#currentSize4").removeAttr("name");
		$("#currentSize2").siblings("#currentSize5").removeAttr("name");
		$("#currentSize2").siblings("#currentSize6").removeAttr("name");
		$("#currentSize2").siblings("#currentSize7").removeAttr("name");
		$("#currentSize2").siblings("#currentSize8").removeAttr("name");
		$("#currentSize2").siblings("#currentSize9").removeAttr("name");
	}else if($("#lines").get(0).selectedIndex==4){
	$("#currentSize3").attr("name","lines").siblings("#currentSize0").removeAttr("name");
	$("#currentSize3").siblings("#currentSize1").removeAttr("name");
	$("#currentSize3").siblings("#currentSize2").removeAttr("name");
		$("#currentSize3").siblings("#currentSize4").removeAttr("name");
		$("#currentSize3").siblings("#currentSize5").removeAttr("name");
		$("#currentSize3").siblings("#currentSize6").removeAttr("name");
		$("#currentSize3").siblings("#currentSize7").removeAttr("name");
		$("#currentSize3").siblings("#currentSize8").removeAttr("name");
		$("#currentSize3").siblings("#currentSize9").removeAttr("name");

}else if($("#lines").get(0).selectedIndex==5){
		$("#currentSize4").attr("name","lines").siblings("#currentSize0").removeAttr("name");
		$("#currentSize4").siblings("#currentSize1").removeAttr("name");
		$("#currentSize4").siblings("#currentSize2").removeAttr("name");
		$("#currentSize4").siblings("#currentSize3").removeAttr("name");
		$("#currentSize4").siblings("#currentSize5").removeAttr("name");
		$("#currentSize4").siblings("#currentSize6").removeAttr("name");
		$("#currentSize4").siblings("#currentSize7").removeAttr("name");
		$("#currentSize4").siblings("#currentSize8").removeAttr("name");
		$("#currentSize4").siblings("#currentSize9").removeAttr("name");
	}else if($("#lines").get(0).selectedIndex==6){
		$("#currentSize5").attr("name","lines").siblings("#currentSize0").removeAttr("name");
		$("#currentSize5").siblings("#currentSize1").removeAttr("name");
		$("#currentSize5").siblings("#currentSize2").removeAttr("name");
		$("#currentSize5").siblings("#currentSize3").removeAttr("name");
		$("#currentSize5").siblings("#currentSize4").removeAttr("name");
		$("#currentSize5").siblings("#currentSize6").removeAttr("name");
		$("#currentSize5").siblings("#currentSize7").removeAttr("name");
		$("#currentSize5").siblings("#currentSize8").removeAttr("name");
		$("#currentSize5").siblings("#currentSize9").removeAttr("name");
	}else if($("#lines").get(0).selectedIndex==7){
		$("#currentSize6").attr("name","lines").siblings("#currentSize0").removeAttr("name");
		$("#currentSize6").siblings("#currentSize1").removeAttr("name");
		$("#currentSize6").siblings("#currentSize2").removeAttr("name");
		$("#currentSize6").siblings("#currentSize3").removeAttr("name");
		$("#currentSize6").siblings("#currentSize4").removeAttr("name");
		$("#currentSize6").siblings("#currentSize5").removeAttr("name");
		$("#currentSize6").siblings("#currentSize7").removeAttr("name");
		$("#currentSize6").siblings("#currentSize8").removeAttr("name");
		$("#currentSize6").siblings("#currentSize9").removeAttr("name");
	}else if($("#lines").get(0).selectedIndex==8){
		$("#currentSize7").attr("name","lines").siblings("#currentSize0").removeAttr("name");
		$("#currentSize7").siblings("#currentSize1").removeAttr("name");
		$("#currentSize7").siblings("#currentSize2").removeAttr("name");
		$("#currentSize7").siblings("#currentSize3").removeAttr("name");
		$("#currentSize7").siblings("#currentSize4").removeAttr("name");
		$("#currentSize7").siblings("#currentSize5").removeAttr("name");
		$("#currentSize7").siblings("#currentSize6").removeAttr("name");
		$("#currentSize7").siblings("#currentSize8").removeAttr("name");
		$("#currentSize7").siblings("#currentSize9").removeAttr("name");
	}else if($("#lines").get(0).selectedIndex==9){
		$("#currentSize8").attr("name","lines").siblings("#currentSize0").removeAttr("name");
		$("#currentSize8").siblings("#currentSize1").removeAttr("name");
		$("#currentSize8").siblings("#currentSize2").removeAttr("name");
		$("#currentSize8").siblings("#currentSize3").removeAttr("name");
		$("#currentSize8").siblings("#currentSize4").removeAttr("name");
		$("#currentSize8").siblings("#currentSize5").removeAttr("name");
		$("#currentSize8").siblings("#currentSize6").removeAttr("name");
		$("#currentSize8").siblings("#currentSize7").removeAttr("name");
		$("#currentSize8").siblings("#currentSize9").removeAttr("name");
	}else if($("#lines").get(0).selectedIndex==10){
		$("#currentSize9").attr("name","lines").siblings("#currentSize0").removeAttr("name");
		$("#currentSize9").siblings("#currentSize1").removeAttr("name");
		$("#currentSize9").siblings("#currentSize2").removeAttr("name");
		$("#currentSize9").siblings("#currentSize3").removeAttr("name");
		$("#currentSize9").siblings("#currentSize4").removeAttr("name");
		$("#currentSize9").siblings("#currentSize5").removeAttr("name");
		$("#currentSize9").siblings("#currentSize6").removeAttr("name");
		$("#currentSize9").siblings("#currentSize7").removeAttr("name");
		$("#currentSize9").siblings("#currentSize8").removeAttr("name");
	}else{
		if(reg.test(_inputPage.value)){
			eval(document.form.currentPage).value = parseInt(_inputPage.value);
			pageFlag_CMD(CMD,'4');
			//$("#sel").html(selectedIndex);
			//console.log(eval(document.form.currentPage).value);
		}
		else if(_inputPage.value==""){
			if(languageClass=="pt_BR"){
				jQuery(document).ready(function() {
					loadBundles('pt_BR');
				});
			}else if(languageClass=="pt"){
				jQuery(document).ready(function() {
					loadBundles('pt');
				});
			}
			//jQuery(document).ready(function() {
			// //loadBundles('pt_BR');
			// loadBundles('pt_BR');
			//});
//       这是默认的那个语言  下面是函数
			function loadBundles(lang) {
				jQuery.i18n.properties({
					name: 'Messages',
					path: 'bundle/',
					mode: 'both',
					language: lang,
					callback: function () {
						updateExamples();
					}
				});
			}

			function updateExamples() {

//       console.log(jQuery.i18n.prop(ex1)); 这就是我需要翻译的文字
				// Accessing values through a JS variable
				var ex = '请填写跳转页码';
				alert(jQuery.i18n.prop(ex));
				//if (languageClass =="pt_BR") {
				// alert(jQuery.i18n.prop(ex));
				// console.log(jQuery.i18n.prop(ex));
				//}else if(languageClass=="pt_BR"){
				// alert(jQuery.i18n.prop(ex));
				//}
			}
		}
	}
	//$("#currentSize1").attr("name","lines").siblings().removeAttr("name");
	//console.log(_Sizeopt1.value,_Sizeopt2.value,_Sizeopt3.value);
	//var _currentSize1 = eval(document.form.lines).value;
	//var _currentSize2 = eval(document.form.lines).value;
	//var _currentSize3 = eval(document.form.lines).value;

	if(reg.test(_Sizeopt1.value,_Sizeopt2.value,_Sizeopt3.value)){
		//_currentSize1= parseInt(_Sizeopt1.value);
		//_currentSize2= parseInt(_Sizeopt2.value);
		//_currentSize3= parseInt(_Sizeopt3.value);

		pageFlag_CMD(CMD,'4');

	}
}
 $(document).ready(function(){
	//alert(3);
	 var selectedIndex = getCookie("lines");
////	console.log(selectedIndex);
	if(selectedIndex != null) {
	document.getElementById("lines").selectedIndex = selectedIndex;
		}
})



//图片
function FristPageImg(moveInPictureName,moveOutPictureName,moveDownPictureName,noUsePictureName)
{

	if(moveOutPictureName != "")
	{
		FristPageMoveOutPicture=skinpath+moveOutPictureName;
	}
	else
	{
		FristPageMoveOutPicture=skinpath+"image/niu/sy-1.jpg";
	}
	if(moveInPictureName != "")
	{
		FristPageMoveInPicture=skinpath+moveInPictureName;
	}
	else
	{
		FristPageMoveInPicture=skinpath+"image/niu/sy-3.jpg";
	}
	if(moveDownPictureName != "")
	{
		FristPageMoveDownPicture=skinpath+moveDownPictureName;
	}
	else
	{
		FristPageMoveDownPicture=skinpath+"image/niu/sy-3.jpg";
	}
	if(noUsePictureName != "")
	{
		FristPageNoUsePicture = skinpath+noUsePictureName;
	}
	else
	{
		FristPageNoUsePicture =skinpath+"image/niu/sy-3.jpg";
	}
}
function PrevPageImg(moveInPictureName,moveOutPictureName,moveDownPictureName,noUsePictureName)
{
	if(moveOutPictureName != "")
	{
		PrevPageMoveOutPicture=skinpath+moveOutPictureName;
	}
	else
	{
		PrevPageMoveOutPicture=skinpath+"image/niu/qy-1.jpg";
	}
	if(moveInPictureName != "")
	{
		PrevPageMoveInPicture=skinpath+moveInPictureName;
	}
	else
	{
		PrevPageMoveInPicture=skinpath+"image/niu/qy-3.jpg";
	}
	if(moveDownPictureName != "")
	{
		PrevPageMoveDownPicture=skinpath+moveDownPictureName;
	}
	else
	{
		PrevPageMoveDownPicture=skinpath+"image/niu/qy-3.jpg";
	}
	if(noUsePictureName != "")
	{
		PrevPageNoUsePicture = skinpath+noUsePictureName;
	}
	else
	{
		PrevPageNoUsePicture =skinpath+"image/niu/qy-3.jpg";
	}
}
function NextPageImg(moveInPictureName,moveOutPictureName,moveDownPictureName,noUsePictureName)
{
	if(moveOutPictureName != "")
	{
		NextPageMoveOutPicture=skinpath+moveOutPictureName;
	}
	else
	{
		NextPageMoveOutPicture=skinpath+"image/niu/hy-1.jpg";
	}
	if(moveInPictureName != "")
	{
		NextPageMoveInPicture=skinpath+moveInPictureName;
	}
	else
	{
		NextPageMoveInPicture=skinpath+"image/niu/hy-3.jpg";
	}
	if(moveDownPictureName != "")
	{
		NextPageMoveDownPicture=skinpath+moveDownPictureName;
	}
	else
	{
		NextPageMoveDownPicture=skinpath+"image/niu/hy-3.jpg";
	}
	if(noUsePictureName != "")
	{
		NextPageNoUsePicture = skinpath+noUsePictureName;
	}
	else
	{
		NextPageNoUsePicture =skinpath+"image/niu/hy-3.jpg";
	}
}
function LastPageImg(moveInPictureName,moveOutPictureName,moveDownPictureName,noUsePictureName)
{
	if(moveOutPictureName != "")
	{
		LastPageMoveOutPicture=skinpath+moveOutPictureName;
	}
	else
	{
		LastPageMoveOutPicture=skinpath+"image/niu/my-1.jpg";
	}
	if(moveInPictureName != "")
	{
		LastPageMoveInPicture=skinpath+moveInPictureName;
	}
	else
	{
		LastPageMoveInPicture=skinpath+"image/niu/my-3.jpg";
	}
	if(moveDownPictureName != "")
	{
		LastPageMoveDownPicture=skinpath+moveDownPictureName;
	}
	else
	{
		LastPageMoveDownPicture=skinpath+"image/niu/my-3.jpg";
	}
	if(noUsePictureName != "")
	{
		LastPageNoUsePicture = skinpath+noUsePictureName;
	}
	else
	{
		LastPageNoUsePicture =skinpath+"image/niu/my-3.jpg";
	}
}

//翻页按钮命令,标记
function pageFlag_CMD(CMD,FLAG)
{
	//eval('command').value=CMD;
	//lili add 2011.01.07
	//空占位的标记
	eval(document.form.PostButtonRandom).value=Math.random();
	eval(document.form.command).value=CMD;
	eval(document.form.pageFlag).value=FLAG;
	//Flag填写几就是几
	checkMustWrite();
	//document.form.submit();
}










//****************************************************
function SetMainListInitValue(row,col,value)
//设定第row行第col列的初始值
{
	col=col+MainTableColNum;
	if(typeof(MainTableRowNum)!="undefined")
		for(i=1;i<=MainTableRowNum;i++)
		{
			if(typeof(MainListInitValue[i])!="object")MainListInitValue[i]=new Array();
		}
// //转义某些字符
// if(value.indexOf(">")!=-1)value=value.replace(/>/g, '&gt')
// if(value.indexOf("<")!=-1)value=value.replace(/</g, '&lt')
	MainListInitValue[row][col]=value;
}


function SetPostValue(row,value)
//设定第row行第col列的初始值
{
	PostValue[row]=value;
}

function SetAlarmFlag(row,value)
//设定第row行第col列的初始值
{
	AlarmFlag[row]=value;
}

//建立对象
function MainTableColObj()
{
	this.num;
	this.name;
	this.bizname;
	this.text;
	this.style_event="";
	this.kind;
	this.color;
	this.textcolor;
	this.colcolor;
	this.coltextcolor;
	this.width;
	this.align;
	this.command;
	this.visible;
	this.orderbyname;
	this.orderbyname_title;
	this.staticOrderby;
}

//建立对象,表头
function MainTableHeadObj()
{
	this.row;//行
	this.col;//列
	this.text;//文本
	this.kind;//类型
	this.color;//表头颜色
	this.textcolor;//文本颜色
	this.colcolor;//列颜色
	this.coltextcolor;//列文本颜色
	this.rowcolor;//行颜色
	this.rowtextcolor;//行文本颜色
	this.image//图片
	this.icon//图标
	this.rowspan;//所占行数
	this.colspan;//所占列数
	this.width;//宽度
	this.direction//文本方向
	this.values//值
	this.staticOrderby;
}

/////////////////////////////////////////////////////////横向表头
//表头行数
var MainTableHeadRowNum;
var MainTableHeadRowTrStyle_Event="";
function SetMainTableHeadRowNum(TableHeadRowNum)
{
	MainTableHeadRowNum=getTextBeforeComma(TableHeadRowNum);
	MainTableHeadRowTrStyle_Event=getAttriAfterComma(TableHeadRowNum);
}

//表头对象数组
var MainTableHeadRowArray=new Array();

//表头底部对象数组
var MainTableHeadEndArray=new Array();
function SetMainTableHeadRow(row,col,text,rowspan,colspan,width,direction,values)
{
	var kind,color,textcolor,colcolor,coltextcolor,image,icon;
	//表头文字,表头类型,表头颜色,表头文字颜色,列颜色,列文字颜色
	if(text.split(",").length>1)
		for(i=1;i<text.split(",").length;i++)
		{
			if(text.split(",")[i].split("=")[0].toLowerCase()=="kind")kind=text.split(",")[i].split("=")[1];
			if(text.split(",")[i].split("=")[0].toLowerCase()=="color")color=text.split(",")[i].split("=")[1];
			if(text.split(",")[i].split("=")[0].toLowerCase()=="textcolor")textcolor=text.split(",")[i].split("=")[1];
			if(text.split(",")[i].split("=")[0].toLowerCase()=="colcolor")colcolor=text.split(",")[i].split("=")[1];
			if(text.split(",")[i].split("=")[0].toLowerCase()=="coltextcolor")coltextcolor=text.split(",")[i].split("=")[1];
			if(text.split(",")[i].split("=")[0].toLowerCase()=="image")image=text.split(",")[i].split("=")[1];
			if(text.split(",")[i].split("=")[0].toLowerCase()=="icon")icon=text.split(",")[i].split("=")[1];
		}
	text=text.split(",")[0];

	if(typeof(direction)=="undefined"||direction.length==0)direction='';
	//添加对象
	if(typeof(MainTableHeadRowArray[row])!="object")
		for(x=1;x<=MainTableHeadRowNum;x++)
			MainTableHeadRowArray[x]=new Array();

	MainTableHeadRowArray[row][col]=new MainTableHeadObj();
	MainTableHeadRowArray[row][col].row = row;
	MainTableHeadRowArray[row][col].col = col;
	MainTableHeadRowArray[row][col].text=text;
	MainTableHeadRowArray[row][col].kind=kind;
	MainTableHeadRowArray[row][col].color=color;
	MainTableHeadRowArray[row][col].textcolor=textcolor;
	MainTableHeadRowArray[row][col].image=image;
	MainTableHeadRowArray[row][col].rowspan=rowspan;
	MainTableHeadRowArray[row][col].colspan = colspan;
	MainTableHeadRowArray[row][col].width = width;
	MainTableHeadRowArray[row][col].direction=direction;
	MainTableHeadRowArray[row][col].values=values;

	//作用于最下一行的表头
	if((parseInt(row)+parseInt(rowspan)-1)==parseInt(MainTableHeadRowNum))
	{
		//添加对象
		var MainTableHeadEnd = new MainTableHeadObj();
		MainTableHeadEnd.row = row;
		MainTableHeadEnd.col = col;
		MainTableHeadEnd.text = text;
		MainTableHeadEnd.kind  = kind;
		MainTableHeadEnd.colcolor=colcolor;
		MainTableHeadEnd.coltextcolor=coltextcolor;
		MainTableHeadEnd.icon=icon;
		MainTableHeadEnd.rowspan=rowspan;
		MainTableHeadEnd.colspan=colspan;
		MainTableHeadEnd.width = width;
		MainTableHeadEnd.direction = direction;
		MainTableHeadEndArray.push(MainTableHeadEnd);
	}
}
/////////////////////////////////////////////////////////纵向表头
//表格行数
var MainTableRowNum;
var MainTableHeadColTrStyle_Event="";
function SetMainTableRowNum(TableRowNum)
{
	MainTableRowNum=getTextBeforeComma(TableRowNum);
	MainTableHeadColTrStyle_Event=getAttriAfterComma(TableRowNum);
}
//表头列数
var MainTableColNum=0;
function SetMainTableHeadColNum(TableHeadColNum)
{
	MainTableColNum=TableHeadColNum;
	//MainListTablCol=MainListTablCol+TableHeadColNum;
	//MainTableRowNum=MainListTableRow;
}
//表头对象数组
var MainTableHeadColArray=new Array();
var MainTableHeadColA=new Array();
function SetMainTableHeadCol(row,col,text,rowspan,colspan,direction,values)
{
	var color,textcolor,rowcolor,rowtextcolor;
	//表头文字,表头颜色,表头文字颜色,行颜色,行文字颜色
	if(text.split(",").length>1)
		for(i=1;i<text.split(",").length;i++)
		{
			if(text.split(",")[i].split("=")[0].toLowerCase()=="color")color=text.split(",")[i].split("=")[1];
			if(text.split(",")[i].split("=")[0].toLowerCase()=="textcolor")textcolor=text.split(",")[i].split("=")[1];
			if(text.split(",")[i].split("=")[0].toLowerCase()=="rowcolor")rowcolor=text.split(",")[i].split("=")[1];
			if(text.split(",")[i].split("=")[0].toLowerCase()=="rowtextcolor")rowtextcolor=text.split(",")[i].split("=")[1];
		}
	text=text.split(",")[0];
// if(typeof(rowcolor)=="undefined")rowcolor=color;
// if(typeof(rowtextcolor)=="undefined")rowtextcolor=textcolor;

	if(typeof(direction)=="undefined"||direction.length==0)direction='';
	//添加对象
	if(typeof(MainTableHeadColArray[row])!="object")
		for(x=1;x<=MainTableRowNum;x++)
			MainTableHeadColArray[x]=new Array();

	MainTableHeadColArray[row][col]=new MainTableHeadObj();
	MainTableHeadColArray[row][col].row = row;
	MainTableHeadColArray[row][col].col = col;
	MainTableHeadColArray[row][col].text=text;
	if((parseInt(MainTableColNum)-parseInt(col)+1)==parseInt(colspan))
	{
		MainTableHeadColA[row]=new MainTableHeadObj();
		MainTableHeadColA[row].color=color;
		MainTableHeadColA[row].textcolor=textcolor;
		MainTableHeadColA[row].rowcolor=rowcolor;
		MainTableHeadColA[row].rowtextcolor=rowtextcolor;
	}

	MainTableHeadColArray[row][col].color=color;
	MainTableHeadColArray[row][col].textcolor=textcolor;
	MainTableHeadColArray[row][col].rowcolor=rowcolor;
	MainTableHeadColArray[row][col].rowtextcolor=rowtextcolor;
	MainTableHeadColArray[row][col].rowspan=rowspan;
	MainTableHeadColArray[row][col].colspan = colspan;
	MainTableHeadColArray[row][col].direction=direction;
	MainTableHeadColArray[row][col].values=values;
}
/////////////////////////////////////////////////////////纵向表头
//表尾行数
var MainTableEndRowNum;
function SetMainTableEndRowNum(TableEndRowNum)
{
	MainTableEndRowNum=TableEndRowNum;
}

//表尾对象数组
var MainTableEndRowArray=new Array();
function SetMainTableEndRow(row,col,text,rowspan,colspan,direction,values)
{
	var kind,color,textcolor,colcolor,coltextcolor;
	//表头文字,表头颜色,表头文字颜色
	if(text.split(",").length>1)
		for(i=1;i<text.split(",").length;i++)
		{
			if(text.split(",")[i].split("=")[0].toLowerCase()=="color")color=text.split(",")[i].split("=")[1];
			if(text.split(",")[i].split("=")[0].toLowerCase()=="textcolor")textcolor=text.split(",")[i].split("=")[1];
		}
	text=text.split(",")[0];

	if(typeof(direction)=="undefined"||direction.length==0)direction='';
	//添加对象
	if(typeof(MainTableEndRowArray[row])!="object")
		for(x=1;x<=MainTableHeadRowNum;x++)
			MainTableEndRowArray[x]=new Array();

	MainTableEndRowArray[row][col]=new MainTableHeadObj();
	MainTableEndRowArray[row][col].row = row;
	MainTableEndRowArray[row][col].col = col;
	MainTableEndRowArray[row][col].text=text;
	MainTableEndRowArray[row][col].color=color;
	MainTableEndRowArray[row][col].textcolor=textcolor;
	MainTableEndRowArray[row][col].rowspan=rowspan;
	MainTableEndRowArray[row][col].colspan = colspan;
	MainTableEndRowArray[row][col].direction=direction;
	MainTableEndRowArray[row][col].values=values;

}
var MainListTableColR=0
function SetMainListCol(number,biz,text,width,align,colIcon,showvaluestyle,showvalue,truevalue,classify,kind,staticOrderby,targetA,summitFileName,command,Frame,ConnectionPoolName,TakeData,ConfirmText,ShowColorFieldPN,ShowColor,RowSelectForbidCondition,CheckBoxSelectForbidConditionFieldName,CheckBoxSelectForbidCondition,BeforeFun,AfterFunc,visible)
//指定第number列的名称(name)，显示列名(text)和宽度(width)
{
	MainListTableColR++;
	var color,textcolor,colcolor,coltextcolor,orderbyname;
	var style_event="";
	number=MainListTableColR+MainTableColNum;
	//表头文字,表头颜色,表头文字颜色,列颜色,列文字颜色
	if(text.split(",").length>1)
	{
		style_event=getAttriAfterComma(text);
		for(i=1;i<text.split(",").length;i++)
		{
			if(text.split(",")[i].split("=")[0].toLowerCase()=="color")color=text.split(",")[i].split("=")[1];
			if(text.split(",")[i].split("=")[0].toLowerCase()=="textcolor")textcolor=text.split(",")[i].split("=")[1];
			if(text.split(",")[i].split("=")[0].toLowerCase()=="colcolor")colcolor=text.split(",")[i].split("=")[1];
			if(text.split(",")[i].split("=")[0].toLowerCase()=="coltextcolor")coltextcolor=text.split(",")[i].split("=")[1];
		}
	}
	text=text.split(",")[0];

	if(maintableShowTickComparePN==biz)
	{
		maintableShowTickComparePNColNum=number;
	}

	MainListColName[number]=number;

	if(biz.split(",").length>1)
		if(biz.split(",")[1].split("=")[0].toLowerCase()=="orderbyname")orderbyname=biz.split(",")[1].split("=")[1];
	biz=biz.split(",")[0];

	//合并列值
	if(kind.split("=").length>1)
	{
		MainListColMerge[number]=kind.split("=")[1];
		kind=kind.split("=")[0];
	}

	if(kind=="SelectedCheckBox")
	{
		MainListBizName[number]="XiLineSelectedFlag";
	}
	else
	{
		MainListBizName[number]=biz;
	}
	MainListColText[number]=text;
	MainListColStyle_Event[number]=style_event;
	MainListColWidth[number]=width;

	if(align==""){
		MainListColAlign[number]="left";
	}
	else{
		MainListColAlign[number]=align;
	}

	MainListColIcon[number] = colIcon; //2014.09.29 吕斌 add

	if(m=="")
	{ m=MainListColName[number];
		mm[0]=m;
		ml=1;
	}
	else
	{
		m+=","+MainListColName[number];
		if(m.indexOf(",")!=-1)
			mm=m.split(",");
		ml=mm.length;
	}
	if(RowSelectForbidCondition==""||RowSelectForbidCondition.length==0)RowSelectForbidCondition="RowSelectForbidCondition";
	if(showvaluestyle==""||showvaluestyle.length==0)showvaluestyle=0;
	MainListColShowValueStyle[number]=showvaluestyle
	MainListColshowvalue[number]=showvalue;
	MainListColtruevalue[number]=truevalue;
	MainListColclassify[number]=classify;
	MainListColChildPageTarget[number]=targetA;
	MainListColKind[number]=kind;
	if(summitFileName.indexOf("?")==-1)
		summitFileName=summitFileName+"?";
	FileSummitFileName[number]=summitFileName;
	Filecommand[number]=command;
	FiletaskFramePN[number]=Frame;
	FilePoolName[number]=ConnectionPoolName;
	FileTakeData[number]=TakeData;
	MainListColShowColorFieldPN[number]=ShowColorFieldPN;//显示条件对应的列字段的持久化名
	MainListColShowColor[number]=ShowColor;//显示条件:条件,值,颜色
	MainListColRowSelectForbidCondition[number]=RowSelectForbidCondition;
	MainListColCheckBoxSelectForbidConditionFieldName[number]=CheckBoxSelectForbidConditionFieldName
	MainListColCheckBoxSelectForbidCondition[number]=CheckBoxSelectForbidCondition;
	MainListColVisible[number]=visible;
	MainListConfirmText[number]=ConfirmText;

	//添加对象
	var MainTableColO = new MainTableColObj();
	MainTableColO.num = number;
	MainTableColO.name = MainListTableName;
	MainTableColO.bizname = MainListBizName[number];
	MainTableColO.text=MainListColText[number];
	MainTableColO.style_event=MainListColStyle_Event[number];
	MainTableColO.kind=MainListColKind[number];
	MainTableColO.color=color;
	MainTableColO.textcolor=textcolor;
	MainTableColO.colcolor=colcolor;
	MainTableColO.coltextcolor=coltextcolor;
	MainTableColO.width=MainListColWidth[number];
	MainTableColO.align=MainListColAlign[number];
	MainTableColO.colicon=MainListColIcon[number];//吕斌 2014.09.29 add
	//MainTableColO.target=MainListColChildPageTarget[number];
	MainTableColO.command=Filecommand[number];
	MainTableColO.visible = MainListColVisible[number];
	MainTableColO.confirmtext = MainListConfirmText[number];
	MainTableColO.orderbyname = orderbyname;
	MainTableColO.staticOrderby = staticOrderby;
	MainTableColO.BeforeFun = BeforeFun;
	MainTableColO.AfterFunc = AfterFunc;

	MainTableColArray.push(MainTableColO);
}

function rowOver(line,pv,h)
{
	curPosition = line+parseInt(MainTableHeadRowNum);
	//getPosObject(line).click();
	setrowColor();
	if(h==1)
		MainListChangeCheckState(MainListTableName,1,line,ifradio,pv);
}

function setrowColor(h)
{
	var tab = getSearchTable();
	var pos = getPos();
	if(pos <= 0) return;
	//document.look.position.value = pos;

	if(typeof(MainTableRowNum)!="undefined"&&MainListTableRow>0)curPageSize=parseInt(MainTableRowNum);
	for(var i=parseInt(MainTableHeadRowNum)+1; i<=curPageSize+parseInt(MainTableHeadRowNum); i++)
	{
		if(i == pos)
		{
			if(oddColColor!=''&&evenColColor!=''&&newColor!='')
				tab.rows[i-1].bgColor = newColor;
			else
			{
				if(newColorStyle_Event!='')
				{
					tab.rows[i-1].className=getAttriAfterClassSign(newColorStyle_Event);
				}
				else
				{
					tab.rows[i-1].className='tablelinenew';
				}
				//tab.rows[i-1].removeAttribute("style");
				tab.rows[i-1].style.cursor="hand";

			}
		}
		else
		{
			if (i%2==1)
			{
				if(oddColColor!=''&&evenColColor!=''&&newColor!='')
					tab.rows[i-1].bgColor = oddColColor;
				else
					tab.rows[i-1].className = 'tablelineodd';
			}
			else
			{
				if(oddColColor!=''&&evenColColor!=''&&newColor!='')
					tab.rows[i-1].bgColor = evenColColor;
				else
					tab.rows[i-1].className = 'tablelineeven';
			}
		}
	}
}

function getSearchTable(){
	return document.all.ListTable;
}

function getPos(){
	return curPosition;
}

function getPosObject(line){
	if(curPageSize == 1)
		return document.all.pos;
	return document.all.pos[line-1];
}

function MainListChangeCheckState(tn,col,row,radio,pv)
{
	p=tn+"_"+row+"_"+col;
	//p="document.form."+tn+"_"+row+"_"+col;
	q="document.form."+tn+"checkimage_"+row+"_1";
	//alert("tn="+tn+":::col="+col+":::row="+row);

	if (radio==1)
	{
		for (i=1;i<=MainListTableRow;i++)
		{
			document.getElementsByName(p)[0].value="";
			if(eval("form."+tn+"checkimage_"+i+"_1").src!==MainListRadioBox_Disabcheck.src)
				eval("form."+tn+"checkimage_"+i+"_1").src=MainListRadioBox_Uncheck.src;
			eval("form."+tn+"_"+i+"_1").value=0
		}
		document.getElementsByName(p)[0].value="1";
		eval(q).src=MainListRadioBox_Check.src;
		//记录选中的所有行
		Check(pv,radio);
	}
	else
	{
		//清除浏览器中缓存遗留勾选标记 lili 2006.05.24
		clearErrorSelectedFlag(tn,col,row,pv);

		//alert(eval("tabledata_"+ColName[col]+"_"+row).value);
if(document.getElementsByName(p)[0].id!="detail0_1_1"){

	if (document.getElementsByName(p)[0].value=="1")
	{
		document.getElementsByName(p)[0].value="0";
		eval(q).src=MainListCheckBox_Uncheck.src;
		//记录选中的所有行,形成一串链
		Check(pv,radio);
	}
	else
	{
		//如果没打勾
		//放在一个隐藏域名的input上面了
		//console.log(document.getElementsByName(p)[0].id);
		document.getElementsByName(p)[0].value="1";

		//主要是1870行代码问题
		eval(q).src=MainListCheckBox_Check.src;
		//记录选中的所有行,形成一串链
		Check(pv,radio);
	}
}

	}
}

function MainListSplitString(stringToSplit,separator,ii,poolname)
//function MainListSplitString(stringToSplit,separator)
//将数据库中的记录分割成文件目录和文件名称
{
	MainListFileName = "";
	MainListLabelText = "";
	var ArrayOfString = stringToSplit.split(separator);
	if(ArrayOfString[0].indexOf("?")==-1)
		MainListFileName = ArrayOfString[0];
	else{
		MainListFileName=encodeUrl(ArrayOfString[0])+"&poolname="+poolname;
	}
	//2006-8-28修改下载字段的显示名称
	if(stringToSplit!=","&&ii!='')
		MainListLabelText=MainListInitValue[j][parseInt(ii)+parseInt(MainTableColNum)]
	else
		MainListLabelText = ArrayOfString[1];
}


function winopen()
{
	var targeturl=SummitFileName+"?command="+command+"&taskFramePN="+taskFramePN+"&poolname="+PoolName+"&modelID="+tieamEscape(PostValue[j])+"&refresh="+Math.random();
	newwin=window.open(targeturl,"name","scrollbars");
	if (document.all)
	{
		newwin.moveTo(0,0);
		newwin.resizeTo(screen.width,screen.height);
	}
	//newwin.location=targeturl;
}

//显示表格
function ShowMainListTable(lines)
{
	var HeadHTML="";//显示标题
	var HeadHTML1="";//实际标题
	var MainTableXilineOrderCol; //序号列标
	//var MainTableXilineSelected = false; //是否有多选

	MainTableXilineSelected = false; //是否有多选

	MainListTablCol=MainListTableColR+MainTableColNum;
	MainListTableHTML=MainListTableHTML.replace("<!-- MainListTablCol -->",MainListTablCol);
	//画显示标题
	//if (MainListTableKind==0) HeadHTML+="<table class=tablehead border=0 cellpadding=0 cellspacing=1>\n";
	if(typeof(MainTableHeadRowNum)!="undefined")
	{
		for(x=1;x<=MainTableHeadRowNum;x++)
		{
			if(x==MainTableHeadRowNum)
				HeadHTML+="<tr " + MainTableHeadRowTrStyle_Event + " class=tableheadtr id='mh' >\n";
			else
				HeadHTML+="<tr " + MainTableHeadRowTrStyle_Event + " class=tableheadtr id='mh"+x+"' >\n";
			for(y=1;y<MainTableHeadRowArray[x].length;y++)
			{
				HeadHTML+="<td ";
				//alert("x="+x+"y="+y+"&"+MainTableHeadRowArray[x][y].colspan)
				if(typeof(MainTableHeadRowArray[x][y])=="object")
				{
					//MainTableHead=MainTableHeadRowArray[x][y];

					if(typeof(MainTableHeadRowArray[x][y].color)!="undefined"||typeof(MainTableHeadRowArray[x][y].textcolor)!="undefined"||typeof(MainTableHeadRowArray[x][y].image)!="undefined")
					{
						HeadHTML+=" style='";
						if(typeof(MainTableHeadRowArray[x][y].color)!="undefined")
							HeadHTML+="background:"+MainTableHeadRowArray[x][y].color+";";
						if(typeof(MainTableHeadRowArray[x][y].textcolor)!="undefined")
							HeadHTML+="color:"+MainTableHeadRowArray[x][y].textcolor+";";
						if(typeof(MainTableHeadRowArray[x][y].image)!="undefined")
							HeadHTML+="background-image: url(\""+skinpath+MainTableHeadRowArray[x][y].image+"\");";

						HeadHTML+="'";
					}

					if(typeof(MainTableHeadRowArray[x][y].kind)!="undefined")
					{
						if(MainTableHeadRowArray[x][y].kind.toLowerCase()=="xilineselected"||MainTableHeadRowArray[x][y].kind.toLowerCase()=="xilineorder"||MainTableHeadRowArray[x][y].kind.toLowerCase()=="xilinefileflag"||MainTableHeadRowArray[x][y].kind.toLowerCase()=="xiicon")
						{
							HeadHTML+=" " +  MainTableHeadRowTrStyle_Event + " class=tableheadtr id=tableheadtd_1  width=";
							if((MainTableHeadRowArray[x][y].kind.toLowerCase()=="xilineselected"||MainTableHeadRowArray[x][y].kind.toLowerCase()=="xilineorder")&&MainTableHeadRowArray[x][y].width=="")
							{   //alert("222");
								HeadHTML+=20+"px";
							}
							else
								HeadHTML+=MainTableHeadRowArray[x][y].width;
							HeadHTML+=" align=center rowspan="+MainTableHeadRowArray[x][y].rowspan+" colspan="+MainTableHeadRowArray[x][y].colspan+">\n";
						}
					}
					else
					{
						if(parseInt(MainTableHeadRowArray[x][y].rowspan)+parseInt(x)-1==parseInt(MainTableHeadRowNum))
						{
							if(MainTableHeadRowArray[x][y].direction.toLowerCase()!='upright')
								HeadHTML+="  " + MainTableHeadRowTrStyle_Event + " class=tableheadtr id=tableheadtd_1  width="+MainTableHeadRowArray[x][y].width+" align=center rowspan="+MainTableHeadRowArray[x][y].rowspan+" colspan="+MainTableHeadRowArray[x][y].colspan+">\n";
							else
								HeadHTML+="  " + MainTableHeadColTrStyle_Event + " class=tableheadtr_upright id=tableheadtd_1  width="+MainTableHeadRowArray[x][y].width+" center=left rowspan="+MainTableHeadRowArray[x][y].rowspan+" colspan="+MainTableHeadRowArray[x][y].colspan+">\n";
						}
						else
						{
							if(MainTableHeadRowArray[x][y].direction.toLowerCase()!='upright')
								HeadHTML+="  " + MainTableHeadRowTrStyle_Event + " class=tableheadtr id=tableheadtd_1  align=center rowspan="+MainTableHeadRowArray[x][y].rowspan+" colspan="+MainTableHeadRowArray[x][y].colspan+">\n";
							else
								HeadHTML+="  " + MainTableHeadColTrStyle_Event + " class=tableheadtr_upright id=tableheadtd_1  align=center rowspan="+MainTableHeadRowArray[x][y].rowspan+" colspan="+MainTableHeadRowArray[x][y].colspan+">\n";
						}
					}
//             if(MainTableHeadRowArray[x][y].kind=="xisys_check")MainTableHeadRowArray[x][y].text="选择"
//             else if(MainTableHeadRowArray[x][y].kind=="xisys_isfile")MainTableHeadRowArray[x][y].text=""
//             else if(MainTableHeadRowArray[x][y].kind=="xisys_order")MainTableHeadRowArray[x][y].text="序号"

					HeadHTML+="<nobr>";
					if(typeof(MainTableHeadRowArray[x][y].values)=="undefined"||MainTableHeadRowArray[x][y].values.length==0)
						HeadHTML+="<div>"+MainTableHeadRowArray[x][y].text+"</div>";
					else
						HeadHTML+="<div>"+MainTableHeadRowArray[x][y].text+" "+MainTableHeadRowArray[x][y].values+"</div>";

					if(typeof(MainTableHeadRowArray[x][y].kind)!="undefined")
						if(MainTableHeadRowArray[x][y].kind.toLowerCase()=="xilineselected")
						{
							HeadHTML+="<input type='text' style='display:none' name='"+MainListTableName+"_Biz_1' id='"+MainListTableName+"_Biz_1'  value='XiLineSelectedFlag'>";
							if(ifradio==0)
							{
								HeadHTML+="<input type=checkbox id=maintable_allchange"+MainListTableName+" onclick='maintableallchange(this,\""+MainListTableName+"\")'>";
								xilineselectedID="maintable_allchange"+MainListTableName+"_1";
								xilineselectedTableName=MainListTableName;
							}
						}
					HeadHTML+="</nobr></td>\n";
				}
			}

			if(x==MainTableHeadRowNum)
				for(z=0;z<MainTableColArray.length;z++)
				{
					MainTableC=MainTableColArray[z];
					if(MainTableC.visible==1)
					{
						if(typeof(MainTableC.orderbyname)=="undefined")
							HeadHTML+="<td " + MainTableHeadRowTrStyle_Event + " class=tableheadtr id=tableheadtd_"+MainTableC.name+" width="+MainTableC.width+" align=center ";
						else
							HeadHTML+="<td " + MainTableHeadRowTrStyle_Event + " class=tableheadtr id=tableheadtd_"+MainTableC.name+" name=tableheadtd_"+MainTableC.name+" width="+MainTableC.width+" align=center ";

						if(typeof(MainTableC.color)!="undefined"||typeof(MainTableC.textcolor)!="undefined")
						{
							HeadHTML+="style='";
							if(typeof(MainTableC.color)!="undefined")
								HeadHTML+="background:"+MainTableC.color+";";
							if(typeof(MainTableC.textcolor)!="undefined")
								HeadHTML+="color:"+MainTableC.textcolor+";";

							if(MainTableC.command.length==0&&typeof(MainTableC.orderbyname)=="undefined")
								HeadHTML+="'";
							else
								HeadHTML+="cursor:pointer;";
						}
						else
						{
							HeadHTML+="style='";
							if(MainTableC.command.length==0&&typeof(MainTableC.orderbyname)=="undefined")
								HeadHTML+="'";
							else
								HeadHTML+="cursor:pointer;'";
						}
						if(typeof(MainTableC.orderbyname)=="undefined")
						{
							HeadHTML+=">\n<nobr><div>"+MainTableC.text+"";
							if(MainTableC.kind.toLowerCase()=="checkboxall")
								HeadHTML+="<input type=checkbox id='MainListColChange_"+MainListTableName+"_"+(z+MainTableColNum+1)+"' onclick=maintableallchange(this,\""+MainListTableName+"\",'"+(z+MainTableColNum+1)+"')>";
							HeadHTML+="</div></nobr></td>\n";
						}
						else
						{
							var c_str;
							var cmd='';
							var flag=0;
							//获得命令
							if(MainTableC.command.split("|").length==2)
							{
								c_str=MainTableC.command.split("|")[1];
								for(i = 0; i < c_str.split(",").length; i++)
								{
									if(c_str.split(",")[i].toLowerCase()=="del")cmd=cmd+'confirmdelete();';
									else if(c_str.split(",")[i].toLowerCase()=="must")cmd=cmd+'checkMustWrite();';
									else if(c_str.split(",")[i].toLowerCase()=="submit")cmd=cmd+'submit();';
									else if(c_str.split(",")[i].toLowerCase()=="close")cmd=cmd+'window.close();';
									else if(c_str.split(",")[i].toLowerCase()=="back")cmd=cmd+'window.history.back();';
									else if(c_str.split(",")[i].toLowerCase()=="tabpage")flag=1;//是否在tabpage中的标记
								}
								if(MainTableC.command.split("|")[0]!='')
								{
									MainTableC.command="eval('command').value='"+MainTableC.command.split("|")[0]+"';"+cmd;
								}
								else
									MainTableC.command=cmd;

								//在tabpage中,增加"/"转义
								if(flag==1)
									MainTableC.command=MainTableC.command.replace(/'/g,"\\'");
							}
							else if(MainTableC.command.indexOf("()")!=-1)
								MainTableC.command=MainTableC.command;
							else
								MainTableC.command="document.getElementById('command').value='"+MainTableC.command.split("|")[0]+"';form.submit();"
							//alert("MainTableC.orderbyname,MainListTableCurrentOrderby="+MainTableC.orderbyname+","+MainListTableCurrentOrderby);
							//alert(MainTableC.command);
							//排序查询
							if(MainTableC.orderbyname.indexOf("asc")!="-1"&&MainListTableCurrentOrderby==""){
								HeadHTML+=" onclick=\"setorderbyname('"+MainTableC.bizname+"','"+MainTableC.orderbyname+"','');"+MainTableC.command+"\" >\n<div>"+MainTableC.text+"↑</div></td>\n";
								MainTableC.orderbyname_title=" onclick=\"setorderbyname('"+MainTableC.bizname+"','"+MainTableC.orderbyname+"','');"+MainTableC.command+"\" ><nobr><div>"+MainTableC.text+"→";
							}else if(MainTableC.orderbyname.indexOf("desc")!="-1"&&MainListTableCurrentOrderby=="")    {
								HeadHTML+=" onclick=\"setorderbyname('"+MainTableC.bizname+"','"+MainTableC.orderbyname+"','');"+MainTableC.command+"\" >\n<div>"+MainTableC.text+"↓</div></td>\n";
								MainTableC.orderbyname_title=" onclick=\"setorderbyname('"+MainTableC.bizname+"','"+MainTableC.orderbyname+"','');"+MainTableC.command+"\" ><nobr><div>"+MainTableC.text+"→";
							}else if(MainListTableCurrentOrderby.split(" ")[2]=="asc"&&MainListTableCurrentOrderby.split(" ")[0]==MainTableC.bizname){
								HeadHTML+=" onclick=\"setorderbyname('"+MainTableC.bizname+"','"+MainTableC.orderbyname+"','asc');"+MainTableC.command+"\" >\n<div>"+MainTableC.text+"↑</div></td>\n";
								MainTableC.orderbyname_title=" onclick=\"setorderbyname('"+MainTableC.bizname+"','"+MainTableC.orderbyname+"','asc');"+MainTableC.command+"\" ><nobr><div>"+MainTableC.text+"↑";
							}else if(MainListTableCurrentOrderby.split(" ")[2]=="desc"&&MainListTableCurrentOrderby.split(" ")[0]==MainTableC.bizname){
								HeadHTML+=" onclick=\"setorderbyname('"+MainTableC.bizname+"','"+MainTableC.orderbyname+"','desc');"+MainTableC.command+"\" >\n<div>"+MainTableC.text+"↓</div></td>\n";
								MainTableC.orderbyname_title=" onclick=\"setorderbyname('"+MainTableC.bizname+"','"+MainTableC.orderbyname+"','desc');"+MainTableC.command+"\" ><nobr><div>"+MainTableC.text+"↓";
							}else{
								HeadHTML+=" onclick=\"setorderbyname('"+MainTableC.bizname+"','"+MainTableC.orderbyname+"','desc');"+MainTableC.command+"\" >\n<div>"+MainTableC.text+"↓</div></td>\n";
								MainTableC.orderbyname_title=" onclick=\"setorderbyname('"+MainTableC.bizname+"','"+MainTableC.orderbyname+"','desc');"+MainTableC.command+"\" ><nobr><div>"+MainTableC.text+"↓";
							}
						}
					}
				}
//       for(z=0;z<MainTableColArray.length;z++)
//       {
//          MainTableC=MainTableColArray[z];
//          if(MainTableC.visible==1)
//          {
//                HeadHTML+="<td class=tableheadtr id=tableheadtd_"+MainTableC.name+" width="+MainTableC.width+" align=left ";
//                if(typeof(MainTableC.color)!="undefined"||typeof(MainTableC.textcolor)!="undefined")
//                {
//                HeadHTML+="style='";
//                if(typeof(MainTableC.color)!="undefined")
//                HeadHTML+="background:"+MainTableC.color+";";
//                if(typeof(MainTableC.textcolor)!="undefined")
//                HeadHTML+="color:"+MainTableC.textcolor+";";
//                HeadHTML+="'";
//                }
//                HeadHTML+=">\n";
//                HeadHTML+="<div>"+MainTableC.text+"</div></td>\n";
//          }
//       }
			HeadHTML+="</tr>\n";
		}
	}
	else
	{
		HeadHTML+="<tr " + MainTableHeadRowTrStyle_Event + " class=tableheadtr id='mh' >\n";
		for(z=0;z<MainTableColArray.length;z++)
		{
			MainTableC=MainTableColArray[z];
			if(MainTableC.visible==1)
			{
				HeadHTML+="<td " + MainTableHeadRowTrStyle_Event + " class=tableheadtr id=tableheadtd_"+MainTableC.name+" width="+MainTableC.width+" align=center ";
				if(typeof(MainTableC.color)!="undefined"||typeof(MainTableC.textcolor)!="undefined")
				{
					HeadHTML+="style='";
					if(typeof(MainTableC.color)!="undefined")
						HeadHTML+="background:"+MainTableC.color+";";
					if(typeof(MainTableC.textcolor)!="undefined")
						HeadHTML+="color:"+MainTableC.textcolor+";";
					HeadHTML+="'";
				}
				HeadHTML+=">\n";
				HeadHTML+="<div  " + MainTableHeadRowTrStyle_Event + " class=tableheadtr>"+MainTableC.text+"</div></td>\n";
			}
		}
		HeadHTML+="</tr>\n";
	}

	var MainTableC = new MainTableColObj();
// if (MainListTableKind==0) HeadHTML+="<table class=tablehead border=0 cellpadding=0 cellspacing=1>\n";
// HeadHTML+="<tr class=tableheadtr id='mh'>\n";
// HeadHTML+="<td class=tableheadtd id=tableheadtd_1 width=50 align=left>\n";
// //HeadHTML+="<div class=stattableheadtext><font style=FONT-SIZE:9pt>选择</font></div><input type='hidden' name='"+MainListTableName+"_Biz_1'"+"  value='XiLineSelectedFlag'"+"></td>\n"
// HeadHTML+="<div class=stattableheadtext>选择</div><input type='hidden' name='"+MainListTableName+"_Biz_1'"+"  value='XiLineSelectedFlag'"+"></td>\n";
// HeadHTML+="<td class=tableheadtd id=tableheadtd_1 width=15 align=left>\n";
// HeadHTML+="<div class=stattableheadtext></div></td>\n";
// HeadHTML+="<td class=tableheadtd id=tableheadtd_1 width=50 align=left>\n";
// HeadHTML+="<div class=stattableheadtext>序号</div></td>\n";
//
// //for (i=3;i<=visiblemainnum-1;i++)
// //{
// for(x=0;x<MainTableColArray.length;x++)
// {
//    MainTableC=MainTableColArray[x];
//    if(MainTableC.visible==1)
//    {
//       //if (MainListColKind[i]!="HiddenData")
//       //{
//          HeadHTML+="<td class=tableheadtd id=tableheadtd_"+MainTableC.name+" width="+MainTableC.width+" align=left>\n";
//          HeadHTML+="<div class=stattableheadtext>"+MainTableC.text+"</div></td>\n";
//       //}
//    }
// }
// //}
// HeadHTML+="</tr>\n";
	//if (MainListTableKind==0) HeadHTML+="</table>";
	MainListTableHTML=MainListTableHTML.replace("<!-- TableHead -->\n",HeadHTML);

	//画实际标题
	//if (MainListTableKind==0) HeadHTML1+="<table class=tablehead border=0 cellpadding=0 cellspacing=1>\n";
	HeadHTML1+="<thead>";

	//是否启用静态排序
	for(var a=0;a<MainTableColArray.length;a++)
	{
		if(MainTableColArray[a].staticOrderby){
			//alert('MainTableColArray[a].staticOrderby ：'+MainTableColArray[a].staticOrderby);
			//行列变换
			MainTableStaticOderbyTemp = MainTableRowAndCol(MainListInitValue);

			//二维数组去重
			for(var m=0;m<MainTableStaticOderbyTemp.length;m++)
			{
				MainTableStaticOderby[m] = MainTableUnique(MainTableStaticOderbyTemp[m]);
			}
			break;
		}
	}

	if(typeof(MainTableHeadRowNum)!="undefined")
	{
		/*
		 //行列变换
		 if(MainListInitValue.length>0){
		 MainTableStaticOderbyTemp = MainTableRowAndCol(MainListInitValue);

		 //二维数组去重
		 for(var m=0;m<MainTableStaticOderbyTemp.length;m++)
		 {
		 MainTableStaticOderby[m] = MainTableUnique(MainTableStaticOderbyTemp[m]);
		 }

		 }
		 */
		for(x=1;x<=MainTableHeadRowNum;x++)
		{
			if(x==MainTableHeadRowNum)
				HeadHTML1+="<tr  " + MainTableHeadRowTrStyle_Event + " class=tableheadtr id='mhh' style='display:table-row' >\n";
			else
				HeadHTML1+="<tr  " + MainTableHeadRowTrStyle_Event + " class=tableheadtr id='mhh"+x+"' style='display:table-row' >\n";
			for(y=1;y<MainTableHeadRowArray[x].length;y++)
			{
				if(typeof(MainTableHeadRowArray[x][y])=="object")
				{
					MainTableHead=MainTableHeadRowArray[x][y];
					if(typeof(MainTableHeadRowArray[x][y].kind)!="undefined")
					{
						if(MainTableHeadRowArray[x][y].kind.toLowerCase()=="xilineselected"||MainTableHeadRowArray[x][y].kind.toLowerCase()=="xilineorder"||MainTableHeadRowArray[x][y].kind.toLowerCase()=="xilinefileflag"||MainTableHeadRowArray[x][y].kind.toLowerCase()=="xiicon")
						{
							HeadHTML1+="<td " + MainTableHeadRowTrStyle_Event + " class=tableheadtr id=tableheadtd_1  width=";
							if((MainTableHeadRowArray[x][y].kind.toLowerCase()=="xilineselected"||MainTableHeadRowArray[x][y].kind.toLowerCase()=="xilineorder")&&MainTableHeadRowArray[x][y].width=="")
							{
								HeadHTML1+=20+"px";
							}
							else
								HeadHTML1+=MainTableHeadRowArray[x][y].width;
							HeadHTML1+=" align=center rowspan="+MainTableHeadRowArray[x][y].rowspan+" colspan="+MainTableHeadRowArray[x][y].colspan+">\n";
						}

						//判断序号
						if(MainTableHeadRowArray[x][y].kind.toLowerCase()=="xilineorder")
						{
							MainTableXilineOrderCol = y;
						}
						//判断是否有多选
						if(MainTableHeadRowArray[x][y].kind.toLowerCase()=="xilineselected")
						{
							MainTableXilineSelected = true;
						}
					}
					else
					{
						if(parseInt(MainTableHeadRowArray[x][y].rowspan)+parseInt(x)-1==parseInt(MainTableHeadRowNum))
						{
							if(MainTableHeadRowArray[x][y].direction.toLowerCase()!='upright')
								HeadHTML1+="<td " + MainTableHeadRowTrStyle_Event + " class=tableheadtr id=tableheadtd_1  width="+MainTableHeadRowArray[x][y].width+" align=center rowspan="+MainTableHeadRowArray[x][y].rowspan+" colspan="+MainTableHeadRowArray[x][y].colspan+">\n";
							else
								HeadHTML1+="<td " + MainTableHeadColTrStyle_Event + " class=tableheadtr_upright id=tableheadtd_1  width="+MainTableHeadRowArray[x][y].width+" align=center rowspan="+MainTableHeadRowArray[x][y].rowspan+" colspan="+MainTableHeadRowArray[x][y].colspan+">\n";
						}
						else
						{
							if(MainTableHeadRowArray[x][y].direction.toLowerCase()!='upright')
								HeadHTML1+="<td  " + MainTableHeadRowTrStyle_Event + " class=tableheadtr id=tableheadtd_1  align=center rowspan="+MainTableHeadRowArray[x][y].rowspan+" colspan="+MainTableHeadRowArray[x][y].colspan+">\n";
							else
								HeadHTML1+="<td  " + MainTableHeadColTrStyle_Event + " class=tableheadtr_upright id=tableheadtd_1  align=center rowspan="+MainTableHeadRowArray[x][y].rowspan+" colspan="+MainTableHeadRowArray[x][y].colspan+">\n";
						}
					}
					HeadHTML1+="<nobr>";
					HeadHTML1+="<div>"+MainTableHeadRowArray[x][y].text+"</div>";
					if(typeof(MainTableHeadRowArray[x][y].kind)!="undefined")
						if(MainTableHeadRowArray[x][y].kind.toLowerCase()=="xilineselected")
						{
							if(ifradio==0)
								HeadHTML1+="<input type=checkbox id=maintable_allchange"+MainListTableName+"_1 onclick='maintableallchange(this,\""+MainListTableName+"\")'>";
						}
					HeadHTML1+="</nobr></td>\n";
				}
			}
			HeadHTML11="";

			if(x==MainTableHeadRowNum)
				for(z=0;z<MainTableColArray.length;z++)
				{
					MainTableC=MainTableColArray[z];
					if(MainTableC.visible==1)
					{
						HeadHTML1+="<td  " + MainTableHeadRowTrStyle_Event + " class=tableheadtr id=tableheadtd_"+MainTableC.name+" width="+MainTableC.width+" align=center ";
						if(typeof(MainTableC.color) != "undefined" || typeof(MainTableC.textcolor) != "undefined")
						{
							HeadHTML1+="style='";
							if(typeof(MainTableC.color)!="undefined")
								HeadHTML1+="background:"+MainTableC.color+";";
							if(typeof(MainTableC.textcolor)!="undefined")
								HeadHTML1+="color:"+MainTableC.textcolor+";";
							HeadHTML1+="'";
						}

						//是否启用静态排序
						if(MainTableC.staticOrderby.length > 0 && MainTableC.staticOrderby.charAt('0') =="1"){
							HeadHTML1+=">\n<nobr><div><select id=staticOrderby"+MainListTableName+"_"+(z+MainTableColNum+1)+" onchange=\"MainTableStaticSort(this,this.length,"+(z+MainTableColNum+1)+","+MainTableHeadRowNum+","+MainTableXilineOrderCol+","+MainTableXilineSelected+");"+MainTableC.staticOrderby.split(',')[1]+"\">";
							HeadHTML1+="<option value="+MainTableC.text+">"+MainTableC.text+"</option>";
							HeadHTML1+="<option value='--全部--'>--全部--</option>";
							//HeadHTML1+="<option value='--升序--'>--升序--</option>";
							//HeadHTML1+="<option value='--降序--'>--降序--</option>";
							for(var op=0;op<MainTableStaticOderby[z+MainTableColNum+1].length;op++){
								HeadHTML1+="<option value="+MainTableStaticOderby[z+MainTableColNum+1][op]+">"+MainTableStaticOderby[z+MainTableColNum+1][op]+"</option>";
							}
						}//是否启用静态排序 end
						//是否是动态排序
						else if(typeof(MainTableC.orderbyname)!="undefined"){
							HeadHTML1+="style='cursor:pointer;' "+ MainTableC.orderbyname_title;
						}
						else{
							HeadHTML1+=">\n<nobr><div>"+MainTableC.text+"";
						}

						if(MainTableC.kind.toLowerCase()=="checkboxall")
							HeadHTML1+="<input type=checkbox name='MainListColChange_"+MainListTableName+"_"+(z+MainTableColNum+1)+"' id='MainListColChange_"+MainListTableName+"_"+(z+MainTableColNum+1)+"'>";

						HeadHTML1+="</div></nobr>\n";

						//列的bizname
						HeadHTML1+="<input type='text' style='display:none' name="+MainListTableName+"_Biz_"+MainTableC.num+" id="+MainListTableName+"_Biz_"+MainTableC.num+"  value="+MainTableC.bizname+">\n";
						HeadHTML1+="</td>\n";
					}
					else
						HeadHTML11+="<input type='text' style='display:none' name="+MainListTableName+"_Biz_"+MainTableC.num+" id="+MainListTableName+"_Biz_"+MainTableC.num+"  value="+MainTableC.bizname+">\n";
				}
			HeadHTML1+="</tr>\n";
			HeadHTML1+=HeadHTML11;
		}
	}
	else
	{
		HeadHTML1+="<tr " + MainTableHeadRowTrStyle_Event + " class=tableheadtr id='mhh' >\n";
		for(z=0;z<MainTableColArray.length;z++)
		{
			MainTableC=MainTableColArray[z];
			if(MainTableC.visible==1)
			{
				HeadHTML1+="<td " + MainTableHeadRowTrStyle_Event + " class=tableheadtr id=tableheadtd_"+MainTableC.name+" width="+MainTableC.width+" align=center ";
				if(typeof(MainTableC.color)!="undefined"||typeof(MainTableC.textcolor)!="undefined")
				{
					HeadHTML1+="style='";
					if(typeof(MainTableC.color)!="undefined")
						HeadHTML1+="background:"+MainTableC.color+";";
					if(typeof(MainTableC.textcolor)!="undefined")
						HeadHTML1+="color:"+MainTableC.textcolor+";";
					HeadHTML1+="'";
				}
				HeadHTML1+=">\n";
				HeadHTML1+="<div " + MainTableHeadRowTrStyle_Event + " class=tableheadtr>"+MainTableC.text+"</div></td>\n";
			}
		}
		HeadHTML1+="</tr>\n";//alert(HeadHTML)
	}
	HeadHTML1+="</thead>";

// if (MainListTableKind==0) HeadHTML1+="<table class=tablehead border=0 cellpadding=0 cellspacing=1>\n";
// HeadHTML1+="<tr class=tableheadtr id='mhh'>\n";
// HeadHTML1+="<td class=tableheadtd id=tableheadtd_1 width=50 align=left>\n";
// HeadHTML1+="<div class=stattableheadtext>选择9</div><input type='hidden' name='"+MainListTableName+"_Biz_1'"+"  value='XiLineSelectedFlag'"+"></td>\n";
// HeadHTML1+="<td class=tableheadtd id=tableheadtd_1 width=15 align=left>\n";
// HeadHTML1+="<div class=stattableheadtext></div></td>\n";
// HeadHTML1+="<td class=tableheadtd id=tableheadtd_1 width=50 align=left>\n";
// HeadHTML1+="<div class=stattableheadtext>序号9</div></td>\n";
//
// for(x=0;x<MainTableColArray.length;x++)
// {
//    MainTableC=MainTableColArray[x];
//    if(MainTableC.visible==1)
//    {
//          HeadHTML1+="<td class=tableheadtd id=tableheadtd_"+MainTableC.name+" width="+MainTableC.width+" align=left>\n";
//          HeadHTML1+="<div class=stattableheadtext>"+MainTableC.text+"</div></td>\n";
//    }
// }
//
// HeadHTML1+="</tr>\n";
	//if (MainListTableKind==0) HeadHTML1+="</table>";
	MainListTableHTML=MainListTableHTML.replace("<!-- TableHead1 -->\n",HeadHTML1);

	var ts;
	var ContentHTML="";
	ContentHTML+="<tbody>";

	//无数据的时候显示5个空行
	if(MainListTableRow==0)
	{
		if(typeof(MainTableRowNum)!="undefined")  NoDataRowNumber=parseInt(MainTableRowNum);

		for (k=2;k<=parseInt(NoDataRowNumber)+1;k++)
		{
			j=k-1;
			if (j%2==1) bgcolor=oddColColor; else bgcolor=evenColColor;
			ContentHTML+="<tr  ";
			//行颜色
			if(typeof(MainTableHeadColA[j])=="object")
				if(typeof(MainTableHeadColA[j].rowcolor)!="undefined"||typeof(MainTableHeadColA[j].rowtextcolor)!="undefined")
				{
					ContentHTML+="style='";
					if(typeof(MainTableHeadColA[j].rowcolor)!="undefined")
						ContentHTML+="background:"+MainTableHeadColA[j].rowcolor+";";

					if(typeof(MainTableHeadColA[j].rowtextcolor)!="undefined")
						ContentHTML+="background:"+MainTableHeadColA[j].rowtextcolor+";";
					ContentHTML+="'";
				}

			if(oddColColor!=''&&evenColColor!=''&&newColor!='')    ContentHTML+=" border=1 bgcolor='"+bgcolor+"'>";
			else
			{
				if (j%2==1) ContentHTML+=" " + oddColColorStyle_Event + " border=1 class='tablelineodd'>";
				else ContentHTML+=" " + evenColColorStyle_Event + " border=1 class='tablelineeven'>";
			}

			for(i=0;i<MainTableHeadEndArray.length;i++)
			{
				var MainTableHeadEnd=MainTableHeadEndArray[i];
				ContentHTML+="<td ";

				if(typeof(MainTableHeadEnd.kind)!="undefined")
				//列颜色
					if((MainTableHeadEnd.kind.toLowerCase()=="xilineselected"||MainTableHeadEnd.kind.toLowerCase()=="xilinefileflag"||MainTableHeadEnd.kind.toLowerCase()=="xilineorder"||MainTableHeadEnd.kind.toLowerCase()=="xiicon")&&(typeof(MainTableHeadEnd.colcolor)!="undefined"||typeof(MainTableHeadEnd.coltextcolor)!="undefined"))
					{
						ContentHTML+=" style='";
						if(typeof(MainTableHeadEnd.colcolor)!="undefined")
							ContentHTML+="background:"+MainTableHeadEnd.colcolor+";";
						if(typeof(MainTableHeadEnd.coltextcolor)!="undefined")
							ContentHTML+="color:"+MainTableHeadEnd.coltextcolor+";";
						ContentHTML+="'";
					}
				if(typeof(MainTableHeadEnd.kind)!="undefined")
				{
					//选择：无数据时显示选择框
					if(MainTableHeadEnd.kind.toLowerCase()=="xilineselected")
					{
						ContentHTML+=" align=center>";
						/*ContentHTML+="<img name='"+MainListTableName+"checkimage_"+j+"_1' src='";
						 if(ifradio==0&&(OpenType1==0||OpenType1==1||OpenType1==3))
						 ContentHTML+=MainListCheckBox_Uncheck.src;
						 else if(ifradio==1&&(OpenType1==0||OpenType1==1||OpenType1==3))
						 ContentHTML+=MainListRadioBox_Uncheck.src;
						 ContentHTML+="'>\n";*/
						ContentHTML+="&nbsp;</td>\n";
					}
					//有附件时有图标显示
					else if(MainTableHeadEnd.kind.toLowerCase()=="xilinefileflag")
						ContentHTML+=" align=center></td>\n";
					//序号：无数据时显示序号的值
					else if(MainTableHeadEnd.kind.toLowerCase()=="xilineorder")
					//ContentHTML+=" align=center><div>"+j+"</div></td>\n";
						ContentHTML+=" align=center><div></div>&nbsp;</td>\n";
					//图标：无数据时不显示图标
					else if(MainTableHeadEnd.kind.toLowerCase()=="xiicon")
					//ContentHTML+=" align=center><img src='"+skinpath+MainTableHeadEnd.icon+"'></td>\n";
						ContentHTML+=" align=center>&nbsp;</td>\n";

				}
				else
				{
					if(typeof(MainTableHeadColArray[j][i+1])=="object")
					{
						//列颜色
						if(typeof(MainTableHeadColArray[j][i+1].color)!="undefined"||typeof(MainTableHeadColArray[j][i+1].textcolor)!="undefined" )
						{
							ContentHTML+="style='";
							if(typeof(MainTableHeadColArray[j][i+1].color)!="undefined")
								ContentHTML+="background:"+MainTableHeadColArray[j][i+1].color+";";
							if(typeof(MainTableHeadColArray[j][i+1].textcolor)!="undefined")
								ContentHTML+="color:"+MainTableHeadColArray[j][i+1].textcolor+";";
							ContentHTML+="'";
						}
						//竖向文字
						if(MainTableHeadColArray[j][i+1].direction.toLowerCase()!='upright')
							ContentHTML+=" " + MainTableHeadRowTrStyle_Event + " class=tableheadtr align=left rowspan="+MainTableHeadColArray[j][i+1].rowspan+" colspan="+MainTableHeadColArray[j][i+1].colspan+"><div>"+MainTableHeadColArray[j][i+1].text+"</div>&nbsp;</td>\n";
						else
							ContentHTML+="  " + MainTableHeadColTrStyle_Event + " class=tableheadtr_upright align=left rowspan="+MainTableHeadColArray[j][i+1].rowspan+" colspan="+MainTableHeadColArray[j][i+1].colspan+"><div>"+MainTableHeadColArray[j][i+1].text+"</div>&nbsp;</td>\n";
					}
				}
			}
			for(z=0;z<MainTableColArray.length;z++)
			{
				MainTableC=MainTableColArray[z];
				if(MainTableC.visible==1)
				{
					ContentHTML+="<td  align=left" + MainTableBodyTdStyle_Event + " class=tablecontent  ";
					//表头单元格颜色
					if(typeof(MainTableC.colcolor)!="undefined"||typeof(MainTableC.coltextcolor)!="undefined")
					{
						ContentHTML+="style='";
						if(typeof(MainTableC.colcolor)!="undefined")
							ContentHTML+="background:"+MainTableC.colcolor+";";
						if(typeof(MainTableC.coltextcolor)!="undefined")
							ContentHTML+="color:"+MainTableC.coltextcolor+";";
						ContentHTML+="'";
					}
					ContentHTML+=">&nbsp;</td>\n";
				}
			}
			ContentHTML+="</tr>\n";
		}
	}

	//有数据时
	if(typeof(MainTableRowNum)!="undefined"&&MainListTableRow>0)MainListTableRow=parseInt(MainTableRowNum);

	for (k=2;k<=parseInt(MainListTableRow)+1;k++)
		//for (k=2;k<=3;k++)
	{
		var ContentHTML_TR="";
		j=k-1;
		ContentHTML_TR+="<input type='text' style='display:none' name="+MainListTableName+"_modelID_"+j+" id="+MainListTableName+"_modelID_"+j+"  value='"+PostValue[j]+"'>";
		//alert("ondblclick='window.open(\""+SummitFileName+"?command="+command+"&taskFramePN="+taskFramePN+"&modelID="+PostValue[j]+"\",\"name\",\"top=1,left=1,dependent=1, resizable=1,location=no,scrollbars=yes,status=yes,width=1020,height=690\")'");
		var rowcolor="";
		//预警标记
		if(AlarmFlag[j]==1) rowcolor="#FF0000";

		if (j%2==1) bgcolor=oddColColor; else bgcolor=evenColColor;
		if (j%2==1) ts="odd"; else ts="even";

		//类型主表列表0,放大镜弹出列表1,放大镜打开页面含两个内嵌框架(树和列表)3
		if(OpenType1==1||OpenType1==3)
		{
			if(oddColColor!=''&&evenColColor!=''&&newColor!='')
				ContentHTML_TR+="<tr ondblclick=sendParent("+j+") bgcolor='"+bgcolor+"'";
			else
			{
				ContentHTML_TR+="<tr ondblclick=sendParent("+j+") style=''";
				if (j%2==1) ContentHTML_TR+=" " + oddColColorStyle_Event + " class=tablelineodd data-defaultStyle=tablelineodd ";
				else ContentHTML_TR+=" " + evenColColorStyle_Event + " class=tablelineeven data-defaultStyle=tablelineeven ";
			}
		}
		else if(OpenType1!=1&&OpenType1!=2&&OpenType1!=3)
		{
			//双击事件
			ContentHTML_TR+="<tr ";
			if(SummitFile!="")
			{
				ContentHTML_TR+="ondblclick='";
				ContentHTML_TR+="set(2,"+j+",\""+MainListTableName+"\",this)";
				ContentHTML_TR+="' ";
			}
			if(oddColColor!=''&&evenColColor!=''&&newColor!='')
				ContentHTML_TR+=" bgcolor='"+bgcolor+"'";
			else
			{
				if (j%2==1) ContentHTML_TR+=" " + oddColColorStyle_Event + " class=tablelineodd  data-defaultStyle=tablelineodd ";
				else ContentHTML_TR+=" " + evenColColorStyle_Event + " class=tablelineeven  data-defaultStyle=tablelineeven ";
			}
		}

		//设置行颜色
		ContentHTML_TR+=setMainListRowColor(command);

		//tr 移入移出效果  吕斌 20139.6 add
		ContentHTML_TR+= ' onmouseover=\"mainTableTrMouseover(this)\"  onmouseout=\"mainTableTrMouseout(this)\" '

		//设置tr背景颜色
		ContentHTML_TR+=" style='cursor:pointer; display:table-row;' border=1  oncontextmenu='ifMenu();{if(ifMenu()==0)return false;}MainListTableMenuOnMouseUp("+j+");return false;'   id=tableline"+ts+"_"+j+" >";

		//显示特殊列
		var InitValue=MainListInitValue[j][1];
		ContentHTML_TR+=showMainListSpecialCol_Value(j, InitValue);

		//根据条件显示不同颜色
		//计算行显示颜色和列显示颜色
		computeMainListRowAndColConditionColor(j);

		var testli="";

		//显示列并填充数据
		for (i=MainTableColNum+1;i<=MainListTablCol;i++)
		{
			//如果没有值,赋空值
			if(typeof(MainListInitValue[j][i])=='undefined')MainListInitValue[j][i]='';

			var InitValue=MainListInitValue[j][i];
			var ColKind=MainListColKind[i];
			var ShowConditionColor=MainListShowConditionColor[j];
			var ColShowConditionColor=MainListColShowConditionColor[j][i];

			ContentHTML_TR+=showMainListColAndValue(j,i, rowcolor, ShowConditionColor, ColShowConditionColor,InitValue);

		}
		ContentHTML+=ContentHTML_TR;
		ContentHTML+="</tr>\n";
		rowcolor="";
	}



// //隐藏列宽度
// var mainlistvisiblewidth=0;
// for(x=0;x<MainTableColArray.length;x++)
// {
//    MainTableC=MainTableColArray[x];
//    if(MainTableC.visible==0)
//    {
//       if(mainlistvisiblewidth==0)
//          mainlistvisiblewidth=parseInt(MainTableC.width);
//       else
//          mainlistvisiblewidth=parseInt(mainlistvisiblewidth)+parseInt(MainTableC.width);
//    }
// }
// //获得实际显示表格的总宽度
// //mainlisttablewidth=mainlisttablewidth-mainlistvisiblewidth;

// var MainListtablewidthHTML;
// MainListTableWidthHTML="width:"+mainlisttablewidth+"%;";
// MainListTableHTML=MainListTableHTML.replace("<!-- MainListTableWidth -->\n",MainListTableWidthHTML);


	var EndHTML="";
	//表尾
	//if (MainListTableKind==0) EndHTML+="<table class=tablehead border=0 cellpadding=0 cellspacing=1>\n";

	if(typeof(MainTableEndRowNum)!="undefined")
	{
		for(x=1;x<=MainTableEndRowNum;x++)
		{
			EndHTML+="<tr " + MainTableHeadRowTrStyle_Event + " class=tableheadtr>\n";

			for(y=1;y<MainTableEndRowArray[x].length;y++)
			{
				EndHTML+="<td ";
				//alert("x="+x+"y="+y+"&"+MainTableHeadRowArray[x][y].colspan)
				if(typeof(MainTableEndRowArray[x][y])=="object")
				{
					//MainTableHead=MainTableHeadRowArray[x][y];

					if(typeof(MainTableEndRowArray[x][y].color)!="undefined"||typeof(MainTableEndRowArray[x][y].textcolor)!="undefined")
					{
						EndHTML+=" style='";
						if(typeof(MainTableEndRowArray[x][y].color)!="undefined")
							EndHTML+="background:"+MainTableEndRowArray[x][y].color+";";
						if(typeof(MainTableEndRowArray[x][y].textcolor)!="undefined")
							EndHTML+="color:"+MainTableEndRowArray[x][y].textcolor+";";
						EndHTML+="'";
					}

					if(parseInt(MainTableEndRowArray[x][y].rowspan)+parseInt(x)-1==parseInt(MainTableEndRowNum))
					{
						if(MainTableEndRowArray[x][y].direction.toLowerCase()!='upright')
							EndHTML+="  " + MainTableHeadRowTrStyle_Event + " class=tableheadtr id=tableheadtd_1  width="+MainTableEndRowArray[x][y].width+" align=left rowspan="+MainTableEndRowArray[x][y].rowspan+" colspan="+MainTableEndRowArray[x][y].colspan+">\n";
						else
							EndHTML+="  " + MainTableHeadColTrStyle_Event + " class=tableheadtr_upright id=tableheadtd_1  width="+MainTableEndRowArray[x][y].width+" align=left rowspan="+MainTableEndRowArray[x][y].rowspan+" colspan="+MainTableEndRowArray[x][y].colspan+">\n";
					}
					else
					{
						if(MainTableHeadRowArray[x][y].direction.toLowerCase()!='upright')
							EndHTML+="  " + MainTableHeadRowTrStyle_Event + " class=tableheadtr id=tableheadtd_1  align=left rowspan="+MainTableEndRowArray[x][y].rowspan+" colspan="+MainTableEndRowArray[x][y].colspan+">\n";
						else
							EndHTML+="  " + MainTableHeadColTrStyle_Event + " class=tableheadtr_upright id=tableheadtd_1  align=left rowspan="+MainTableEndRowArray[x][y].rowspan+" colspan="+MainTableEndRowArray[x][y].colspan+">\n";
					}

//             if(MainTableHeadRowArray[x][y].kind=="xisys_check")MainTableHeadRowArray[x][y].text="选择"
//             else if(MainTableHeadRowArray[x][y].kind=="xisys_isfile")MainTableHeadRowArray[x][y].text=""
//             else if(MainTableHeadRowArray[x][y].kind=="xisys_order")MainTableHeadRowArray[x][y].text="序号"

					if(typeof(MainTableEndRowArray[x][y].values)=="undefined"||MainTableEndRowArray[x][y].values.length==0)
						EndHTML+="<div>"+MainTableEndRowArray[x][y].text+"</div>";
					else
						EndHTML+="<div>"+MainTableEndRowArray[x][y].text+" "+MainTableEndRowArray[x][y].values+"</div>";

					if(typeof(MainTableEndRowArray[x][y].kind)!="undefined")
						if(MainTableEndRowArray[x][y].kind.toLowerCase()=="xilineselected")
							EndHTML+="<input type='text' style='display:none' name='"+MainListTableName+"_Biz_1' id='"+MainListTableName+"_Biz_1'  value='XiLineSelectedFlag'>";
					EndHTML+="</td>\n";
				}
			}
			EndHTML+="</tr>\n";
		}

		MainListTableHTML=MainListTableHTML.replace("<!-- TableEnd -->\n",EndHTML);
	}
	//if (MainListTableKind==0) EndHTML+="</table>";
	ContentHTML+="\n";
	ContentHTML+="</tbody>";

	MainListTableHTML=MainListTableHTML.replace("<!-- TableCode -->\n",ContentHTML);
	//alert(MainListTableHTML);

	if(HeadRivet==1)
	{
		ContentHTML1="";
		ContentHTML1+="<table id='ListTable1' " + MainTableStyle_Event + " border=0 class=tablecellspacing cellpadding=0 cellspacing=1 style=position:absolute;>\n";
		for (k=2;k<=MainListTableRow+1;k++)
		{
			j=k-1;
			var rowcolor="";
			var alarmTag=0;

			if(AlarmFlag[j]==1)
				alarmTag=1;

			if(alarmTag==1)
			{
				rowcolor="#FF0000";
			}
			else
			{
				rowcolor="";
			}

			if (j%2==1) bgcolor=oddColColor; else bgcolor=evenColColor;
			if (j%2==1) ts="odd"; else ts="even";

			//类型主表列表0,放大镜弹出列表1,放大镜打开页面含两个内嵌框架(树和列表)3
			if(OpenType1==1||OpenType1==3)
			{
				if(oddColColor!=''&&evenColColor!=''&&newColor!='')
					ContentHTML1+="<tr ondblclick=sendParent("+j+") bgcolor='"+bgcolor+"'";
				else
				{
					ContentHTML1+="<tr ondblclick=sendParent("+j+")";
					if (j%2==1) ContentHTML1+=" " + oddColColorStyle_Event + " class=tablelineodd data-defaultStyle=tablelineodd ";
					else ContentHTML1+="  " + evenColColorStyle_Event + " class=tablelineeven data-defaultStyle=tablelineeven ";
				}
			}
			else if(OpenType1!=1&&OpenType1!=2&&OpenType1!=3)
			{
				//双击事件
				ContentHTML1+="<tr ";
				if(SummitFile!="")
				{
					//alert("aaaa");
					ContentHTML1+="ondblclick='";
					ContentHTML1+="set(2,"+j+",\""+MainListTableName+"\",this)";
					ContentHTML1+="' ";
				}
				if(oddColColor!=''&&evenColColor!=''&&newColor!='')
					ContentHTML1+=" bgcolor='"+bgcolor+"'";
				else
				{
					if (j%2==1) ContentHTML1+=" " + oddColColorStyle_Event + " class=tablelineodd data-defaultStyle=tablelineodd ";
					else ContentHTML1+="  " + evenColColorStyle_Event + " class=tablelineeven data-defaultStyle=tablelineeven ";
				}
			}
			//行颜色
			if(command.length!=0)
			{
				if(typeof(MainTableHeadColA[j])=="object")
					if(typeof(MainTableHeadColA[j].rowcolor)!="undefined"||typeof(MainTableHeadColA[j].rowtextcolor)!="undefined")
					{
						ContentHTML1+=" style=cursor:pointer;";
						if(typeof(MainTableHeadColA[j].rowcolor)!="undefined")
							ContentHTML1+="background:"+MainTableHeadColA[j].rowcolor+";";

						if(typeof(MainTableHeadColA[j].rowtextcolor)!="undefined")
							ContentHTML1+="background:"+MainTableHeadColA[j].rowtextcolor+";";
						ContentHTML1+="'";
					}
			}
			else
			{
				if(typeof(MainTableHeadColA[j])=="object")
					if(typeof(MainTableHeadColA[j].rowcolor)!="undefined"||typeof(MainTableHeadColA[j].rowtextcolor)!="undefined")
					{
						ContentHTML1+="style='";
						if(typeof(MainTableHeadColA[j].rowcolor)!="undefined")
							ContentHTML1+="background:"+MainTableHeadColA[j].rowcolor+";";

						if(typeof(MainTableHeadColA[j].rowtextcolor)!="undefined")
							ContentHTML1+="background:"+MainTableHeadColA[j].rowtextcolor+";";
						ContentHTML1+="'";
					}
			}

			ContentHTML1+=" style='cursor:hand; display:table-row;' border=1  oncontextmenu='ifMenu();{if(ifMenu()==0)return false;}MainListTableMenuOnMouseUp("+j+");return false;'   id=tableline"+ts+"_"+j+" >";

			for(s=0;s<MainTableHeadEndArray.length;s++)
			{
				var MainTableHeadEnd=MainTableHeadEndArray[s];
				ContentHTML1+="<td ";
				if(typeof(MainTableHeadEnd.kind)!="undefined")
				//列颜色
					if((MainTableHeadEnd.kind.toLowerCase()=="xilineselected"||MainTableHeadEnd.kind.toLowerCase()=="xilinefileflag"||MainTableHeadEnd.kind.toLowerCase()=="xilineorder"||MainTableHeadEnd.kind.toLowerCase()=="xiicon")&&(typeof(MainTableHeadEnd.colcolor)!="undefined"||typeof(MainTableHeadEnd.coltextcolor)!="undefined"))
					{
						ContentHTML1+=" style='";
						if(typeof(MainTableHeadEnd.colcolor)!="undefined")
							ContentHTML1+="background:"+MainTableHeadEnd.colcolor+";";
						if(typeof(MainTableHeadEnd.coltextcolor)!="undefined")
							ContentHTML1+="color:"+MainTableHeadEnd.coltextcolor+";";
					}
				if(typeof(MainTableHeadEnd.kind)!="undefined")
				{
					//选择
					if(MainTableHeadEnd.kind.toLowerCase()=="xilineselected")
					{
						if(typeof(MainTableHeadEnd.colcolor)!="undefined"||typeof(MainTableHeadEnd.coltextcolor)!="undefined")
							ContentHTML1+="cursor:pointer hand;'";
						else
							ContentHTML1+=" style='cursor:pointer hand';";

						if(OpenType1==1||OpenType1==3)
							ContentHTML1+=" ";
						else if(OpenType1!=1&&OpenType1!=2&&OpenType1!=3)
							ContentHTML1+=" onClick='set(1,"+j+",\""+MainListTableName+"\",this)' ";

						ContentHTML1+=" width="+MainTableHeadEnd.width+" align=center><input type='text' style='display:none' name="+MainListTableName+"_modelID_"+j+" id="+MainListTableName+"_modelID_"+j+"  value='"+PostValue[j]+"'>";

						ContentHTML1+="<img name='"+MainListTableName+"checkimage_"+j+"_1' src='";

						checkedflag=getCheckedFlag('MainListTable',MainListTableName, j, maintableShowTickComparePNColNum, maintableShowTickCompareValue, MainTableColNum);
						if(checkedflag=="checked")
						{
							//判断是否是单选框
							if(ifradio==0&&(OpenType1==0||OpenType1==1||OpenType1==3))
								ContentHTML1+=MainListCheckBox_Check.src;
							MainListColflag[j]=1;
						}
						else
						{
							if(MainListInitValue[j][1]=="1")
							{
								//判断是否是单选框
								if(ifradio==0&&(OpenType1==0||OpenType1==1||OpenType1==3))
									ContentHTML1+=MainListCheckBox_Check.src;
								else if(ifradio==1&&(OpenType1==0||OpenType1==1||OpenType1==3))
									ContentHTML1+=MainListRadioBox_Check.src;
								MainListColflag[j]=1;
							}
							else
							{
								//判断是否是单选框
								if(ifradio==0&&(OpenType1==0||OpenType1==1||OpenType1==3))
									ContentHTML1+=MainListCheckBox_Uncheck.src;
								else if(ifradio==1&&(OpenType1==0||OpenType1==1||OpenType1==3))
									ContentHTML1+=MainListRadioBox_Uncheck.src;
								MainListColflag[j]=0;
							}
						}

						ContentHTML1+="'";
						ContentHTML1+="";
						ContentHTML1+=">\n";

						ContentHTML1+="<input type='text' style='display:none' name='"+MainListTableName+"_"+j+"_1' id='"+MainListTableName+"_"+j+"_1' value=\"";

						//lili add 2010.10.07 为回显打勾(应该和下部分无关)
						if(MainListColflag[j]==0){ContentHTML1+=0;}
						else if(MainListColflag[j]==1 && typeof(MainListInitValue[j][1])!="undefined") {ContentHTML1+=MainListInitValue[j][1];}
						else if(MainListColflag[j]==1) {ContentHTML1+=1;}
						ContentHTML1+="\">\n";
						ContentHTML1+="</td>\n";
					}
					//附件图标
					else if(MainTableHeadEnd.kind.toLowerCase()=="xilinefileflag")
					{
						var FileCol;
						//有附件时有图标显示
						for (i=MainTableColNum+1;i<=MainListTablCol;i++)
						{
							if(MainListColKind[i].substring(0,4).toLowerCase()=="file")
							{
								FileCol=i;
							}
						}
						ContentHTML1+=" width="+MainTableHeadEnd.width+" align=center>";
						if (MainListInitValue[j][FileCol]!=""&&typeof(MainListInitValue[j][FileCol])!="undefined")
						{
							ContentHTML1+="<img name='"+MainListTableName+"fileimage_"+j+"_1' src='";
							ContentHTML1+=MainListFile.src;
							ContentHTML1+="'>";
						}
						ContentHTML1+="</td>\n";
					}
					//序号
					else if(MainTableHeadEnd.kind.toLowerCase()=="xilineorder")
						ContentHTML1+=" width="+MainTableHeadEnd.width+" align=center><div>"+j+"</div></td>\n";
					//图标
					else if(MainTableHeadEnd.kind.toLowerCase()=="xiicon")
						ContentHTML1+=" width="+MainTableHeadEnd.width+" align=center><img src='"+skinpath+MainTableHeadEnd.icon+"'></td>\n";
				}
				else
				{
					if(typeof(MainTableHeadColArray[j][s+1])=="object")
					{
						//列颜色
						if(typeof(MainTableHeadColArray[j][s+1].color)!="undefined"||typeof(MainTableHeadColArray[j][s+1].textcolor)!="undefined" )
						{
							ContentHTML1+="style='";
							if(typeof(MainTableHeadColArray[j][s+1].color)!="undefined")
								ContentHTML1+="background:"+MainTableHeadColArray[j][s+1].color+";";
							if(typeof(MainTableHeadColArray[j][s+1].textcolor)!="undefined")
								ContentHTML1+="color:"+MainTableHeadColArray[j][s+1].textcolor+";";
							ContentHTML1+="'";
						}

						if(MainTableHeadColArray[j][s+1].direction.toLowerCase()!='upright')
							ContentHTML1+=" " + MainTableHeadRowTrStyle_Event + " class=tableheadtr align=left rowspan="+MainTableHeadColArray[j][s+1].rowspan+" colspan="+MainTableHeadColArray[j][s+1].colspan+"><div>"+MainTableHeadColArray[j][s+1].text+"</div></td>\n";
						else
							ContentHTML1+="  " + MainTableHeadColTrStyle_Event + " class=tableheadtr_upright align=left rowspan="+MainTableHeadColArray[j][s+1].rowspan+" colspan="+MainTableHeadColArray[j][s+1].colspan+"><div>"+MainTableHeadColArray[j][s+1].text+"</div></td>\n";
					}
				}
			}
			ContentHTML1+="</tr>\n";
		}
		ContentHTML1+="</table>\n";
		MainListTableHTML=MainListTableHTML.replace("<!-- TableCode1 -->\n",ContentHTML1);
	}

	if(document.getElementById('refreshMainListTable_'+MainListTableName)){
		document.getElementById('refreshMainListTable_'+MainListTableName).innerHTML =MainListTableHTML;

	}
	else{
		document.writeln(MainListTableHTML);
	}

	if(MainListTableRow>0&&Rivet==1){ ColRivet(RivetCol,RivetColNum);}

	//固定表头
	if (MainListTableKind==0)
	{
		query.setEvent(window,'load',MainTableHeadTop);
		query.setEvent(window,'scroll',MainListTableScroll);
		//attachEvent("onload",MainTableHeadTop);
		//attachEvent("onscroll",MainListTableScroll);
	}

	//是否默认全选
	if(ShowTypes.split(",").length==2 && ShowTypes.split(",")[1] == "true")
	{
		query.setEvent(window,"load",function () {
			document.getElementById("maintable_allchange"+MainListTableName+"_1").checked=true;
			maintableallchange(document.getElementById("maintable_allchange"+MainListTableName+"_1"),MainListTableName);
		});
	}

	//判断tr是否有自定义背景颜色
	if(MainListColShowConditionBGColor.join("")!="")
	{
		query.setEvent(window,"load",function () {
			var table = document.getElementById("ListTable");
			//var tableRow = table.rows.length-MainTableHeadRowNum;
			var tableRow = table.rows;
			for(var bgi=MainTableHeadRowNum;bgi<table.rows.length;bgi++){
				tableRow[bgi].style.backgroundColor = MainListColShowConditionBGColor[bgi-MainTableHeadRowNum+1];
			}
		});
	};

	if(MainListTableKind==2){
		query.setEvent(window,"load",function () {
			var table = document.getElementById("ListTable");
			if(parent.document.all(this.name).tagName == "IFRAME"){
				//parent.document.all(this.name).style.height=this.document.body.scrollHeight+25+"px";
				parent.document.all(this.name).style.height=this.document.body.scrollHeight+25+"px";
				this.document.body.style.cssText= "{overflow-y:hidden; overflow-x:auto; margin:0px; pading:0px; }";
			}
		});
	}

	//*************************************************************定时刷新 2013.10.15 张家林 add
	if(RefreshInterval>0 && RefreshCommand !="" && RefreshFrame !="" && RefreshModelIDPN !="" && isRefreshTableData == 0)
	{
		timer=setInterval(refreshMainListTable,RefreshInterval*1000);
	}
}

var refreshTakeDataStr="";
//******************************************************************请求新数据
function refreshMainListTable()
{
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

	if(isRefreshTableData == 0)
	{
		RefreshUrl="./txieasyui?command="+RefreshCommand+"&taskFramePN="+RefreshFrame+"&poolname="+PoolName+'&colname=json_ajax&colname1={dataform:"eui_datagrid_data",tablename:"'+MainListTableName+'",backfields:"'+RefreshModelIDPN+";";

		//处理takeData，过滤掉 bizname=detail0:ColBizName 这种形式的
		if(MainListTableTakeData.length > 0)
		{
			var takeDataArr=MainListTableTakeData.split("|");
			var takeDataArr2=[];
			for(var k=0;k<takeDataArr.length;k++)
			{
				var tempArr=takeDataArr[k].split("=");
				if(tempArr[0] =="bizname")
				{
					var tempArr2=tempArr[1].split(":");
					if(tempArr2[0] != MainListTableName)
					{
						takeDataArr2.push(takeDataArr[k]);
					}
				}
			}
			refreshTakeDataStr=takeDataArr2.join("|");
		}

		var dataFields="";
		for(var i=0;i<MainListBizName.length;i++)
		{
			if(MainListBizName[i] != undefined && MainListBizName[i] !="XiLineSelectedFlag")
			{
				dataFields+=";"+MainListBizName[i];
			}
		}
		RefreshUrl += dataFields+'"}';
	}

	isRefreshTableData++;
	xhr.onreadystatechange = function()
	{
		if(xhr.readyState==4 && xhr.status==200)
		{
			refreshMainListTableData(xhr.responseText);
		}
	}

	var url=RefreshUrl;

	if(refreshTakeDataStr.length > 0)
	{
		url+=bparameterUrlForEasyUI(refreshTakeDataStr);
	}

	xhr.open('get',url+"&refresh="+Math.random(),false);
	xhr.send(null);
	//clearInterval(timer);
}

//************************************************************************数据刷新
function refreshMainListTableData(tableData)
{
	var resultObj=eval('('+tableData+')');

	var dataArray=[];
	for(var i=0;i<resultObj.rows.length;i++)
	{
		var itemObj=resultObj.rows[i];
		dataArray[i]=[];
		dataArray[i][0]=itemObj[RefreshModelIDPN];
		var fieldCount=0;
		for(var j=0;j<MainListBizName.length;j++)
		{
			if(MainListBizName[j] != undefined && MainListBizName[j] !="XiLineSelectedFlag")
			{
				dataArray[i][fieldCount+1]= itemObj[MainListBizName[j]];
				fieldCount++;
			}
		}
	}

	//1.获取原表格,删除
	if(document.getElementById('refreshMainListTable_'+MainListTableName))
	{
		document.getElementById('refreshMainListTable_'+MainListTableName).innerHTML = '';
	}
	else
	{
		var thisTable = document.getElementById('stattablediv_'+MainListTableName);
		var __oDiv = document.createElement('div');
		__oDiv.id = 'refreshMainListTable_'+MainListTableName;
		thisTable.parentNode.insertBefore(__oDiv,thisTable);
		thisTable.parentNode.removeChild(thisTable);

		/////删除隐藏域

		var hiddenInput= document.getElementsByName(MainListTableName+"tableCol")[0];
		__oDiv.parentNode.removeChild(hiddenInput);

		hiddenInput= document.getElementsByName("colname")[0];
		__oDiv.parentNode.removeChild(hiddenInput);

		hiddenInput= document.getElementsByName(MainListTableName+"tableRow")[0];
		__oDiv.parentNode.removeChild(hiddenInput);

		hiddenInput= document.getElementsByName("linesperpage")[0];
		__oDiv.parentNode.removeChild(hiddenInput);

		hiddenInput= document.getElementsByName("orderbyname")[0];
		__oDiv.parentNode.removeChild(hiddenInput);

		hiddenInput= document.getElementById("tabletype_"+MainListTableName);
		__oDiv.parentNode.removeChild(hiddenInput);
	}

	//2.重新显示MainListTable
	ManiListTable_Attribute[21]=resultObj.rows.length; //修改记录行数
	eval('StartManiListTable(\''+ManiListTable_Attribute.join("\',\'")+'\')');

	var totalPage=1;
	if(resultObj.rows.length != resultObj.total)
	{
		totalPage = resultObj.total/resultObj.rows.length;
		if(totalPage.toString().indexOf(".")>0) totalPage=parseInt(totalPage)+1;
	}

	//3.显示控制分页的按钮行
	PagesRecords_Attribute[8]="1|"+totalPage+"|"+resultObj.total;+"|"   //设置当前页、总页数、总记录数
	if(totalPage==1)
	{
		PagesRecords_Attribute[9]="0|0|0|0|";   //设置前一页、后一页、首页、末页的标志
	}
	else
	{
		PagesRecords_Attribute[9]="0|1|0|1|";
	}
	eval('creatMPagesRecords(\''+PagesRecords_Attribute.join("\',\'")+'\')');

	//4.填充新数据
	for(var i=0;i<dataArray.length;i++)
	{
		SetPostValue(i+1,dataArray[i][0]);

		for(var j=1;j<dataArray[i].length;j++)
		{
			SetMainListInitValue(i+1,j,dataArray[i][j]);
		}
	}

	//5 显示表格
	ShowMainListTable(lines);
}

//形成需要带的参数链--从页面获取
function bparameterUrlForEasyUI(TakeData, escType)
{
	var surl="";
	if(typeof(TakeData)=="undefined")return surl;
	if(TakeData==""||TakeData.length==0)return surl;

	var y;
	//var z=1;
	var mname;  //控件名
	var mbizname;//业务层持久化名
	var input;
	var inputdata;

	//用|来分割purl    , 判断有几个参数
	var x = TakeData.split("|");  //bizname=1|bizname=2|bizname=3
	var alen = x.length;
	//判断是否传递参数
	if(alen < 1) return surl;

	for(y = 0; y < alen; y++)
	{
		if(x[y].indexOf("=")==-1)
		{
			mname=x[y];
			mbizname=x[y];
		}
		else
		{
			mname=(x[y].split("="))[1];
			mbizname=(x[y].split("="))[1];
		}
		input = "document.form.main_value_" + mname;
		inputdata = eval(input);

		//获得URL链
		if(typeof(inputdata) == "undefined"){
			surl = surl + "&" + mname + "=";
		}
		else
		{
			surl = surl + "&" + mname + "=" + tieamEscape(inputdata.value,escType);
		}
	}
	return surl;
}


function  set(h,h1,name,o)
{
	//var  val  =  setTimeout("callManager(h,h1,h2);",500);
	//if  (h==2)  clearTimeout(val);
	callManager(h,h1,name,o);

	//双击行 若有单选或者多选列 则把相应的选中相应的列 2013.10.10 吕斌 add
	if(h==2 && MainTableXilineSelected){
		callManager(1,h1,name,o);
	}

	var temp = "maintable_allchange"+name+"_1";
	if(ShowTypes.length==0 || ShowTypes.split(",")[0]==0)
	{
		if(form[temp]){
			form[temp].checked=false;
		}
	};

}

function  callManager(h,h1,name,o)
{
	ThisOndblclick = h1;
	var MainTableChildPageTarget;
	db=SummitFileName+"?command="+command+"&taskFramePN="+taskFramePN+"&poolname="+PoolName+bparameterUrl(MainListTableTakeData)+"&modelID="+tieamEscape(PostValue[h1])+"&refresh="+Math.random();
	//获得需要传参数的列号,
	TakeData="";
	for(x=0;x<MainTableColArray.length;x++)
	{
		MainTableC=MainTableColArray[x];
		if(MainTableC.bizname!="XiLineSelectedFlag"&&MainTableC.bizname.length!=0)
		{
			//获得传参数字符串
			//if(TakeData=="") TakeData="&main_value_" + MainTableC.bizname+"="+escape(MainListInitValue[h1][MainTableC.num])+ "&main_Biz_" + MainTableC.bizname + "=" + MainTableC.bizname;
			//else TakeData+="&main_value_" + MainTableC.bizname+"="+escape(MainListInitValue[h1][MainTableC.num])+ "&main_Biz_" + MainTableC.bizname + "=" + MainTableC.bizname;
			if(TakeData=="") TakeData="&main_value_" + tieamEscape(MainTableC.bizname)+"="+tieamEscape(MainListInitValue[h1][MainTableC.num])+ "&main_Biz_" + tieamEscape(MainTableC.bizname) + "=" + encodeURIComponent(MainTableC.bizname);
			else TakeData+="&main_value_" + tieamEscape(MainTableC.bizname)+"="+tieamEscape(MainListInitValue[h1][MainTableC.num])+ "&main_Biz_" + tieamEscape(MainTableC.bizname) + "=" + tieamEscape(MainTableC.bizname);
		}
	}
	//获得该表的对象
	for(x=0;x<GroupPageOArray.length;x++)
	{
		if(GroupPageOArray[x].name==name&&GroupPageOArray[x].attributename=="childpage")
		{
			MainTableChildPageTarget=GroupPageOArray[x].attribute[0].target;
			MainTableChildPageDblClickType=GroupPageOArray[x].DblClickType;
		}
	}
	db+=TakeData;
	//单击某行
	if  (h==1)
	{
		rowOver(h1,PostValue[h1],h);
	}
	//双击某行
	if  (h==2)
	{
		rowOver(h1,PostValue[h1],h);
		if(MainTableChildPageDblClickType==""||(MainTableChildPageDblClickType!=="dialog"&&MainTableChildPageDblClickType!=="1"))
			window.open(db,getTarget(MainTableChildPageTarget),getTargetParam(MainTableChildPageTarget,'dependent'));
		else
			ModalDialogstr =window.showModalDialog(db,getTarget(MainTableChildPageTarget),getTargetParam(MainTableChildPageTarget,"dialog"));
	}
}

var mh;
var mhh;
var ds;
var hs;
//scrollLeft 设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离。
//offsetTop  设置或获取位于对象上边界和窗口中目前可见内容的最上端之间的距离。
//offsetWidth 获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的宽度。
//clientWidth传回文件视窗的宽度
//childNodes.length获得子节点的数量
//style.left,style.top分别是层的左、上坐标
//onscroll 使用者滚动视窗前后时发生
function syncScroll(e)
{
	hs.scrollLeft = ds.scrollLeft;
}

function msyncResize(e)
{
	hs.style.width = ds.offsetWidth-(ds.offsetWidth - ds.clientWidth);
	for( i =0; i < mh.childNodes.length; i++ )
	{
		if(mhh.childNodes[i].offsetWidth==0)
		{
			return;//处理在tabpage中有iframe时,iframe中嵌的带ManiListTable的页面时产生得错误
		}
		else
			mh.childNodes[i].width = mhh.childNodes[i].offsetWidth; //alert(mhh.childNodes[i].rowSpan )//alert(mh.childNodes[i].innerHTML)
	}

	for(x=1;x<MainTableHeadRowNum;x++)
	{
		O=document.getElementById("mh"+x);
		O1=document.getElementById("mhh"+x);
		for(i=0;i<O.childNodes.length;i++)
		{
			if((parseInt(O.childNodes[i].rowSpan)+parseInt(x)-1)==parseInt(MainTableHeadRowNum))
				O.childNodes[i].width = O1.childNodes[i].offsetWidth;
		}
	}
}

function minit()
{
	mh = document.getElementById("mh");
	mhh = document.getElementById("mhh");
	ds = document.getElementById("ds");
	hs = document.getElementById("hs");
	hs.style.top = ds.offsetTop;
	hs.style.left = ds.offsetLeft;
	hs.style.visibility = 'visible';
	ds.onscroll=syncScroll;
	window.onresize=msyncResize;
	msyncResize();
}

function MenuOnClick()
{
	//判断是否有菜单
	if(typeof(HideAllMainListTableMenu)=="function")
		HideAllMainListTableMenu("rbpm",0);
}

function ifMenu()
{
	//判断是否有菜单
	if(typeof(HideAllMainListTableMenu)=="function")
		return 1;
	else if(typeof(HideAllTreeTableMenu)=="function")
		return 2;
	else
		return 0;
}

//判断是否有表格
function IfTable()
{
	//判断是主表
	if(eval(document.getElementById("mhh"))!=null)
	{
		if(eval(document.getElementById("mh"))!=null)
			minit();
		if(HeadRivet==1)
			colhead();
		if(Rivet==1)
		{
			window.onresize=ColR;
			ColR();
		}
	}

	//判断是细表
	if(document.getElementsByName("Edit_Table").length!=+0)
		init();
}

//清除IE缓存已勾选标记 lili 2006.05.24
function clearErrorSelectedFlag(tn,col,row,pv)
{
	for (i=1;i<=MainListTableRow;i++)
	{
		//alert("i,MainListTableRow="+i+" "+MainListTableRow);
		lp="form."+tn+"_"+i+"_"+col;
		lq="form."+tn+"checkimage_"+i+"_1";

		//alert(" MainListCheckBox_Check.src=" +MainListCheckBox_Check.src);
		//alert("eval(lp).value="+eval(lp).value+" eval(lq).src="+eval(lq).src);
		//清除勾选不一致的标记
		if(typeof(eval(lp))!="undefined" && eval(lp).value == "1" && typeof(eval(lq))!="undefined" && eval(lq).src!= MainListCheckBox_Check.src)
		{
			eval(lp).value="";
			//eval("form."+tn+"checkimage_"+i+"_"+ColName[col]).src=MainListRadioBox_Uncheck.src;
		}
	}
}
////边框
//function ManiListTableCell(cellpadding,cellspacing)
//{
// if(cellpadding==null&&cellpadding=="")padding=0;else padding=cellpadding;
// if(cellspacing==null&&cellspacing=="")spacing=1;else spacing=cellspacing;
//}
//回填放大镜
function sendParent(j)
{
	myparent = getParent();
	for (i=1;i<=MainListTablCol;i++)
	{
		backData[i] = MainListInitValue[j][i];
	}

	//放大镜打开页面含两个内嵌框架(如:树和列表)时的回填函数调用方法
	if(OpenType1==3){
		//判断是否使用jquer ui 打开了模态窗口
		if(typeof(window.top.JQueryUIInterface) != 'undefined'){
			var dialogName = window.parent.name.replace('_iframe','');
			myparent = window.top.JQueryUIInterface.lastDialogWindow;

			myparent.FeedBackData(tar,backData,MainTableColArray);
			var openAfterFunc=myparent.TableNameObj[tar];
			if(openAfterFunc!=null&&openAfterFunc!="") { myparent.execAfterFunc(openAfterFunc); }

			var oDiv = window.top.document.getElementById(dialogName);

			window.top.JQueryUIInterface.closeDialog(oDiv);
		}
		else{
			top.opener.FeedBackData(tar,backData,MainTableColArray);
			var openAfterFunc=top.opener.TableNameObj[tar];
			if(openAfterFunc!=null&&openAfterFunc!="") top.opener.execAfterFunc(openAfterFunc);
			top.window.close();
		}
	}
	else{

		//判断是否使用jquer ui 打开了模态窗口
		if(typeof(window.top.JQueryUIInterface) != 'undefined'){

			var dialogName = window.name.replace('_iframe','');
			myparent = window.top.JQueryUIInterface.lastDialogWindow;

			myparent.FeedBackData(tar,backData,MainTableColArray);
			var openAfterFunc=myparent.TableNameObj[tar];
			if(openAfterFunc!=null&&openAfterFunc!="") { myparent.execAfterFunc(openAfterFunc); }

			var oDiv = window.top.document.getElementById(dialogName);

			window.top.JQueryUIInterface.closeDialog(oDiv);

		}
		else{
			myparent.FeedBackData(tar,backData,MainTableColArray);
			var openAfterFunc=myparent.TableNameObj[tar];
			if(openAfterFunc!=null&&openAfterFunc!="") myparent.execAfterFunc(openAfterFunc);
			window.close();
		}

	}
	//window.dialogArguments.FeedBackData(tar,backData,MainTableColArray);

	//parent.FeedBackData(tar,backData,MainTableColArray);

}

//形成新的url链
function MainTableColsearch_url(searchUrl,ismodelID,ColChildPageTarget,type,TakeData,ConfirmText,row)
{
	if(ConfirmText!=null&&ConfirmText!=""){
		if (!confirm(ConfirmText)) return;
	}
	searchUrl+="&modelID="+tieamEscape(ismodelID);//modelID
	searchUrl+=bdparameterUrl(TakeData,"-1","-1",row);

	//模态窗口
	if(type=="buttondialog"||type=="imagebuttondialog"){
		//ModalDialogstr =window.showModalDialog(searchUrl,ColChildPageTarget,"'dependent=0,top="+ColChildPageTop+",left="+ColChildPageLeft+",resizable="+ColChildPageResizable+",location="+ColChildPageLocation+",status="+ColChildPageStatus+",center="+ColChildPageCenter+",scrollbars="+ColChildPageScrollbars+",width="+ColChildPageWidth+",height="+ColChildPageHeight+"'");
		ModalDialogstr =window.showModalDialog(searchUrl, getTarget(ColChildPageTarget), getTargetParam(ColChildPageTarget,"dialog"));
	}
	else if(type=="dialog"){

		var targetParam = getTargetParam(ColChildPageTarget,"button");
		var targetParamArr = targetParam.split(',');
		var dialog_width = '400';
		var dialog_height = '400';

		for(var i=0;i<targetParamArr.length;i++){
			if(targetParamArr[i].indexOf('width') != '-1'){
				dialog_width = parseInt(targetParamArr[i].split('=')[1]);
			}
			if(targetParamArr[i].indexOf('height') != '-1'){
				dialog_height = parseInt(targetParamArr[i].split('=')[1]);
			}
		}

		//alert(targetParamArr.join('______')+'\nwidth='+dialog_width+'\nheight='+dialog_height)

		window.top.JQueryUIInterface.createDialog({
			'url' : searchUrl,
			'width' : dialog_width,
			'height' : dialog_height,
			'lastWindow' : window
		});

	}
	else{
		open(searchUrl, getTarget(ColChildPageTarget), getTargetParam(ColChildPageTarget,"button"));
		//window.showModalDialog(searchUrl,window,"dialogWidth=600px;dialogHeight=500px;status=1;resizable=1;center=1;scroll=0")
	}
}

//排序
function setorderbyname(bizname,orderbyname,orderby)
{
	//alert('bizname='+bizname+'\norderbyname='+orderbyname+'\norderby='+orderby);
	if(orderby=="")
	{
		if(orderbyname.indexOf("asc")!="-1")orderby="desc";
		else if(orderbyname.indexOf("desc")!="-1")orderby="asc";
		orderbyname=orderbyname.split(" ")[0];
	}
	else
	{
		if(orderby=="asc")orderby="desc";
		else if(orderby=="desc")orderby="asc";
		orderbyname=orderbyname.split(" ")[0];
	}

	document.getElementById("orderbyname").value=bizname+" "+orderbyname+" "+orderby;
}

//全选
function maintableallchange(o,tablename,col)
{
	var table = document.getElementById("ListTable");
	var MainTableHeadRowNum = table.rows.length - MainListTableRow;
	//checkbox列
	if(col)
	{
		len=document.getElementsByName("MainListChange_"+tablename+"_"+col).length;

		if(o.checked==true)
		{
			for(var i=0;i<len;i++)
			{
				if(document.getElementsByName("MainListChange_"+tablename+"_"+col)[i].disabled==false)
				{
					document.getElementsByName("MainListChange_"+tablename+"_"+col)[i].value=1;
					eval("form."+tablename+"_"+(i+1)+"_"+col).value=1;
					document.getElementsByName("MainListChange_"+tablename+"_"+col)[i].checked=true;
				}
			}
		}
		else if(o.checked==false)
		{
			for(var i=0;i<len;i++)
			{
				if(document.getElementsByName("MainListChange_"+tablename+"_"+col)[i].disabled==false)
				{
					document.getElementsByName("MainListChange_"+tablename+"_"+col)[i].value=0;
					eval("form."+tablename+"_"+(i+1)+"_"+col).value=0;
					document.getElementsByName("MainListChange_"+tablename+"_"+col)[i].checked=false;
				}
			}
		}
	}
	//选择项
	else
	{
		if(o.checked==true)
		{
			o.checked=true;
			for (i=1;i<=MainListTableRow;i++)
			{
				if((eval("form."+tablename+"checkimage_"+i+"_1").src!==MainListCheckBox_Disabcheck.src))// && (table.rows[MainTableHeadRowNum+i-1].style.display=="table-row")
				{
					document.getElementsByName(tablename+"_"+i+"_1")[0].value="1";
					eval("form."+tablename+"checkimage_"+i+"_1").src=MainListCheckBox_Check.src;
					if(document.getElementsByName(tablename+"_"+i+"_3")[0]!=null){
						if(curlIDJoinString===""){
							curlIDJoinString=document.getElementsByName(tablename+"_"+i+"_3")[0].value;
						}else{
							curlIDJoinString+=","+document.getElementsByName(tablename+"_"+i+"_3")[0].value;
						}
					}
				}
			}
		}
		else if(o.checked==false)
		{
			o.checked=false;
			curlIDJoinString="";
			for (i=1;i<=MainListTableRow;i++)
			{
				if((eval("form."+tablename+"checkimage_"+i+"_1").src!==MainListCheckBox_Disabcheck.src))//|| (table.rows[MainTableHeadRowNum+i-1].style.display=="table-row")
				{
					document.getElementsByName(tablename+"_"+i+"_1")[0].value="0";
					eval("form."+tablename+"checkimage_"+i+"_1").src=MainListCheckBox_Uncheck.src;
				}
			}
		}
	}
}

function colhead()
{
	document.getElementById("ListTable1").style.top=document.getElementById("ListTable").offsetTop+document.getElementById("ListTable").rows[0].offsetHeight+document.getElementById("ListTable").rows[1].offsetHeight+2;
	document.getElementById("ListTable1").style.left=document.getElementById("ListTable").offsetLeft;

	for(i=0;i<document.getElementById("ListTable1").rows.length;i++)
	{
		for(j=0;j<document.getElementById("ListTable1").rows[i].cells.length;j++)
		{
			document.getElementById("ListTable1").rows[i].cells[j].width=document.getElementById("ListTable").rows[i+MainTableHeadRowNum].cells[j].clientWidth
			document.getElementById("ListTable1").rows[i].cells[j].height=document.getElementById("ListTable").rows[1].cells[j].height
			//alert(document.getElementById("ListTable1").rows[i].cells[j].width)
		}
	}
}

function MainListChange(o,row,col,name)
{
	if(o.checked===true)
		eval("form."+name+"_"+row+"_"+col).value=1;
	else
		eval("form."+name+"_"+row+"_"+col).value=0;
}

function checkSelect()
{
	var checkSelectFlag=0
	for (i=1;i<=MainListTableRow;i++)
	{
		if(document.getElementById(MainListTableName+"_"+i+"_1").value=="1")
		{
			checkSelectFlag++;
			break;
		}
	}
	if(checkSelectFlag==0)
		alert();
}

//显示列和值， lili 整理加入 2010.05.30
//j --行号
//i -- 列号
//initValue--MainListInitValue[j][i]
function showMainListCommColAndValue(j,i,rowcolor, ColShowConditionColor, InitValue, nobr)
{
	var ContentHTML="";
	var showvalue="";
	//if(j==2) alert("i, MainListColclassify="+i+","+MainListColclassify[i]);
	//文字方式
	if(MainListColShowValueStyle[i]==0)
	{
		ContentHTML+=joinStyle_Event(MainListColStyle_Event[i],MainTableBodyTdStyle_Event) + " class=tablecontent id=tablecontent_"+i+"_"+j+" width="+MainListColWidth[i]+" align="+MainListColAlign[i] + joinStyle_Event(MainTableBodyTdStyle_Event,MainListColStyle_Event[i]) +">\n";
		ContentHTML+="<input type='text' style='display:none'  name='"+MainListTableName+"_"+j+"_"+i+"' id='"+MainListTableName+"_"+j+"_"+i+"' value=\""+InitValue+"\">\n";
		for(a=0;a<ml;a++)
		{
			if(i==mm[a])
			{
				mainListcolshowvalue=MainListColshowvalue[i];
				mainListcoltruevalue=MainListColtruevalue[i];
				mainListcolclassify=MainListColclassify[i];

				showvalue=getShowValue(InitValue, mainListcolshowvalue, mainListcoltruevalue, mainListcolclassify);

			}
		}
		var colcolor=rowcolor;
		if(typeof(ColShowConditionColor)!="undefined")
		{
			colcolor=ColShowConditionColor;
		}

		if(typeof(nobr)!="undefined" && nobr!='') ContentHTML+="<nobr>";

		ContentHTML+="<font color='"+colcolor+"'>";
		if(MainListColshowvalue[i]!=="")
		{
			ContentHTML+=showvalue;
		}
		else
		{
			ContentHTML+=InitValue;
		}
		ContentHTML+="</font>";

		if(typeof(nobr)!="undefined" && nobr!='') ContentHTML+="</nobr>";

		ContentHTML+="</td>\n";
	}
	//图片方式
	else if(MainListColShowValueStyle[i]==1)
	{
		ContentHTML+=joinStyle_Event(MainListColStyle_Event[i],MainTableBodyTdStyle_Event)+ " class=tablecontent id=tablecontent_"+i+"_"+j+" width="+MainListColWidth[i]+" align="+MainListColAlign[i]+ joinStyle_Event(MainTableBodyTdStyle_Event,MainListColStyle_Event[i]) + ">\n";
		for(a=0;a<ml;a++)
		{

			if(i==mm[a])
			{
				mainListcolshowvalue=MainListColshowvalue[i];
				mainListcoltruevalue=MainListColtruevalue[i];
				showvalueArray = mainListcolshowvalue.split("|");
				truevalueArray = mainListcoltruevalue.split("|");
				l=truevalueArray.length;
				var MainListColShowImage = new Image();
				for (n=0;n<l;n++)
				{
					if(InitValue==truevalueArray[n])
					{
						MainListColShowImage.src=skinpath+showvalueArray[n];
						ContentHTML+="<img name='"+MainListTableName+"showimage_"+j+"_"+i+"' src='"+MainListColShowImage.src+"'";
						var searchUrl=getSearchUrl(FileSummitFileName[i],Filecommand[i],FiletaskFramePN[i],FilePoolName[i]);
						if(searchUrl!="")
							ContentHTML+=" onclick=\"ThisOndblclick='"+j+"';MainTableColsearch_url('"+searchUrl+"','"+PostValue[j]+"','"+MainListColChildPageTarget[i]+"','"+"buttonlink"+"','"+FileTakeData[i]+"','"+MainListConfirmText[i]+"','"+j+"');return false;\" ";
						ContentHTML+=">";
						break;
					}
				}
			}
		}

		ContentHTML+="<input type='text' style='display:none'  name='"+MainListTableName+"_"+j+"_"+i+"' id='"+MainListTableName+"_"+j+"_"+i+"' value=\""+InitValue+"\">\n";
	}
	return ContentHTML;
}

//显示列和值 lili 整理加入 2010.05.30
//j--行号
//i--列号
//InitValue--MainListInitValue[j][i]
//MainListInitValue--MainListInitValue 有些不好处理的，就保留了。
function showMainListColAndValue(j,i, rowcolor, ShowConditionColor, ColShowConditionColor, InitValue)
{
	var ContentHTML="";
	var ColKind=MainListColKind[i];
	MainTableC=MainTableColArray[i-(MainTableColNum+1)];

	if(MainTableColArray[i-(MainTableColNum+1)].visible==0)
	{
		if(ColKind.toLowerCase()=="image")
			ContentHTML+="<img name="+MainListTableName+"_"+j+"_"+i+" src="+InitValue+" style='visibility: hidden'>";
		else if(ColKind.toLowerCase()=="imageskin")
			ContentHTML+="<img src="+skinpath+InitValue+" style='visibility: hidden'></td>";
		else {
			//ContentHTML+="<input type=hidden name="+MainListTableName+"_"+j+"_"+i+" Value=\""+InitValue+"\">\n";
			//2014.1.17 add 影藏列添加td
			ContentHTML+="<td style='display:none;'><input type='text' style='display:none' name="+MainListTableName+"_"+j+"_"+i+" id="+MainListTableName+"_"+j+"_"+i+" Value=\""+InitValue+"\"></td>\n";
		}
	}
	else
	{
		ContentHTML+="<td ";

		//ContentHTML+=" style='text-align:"+MainListColAlign[i]+";' ";

		//alert(typeof(MainTableC.colcolor)+'\n'+typeof(MainTableC.coltextcolor)+'\n'+typeof(MainTableHeadColA[j])+'\nShowConditionColor:'+ShowConditionColor);

		ContentHTML+="style='text-align:"+MainListColAlign[i]+";";

		if((typeof(MainTableC.colcolor)!="undefined"||typeof(MainTableC.coltextcolor)!="undefined"||typeof(MainTableHeadColA[j])=="object"))
		{
			if(typeof(MainTableC.colcolor)!="undefined")
				ContentHTML+="background:"+MainTableC.colcolor+";";
			if(typeof(MainTableC.coltextcolor)!="undefined"&&ShowConditionColor=="")
				ContentHTML+="color:"+MainTableC.coltextcolor+";";
			else
				ContentHTML+="color:"+ShowConditionColor+";";
		}
		else
		{

			if(ShowConditionColor!=="")
				ContentHTML+="color:"+ShowConditionColor+";";
		}
		ContentHTML+="'";

		if(ColKind.toLowerCase()=="text")
		{
			ContentHTML+=showMainListCommColAndValue(j,i,rowcolor, ColShowConditionColor, InitValue, "nobr");
		}
		else if(ColKind.toLowerCase()=="textbr")
		{
			ContentHTML+=showMainListCommColAndValue(j,i,rowcolor, ColShowConditionColor, InitValue, '');
		}
		else if(ColKind.toLowerCase().indexOf("textclipped")!==-1)
		{
			var showvalue="";
			var textclippedlen=ColKind.toLowerCase().substr(11);

			if(InitValue!=null){
				ContentHTML+=" title=\""+MainListInitValue[j][i]+"\""+" ";
				ContentHTML+=showMainListCommColAndValue(j,i,rowcolor, ColShowConditionColor, substr_omissionMark(MainListInitValue[j][i],textclippedlen), 'nobr');
			}
		}
		else if(ColKind.toLowerCase().indexOf("html")!==-1)
		{
			ContentHTML+=joinStyle_Event(MainListColStyle_Event[i],MainTableBodyTdStyle_Event) + " class=tablecontent id=tablecontent_"+i+"_"+j+" width="+MainListColWidth[i]+" align="+MainListColAlign[i] + joinStyle_Event(MainTableBodyTdStyle_Event,MainListColStyle_Event[i]) +">\n";
			ContentHTML+="<input type='text' style='display:none'  name='"+MainListTableName+"_"+j+"_"+i+"' id='"+MainListTableName+"_"+j+"_"+i+"' value=\""+MainListInitValue[j][i]+"\">\n";
			ContentHTML+=MainListInitValue[j][i]+"</td>";
		}
		else if(ColKind.substring(0,4).toLowerCase()=="file")
		//显示上载、下载文件、FileXX方式连接
		{
			ContentHTML+=joinStyle_Event(MainListColStyle_Event[i],MainTableBodyTdStyle_Event) + " class=tablecontent id=tablecontent_"+i+"_"+j+" width="+MainListColWidth[i]+" align="+MainListColAlign[i] + joinStyle_Event(MainTableBodyTdStyle_Event,MainListColStyle_Event[i]) +">\n";
			if (!MainListInitValue[j][i]) MainListInitValue[j][i]=",";
			if (MainListInitValue[j][i]!=",") ContentHTML+="";



			//2006-8-28修改下载字段的显示名称
			MainListSplitString(MainListInitValue[j][i],",",ColKind.substring(4),FilePoolName[i]);

			MainListLabelText = MainListLabelText == undefined ? '' : MainListLabelText;

			ContentHTML+="<A HREF=\""+MainListFileName+"\" target='"+getTarget(MainListColChildPageTarget[i])+"' ";
			ContentHTML+=" "+MainListColStyle_Event[i];
			if (MainListTableKind==2)
				ContentHTML+=" title='"+MainListLabelText+"'><nobr>"+MainListLabelText+"</nobr></A>";
			else
				ContentHTML+=">"+MainListLabelText+"</nobr></A>";
			ContentHTML+="<input type='text' style='display:none'  name='"+MainListTableName+"_"+j+"_"+i+"' id='"+MainListTableName+"_"+j+"_"+i+"' value=\""+MainListInitValue[j][i]+"\">\n";
			//if(MainListInitValue[j][i]!=",")ContentHTML+="<p></p>";
			//下载文件
		}
		else if(ColKind.toLowerCase()=="image"||ColKind.split(";")[0].toLowerCase()=="image")
		{
			var tmpindex=MainListInitValue[j][i].split(",");
			ContentHTML+=joinStyle_Event(MainListColStyle_Event[i],MainTableBodyTdStyle_Event) + " class=tablecontent id=tablecontent_"+i+"_"+j+" width="+MainListColWidth[i]+" align="+MainListColAlign[i] + joinStyle_Event(MainTableBodyTdStyle_Event,MainListColStyle_Event[i]) +">\n";
			ContentHTML+="<input type='text' style='display:none'  name='"+MainListTableName+"_"+j+"_"+i+"' id='"+MainListTableName+"_"+j+"_"+i+"' value=\""+MainListInitValue[j][i]+"\">\n";

			//原图显示
			if(ColKind.toLowerCase()=="image"){
				if(tmpindex[0].length==0){ ContentHTML+="</td>"; }
				else{ ContentHTML+="<img src='"+tmpindex[0]+"'></td>"; }
			}
			//缩放显示
			else{
				if(tmpindex[0].length==0){ ContentHTML+="</td>"; }
				else{ ContentHTML+="<img src="+tmpindex[0]+" onload='MainListDrawImage(this,"+(ColKind.split(';')[1]).split(',')[0]+","+(ColKind.split(';')[1]).split(',')[1]+")'/></td>"; }
			}
		}
		/*
		 else if(ColKind.split(";")[0]=="image")
		 {
		 ContentHTML+=joinStyle_Event(MainListColStyle_Event[i],MainTableBodyTdStyle_Event) + " class=tablecontent id=tablecontent_"+i+"_"+j+" width="+MainListColWidth[i]+" align="+MainListColAlign[i] + joinStyle_Event(MainTableBodyTdStyle_Event,MainListColStyle_Event[i]) +">\n";
		 ContentHTML+="<input type=hidden  name='"+MainListTableName+"_"+j+"_"+i+"' value=\""+MainListInitValue[j][i]+"\">\n";
		 if(MainListInitValue[j][i]!=""){
		 alert(MainListInitValue[j][i]);
		 //是否显示原图
		 if(MainListInitValue[j][i].indexOf(";")==-1){
		 ContentHTML+="<img src="+MainListInitValue[j][i]+" /></td>";
		 }
		 else{
		 //显示等比例缩放的图片
		 var tmpindex=MainListInitValue[j][i].split(",");
		 ContentHTML+="<img src="+tmpindex[0]+" onload='MainListDrawImage(this,"+(ColKind.split(';')[1]).split(',')[0]+","+(ColKind.split(';')[1]).split(',')[1]+")'/></td>";
		 }
		 }
		 }*/
		else if(ColKind.toLowerCase()=="imageskin")
		{
			//搜索标记
			ContentHTML+=joinStyle_Event(MainListColStyle_Event[i],MainTableBodyTdStyle_Event) + " class=tablecontent id=tablecontent_"+i+"_"+j+" width="+MainListColWidth[i]+" align="+MainListColAlign[i] + joinStyle_Event(MainTableBodyTdStyle_Event,MainListColStyle_Event[i]) +">\n";
			ContentHTML+="<input type='text' style='display:none'  name='"+MainListTableName+"_"+j+"_"+i+"' id='"+MainListTableName+"_"+j+"_"+i+"' value=\""+skinpath+MainListInitValue[j][i]+"\">\n";
			ContentHTML+="<img src="+skinpath+MainListInitValue[j][i]+"></td>";
		}
		//链接按钮
		else if(ColKind.toLowerCase()=="buttonlink"||ColKind.toLowerCase()=="buttondialog"||ColKind.toLowerCase()=="imagebuttonlink"||ColKind.toLowerCase()=="imagebuttondialog")
		{
			var width;
			var searchUrl;
			//默认的url
			if(FiletaskFramePN[i].split(",")[0]!=""&&Filecommand[i].split(",")[0]!=""){
				searchUrl=getSearchUrl(FileSummitFileName[i],Filecommand[i].split(",")[0],FiletaskFramePN[i].split(",")[0],FilePoolName[i]);
			}else{
				searchUrl=MainListInitValue[j][i]+"?";
			}

			//alert(FileSummitFileName[i]+"\n"+Filecommand[i]+"\n"+FiletaskFramePN[i]+"\n"+FilePoolName[i]);
			ContentHTML+=joinStyle_Event(MainListColStyle_Event[i],MainTableBodyTdStyle_Event) + " class=tablecontent id=tablecontent_"+i+"_"+j+" width="+MainListColWidth[i]+" align="+MainListColAlign[i] + joinStyle_Event(MainTableBodyTdStyle_Event,MainListColStyle_Event[i]) +">\n";
			//如果是按钮链接或按钮模态
			if( ColKind.toLowerCase()=="buttonlink"||ColKind.toLowerCase()=="buttondialog")
			{

				//判断是否有多种按钮
				var Type = ColKind.toLowerCase();
				var NewObj = MainListColKinds(Type,FileSummitFileName[i],FilePoolName[i],MainListInitValue[j][i],PostValue[j],MainListColChildPageTarget[i],ColKind,FileTakeData[i],MainListConfirmText[i],j,MainListColText[i],Filecommand[i],FiletaskFramePN[i],MainListColtruevalue[i],MainListColshowvalue[i]);

				if (NewObj.text.length*15<31)width=30;
				else width=NewObj.text.length*15;
				if( MainListColshowvalue[i].split("|").length>1 || MainListInitValue[j][i] != "" )
				{
					//ContentHTML+="<div style='padding:0px; border:1px ridge #C0C0C0; background-position: center;  width: "+width+"px;height:20;'>";
					ContentHTML+="<div class='mainTableButton' style='padding:0px; background-position: center;  width: "+width+"px;height:20;'>";
					ContentHTML+="<table border='0' width='100%' cellspacing='0' cellpadding='0' height='100%'>";
					ContentHTML+="<tr>";

					if(MainTableC.BeforeFun != ''){
						ContentHTML+="<td rownum="+j+" "+ MainListColStyle_Event[i] + " class=button align=center  onclick=\"ThisOndblclick='"+j+"';if("+MainTableC.BeforeFun+" != false){"+NewObj.events+"; "+MainTableC.AfterFun+"; }\" onmouseover=this.className='moveInButton'; onmouseout=this.className='moveOutButton'; onmousedown=this.className='moveDownButton'; onmouseup=this.className='moveInButton'; style='vertical-align: middle;cursor:hand; ";
					}
					else{
						ContentHTML+="<td rownum="+j+" "+ MainListColStyle_Event[i] + " class=button align=center  onclick=\"ThisOndblclick='"+j+"'; "+NewObj.events+"; "+MainTableC.AfterFun+"; \" onmouseover=this.className='moveInButton'; onmouseout=this.className='moveOutButton'; onmousedown=this.className='moveDownButton'; onmouseup=this.className='moveInButton'; style='vertical-align: middle;cursor:hand; ";
					}
					ContentHTML+=" '>"+NewObj.text+"</td>";
				}
				else
				{
					//ContentHTML+="<div style='padding:0px; border:1px ridge #C0C0C0; background-position: center;  width: "+width+"px;height:20;'>";
					ContentHTML+="<div class='mainTableButton' style='padding:0px; background-position: center;  width: "+width+"px;height:20;'>";
					ContentHTML+="<table border='0' width='100%' cellspacing='0' cellpadding='0' height='100%'>";
					ContentHTML+="<tr>";

					if(MainTableC.BeforeFun != ''){
						ContentHTML+="<td rownum="+j+" " + MainListColStyle_Event[i] + " class=button align=center  onclick=\"ThisOndblclick='"+j+"'; if("+MainTableC.BeforeFun+" != false){ MainTableColsearch_url('"+searchUrl+"','"+PostValue[j]+"','"+MainListColChildPageTarget[i]+"','"+ColKind+"','"+FileTakeData[i]+"','"+MainListConfirmText[i]+"','"+j+"'); "+MainTableC.AfterFun+"; }\" onmouseover=this.className='moveInButton'; onmouseout=this.className='moveOutButton'; onmousedown=this.className='moveDownButton'; onmouseup=this.className='moveInButton'; style='vertical-align: middle;cursor:hand; ";
					}
					else {
						ContentHTML+="<td rownum="+j+" " + MainListColStyle_Event[i] + " class=button align=center  onclick=\"ThisOndblclick='"+j+"'; MainTableColsearch_url('"+searchUrl+"','"+PostValue[j]+"','"+MainListColChildPageTarget[i]+"','"+ColKind+"','"+FileTakeData[i]+"','"+MainListConfirmText[i]+"','"+j+"'); "+MainTableC.AfterFun+"; \" onmouseover=this.className='moveInButton'; onmouseout=this.className='moveOutButton'; onmousedown=this.className='moveDownButton'; onmouseup=this.className='moveInButton'; style='vertical-align: middle;cursor:hand; ";
					}
					ContentHTML+=" '>"+NewObj.text+"</td>";
				}
				ContentHTML+="</tr></table></div>"

			}
			else
			{
				var mainListcolshowvalue=MainListColshowvalue[i];
				var showvalueArray = mainListcolshowvalue.split("|");
				var showvalueArray_len=showvalueArray.length;

				if(showvalueArray_len>=1) moveInPictureName=skinpath+showvalueArray[0];
				if(showvalueArray_len>=2) moveOutPictureName=skinpath+showvalueArray[1];
				else moveOutPictureName=moveInPictureName;
				if(showvalueArray_len>=3) moveDownPictureName=skinpath+showvalueArray[2];
				else moveDownPictureName=moveInPictureName;

				ContentHTML+="<table border='0' width='100%' cellspacing='0' cellpadding='0' height='100%'>";
				ContentHTML+="<tr>";
				ContentHTML+="<td " + MainListColStyle_Event[i] +" align=center valign=middle>";

				ContentHTML+="<img " + MainListColStyle_Event[i]+ " style='cursor:hand;' title='"+MainListColText[i]+"' src="+moveOutPictureName;
				ContentHTML+="   onclick=\"ThisOndblclick='"+j+"';MainTableColsearch_url('"+searchUrl+"','"+PostValue[j]+"','"+MainListColChildPageTarget[i]+"','"+ColKind+"','"+FileTakeData[i]+"','"+MainListConfirmText[i]+"','"+j+"');return false;\" ";

				if(MainTableC.BeforeFun != ''){
					ContentHTML+="   onclick=\"ThisOndblclick='"+j+"'; if("+MainTableC.BeforeFun+" != false){ MainTableColsearch_url('"+searchUrl+"','"+PostValue[j]+"','"+MainListColChildPageTarget[i]+"','"+ColKind+"','"+FileTakeData[i]+"','"+MainListConfirmText[i]+"','"+j+"'); "+MainTableC.AfterFun+"; return false; }\" ";
				}
				else {
					ContentHTML+="   onclick=\"ThisOndblclick='"+j+"';MainTableColsearch_url('"+searchUrl+"','"+PostValue[j]+"','"+MainListColChildPageTarget[i]+"','"+ColKind+"','"+FileTakeData[i]+"','"+MainListConfirmText[i]+"','"+j+"');return false;\" ";
				}
				ContentHTML+=" onmouseover=this.src='"+moveInPictureName+"';this.className='Img_moveInButton'; onmouseout=this.src='"+moveOutPictureName+"';this.className='Img_moveOutButton'; onmousedown=this.src='"+moveDownPictureName+"';this.className='Img_moveDownButton'; onmouseup=this.src='"+moveInPictureName+"';this.className='Img_moveInButton';>";

				ContentHTML+="</td>";
				ContentHTML+="</tr></table></div>"
				//alert(ContentHTML);
			}


			ContentHTML+="<input type='text' style='display:none'  name='"+MainListTableName+"_"+j+"_"+i+"' id='"+MainListTableName+"_"+j+"_"+i+"' value=\""+MainListInitValue[j][i]+"\">\n";
			ContentHTML+="</td>";
		}
		//提交按钮
		else if(ColKind.toLowerCase()=="button")
		{
			var flag="";
			var commandcol=Filecommand[i];
			var Type="button";
			var fpool=FilePoolName[i];

			var fframe=FiletaskFramePN[i];
			var MainListColTexts = MainListColText[i];

			if(FilePoolName[i]!="")fpool=FilePoolName[i];
			else fpool=PoolName;
			if(FiletaskFramePN[i]!="")fframe=FiletaskFramePN[i];
			else fframe=taskFramePN;

			//if(Filecommand[i].split("|").length>1){
			var NewObj = MainListColKinds(Type,FileSummitFileName[i],FilePoolName[i],MainListInitValue[j][i],PostValue[j],MainListColChildPageTarget[i],ColKind,FileTakeData[i],MainListConfirmText[i],j,MainListColText[i],Filecommand[i],FiletaskFramePN[i],MainListColtruevalue[i],MainListColshowvalue[i]);
			fframe =NewObj.frames;
			commandcol = NewObj.commands;
			MainListColTexts = NewObj.text;
			//alert("frames:"+NewObj.frames+"\ncommands:"+NewObj.commands+"\ntext:"+NewObj.text);
			//}

			//获得命令
			if(commandcol.split(";").length==2)
			{
				c_str=commandcol.split(";")[1];
				var cmd="";
				for(var kk = 0; kk < c_str.split(",").length; kk++)
				{
					//alert(c_str.split(",")[kk]);
					if(c_str.split(",")[kk].toLowerCase()=="del")cmd=cmd+'confirmdelete();';
					else if(c_str.split(",")[kk].toLowerCase()=="must")cmd=cmd+'checkMustWrite();';
					else if(c_str.split(",")[kk].toLowerCase()=="submit")cmd=cmd+'submit();';
					else if(c_str.split(",")[kk].toLowerCase()=="close")cmd=cmd+'window.close();';
					else if(c_str.split(",")[kk].toLowerCase()=="back")cmd=cmd+'window.history.back();';
					else if(c_str.split(",")[kk].toLowerCase()=="tabpage")flag=1;//是否在tabpage中的标记
					commandcol="eval('command').value='"+commandcol.split(";")[0]+"';"+cmd;
				}

				if(commandcol.split(";")[0]!='')
				{
					commandcol="eval('command').value='"+NewObj.commands.split(";")[0]+"';"+cmd;
				}



				//在tabpage中,增加"/"转义
				if(flag==1)commandcol=command.replace(/'/g,"\\'");
			}
			else if(Filecommand[i].indexOf("()")!=-1)
				commandcol=Filecommand[i];
			else
				commandcol="eval('command').value='"+commandcol.split(";")[0]+"';submit();"
			//alert(commandcol);

			var width;
			if (MainListColTexts.length*15<31)width=30;
			else width=MainListColTexts.length*15;

			ContentHTML+=joinStyle_Event(MainListColStyle_Event[i],MainTableBodyTdStyle_Event) + " class=tablecontent id=tablecontent_"+i+"_"+j+" width="+MainListColWidth[i]+" align="+MainListColAlign[i] + joinStyle_Event(MainTableBodyTdStyle_Event,MainListColStyle_Event[i]) +">\n";
			ContentHTML+="<div style='padding:0px; border:1px ridge #C0C0C0; background-position: center;  width: "+width+"px;height:20;'>";
			ContentHTML+="<table border='0' width='100%' cellspacing='0' cellpadding='0' height='100%'>";

			ContentHTML+="<tr><td " + MainListColStyle_Event[i] + " class=button align=center  onMouseUp=\"if(form."+MainListTableName+"_"+j+"_"+1+".value==1){setpoolname('"+fpool+"');setTaskFrame('"+fframe+"');"+commandcol+"}\"  onmouseover=this.className='moveInButton'; onmouseout=this.className='moveOutButton'; onmousedown=this.className='moveDownButton'; onmouseup=this.className='moveInButton'; style='vertical-align: middle;cursor:hand; ";
			ContentHTML+=" '>"+MainListColTexts;
			ContentHTML+="</td></tr></table></div>";
			ContentHTML+="<input type='text' style='display:none'  name='"+MainListTableName+"_"+j+"_"+i+"' id='"+MainListTableName+"_"+j+"_"+i+"' value=\""+MainListInitValue[j][i]+"\">\n";
			ContentHTML+="</td>";

		}
		//链接链接
		else if(ColKind.toLowerCase().substring(0,4)=="link"||ColKind.toLowerCase().substring(0,7)=="newlink")
		{
			//lili add 链接长度超长显示为...
			var linklen=0;
			if(ColKind.toLowerCase().substring(0,4)=="link"){
				linklen=ColKind.toLowerCase().substr(4);
			}else{
				linklen=ColKind.toLowerCase().substr(7);
			}

			var MainListTitle = MainListInitValue[j][i];
			var disp_text=substr_omissionMark(MainListInitValue[j][i],linklen);
			if(FilePoolName[i]!=""){searchUrl=FileSummitFileName[i]+"command="+Filecommand[i].split(",")[0]+"&taskFramePN="+FiletaskFramePN[i].split(",")[0]+"&poolname="+FilePoolName[i]+"&refresh="+Math.random();}
			else{searchUrl=FileSummitFileName[i]+"command="+Filecommand[i].split(",")[0]+"&taskFramePN="+FiletaskFramePN[i].split(",")[0]+"&poolname="+PoolName+"&refresh="+Math.random();}

			if(MainListColshowvalue[i]!="")
			{
				var Type = "textlink";
				var NewObj = MainListColKinds(Type,FileSummitFileName[i],FilePoolName[i],MainListInitValue[j][i],PostValue[j],MainListColChildPageTarget[i],ColKind,FileTakeData[i],MainListConfirmText[i],j,MainListColText[i],Filecommand[i],FiletaskFramePN[i],MainListColtruevalue[i],MainListColshowvalue[i]);
				disp_text=substr_omissionMark(NewObj.text,linklen);
				MainListTitle=NewObj.text;
				searchUrl=NewObj.searchUrl;
			}


			ContentHTML+=joinStyle_Event(MainListColStyle_Event[i],MainTableBodyTdStyle_Event) + " class=tablecontent id=tablecontent_"+i+"_"+j+" width="+MainListColWidth[i]+" align="+MainListColAlign[i] + joinStyle_Event(MainTableBodyTdStyle_Event,MainListColStyle_Event[i]) +">\n";
			ContentHTML+="<a " + MainListColStyle_Event[i] + " href='javascript:;'";
			ContentHTML+=" title='"+MainListTitle+"'";

			if(MainTableC.BeforeFun != ''){
				ContentHTML+=" onclick=\"ThisOndblclick='"+j+"'; if("+MainTableC.BeforeFun+" != false){ MainTableColsearch_url('"+searchUrl+"','"+PostValue[j]+"','"+MainListColChildPageTarget[i]+"','"+ColKind+"','"+FileTakeData[i]+"','"+MainListConfirmText[i]+"','"+j+"'); "+MainTableC.AfterFun+"; return false; }\" style='vertical-align: middle;cursor:hand;'>";
			}
			else{
				ContentHTML+=" onclick=\"ThisOndblclick='"+j+"';MainTableColsearch_url('"+searchUrl+"','"+PostValue[j]+"','"+MainListColChildPageTarget[i]+"','"+ColKind+"','"+FileTakeData[i]+"','"+MainListConfirmText[i]+"','"+j+"');return false;\" style='vertical-align: middle;cursor:hand;'>";
			}

			ContentHTML+="<font " + MainListColStyle_Event[i] + " class=textlink ";
			if(ShowConditionColor!=="")
				ContentHTML+="style='color:"+ShowConditionColor+";'";
			if (ColKind.toLowerCase().substring(0,4)=="link")
				ContentHTML+="><nobr>"+disp_text+"</nobr></font>";
			else
				ContentHTML+=">"+disp_text+"</font>";
			ContentHTML+="</a>";
			ContentHTML+="<input type='text' style='display:none'  name='"+MainListTableName+"_"+j+"_"+i+"' id='"+MainListTableName+"_"+j+"_"+i+"' value=\""+MainListInitValue[j][i]+"\">\n";
			ContentHTML+="</td>";
			//alert(ContentHTML);
		}
		//按钮组
		else if(ColKind.toLowerCase()=="buttongroup"){
			/*
			 MainListColshowvalue[number]=showvalue;
			 MainListColtruevalue[number]=truevalue;
			 MainListColclassify[number]=classify;
			 MainListColChildPageTarget[number]=targetA;
			 MainListColKind[number]=kind;
			 if(summitFileName.indexOf("?")==-1)
			 summitFileName=summitFileName+"?";
			 FileSummitFileName[number]=summitFileName;
			 Filecommand[number]=command;
			 FiletaskFramePN[number]=Frame;
			 FilePoolName[number]=ConnectionPoolName;
			 FileTakeData[number]=TakeData;
			 */

			var buttongroup_value = MainListInitValue[j][i].split('');
			var buttongroup_icon = MainListColIcon[i].split('|');
			var buttongroup_showvalue = MainListColshowvalue[i].split('|');
			var buttongroup_truevalue = MainListColtruevalue[i].split('|');
			var buttongroup_target = MainListColChildPageTarget[i].split('|');
			var buttongroup_servlet = FileSummitFileName[i];
			var buttongroup_command = Filecommand[i].split('|');
			var buttongroup_framePN = FiletaskFramePN[i].split('|');
			var buttongroup_poolname = FilePoolName[i].split('|');
			var buttongroup_confirmText = MainListConfirmText[i].split('|');
			var buttongroup_beforefun = MainTableC.BeforeFun.split('|');
			var buttongroup_afterfun = MainTableC.AfterFunc.split('|');

			ContentHTML += " align=right>";

			ContentHTML += "<table border=0 align=right cellpadding=0 cellspacing=2><tr>";

			for(var k=0;k<buttongroup_value.length;k++){
				buttongroup_framePN[k]        = buttongroup_framePN[k]      == undefined ? '' : buttongroup_framePN[k];
				buttongroup_poolname[k]       = buttongroup_poolname[k]     == undefined ? '' : buttongroup_poolname[k];
				buttongroup_beforefun[k]      = buttongroup_beforefun[k]        == undefined ? '' : buttongroup_beforefun[k];
				buttongroup_confirmText[k]  = buttongroup_confirmText[k]  == undefined ? '' : buttongroup_confirmText[k];


				if(buttongroup_value[k] == '1'){
					var searchUrl = buttongroup_servlet+"command="+buttongroup_command[k]+"&taskFramePN="+buttongroup_framePN[k]+"&poolname="+buttongroup_poolname[k]+"&refresh="+Math.random();
					ContentHTML+="<td><a href='javascript:;'";
					ContentHTML+=" title='"+buttongroup_showvalue[k]+"'";

					//console.log('#'+buttongroup_beforefun.join('') + '# : '+typeof(buttongroup_beforefun[k])+' : '+buttongroup_beforefun[k].length)
					if(buttongroup_beforefun[k].length != ''){
						ContentHTML+=" onclick=\"ThisOndblclick='"+k+"'; if("+buttongroup_beforefun[k]+" != false){ MainTableColsearch_url('"+searchUrl+"','"+PostValue[j]+"','"+buttongroup_target[k]+"','"+ColKind+"','"+FileTakeData[i]+"','"+buttongroup_confirmText[k]+"','"+j+"'); "+buttongroup_afterfun[k]+"; return false; }\" style='vertical-align: middle;cursor:hand;'";
					}
					else{
						ContentHTML+=" onclick=\"ThisOndblclick='"+k+"';MainTableColsearch_url('"+searchUrl+"','"+PostValue[j]+"','"+buttongroup_target[k]+"','"+ColKind+"','"+FileTakeData[i]+"','"+buttongroup_confirmText[k]+"','"+j+"');return false;\" style='vertical-align: middle;cursor:hand;' ";
					}

					if(buttongroup_icon[k].indexOf('.') == '-1'){
						ContentHTML += " class='"+buttongroup_icon[k]+"'>";
					}
					else{
						ContentHTML += ">";
						ContentHTML += "<img src='"+buttongroup_icon[k]+"' style='border:0; float:left; padding:0px; margin:0px;'/>";
					}

					ContentHTML+="</a></td>";
				}
				else{
					continue;
				}

			}
			ContentHTML += '</tr></table>';



			ContentHTML+="<input type='text' style='display:none'  name='"+MainListTableName+"_"+j+"_"+i+"' id='"+MainListTableName+"_"+j+"_"+i+"' value=\""+MainListInitValue[j][i]+"\">";
			ContentHTML += "</td>";
			//ContentHTML+=MainListColIcon[i]+"<br/>"+MainListColshowvalue[i]+"<br/>"+MainListColtruevalue[i]+"<br/>"+FileSummitFileName[i]+"<br/>"+Filecommand[i]+"<br/>"+FileTakeData[i]+"</td>";

		}
		//弹出一个jquery ui 模态窗口
		else if(ColKind.toLowerCase()=="dialog"){
			var MainListTitle = MainListInitValue[j][i];
			var disp_text=MainListInitValue[j][i];
			if(FilePoolName[i]!=""){searchUrl=FileSummitFileName[i]+"command="+Filecommand[i].split(",")[0]+"&taskFramePN="+FiletaskFramePN[i].split(",")[0]+"&poolname="+FilePoolName[i]+"&refresh="+Math.random();}
			else{searchUrl=FileSummitFileName[i]+"command="+Filecommand[i].split(",")[0]+"&taskFramePN="+FiletaskFramePN[i].split(",")[0]+"&poolname="+PoolName+"&refresh="+Math.random();}

			if(MainListColshowvalue[i]!="")
			{
				var Type = "dialog";
				var NewObj = MainListColKinds(Type,FileSummitFileName[i],FilePoolName[i],MainListInitValue[j][i],PostValue[j],MainListColChildPageTarget[i],ColKind,FileTakeData[i],MainListConfirmText[i],j,MainListColText[i],Filecommand[i],FiletaskFramePN[i],MainListColtruevalue[i],MainListColshowvalue[i]);
				//disp_text=substr_omissionMark(NewObj.text,linklen);

				disp_text=NewObj.text;
				MainListTitle=NewObj.text;
				searchUrl=NewObj.searchUrl;
			}


			ContentHTML+=joinStyle_Event(MainListColStyle_Event[i],MainTableBodyTdStyle_Event) + " class=tablecontent id=tablecontent_"+i+"_"+j+" width="+MainListColWidth[i]+" align="+MainListColAlign[i] + joinStyle_Event(MainTableBodyTdStyle_Event,MainListColStyle_Event[i]) +">\n";
			ContentHTML+="<a " + MainListColStyle_Event[i] + " href='javascript:;'";
			ContentHTML+=" title='"+MainListTitle+"'";

			if(MainTableC.BeforeFun != ''){
				ContentHTML+=" onclick=\"ThisOndblclick='"+j+"'; if("+MainTableC.BeforeFun+" != false){ MainTableColsearch_url('"+searchUrl+"','"+PostValue[j]+"','"+MainListColChildPageTarget[i]+"','"+ColKind+"','"+FileTakeData[i]+"','"+MainListConfirmText[i]+"','"+j+"'); "+MainTableC.AfterFun+"; return false; }\" style='vertical-align: middle;cursor:hand;'>";
			}
			else{
				ContentHTML+=" onclick=\"ThisOndblclick='"+j+"';MainTableColsearch_url('"+searchUrl+"','"+PostValue[j]+"','"+MainListColChildPageTarget[i]+"','"+ColKind+"','"+FileTakeData[i]+"','"+MainListConfirmText[i]+"','"+j+"');return false;\" style='vertical-align: middle;cursor:hand;'>";
			}

			ContentHTML+="<font " + MainListColStyle_Event[i] + " class=textlink ";
			if(ShowConditionColor!=="")
				ContentHTML+="style='color:"+ShowConditionColor+";'";
			if (ColKind.toLowerCase().substring(0,4)=="link")
				ContentHTML+="><nobr>"+disp_text+"</nobr></font>";
			else
				ContentHTML+=">"+disp_text+"</font>";
			ContentHTML+="</a>";
			ContentHTML+="<input type='text' style='display:none'  name='"+MainListTableName+"_"+j+"_"+i+"' id='"+MainListTableName+"_"+j+"_"+i+"' value=\""+MainListInitValue[j][i]+"\">\n";
			ContentHTML+="</td>";
			//alert(ContentHTML);

		}
		else if(ColKind.toLowerCase()=="checkbox"||ColKind.toLowerCase()=="checkboxall")
		{
			ContentHTML+=joinStyle_Event(MainListColStyle_Event[i],MainTableBodyTdStyle_Event) + " class=tablecontent id=tablecontent_"+i+"_"+j+" width="+MainListColWidth[i]+" align="+MainListColAlign[i] + joinStyle_Event(MainTableBodyTdStyle_Event,MainListColStyle_Event[i]) +">\n";
			ContentHTML+="<input type=checkbox name='MainListChange_"+MainListTableName+"_"+i+"' id='MainListChange_"+MainListTableName+"_"+i+"' onclick=MainListChange(this,'"+j+"','"+i+"','"+MainListTableName+"')";

			for(var n=0;n<MainListBizName.length;n++)
			{              //alert(MainListBizName[n]+";;"+MainListColCheckBoxSelectForbidConditionFieldName[i])
				if(MainListBizName[n]===MainListColCheckBoxSelectForbidConditionFieldName[i])
				{
					if(MainListColCheckBoxSelectForbidCondition[i]==="NULL"&&MainListInitValue[j][n]==="")
					{
						ContentHTML+=" disabled ";
						break;
					}
					else if(MainListColCheckBoxSelectForbidCondition[i]==="NOTNULL"&&MainListInitValue[j][n]!=="")
					{
						ContentHTML+=" disabled ";
						break;
					}
					else
					//if(MainListColCheckBoxSelectForbidCondition[i]!=="")
						for(var m=0;m<MainListColCheckBoxSelectForbidCondition[i].split("|").length;m++)
						{
							if(MainListColCheckBoxSelectForbidCondition[i].split("|")[m]==MainListInitValue[j][n])
							{
								ContentHTML+=" disabled ";
								break;
							}
						}
				}
			}

			if(MainListInitValue[j][i]==1)
				ContentHTML+=" checked ";
			ContentHTML+=">";
			ContentHTML+="<input type='text' style='display:none' name='"+MainListTableName+"_"+j+"_"+i+"' id='"+MainListTableName+"_"+j+"_"+i+"' value=\""+MainListInitValue[j][i]+"\">\n";
			ContentHTML+="</td>";
		}
		else if(ColKind.toLowerCase()=="merge")
		{
			for(m=0;m<MainListColMerge[i].split(",").length;m++)
			{
				if(MainListInitValue[j][i].length==0)
					MainListInitValue[j][i]=MainListInitValue[j][parseInt(MainListColMerge[i].split(",")[m])+parseInt(MainTableColNum)];
				else
					MainListInitValue[j][i]=MainListInitValue[j][i]+"  "+MainListInitValue[j][parseInt(MainListColMerge[i].split(",")[m])+parseInt(MainTableColNum)];
			}
			ContentHTML+=joinStyle_Event(MainListColStyle_Event[i],MainTableBodyTdStyle_Event) + " class=tablecontent id=tablecontent_"+i+"_"+j+" width="+MainListColWidth[i]+" align="+MainListColAlign[i] + joinStyle_Event(MainTableBodyTdStyle_Event,MainListColStyle_Event[i]) +">\n";
			ContentHTML+="<input type='text' style='display:none'  name='"+MainListTableName+"_"+j+"_"+i+"' id='"+MainListTableName+"_"+j+"_"+i+"' value=\""+MainListInitValue[j][i]+"\">\n";

			ContentHTML+="<font color='"+rowcolor+"'>"+MainListInitValue[j][i]+"</font></td>\n";

		}
	}

	return ContentHTML;
}


//计算行和列的显示条件颜色, lili 整理放入 2010.05.30
//j--行号
function computeMainListRowAndColConditionColor(j)
{
	//计算行显示颜色和列显示颜色
	MainListColShowConditionColor[j]=new Array();
	for (i=MainTableColNum+1;i<=MainListTablCol;i++)
	{
		RowShowConditionColor="";
		if(MainListColShowColor[i]!="")//row=大于,12,red|小于,12,green|等于,0,black;col=大于,12,red|小于,12,green|等于,0,black
		{
			//定位到对应的列字段,获得条件的值
			if(MainListColShowColorFieldPN[i]!=="")
			{
				for(var n=0;n<MainListBizName.length;n++)
				{
					if(MainListBizName[n]===MainListColShowColorFieldPN[i])
					{
						MainListColShowColorValue=MainListInitValue[j][n];
						break;
					}
				}
			}
			else
				MainListColShowColorValue=MainListInitValue[j][i];

			//给行列置颜色
			for(var z=0;z<MainListColShowColor[i].split(";").length;z++)
			{
				var colorObj = {}
				//给行置颜色
				if(MainListColShowColor[i].split(";")[z].indexOf("row=")!="-1")
				{
					MainListColShowCondition=MainListColShowColor[i].split(";")[z].split("=")[1];
					colorObj = getMainListShowConditionColor(MainListColShowCondition,MainListColShowColorValue);
					MainListShowConditionColor[j]=colorObj.color;
					if(colorObj.bgColor != undefined){
						MainListColShowConditionBGColor[j]=colorObj.bgColor;
					}
				}
				//给列置颜色
				else if(MainListColShowColor[i].split(";")[z].indexOf("col=")!="-1")
				{
					MainListColShowCondition=MainListColShowColor[i].split(";")[z].split("=")[1];
					colorObj = getMainListShowConditionColor(MainListColShowCondition,MainListColShowColorValue);
					MainListColShowConditionColor[j][i]=colorObj.color;
				}
				//给单元格置颜色
				else
				{
					MainListColShowCondition=MainListColShowColor[i];
					colorObj = getMainListShowConditionColor(MainListColShowCondition,MainListColShowColorValue);
					MainListColShowConditionColor[j][i]=colorObj.color;
				}
			}
		}
	}
}


//设置行颜色, lili 整理放入 2010.05.30
function setMainListRowColor(command)
{
	var ContentHTML="";

	if(typeof(MainTableHeadColA[j])=="object")
		if(typeof(MainTableHeadColA[j].rowcolor)!="undefined"||typeof(MainTableHeadColA[j].rowtextcolor)!="undefined")
		{
			ContentHTML+=" style='";
			if(command.length != 0)
				ContentHTML+="cursor:pointer hand;";

			if(typeof(MainTableHeadColA[j].rowcolor)!="undefined")
				ContentHTML+="background:"+MainTableHeadColA[j].rowcolor+";";

			if(typeof(MainTableHeadColA[j].rowtextcolor)!="undefined")
				ContentHTML+="background:"+MainTableHeadColA[j].rowtextcolor+";";
			ContentHTML+="'";
		}

}

//显示特殊列 lili 整理并放入 2010.05.30
//j--行号
//InitValue--MainListInitValue[j][1];
function showMainListSpecialCol_Value(j, InitValue)
{
	var MainListColRowSelectForbidStr="";
	var ContentHTML="";
	//选择项状态为不可选灰色
	for (var l=MainTableColNum+1;l<=MainListTablCol;l++)
	{
		if(MainListColRowSelectForbidCondition[l]!=="RowSelectForbidCondition")
		{
			MainListColRowSelectForbidConditionLen=MainListColRowSelectForbidCondition[l].split("|").length;
			for(var m=0;m<MainListColRowSelectForbidConditionLen;m++)
			{
				if(MainListColRowSelectForbidCondition[l].split("|")[m]===MainListInitValue[j][l])
				{
					if(MainListColRowSelectForbidStr==="")
						MainListColRowSelectForbidStr+=j;
					else
						MainListColRowSelectForbidStr+=","+j;
				}
			}
		}
	}
	for(s=0;s<MainTableHeadEndArray.length;s++)
	{
		var MainTableHeadEnd=MainTableHeadEndArray[s];
		if(isOutputMainTableHeadEndTd(MainTableHeadEnd, MainTableHeadColArray, j, s)) ContentHTML+="<td ";
		//选择项状态为不可选灰色
		for(var m=0;m<MainListColRowSelectForbidStr.split(",").length;m++)
		{
			if(MainListColRowSelectForbidStr.split(",")[m]==j)
				ContentHTML+=" disabled ";
		}
		if(typeof(MainTableHeadEnd.kind)!="undefined")
		{
			//列颜色
			if((MainTableHeadEnd.kind.toLowerCase()=="xilineselected"||MainTableHeadEnd.kind.toLowerCase()=="xilinefileflag"||MainTableHeadEnd.kind.toLowerCase()=="xilineorder"||MainTableHeadEnd.kind.toLowerCase()=="xiicon")&&(typeof(MainTableHeadEnd.colcolor)!="undefined"||typeof(MainTableHeadEnd.coltextcolor)!="undefined"))
			{
				ContentHTML+=" style='";
				if(typeof(MainTableHeadEnd.colcolor)!="undefined")
					ContentHTML+="background:"+MainTableHeadEnd.colcolor+";";
				if(typeof(MainTableHeadEnd.coltextcolor)!="undefined")
					ContentHTML+="color:"+MainTableHeadEnd.coltextcolor+";";
			}

			//选择
			if(MainTableHeadEnd.kind.toLowerCase()=="xilineselected")
			{
				if(typeof(MainTableHeadEnd.colcolor)!="undefined"||typeof(MainTableHeadEnd.coltextcolor)!="undefined")
					ContentHTML+="cursor:hand;'";
				else
					ContentHTML+=" style='cursor:hand';";

				if(OpenType1==1||OpenType1==3){
					ContentHTML+=" onClick=\"set(1,"+j+",\'"+MainListTableName+"\');";
					if(ShowTypes.indexOf('ondblclick') != '-1'){
						ContentHTML+="set(2,"+j+",\'"+MainListTableName+"\',this);\" ";
					}
					else if (MainTableAfterFun  != ''){
						ContentHTML+=MainTableAfterFun+"\" ";
					}
					else{
						ContentHTML+="\" ";
					}
				}
				else if(OpenType1!=1&&OpenType1!=2&&OpenType1!=3) {
					ContentHTML+=" onClick=\"set(1,"+j+",\'"+MainListTableName+"\');";
					if(ShowTypes.indexOf('ondblclick') != '-1'){
						ContentHTML+="set(2,"+j+",\'"+MainListTableName+"\',this);\" ";
					}
					else if (MainTableAfterFun  != ''){
						ContentHTML+=MainTableAfterFun+"\" ";
					}
					else{
						ContentHTML+="\" ";
					}
				}


				ContentHTML+=" align=center>";

				if(Rivet!=1)
				{
					checkedflag=getCheckedFlag('MainListTable',MainListTableName, j, maintableShowTickComparePNColNum, maintableShowTickCompareValue, MainTableColNum);

					ContentHTML+="<img name='"+MainListTableName+"checkimage_"+j+"_1' src='";

					if(checkedflag=="checked")
					{
						//判断是否是单选框
						if(ifradio==0&&(OpenType1==0||OpenType1==1||OpenType1==3))
							ContentHTML+=MainListCheckBox_Check.src;
						MainListColflag[j]=1;
					}
					else
					{
						if(InitValue=="1")
						{
							//判断是否是单选框
							if(ifradio==0&&(OpenType1==0||OpenType1==1||OpenType1==3))
								ContentHTML+=MainListCheckBox_Check.src;
							else if(ifradio==1&&(OpenType1==0||OpenType1==1||OpenType1==3))
								ContentHTML+=MainListRadioBox_Check.src;
							MainListColflag[j]=1;
						}
						else
						{
							var DisabCheckFlag=0;
							//判断是否是单选框
							if(ifradio==0&&(OpenType1==0||OpenType1==1||OpenType1==3))
							{
								//选择项状态为不可选灰色
								for(var m=0;m<MainListColRowSelectForbidStr.split(",").length;m++)
								{
									if(MainListColRowSelectForbidStr.split(",")[m]==j)
									{
										ContentHTML+=MainListCheckBox_Disabcheck.src;
										DisabCheckFlag=1;
										break;
									}
								}
								if(DisabCheckFlag===0)
									ContentHTML+=MainListCheckBox_Uncheck.src;
								//ContentHTML+=MainListCheckBox_Uncheck.src;
							}
							else if(ifradio==1&&(OpenType1==0||OpenType1==1||OpenType1==3))
							{
								//选择项状态为不可选灰色
								for(var m=0;m<MainListColRowSelectForbidStr.split(",").length;m++)
								{
									if(MainListColRowSelectForbidStr.split(",")[m]==j)
									{
										ContentHTML+=MainListRadioBox_Disabcheck.src;
										DisabCheckFlag=1;
										break;
									}
								}
								if(DisabCheckFlag===0)
									ContentHTML+=MainListRadioBox_Uncheck.src;
							}
							MainListColflag[j]=0;
						}
					}
					ContentHTML+="'";
					ContentHTML+="";
					ContentHTML+=">\n";
					ContentHTML+="<input type='text' style='display:none' name='"+MainListTableName+"_"+j+"_1' id='"+MainListTableName+"_"+j+"_1' value=\"";

					//lili add 2010.10.07 为回显打勾,和下部分有关
					if(MainListColflag[j]==0){ContentHTML+=0;}
					else if(MainListColflag[j]==1 && typeof(InitValue)!="undefined") {ContentHTML+=InitValue;}
					else if(MainListColflag[j]==1) {ContentHTML+=1;}
					ContentHTML+="\">\n";
				}
			}
			//附件图标
			else if(MainTableHeadEnd.kind.toLowerCase()=="xilinefileflag")
			{
				var FileCol;
				//有附件时有图标显示
				for (i=MainTableColNum+1;i<=MainListTablCol;i++)
				{
					if(MainListColKind[i].substring(0,4).toLowerCase()=="file")
					{
						FileCol=i;
					}
				}
				ContentHTML+="  align=center>";
				if (MainListInitValue[j][FileCol]!=""&&typeof(MainListInitValue[j][FileCol])!="undefined")
				{
					ContentHTML+="<img name='"+MainListTableName+"fileimage_"+j+"_1' src='";
					ContentHTML+=MainListFile.src;
					ContentHTML+="'>";
				}
			}
			//序号
			else if(MainTableHeadEnd.kind.toLowerCase()=="xilineorder")
				ContentHTML+=" align=center><div>"+j+"</div>\n";
			//图标
			else if(MainTableHeadEnd.kind.toLowerCase()=="xiicon")
				ContentHTML+=" align=center><img src='"+skinpath+MainTableHeadEnd.icon+"'>\n";
		}
		else
		{
			if(typeof(MainTableHeadColArray[j][s+1])=="object")
			{
				//列颜色
				if(typeof(MainTableHeadColArray[j][s+1].color)!="undefined"||typeof(MainTableHeadColArray[j][s+1].textcolor)!="undefined" )
				{
					ContentHTML+="style='";
					if(typeof(MainTableHeadColArray[j][s+1].color)!="undefined")
						ContentHTML+="background:"+MainTableHeadColArray[j][s+1].color+";";
					if(typeof(MainTableHeadColArray[j][s+1].textcolor)!="undefined")
						ContentHTML+="color:"+MainTableHeadColArray[j][s+1].textcolor+";";
					ContentHTML+="'";
				}

				if(MainTableHeadColArray[j][s+1].direction.toLowerCase()!='upright')
					ContentHTML+=" " + MainTableHeadRowTrStyle_Event + " class=tableheadtr align=left rowspan="+MainTableHeadColArray[j][s+1].rowspan+" colspan="+MainTableHeadColArray[j][s+1].colspan+"><div>"+MainTableHeadColArray[j][s+1].text+"</div>\n";
				else
					ContentHTML+="  " + MainTableHeadColTrStyle_Event + " class=tableheadtr_upright align=left rowspan="+MainTableHeadColArray[j][s+1].rowspan+" colspan="+MainTableHeadColArray[j][s+1].colspan+"><div>"+MainTableHeadColArray[j][s+1].text+"</div>\n";
			}
		}
		if(isOutputMainTableHeadEndTd(MainTableHeadEnd, MainTableHeadColArray, j, s)) ContentHTML+="</td>\n";
	}
	return ContentHTML;
}

function isOutputMainTableHeadEndTd(MainTableHeadEnd, MainTableHeadColArray, j, s)
{
	if(typeof(MainTableHeadEnd.kind)!="undefined" || typeof(MainTableHeadColArray[j][s+1])=="object")
		return true;
	else
		return false;
}

//表头行到第一个BODY的距离
function MainTableHeadTop ()
{
	var MainTableHeadRowTopTemp;


	for(var i=1;i<MainTableHeadRowNum;i++){
		MainTableHeadRowTopTemp=0;
		var obj=document.getElementById("mhh"+i);
		while (obj.offsetParent.tagName != "BODY")
		{
			MainTableHeadRowTopTemp += obj.offsetTop;
			obj = obj.offsetParent;
		}
		MainTableHeadRowTop.push(MainTableHeadRowTopTemp);
	}

	MainTableHeadRowTopTemp=0;
	var obj0 =document.getElementById("mhh");
	while (obj0.offsetParent.tagName != "BODY")
	{
		MainTableHeadRowTopTemp += obj0.offsetTop;
		obj0 = obj0.offsetParent;
	}
	MainTableHeadRowTop.push(MainTableHeadRowTopTemp);

	//alert(MainTableHeadRowTop);
}

//固定表头
function MainListTableScroll(){

	var table = document.getElementById("ListTable");

	if(document.body.scrollTop<MainTableHeadRowTop[0]){
		for(var i=MainTableHeadRowNum-1;i>-1;i--){
			table.rows[i].style.position = "relative";
			table.rows[i].style.background = "none";
			table.rows[i].style.top = 0;
		}
	}
	else{

		for(var i=MainTableHeadRowNum-1;i>-1;i--){
			table.rows[i].style.position = "absolute";
			table.rows[i].style.top = document.body.scrollTop+MainTableHeadRowTop[i]-2*MainTableHeadRowTop[0];
		}
	}
}

//行列变换
function MainTableRowAndCol(arr) {
	var json = [];
	var row = arr.length;
	var col = arr[row-1].length;
	var i,j;

	for(i=0;i<col;i++)
	{
		json[i] = [];
		for(j=1;j<row;j++)
		{
			json[i].push(arr[j][i]);
		}

	}
	return json;
}

//一维数组去除重复项
function MainTableUnique(arr) {
	var temp = [];
	var hash ={};
	for(var i=0;arr[i];i++)
	{
		if(!hash[arr[i]])
		{
			hash[arr[i]] = true;
			temp.push(arr[i]);
		}
	}
	return temp;
}

//静态排序
function MainTableStaticSort(obj,objLength,CurrentCol,MainTableHeadRowNum,MainTableXilineOrderCol,MainTableXilineSelected){
	/*
	 *obj                      ：对象
	 *text                     ：对象的值
	 *CurrentCol               ：对象所在列号
	 *MainTableHeadRowNum      ：表格头部的行数
	 *MainTableXilineOrderCol  ：对象所属表格的序号列号
	 */
	//初始化符合要求的数组
	MainTableStaticSortRow = [];
	//内部函数声明

	/*有序--排序*/
	function defaultSortOl (text) {
		for(var i=0,j=1;i<tableRowsNub-MainTableHeadRowNum;i++){
			if(MainListInitValue[i+1][CurrentCol]==text){
				if(window.ActiveXObject){
					MainTableStaticSortRow.push([tableRows[i+MainTableHeadRowNum],i]);
					tableRows[i+MainTableHeadRowNum].style.display="block";
				}else{
					tableRows[i+MainTableHeadRowNum].style.display="table-row";
				}
				tableRows[i+MainTableHeadRowNum].cells[MainTableXilineOrderCol-1].innerHTML = "<div>"+j+"</div>";j++;
			}
			else { tableRows[i+MainTableHeadRowNum].style.display="none"; }
		}
	}
	function allSortOl () {
		for(var i=0,j=1;i<tableRowsNub-MainTableHeadRowNum;i++){
			if(window.ActiveXObject){
				MainTableStaticSortRow.push([tableRows[i+MainTableHeadRowNum],i]);
				tableRows[i+MainTableHeadRowNum].style.display="block";
			}
			else{
				tableRows[i+MainTableHeadRowNum].style.display="table-row";
			}
			tableRows[i+MainTableHeadRowNum].cells[MainTableXilineOrderCol-1].innerHTML = "<div>"+j+"</div>";j++;
		}
	}

	/*无序--排序*/
	function defaultSortUl (text) {
		for(var i=0;i<tableRowsNub-MainTableHeadRowNum;i++){
			if(MainListInitValue[i+1][CurrentCol]==text){
				if(window.ActiveXObject){
					MainTableStaticSortRow.push([tableRows[i+MainTableHeadRowNum],i]);
					tableRows[i+MainTableHeadRowNum].style.display="block";
				}
				else{
					tableRows[i+MainTableHeadRowNum].style.display="table-row";
				}
			}
			else { tableRows[i+MainTableHeadRowNum].style.display="none"; }
		}
	}
	function allSortUl () {
		for(var i=0;i<tableRowsNub-MainTableHeadRowNum;i++){
			if(window.ActiveXObject){
				MainTableStaticSortRow.push([tableRows[i+MainTableHeadRowNum],i]);
				tableRows[i+MainTableHeadRowNum].style.display="block";
			}
			else{
				tableRows[i+MainTableHeadRowNum].style.display="table-row";
			}
		}
	}
	//内部函数声明 end

	//获取函数执行所需参数
	var table = document.getElementById("ListTable");
	var tableRows = table.rows;
	var tableRowsNub = table.rows.length;
	var text;
	for(var j=0;j<objLength;j++){
		if(obj[j].selected==true){
			if(window.attachEvent){text = obj[j].innerText; }
			else{ text = obj[j].innerHTML; }
		}
	}

	//重置select选项
	obj[0].selected = true;

	//重置下拉条
	document.body.scrollTop=0;

	//判断是否有全选按钮
	if(MainTableXilineSelected && ShowTypes.charAt(0) != '1'){
		//重置多选状态
		document.getElementById(xilineselectedID).checked=false;

		//调用全选按钮函数
		maintableallchange(document.getElementById(xilineselectedID),xilineselectedTableName);
	}

	//执行排序
	if(MainTableXilineOrderCol!="undefined")
	{
		switch (text)
		{
			case "--全部--":allSortOl();break;
			default:defaultSortOl(text);
		}
	}
	else{
		switch (text)
		{
			case "--全部--":allSortUl();break;
			default:defaultSortUl(text);
		}
	}
	//alert(tableRows.length)
}

function MainListColKinds(Type,FileSummitFileName,FilePoolName,MainListInitValue,PostValue,MainListColChildPageTarget,ColKind,FileTakeData,MainListConfirmText,j,MainListColText,Filecommand,FiletaskFramePN,MainListColtruevalue,MainListColshowvalue)
{
	var FilecommandTemp = Filecommand.split("|");
	var FiletaskFramePNTemp = FiletaskFramePN.split("|");
	var truevalue = MainListColtruevalue.split("|");
	var showvalue = MainListColshowvalue.split("|");
	var returnValue = {};
	var temp = true;


	for (var ii=1; ii<truevalue.length; ii++)
	{
		if(truevalue[ii]==MainListInitValue)
		{
			returnValue.searchUrl =getSearchUrlLink(FileSummitFileName,FilecommandTemp[ii],FiletaskFramePNTemp[ii],FilePoolName);
			returnValue.events = "ThisOndblclick='"+j+"';MainTableColsearch_url('"+returnValue.searchUrl+"','"+PostValue+"','"+MainListColChildPageTarget+"','"+ColKind+"','"+FileTakeData+"','"+MainListConfirmText+"','"+j+"')";
			returnValue.text = showvalue[ii];
			returnValue.commands = FilecommandTemp[ii];
			returnValue.frames = FiletaskFramePNTemp[ii];
			temp = false;
			break;
		}

	}
	if(temp)
	{
		returnValue.searchUrl=getSearchUrlLink(FileSummitFileName,FilecommandTemp[0],FiletaskFramePNTemp[0],FilePoolName);
		returnValue.events = "ThisOndblclick='"+j+"';MainTableColsearch_url('"+returnValue.searchUrl+"','"+PostValue+"','"+MainListColChildPageTarget+"','"+ColKind+"','"+FileTakeData+"','"+MainListConfirmText+"','"+j+"')";
		returnValue.commands = FilecommandTemp[0];
		returnValue.frames = FiletaskFramePNTemp[0];
		switch (Type)
		{
			case "textlink": {
				if(truevalue[0].length==0 && showvalue[0].length!=0){returnValue.text = showvalue[0];}
				else {returnValue.text = MainListInitValue;}
			};break;
			case "buttonlink": {
				if(truevalue[0].length==0 && showvalue[0].length!=0){returnValue.text = showvalue[0];}
				else {returnValue.text = MainListColText;}
			};break;
			case "button": {
				if(truevalue[0].length==0 && showvalue[0].length!=0){returnValue.text = showvalue[0];}
				else {returnValue.text = MainListColText;}
			};break;
			case "buttondialog": {
				if(truevalue[0].length==0 && showvalue[0].length!=0){returnValue.text = showvalue[0];}
				else {returnValue.text = MainListColText;}
			};break;
		}
	}


	return returnValue;
}

//图片等比例缩放
function MainListDrawImage(ImgD,maxwidth,maxheight)
{
	var image=new Image();
	image.src=ImgD.src;
	if(image.width>0 && image.height>0){
		flag=true;
		if(image.width/image.height>= maxwidth/maxheight){
			if(image.width>maxwidth){
				ImgD.width=maxwidth;
				ImgD.height=(image.height*maxwidth)/image.width;
			}
			else{
				ImgD.width=image.width;
				ImgD.height=image.height;
			}
			ImgD.alt=image.width+"x"+image.height;
		}
		else{
			if(image.height>maxheight){
				ImgD.height=maxheight;
				ImgD.width=(image.width*maxheight)/image.height;
			}
			else{
				ImgD.width=image.width;
				ImgD.height=image.height;
			}
		}
	}
}

function backImgBuntonColor(color){
	//document.getElementById("ListTable").rows[ThisOndblclick+MainTableHeadRowNum-1].style = color;
	alert(ThisOndblclick);
	//document.getElementById("ListTable").rows[parseInt(ThisOndblclick)+parseInt(MainTableHeadRowNum)-1].style.background = color;
}

function mainTableTrMouseover(o){
	var currentStyle = o.className;
	var defaultStyle = o.getAttribute('data-defaultStyle');


	o.className = 'tablelineover';
}

function mainTableTrMouseout(o){
	var defaultStyle = o.getAttribute('data-defaultStyle');

	o.className = defaultStyle;

	//若选中行不为空 则把选中行背景设置为选中状态 2013.11.19 吕斌 add
	if(ThisOndblclick != undefined) {
		var afterTR = document.getElementById('tablelineodd_'+ThisOndblclick)||document.getElementById('tablelineeven_'+ThisOndblclick);
		if(afterTR){
			afterTR.className = 'tablelinenew';
		}
	}
}

/*
 函数:maintable_decide_value();
 参数:  o:当前对象，默认为this    colbizname:列的bizname      str:格式(值1;弹出信息一|值2;弹出信息二)
 */
function maintable_decide_value(o,colbizname,str) {
	//alert(o.getAttribute('rownum')+'\n'+colbizname+'\n'+str);
	var bizname = colbizname.indexOf('=') != -1 ? colbizname.split('=')[1] : colbizname;
	var colvalue = '';
	var colnum = 0; //列标记
	var rownum = parseInt(o.getAttribute('rownum')); //行标记
	var tempArr = str.split('|');
	var valueArr = [];

	var backData = true;

	//1.获取列标记
	for(var i=0;i<MainListBizName.length;i++) {
		if(MainListBizName[i] == bizname) { colnum = i; }
	}

	colvalue = MainListInitValue[rownum][colnum];

	for(var j=0;j<tempArr.length;j++){
		valueArr = tempArr[j].split(';');
		if(colvalue == valueArr[0]){
			if(valueArr[1] !=''){
				backData = false;
				alert(valueArr[1]);
			}
		}
	}

	return backData;
}

/*
 函数名：user_maintablestaticsort_change();
 功能：静态排序时 若选择了某类 则 自动执行该类别的第一个双击函数
 */
function user_maintablestaticsort_change(){
	var num = parseInt(MainTableStaticSortRow[0][1]) + 1;
	var obj = MainTableStaticSortRow[0][0];
	var oTd = obj.cells[0];

	//1.勾选 若有选择标记则勾选
	if(MainTableXilineSelected){
		set(1,num,MainListTableName);
	}

	//2.执行双击命令
	set(2,num,MainListTableName,obj);
}

/*
 函数名：MainListUpdateColValue(row,col,_value);
 参数：row:行标记  col:列标记  _value:更新的值
 功能：更新主表列表 指定行 指定列的值 列的类型只能为text,textbr,textclipped三种
 2013.11.19 吕斌 add
 */
function MainListUpdateColValue(row,col,_value) {
	//alert(MainListColKind[col]);
	var obj = document.getElementsByName(MainListTableName+'_'+row+'_'+col)[0];

	if(MainListColKind[col] == 'text' || MainListColKind[col] == 'textbr' || MainListColKind[col] == 'textclipped') {
		var subSpan = obj.parentNode.getElementsByTagName('font')[0];

		obj.value = _value;
		subSpan.innerHTML = _value;
	}
}

/*
 函数名：addPopupTabPageItem(link, target, TakeData, text)
 参数：link：打开窗口的链接地址    target：打开窗口及属性    TakeData：带走的值     text：打开窗口名称
 */
function addPopupTabPageItem(link, target, TakeData, text){

	var link = link;
	var target = target;
	var TakeData = TakeData;
	var command = 'mainTableButtonPopup_Report_command';
	var text = text;
	var name = 'mainTableButtonPopup_Report_name';
	var frame = 'mainTableButtonPopup_Report_frame';


	//link += bdparameterUrl(TakeData);
	link += bdparameterUrl(TakeData, "-1", "-1", ThisOndblclick);
	//alert(TakeData+'\n'+link);

	//2.查找是否有该框架
	var openExpandArray = window.parent.OpenExpandArray;
	for(var i=0;i<openExpandArray.length;i++){
		if(openExpandArray[i]==(frame+"_"+command+"_"+name)){
			var oTd = query.getChildNodes(window.parent.document.getElementById('menutree_'+target+'_Header'));//获取tr下的子对象列表
			var oIframe = query.getChildNodes(window.parent.document.getElementById('menutree_'+target+"_Content"));

			var clickTd = oTd[i].getElementsByTagName('td')[2];

			//关闭找到的页面
			window.parent.ColseOptionPage(clickTd,command,target);
		}
	}

	//打开新选项卡
	window.parent.treeNodeOpenOptionsPage(link,target,TakeData,command,text,name,frame);

	return false;
}














