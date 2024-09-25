var filePath = document.getElementById('commonJs').getAttribute('filePath');
var siteurl = document.getElementById('commonJs').getAttribute('siteurl');
var staticPath = document.getElementById('commonJs').getAttribute('staticPath');
/*

document.write('<link rel="stylesheet" href="' + filePath + '/css/swiper-bundle.min.css">');


document.write("<script language=javascript src='" + filePath + "/js/common/jquery-3.6.1.min.js'></script>");
document.write("<script language=javascript src='" + filePath + "/js/common/public.js'></script>");
document.write("<script language=javascript src='" + filePath + "/js/common/set-token.js'></script>");
document.write("<script language=javascript src='" + filePath + "/js/common/crypot-js.min.js'></script>");
document.write("<script language=javascript src='" + filePath + "/js/common/moment-with-locales.js'></script>");

document.write("<script  language=javascript src='" + filePath + "/js/common/clipboard.js'></script>");
document.write("<script  language=javascript src='" + filePath + "/js/common/date.format.js'></script>");
document.write("<script  language=javascript src='" + filePath + "/js/common/ajax.js'></script>");
// document.write("<script  language=javascript src='" + filePath + "/js/common/loading.js'></script>");

document.write("<script defer language=javascript src='" + filePath + "/js/swiper-bundle.min.js'></script>");
// document.write("<script language=javascript src='" + filePath + "/js/jq22.js'></script>");
// document.write("<script defer language=javascript src='" + filePath + "/js/echarts.min.js'></script>");
document.write("<script defer language=javascript src='" + filePath + "/js/main.js'></script>");

/!* 加载效果样式 *!/
document.write('<link rel="stylesheet" href="' + staticPath + '/loading/loading.css">');
document.write("<script language=javascript src='" + staticPath + "/loading/loading.js'></script>");

*/


var filePath = document.getElementById('commonJs').getAttribute('filePath');
var staticPath = document.getElementById('commonJs').getAttribute('staticPath');

let cssPathList = [
    // filePath + '/css/swiper-bundle.min.css',
    staticPath + './loading/loading.css',
];

for (let i = 0; i < cssPathList.length; i++) {
    let n = cssPathList[i];
    // eval('document.write("<link rel=\'stylesheet\' href=\'' + n + '?a=' + Math.random() + '\'>")');
    eval('document.write("<link rel=\'stylesheet\' href=\'' + n + '\'>")');
}

let jsPathList = [
    filePath + './js/common/jquery-3.6.1.min.js',
    filePath + './js/common/public.js',
    filePath + './js/common/set-token.js',
    filePath + './js/common/crypot-js.min.js',
    filePath + './js/common/moment-with-locales.js',
    filePath + './js/common/clipboard.js',
    filePath + './js/common/date.format.js',
    // filePath + '/js/common/ajax.js',
    // filePath + '/js/common/ajax_dayin.js',
    // filePath + '/js/common/md5.js',
    filePath + './js/swiper-bundle.min.js',
    // filePath + '/js/fastly.jsdelivr.net_npm_echarts@5.4.3_dist_echarts.min.js',
    // filePath + '/js/rem.js',
    filePath + './js/main.js',
    // filePath + '/js/echarts.min.js',
    // filePath + '/js/jquery.nicescroll.min.js',
    // filePath + '/js/jq22.js',
    // filePath + '/js/swiper.min.js',
    staticPath + './loading/loading.js',
];


for (let i = 0; i < jsPathList.length; i++) {
    let n = jsPathList[i];
    // eval('document.write("<script language=javascript src=\'' + n + '?a=' + Math.random() + '\'></script>")');
    eval('document.write("<script language=javascript src=\'' + n + '\'></script>")');
}