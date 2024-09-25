if (!!document.getElementById('commonJs')) {
    let token_str = document.getElementById('commonJs').getAttribute('TOKEN');
    // console.log( token_str );
}
/* 只有提示内容 */
function Toast(msg, duration, func) {


    duration = duration ? duration : 3000;
    let className = 'tips' + Math.round(Math.random() * 10000000000);

    msg = msg ? msg : 'Error';

    // let el = '<div class="tips ' + className + '">\n' +
    //     '  <div class="outertips" >\n' +
    //     '    <div class="innertips">\n' +
    //     '      <img class="tipsicon" src="/uploads/material/tips.png" alt="">\n' +
    //     '      ' + msg + '</div>\n' +
    //     '  </div>\n' +
    //     '</div>';

    let el = '<div class="tips ' + className + '">\n' +
        '  <div class="outertips" >\n' +
        '    <div class="innertips">\n' +
        '      ' + msg + '</div>\n' +
        '  </div>\n' +
        '</div>'

    $('body').append(el);

    setTimeout(function() {
        $('.' + className).remove()
        if (func) func();
    }, duration)

}

/* 只有提示内容 */
function successToast(msg, func, duration) {

    duration = duration ? duration : 3000;
    let className = 'tips' + Math.round(Math.random() * 10000000000);
    msg = msg ? msg : 'Success';

    // let el = '<div class="tips ' + className + '">\n' +
    //     '  <div class="outertips" >\n' +
    //     '    <div class="innertips">\n' +
    //     '      <img class="tipsicon" src="/uploads/material/tips.png" alt="">\n' +
    //     '      ' + msg + '</div>\n' +
    //     '  </div>\n' +
    //     '</div>';

    let el = '<div class="tips ' + className + '">\n' +
        '  <div class="outertips" >\n' +
        '    <div class="innertips">\n' +
        '      ' + msg + '</div>\n' +
        '  </div>\n' +
        '</div>'


    $('body').append(el);

    setTimeout(function() {
        $('.' + className).remove()
        if (func) func();
    }, duration)
}

/*成功提示框，带关闭按钮, 支持传入方法*/
function successToast1(msg, func, duration) {
    duration = duration ? duration : 3000;
    let className = 'tips' + Math.round(Math.random() * 10000000000);

    let el = '<div class="coverbg ' + className + '"></div>' +
        '<div class="centerwind ' + className + '">' +
        '<div class="wind">' +
        '<p>' + msg + '</p>' +
        '<div class="ok" onclick="closeTipToast(\'' + className + '\')">ok</div>' +
        '</div>' +
        '</div>';

    $('body').append(el);

    setTimeout(function() {
        $('.' + className).remove()
        if (func) func();
    }, duration)
}

function errorToast(tips, time, dom) {
    Toast(tips);
    return false;
    dom = dom ? dom : $('body');
    time = time ? time : 3000;

    let className = 'fail' + Math.round(Math.random() * 10000000000);
    let el = '<div class="popovers_error ' + className + '">' +
        '<div class="popovers_title_error">' +
        '<p>Error</p>' +
        '</div>' +
        '<img src="/uploads/material/errorIcon.png" alt="">' +
        '<p>' + tips + '</p>' +
        '<button class="ok_public2 close" onclick="closeTipToast(\'' + className + '\')">OK (<span class="sum">3</span>s)</button>' +
        '</div>';
    dom.append(el);

    let _t = time > 1000 ? time / 1000 : time;
    let _i = setInterval(function() {
        $('.' + className + ' .sum').html(--_t);
        if (_t < 1) {
            clearInterval(_i)
            closeTipToast(className)
        }
    }, 1000)

    // let _to = setTimeout(function(){
    //     clearInterval(_t)
    //     closeTipToast(className)
    //     clearTimeout(_to);
    // }, time)
}

function closeTipToast(className, i) {
    $('.' + className).remove();
    if (i) {
        clearInterval(i)
    }
}

function number_format(number, decimals, dec_point, thousands_sep, setType) {

    /*统一设置*/
    if (!setType) {
        decimals = 0;
        thousands_sep = '';
    }

    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}


function goodsReturnTime(className1, className2) {
    var date = new Date();
    var nowh = date.getHours()
    nowm = date.getMinutes() + 30
    var nexth = ''
    var nextm
    if (nowm < 10) {
        nextm = '0' + nowm
        nexth = nowh
    } else if (nowm > 60) {

        if (nowm - 60 < 10) {
            var a = nowm - 60
            nextm = '0' + a
        } else {
            nextm = nowm - 60
        }
        nexth = nowh + 1
    } else if (nowm == 60) {
        nextm = '00'
        nexth = nowh + 1
    } else {
        nexth = nowh
        nextm = nowm
    }
    className1 = className1 ? className1 : 'time1';
    className2 = className2 ? className2 : 'time2';
    var time1 = new Date().format("H:m");
    $('.' + className1).html(time1)
    $('.' + className2).html(nexth + ':' + nextm)
}

$(function() {
    $('body').on('click', '.click_href, .click-href', function() {
        let that = this
        setTimeout(function() {
            window.location.href = $(that).data('href');
        }, 300)
    })

    $('.check_number_func_1').on('input', function() {
        let val = $(this).val();
        let maxLength = $(this).attr('maxlength')
        var reg = /^[0-9]*$/gi; // 金额（数字）正则表达式
        if (val && !reg.test(val)) { // 判断是否是数字，或者数字为空或者零时，记录数字；做判断时，金额存在时偏多，空数字放后面验证
            $(this).val($(this).attr('beforeVal'))
            Toast('The value is not a number') // 非数字，则提示，并回写上一次数据
            return false;
        }

        $(this).attr('beforeVal', val)
        if (maxLength && maxLength > 0) // 标签中，最大长度存在，则验证最大长度
            if (val.length > maxLength)
                $(this).val(val.slice(0, maxLength))

    })

    $('.check_number_func').on('input', function() {
        let val = $(this).val();
        let maxLength = $(this).attr('maxlength')
        var reg = /^[1-9][0-9]*$/gi; // 金额（数字）正则表达式
        if (val && !reg.test(val)) { // 判断是否是数字，或者数字为空或者零时，记录数字；做判断时，金额存在时偏多，空数字放后面验证
            $(this).val($(this).attr('beforeVal'))
            Toast('The value is not a number') // 非数字，则提示，并回写上一次数据
            return false;
        }

        $(this).attr('beforeVal', val)
        if (maxLength && maxLength > 0) // 标签中，最大长度存在，则验证最大长度
            if (val.length > maxLength)
                $(this).val(val.slice(0, maxLength))

    })

    $('.copy-href').each(function() {
        copyCodePublicFunc(this)
    })

    // if( $('#TOKEN').length < 1 ){
    //     $('body').append('<input type="hidden" id="TOKEN" value="' + token_str + '">')
    // }

})

function copyCodePublicFunc(minCopyBtn) {
    var clipboard = new ClipboardJS(minCopyBtn);
    clipboard.on('success', function(e) {
        if ($('.copied').length < 1) {
            successToast('Copied')
        } else {
            $('.copied').show();
            setTimeout(function() {
                $('.copied').hide();
            }, 1000)
        }
    });
    clipboard.on('error', function(e) {});
}

function z(data) {
    return data;
}