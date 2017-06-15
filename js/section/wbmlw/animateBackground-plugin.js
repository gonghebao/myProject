//(function($) {
//    if(!document.defaultView || !document.defaultView.getComputedStyle){
//        var oldCurCSS = jQuery.curCSS;
//        jQuery.curCSS = function(elem, name, force){
//            if(name === 'background-position'){
//                name = 'backgroundPosition';
//            }
//            if(name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[ name ]){
//                return oldCurCSS.apply(this, arguments);
//            }
//            var style = elem.style;
//            if ( !force && style && style[ name ] ){
//                return style[ name ];
//            }
//            return oldCurCSS(elem, 'backgroundPositionX', force) +' '+ oldCurCSS(elem, 'backgroundPositionY', force);
//        };
//    }
//
//    var oldAnim = $.fn.animate;
//    $.fn.animate = function(prop){
//        if('background-position' in prop){
//            prop.backgroundPosition = prop['background-position'];
//            delete prop['background-position'];
//        }
//        if('backgroundPosition' in prop){
//            prop.backgroundPosition = '('+ prop.backgroundPosition + ')';
//        }
//        return oldAnim.apply(this, arguments);
//    };
//
//    function toArray(strg){
//        strg = strg.replace(/left|top/g,'0px');
//        strg = strg.replace(/right|bottom/g,'100%');
//        strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
//        var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
//        return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
//    }
//
//    $.fx.step.backgroundPosition = function(fx) {
//        if (!fx.bgPosReady) {
//            var start = $.curCSS(fx.elem,'backgroundPosition');
//
//            if(!start){//FF2 no inline-style fallback
//                start = '0px 0px';
//            }
//
//            start = toArray(start);
//
//            fx.start = [start[0],start[2]];
//
//            var end = toArray(fx.end);
//            fx.end = [end[0],end[2]];
//
//            fx.unit = [end[1],end[3]];
//            fx.bgPosReady = true;
//        }
//
//        var nowPosX = [];
//        nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
//        nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
//        fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];
//    };
//})(jQuery);
;(function($) {
    $.fn.numberAnimate = function(setting) {
        var defaults = {
            speed : 1000,//�����ٶ�
            num : "", //��ʼ��ֵ
            iniAnimate : true, //�Ƿ�Ҫ��ʼ������Ч��
            symbol : '',//Ĭ�ϵķָ���ţ�ǧ����ǧ��
            dot : 0 //������λС����
        }
        //���settingΪ�գ���ȡdefault��ֵ
        var setting = $.extend(defaults, setting);

        //��������ж������ʾ����
        if($(this).length > 1){
            alert("just only one obj!");
            return;
        }

        //���δ���ó�ʼ��ֵ����ʾ����
        if(setting.num == ""){
            alert("must set a num!");
            return;
        }
        var nHtml = '<div class="mt-number-animate-dom" data-num="{{num}}">\
            <span class="mt-number-animate-span">0</span>\
            <span class="mt-number-animate-span">1</span>\
            <span class="mt-number-animate-span">2</span>\
            <span class="mt-number-animate-span">3</span>\
            <span class="mt-number-animate-span">4</span>\
            <span class="mt-number-animate-span">5</span>\
            <span class="mt-number-animate-span">6</span>\
            <span class="mt-number-animate-span">7</span>\
            <span class="mt-number-animate-span">8</span>\
            <span class="mt-number-animate-span">9</span>\
            <span class="mt-number-animate-span">.</span>\
          </div>';

        //���ִ���
        var numToArr = function(num){
            num = parseFloat(num).toFixed(setting.dot);
            if(typeof(num) == 'number'){
                var arrStr = num.toString().split("");
            }else{
                var arrStr = num.split("");
            }
            //console.log(arrStr);
            return arrStr;
        }

        //����DOM symbol:�ָ����
        var setNumDom = function(arrStr){
            var shtml = '<div class="mt-number-animate">';
            for(var i=0,len=arrStr.length; i<len; i++){
                if(i != 0 && (len-i)%3 == 0 && setting.symbol != "" && arrStr[i]!="."){
                    shtml += '<div class="mt-number-animate-dot">'+setting.symbol+'</div>'+nHtml.replace("{{num}}",arrStr[i]);
                }else{
                    shtml += nHtml.replace("{{num}}",arrStr[i]);
                }
            }
            shtml += '</div>';
            return shtml;
        }

        //ִ�ж���
        var runAnimate = function($parent){
            $parent.find(".mt-number-animate-dom").each(function() {
                var num = $(this).attr("data-num");
                num = (num=="."?10:num);
                var spanHei = $(this).height()/11; //11ΪԪ�ظ���
                var thisTop = -num*spanHei+"px";
                if(thisTop != $(this).css("top")){
                    if(setting.iniAnimate){
                        //HTML5��֧��
                        if(!window.applicationCache){
                            $(this).animate({
                                top : thisTop
                            }, setting.speed);
                        }else{
                            $(this).css({
                                'transform':'translateY('+thisTop+')',
                                '-ms-transform':'translateY('+thisTop+')',   /* IE 9 */
                                '-moz-transform':'translateY('+thisTop+')',  /* Firefox */
                                '-webkit-transform':'translateY('+thisTop+')', /* Safari �� Chrome */
                                '-o-transform':'translateY('+thisTop+')',
                                '-ms-transition':setting.speed/1000+'s',
                                '-moz-transition':setting.speed/1000+'s',
                                '-webkit-transition':setting.speed/1000+'s',
                                '-o-transition':setting.speed/1000+'s',
                                'transition':setting.speed/1000+'s'
                            });
                        }
                    }else{
                        setting.iniAnimate = true;
                        $(this).css({
                            top : thisTop
                        });
                    }
                }
            });
        }

        //��ʼ��
        var init = function($parent){
            //��ʼ��
            $parent.html(setNumDom(numToArr(setting.num)));
            runAnimate($parent);
        };

        //���ò���
        this.resetData = function(num){
            var newArr = numToArr(num);
            var $dom = $(this).find(".mt-number-animate-dom");
            if($dom.length < newArr.length){
                $(this).html(setNumDom(numToArr(num)));
            }else{
                $dom.each(function(index, el) {
                    $(this).attr("data-num",newArr[index]);
                });
            }
            runAnimate($(this));
        }
        //init
        init($(this));
        return this;
    }
})(jQuery);