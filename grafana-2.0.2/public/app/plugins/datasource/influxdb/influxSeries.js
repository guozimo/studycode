/*! grafana - v2.0.2 - 2015-04-22
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache License */

define(["lodash"],function(a){"use strict";function b(a){this.seriesList=a.seriesList,this.alias=a.alias,this.annotation=a.annotation}var c=b.prototype;return c.getTimeSeries=function(){var b=[],c=this;return console.log(c.seriesList),c.seriesList&&c.seriesList.results&&c.seriesList.results[0]?(this.seriesList=c.seriesList.results[0].series,a.each(c.seriesList,function(c){for(var d=[],e=0;e<c.values.length;e++)d[e]=[c.values[e][1],new Date(c.values[e][0]).getTime()];var f=c.name,g=a.map(c.tags,function(a,b){return b+": "+a});g.length>0&&(f=f+" {"+g.join(", ")+"}"),b.push({target:f,datapoints:d})}),b):b},c.getAnnotations=function(){var b=[],c=this;return a.each(this.seriesList,function(d){var e=null,f=null,g=null,h=null;a.each(d.columns,function(a,b){if("time"===a)return void(f=b);if("sequence_number"!==a)return e||(e=b),a===c.annotation.titleColumn?void(e=b):a===c.annotation.tagsColumn?void(g=b):a===c.annotation.textColumn?void(h=b):void 0}),a.each(d.points,function(a){var d={annotation:c.annotation,time:a[f],title:a[e],tags:a[g],text:a[h]};g&&(d.tags=a[g]),b.push(d)})}),b},c.createNameForSeries=function(b,c){var d=/\$(\w+)/g,e=b.split(".");return this.alias.replace(d,function(d,f){if("s"===f)return b;if("g"===f)return c;var g=parseInt(f);return a.isNumber(g)&&g<e.length?e[g]:d})},b});