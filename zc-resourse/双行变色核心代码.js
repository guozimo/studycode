/**
 * Created by zc on 2016/4/19.
 */
if(MainListColKind[i] == 'text' || MainListColKind[i] == 'textbr') {
    var len=MainListInitValue.length;
    $("document").ready(function () {
        var n=MainListColKind.length;
        eval("var"+" "+"ary"+i+""+"="+"[]");

        for (var k = 1; k < MainListInitValue.length; k++) {
            var cur = MainListInitValue[k];
            eval("var"+" "+"a"+i+""+"="+"cur["+i+"]");
            eval(("ary"+i)).push(eval(("a"+i)));
        }

        if ((len-1) % 2 == 0 && rowsCompare) {
            for (var t = 0; t <(len-2); t += 2) {
                var C = eval(("ary" + i) + "[" + (t) + "]");
                var D = eval(("ary" + i) + "[" + (t + 1) + "]");
                //console.log(C+"c");
                //console.log(D+"d");

                if (C && D && C != "undefined" && D != "undefined") {
                    if (C == D) {

                    } else {
                        $("#tablecontent_" +i+ "_" + (t+1) + "").css("background", rowsCompare);
                        $("#tablecontent_" +i+ "_" + (t + 2) + "").css("background", rowsCompare);
                    }
                }


            }
        }
    })
}








//正则颜色捕获和匹配



var reg1=/^(?:font)=(#\w{3,6})$/;
var reg2=/^(?:block)=(#\w{3,6})$/;
str1=reg1.exec(rowsCompare);
str2=reg2.exec(rowsCompare);
if(reg1.test(rowsCompare)){
    var color1=str1[1];
    $("#tablecontent_" +i+ "_" + (t+1) + "").children("font").css("color",color1);
    $("#tablecontent_" +i+ "_" + (t+2) + "").children("font").css("color", color1);
}else if(reg2.test(rowsCompare)){
    var color2=str2[1];
    $("#tablecontent_" +i+ "_" + (t+1) + "").css("background",color2);
    $("#tablecontent_" +i+ "_" + (t + 2) + "").css("background",color2);
}







//http://echarts.baidu.com/demo.html#pie-nest
//echart
//

//http:echarts.baidu.com/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts
//http://echarts.baidu.com/examples.html
