/**
 * Created by bom on 2017/03/09.
 */
//���ֹ���
    ;(function($) {
        $.fn.numberAnimate = function(setting) {
            var defaults = {
                speed : 1000,//�����ٶ�
                num : "", //��ʼ��ֵ
                iniAnimate : true, //�Ƿ�Ҫ��ʼ������Ч��
                symbol : '',//Ĭ�ϵķָ���ţ�ǧ����ǧ��
                dot : 0 //������λС����
            };
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
            <span class="mt-number-animate-span">1</span>\
            <span class="mt-number-animate-span">1</span>\
            <span class="mt-number-animate-span">2</span>\
            <span class="mt-number-animate-span">3</span>\
            <span class="mt-number-animate-span">4</span>\
            <span class="mt-number-animate-span">5</span>\
            <span class="mt-number-animate-span">6</span>\
            <span class="mt-number-animate-span">7</span>\
            <span class="mt-number-animate-span">8</span>\
            <span class="mt-number-animate-span">9</span>\
            <span class="mt-number-animate-span">0</span>\
            <span class="mt-number-animate-span">,</span>\
          </div>';

            //���ִ���
            var numToArr = function(num){
               // num = parseFloat(num).toFixed(setting.dot);
                if(typeof(num) == 'number'){
                    var arrStr = num.toString().split("");
                }else{
                    var arrStr = num.split("");
                }
                //console.log(arrStr);
                return arrStr;
            };

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
            };

            //ִ�ж���
            var runAnimate = function($parent){
                $parent.find(".mt-number-animate-dom").each(function() {
                    var num = $(this).attr("data-num");
                    //num = (num=="."?10:num);
                    num=num=="0"?10:num==","?11:num;
                    var spanHei = $(this).height()/12; //11ΪԪ�ظ���
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
            };

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
            };
            //init
            init($(this));
            return this;
        }
    })(jQuery);