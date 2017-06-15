/**
 * Created by bom on 2016/9/9.
 */
var new_list=[
    {name: '杭州市', geoCoord: [120.1, 30.14]},
    {name: '桐庐', geoCoord: [119.15, 29.8]},
    {name: '桐庐', geoCoord: [119.5, 29.69]},
    {name: '富阳', geoCoord: [119.77, 29.9]},
    {name: '临安', geoCoord: [119, 30.1]},
    {name: '临安', geoCoord: [119.4, 30.2]},
    {name: '余杭局', geoCoord: [119.85, 30.2]},
    {name: '余杭局', geoCoord: [119.6, 30.4]},
    {name: '余杭局', geoCoord: [120.1, 30.37]},
    {name: '建德', geoCoord: [119.2, 29.45]},
    {name: '建德', geoCoord: [118.8, 29.2]},
    {name: '淳安', geoCoord: [118.6, 29.5]},
    {name: '萧山', geoCoord: [120.2, 29.95]},
    {name: '萧山', geoCoord: [120.3, 30.1]},
    {name: '萧山', geoCoord: [120.6, 30.2]},
    {name: '温州', geoCoord: [120.5, 27.8]},
    {name: '温州', geoCoord: [120.7, 27.7]},
    {name: '温州', geoCoord: [120.9, 27.7]},
    {name: '乐清', geoCoord: [121.1, 27.9]},
    {name: '乐清', geoCoord: [121.3, 28.1]},
    {name: '永嘉', geoCoord: [120.8, 28.15]},
    {name: '平阳县', geoCoord: [120.5, 27.4]},
    {name: '苍南县', geoCoord: [120.5, 27.2]},
    {name: '苍南县', geoCoord: [120.5, 27.2]},
    {name: '文成县', geoCoord: [120, 27.55]},
    {name: '泰顺', geoCoord: [119.8, 27.3]},
    {name: '瑞安', geoCoord: [120.4, 27.6]},
    {name: '瑞安', geoCoord: [120.7, 27.55]},
    {name: '嘉兴', geoCoord: [120.9, 30.65]},
    {name: '嘉善', geoCoord: [121, 30.8]},
    {name: '平湖', geoCoord: [121.3, 30.65]},
    {name: '海盐', geoCoord: [121, 30.45]},
    {name: '桐乡', geoCoord: [120.55, 30.5]},
    {name: '湖州', geoCoord: [120.1, 30.7]},
    {name: '德清', geoCoord: [119.9, 30.5]},
    {name: '长兴', geoCoord: [119.6, 30.9]},
    {name: '安吉', geoCoord: [119.3, 30.5]},
    {name: '绍兴', geoCoord: [120.65, 29.85]},
    {name: '新仓', geoCoord: [121.2, 29.3]},
    {name: '诸暨', geoCoord: [120.3, 29.5]},
    {name: '上虞', geoCoord: [121.1, 29.8]},
    {name: '上虞', geoCoord: [121, 29.9]},
    {name: '嵊州', geoCoord: [121, 29.5]},
    {name: '嵊州', geoCoord: [120.7, 29.4]},
    {name: '金华市', geoCoord: [119.5, 28.9]},
    {name: '金华市', geoCoord: [119.2, 28.8]},
    {name: '永康', geoCoord: [120, 28.75]},
    {name: '武义', geoCoord: [119.6, 28.6]},
    {name: '义乌', geoCoord: [120, 29.1]},
    {name: '浦江', geoCoord: [119.8, 29.4]},
    {name: '磐安', geoCoord: [120.6, 28.9]},
    {name: '兰溪', geoCoord: [119.2, 29.2]},
    {name: '东阳', geoCoord: [120.3, 29.1]},
    {name: '衢州', geoCoord: [118.4, 28.8]},
    {name: '常山', geoCoord: [118, 28.8]},
    {name: '江山', geoCoord: [118, 28.3]},
    {name: '开花', geoCoord: [117.7, 29]},
    {name: '龙游', geoCoord: [118.8, 28.8]},
    {name: '定海', geoCoord: [122.6, 30]},
    {name: '普陀', geoCoord: [122.8, 29.65]},
    {name: '岱山', geoCoord: [122.85, 30.2]},
    {name: '嵊泗', geoCoord: [123, 30.6]},
    {name: '丽水', geoCoord: [119.7, 28.3]},
    {name: '龙泉', geoCoord: [118.7, 27.8]},
    {name: '青田', geoCoord: [120, 27.9]},
    {name: '云和', geoCoord: [119.3, 27.9]},
    {name: '庆元', geoCoord: [118.8, 27.4]},
    {name: '缙云', geoCoord: [120.1, 28.5]},
    {name: '遂昌', geoCoord: [118.6, 28.3]},
    {name: '松阳', geoCoord: [119.15, 28.25]},
    {name: '景宁', geoCoord: [119.35, 27.65]},
    {name: '台州', geoCoord: [121.5, 28.4]},
    {name: '临海', geoCoord: [121.5, 28.7]},
    {name: '温岭', geoCoord: [121.7, 28.2]},
    {name: '仙居', geoCoord: [120.7, 28.5]},
    {name: '天台', geoCoord: [121.2, 29]},
    {name: '三门', geoCoord: [121.8, 28.85]},
    {name: '洞头', geoCoord: [121.4, 27.65]},
    {name: '余姚', geoCoord: [121.7, 29.6]},
    {name: '余姚', geoCoord: [121.4, 29.9]},
    {name: '余姚', geoCoord: [121.5, 30.2]},
    {name: '余姚', geoCoord: [122.2, 29.7]},
    {name: '余姚', geoCoord: [121.9, 29.15]},
    {name: '余姚', geoCoord: [122.4, 29.2]},
    {name: '余姚', geoCoord: [121.9, 29.8]},
    {name: '玉环', geoCoord: [121.5, 27.9]},

];
var b=2;
var geo=new_list[0].geoCoord;
for(var i=0;i<788*b;i++){
    new_list.push({
        name:"杭州市",
        geoCoord:[Math.random() >.5?geo[0]+Math.random()*0.4+0.021:geo[0]-Math.random()*0.4+0.021,Math.random() >.5?geo[1]+Math.random()*0.4+0.021:geo[1]-Math.random()*0.4+0.021]
    })
}

var geo_2=new_list[1].geoCoord;
for(var i=0;i<32*b;i++){
    new_list.push({
        name:"桐庐",
        geoCoord:[Math.random() >.5?geo_2[0]+Math.random() *.2+0.05:geo_2[0]-Math.random() *.2+0.05,Math.random() >.5?geo_2[1]+Math.random()*0.1+0.021:geo_2[1]-Math.random()*0.1+0.021]
    })
}

var geo_3=new_list[2].geoCoord;
for(var i=0;i<32*b;i++){
    new_list.push({
        name:"桐庐",
        geoCoord:[Math.random() >.5?geo_3[0]+Math.random() *.2+0.05:geo_3[0]-Math.random() *.2+0.05,Math.random() >.5?geo_3[1]+Math.random()*0.1+0.021:geo_3[1]-Math.random()*0.1+0.021]
    })
}

var geo_4=new_list[3].geoCoord;
for(var i=0;i<215*b;i++){
    new_list.push({
        name:"富阳",
        geoCoord:[Math.random() >.5?geo_4[0]+Math.random() *.5+0.05:geo_4[0]-Math.random() *.5+0.05,Math.random() >.5?geo_4[1]+Math.random()*0.3+0.021:geo_4[1]-Math.random()*0.3+0.021]
    })
}

var geo_5=new_list[4].geoCoord;
for(var i=0;i<36*b;i++){
    new_list.push({
        name:"临安",
        geoCoord:[Math.random() >.5?geo_5[0]+Math.random() *.3+0.05:geo_5[0]-Math.random() *.4+0.05,Math.random() >.5?geo_5[1]+Math.random()*0.1+0.021:geo_5[1]-Math.random()*0.1+0.021]
    })
}

var geo_6=new_list[5].geoCoord;
for(var i=0;i<36*b;i++){
    new_list.push({
        name:"临安",
        geoCoord:[Math.random() >.5?geo_6[0]+Math.random() *.3+0.05:geo_6[0]-Math.random() *.4+0.05,Math.random() >.5?geo_6[1]+Math.random()*0.1+0.021:geo_6[1]-Math.random()*0.1+0.021]
    })
}

var geo_7=new_list[6].geoCoord;
for(var i=0;i<64*b;i++){
    new_list.push({
        name:"余杭",
        geoCoord:[Math.random() >.5?geo_7[0]+Math.random() *.1+0.05:geo_7[0]-Math.random() *.1+0.05,Math.random() >.5?geo_7[1]+Math.random()*0.1+0.021:geo_7[1]-Math.random()*0.1+0.021]
    })
}

var geo_8=new_list[7].geoCoord;
for(var i=0;i<64*b;i++){
    new_list.push({
        name:"余杭",
        geoCoord:[Math.random() >.5?geo_8[0]+Math.random() *.1+0.05:geo_8[0]-Math.random() *.1+0.05,Math.random() >.5?geo_8[1]+Math.random()*0.1+0.021:geo_8[1]-Math.random()*0.1+0.021]
    })
}

var geo_9=new_list[8].geoCoord;
for(var i=0;i<64*b;i++){
    new_list.push({
        name:"余杭",
        geoCoord:[Math.random() >.5?geo_9[0]+Math.random() *.2+0.05:geo_9[0]-Math.random() *.2+0.05,Math.random() >.5?geo_9[1]+Math.random()*0.05+0.021:geo_9[1]-Math.random()*0.05+0.021]
    })
}

var geo_10=new_list[9].geoCoord;
for(var i=0;i<28*b;i++){
    new_list.push({
        name:"建德",
        geoCoord:[Math.random() >.5?geo_10[0]+Math.random() *.2+0.05:geo_10[0]-Math.random() *.2+0.05,Math.random() >.5?geo_10[1]+Math.random()*0.1+0.021:geo_10[1]-Math.random()*0.3+0.021]
    })
}

var geo_11=new_list[10].geoCoord;
for(var i=0;i<28*b;i++){
    new_list.push({
        name:"建德",
        geoCoord:[Math.random() >.5?geo_11[0]+Math.random() *.2+0.05:geo_11[0]-Math.random() *.2+0.05,Math.random() >.5?geo_11[1]+Math.random()*0.1+0.021:geo_11[1]-Math.random()*0.1+0.021]
    })
}

var geo_12=new_list[11].geoCoord;
for(var i=0;i<30*b;i++){
    new_list.push({
        name:"淳安",
        geoCoord:[Math.random() >.5?geo_12[0]+Math.random() *.3+0.05:geo_12[0]-Math.random() *.3+0.05,Math.random() >.5?geo_12[1]+Math.random()*0.3+0.021:geo_12[1]-Math.random()*0.3+0.021]
    })
}

var geo_13=new_list[12].geoCoord;
for(var i=0;i<66*b;i++){
    new_list.push({
        name:"萧山",
        geoCoord:[Math.random() >.5?geo_13[0]+Math.random() *.1+0.05:geo_13[0]-Math.random() *.1+0.05,Math.random() >.5?geo_13[1]+Math.random()*0.1+0.021:geo_13[1]-Math.random()*0.1+0.021]
    })
}

var geo_14=new_list[13].geoCoord;
for(var i=0;i<30*b;i++){
    new_list.push({
        name:"萧山",
        geoCoord:[Math.random() >.5?geo_14[0]+Math.random() *.1+0.05:geo_14[0]-Math.random() *.1+0.05,Math.random() >.5?geo_14[1]+Math.random()*0.1+0.021:geo_14[1]-Math.random()*0.1+0.021]
    })
}

var geo_15=new_list[14].geoCoord;
for(var i=0;i<90*b;i++){
    new_list.push({
        name:"萧山",
        geoCoord:[Math.random() >.5?geo_15[0]+Math.random() *.15+0.05:geo_15[0]-Math.random() *.15+0.05,Math.random() >.5?geo_15[1]+Math.random()*0.1+0.021:geo_15[1]-Math.random()*0.1+0.021]
    })
}

var geo_16=new_list[15].geoCoord;
for(var i=0;i<160*b;i++){
    new_list.push({
        name:"温州",
        geoCoord:[Math.random() >.5?geo_16[0]+Math.random() *.3+0.05:geo_16[0]-Math.random() *.3+0.05,Math.random() >.5?geo_16[1]+Math.random()*0.3+0.021:geo_16[1]-Math.random()*0.3+0.021]
    })
}
var geo_17=new_list[16].geoCoord;
for(var i=0;i<180*b;i++){
    new_list.push({
        name:"温州",
        geoCoord:[Math.random() >.5?geo_17[0]+Math.random() *.3+0.05:geo_17[0]-Math.random() *.3+0.05,Math.random() >.5?geo_17[1]+Math.random()*0.3+0.021:geo_17[1]-Math.random()*0.3+0.021]
    })
}
var geo_18=new_list[17].geoCoord;
for(var i=0;i<160*b;i++){
    new_list.push({
        name:"温州",
        geoCoord:[Math.random() >.5?geo_18[0]+Math.random() *.2+0.05:geo_18[0]-Math.random() *.3+0.05,Math.random() >.5?geo_18[1]+Math.random()*0.3+0.021:geo_18[1]-Math.random()*0.1+0.021]
    })
}
var geo_19=new_list[18].geoCoord;
for(var i=0;i<60*b;i++){
    new_list.push({
        name:"乐清",
        geoCoord:[Math.random() >.5?geo_19[0]+Math.random() *.1+0.05:geo_19[0]-Math.random() *.1+0.05,Math.random() >.5?geo_19[1]+Math.random()*0.1+0.021:geo_19[1]-Math.random()*0.1+0.021]
    })
}
var geo_20=new_list[19].geoCoord;
for(var i=0;i<60*b;i++){
    new_list.push({
        name:"乐清",
        geoCoord:[Math.random() >.5?geo_20[0]+Math.random() *.1+0.05:geo_20[0]-Math.random() *.2+0.05,Math.random() >.5?geo_20[1]+Math.random()*0.1+0.021:geo_20[1]-Math.random()*0.2+0.021]
    })
}
var geo_21=new_list[20].geoCoord;
for(var i=0;i<84*b;i++){
    new_list.push({
        name:"永嘉",
        geoCoord:[Math.random() >.5?geo_21[0]+Math.random() *.3+0.05:geo_21[0]-Math.random() *.3+0.05,Math.random() >.5?geo_21[1]+Math.random()*0.3+0.021:geo_21[1]-Math.random()*0.3+0.021]
    })
}
var geo_22=new_list[21].geoCoord;
for(var i=0;i<114*b;i++){
    new_list.push({
        name:"平阳",
        geoCoord:[Math.random() >.5?geo_22[0]+Math.random() *.3+0.05:geo_22[0]-Math.random() *.4+0.05,Math.random() >.5?geo_22[1]+Math.random()*0.1+0.021:geo_22[1]-Math.random()*0.1+0.021]
    })
}
var geo_23=new_list[22].geoCoord;
for(var i=0;i<90*b;i++){
    new_list.push({
        name:"苍南",
        geoCoord:[Math.random() >.5?geo_23[0]+Math.random() *.2+0.05:geo_23[0]-Math.random() *.2+0.05,Math.random() >.5?geo_23[1]+Math.random()*0.05+0.021:geo_23[1]-Math.random()*0.1+0.021]
    })
}
var geo_24=new_list[23].geoCoord;
for(var i=0;i<90*b;i++){
    new_list.push({
        name:"苍南",
        geoCoord:[Math.random() >.5?geo_24[0]+Math.random() *.1+0.05:geo_24[0]-Math.random() *.1+0.05,Math.random() >.5?geo_24[1]+Math.random()*0.2+0.021:geo_24[1]-Math.random()*0.2+0.021]
    })
}
var geo_25=new_list[24].geoCoord;
for(var i=0;i<22*b;i++){
    new_list.push({
        name:"文成",
        geoCoord:[Math.random() >.5?geo_25[0]+Math.random() *.3+0.05:geo_25[0]-Math.random() *.3+0.05,Math.random() >.5?geo_25[1]+Math.random()*0.2+0.021:geo_25[1]-Math.random()*0.2+0.021]
    })
}
var geo_26=new_list[25].geoCoord;
for(var i=0;i<26*b;i++){
    new_list.push({
        name:"泰顺",
        geoCoord:[Math.random() >.5?geo_26[0]+Math.random() *.3+0.05:geo_26[0]-Math.random() *.3+0.05,Math.random() >.5?geo_26[1]+Math.random()*0.2+0.021:geo_26[1]-Math.random()*0.2+0.021]
    })
}
var geo_27=new_list[26].geoCoord;
for(var i=0;i<80*b;i++){
    new_list.push({
        name:"瑞安",
        geoCoord:[Math.random() >.5?geo_27[0]+Math.random() *.2+0.05:geo_27[0]-Math.random() *.2+0.05,Math.random() >.5?geo_27[1]+Math.random()*0.1+0.021:geo_27[1]-Math.random()*0.1+0.021]
    })
}
var geo_28=new_list[27].geoCoord;
for(var i=0;i<54*b;i++){
    new_list.push({
        name:"瑞安",
        geoCoord:[Math.random() >.5?geo_28[0]+Math.random() *.2+0.05:geo_28[0]-Math.random() *.2+0.05,Math.random() >.5?geo_28[1]+Math.random()*0.1+0.021:geo_28[1]-Math.random()*0.1+0.021]
    })
}

var geo_29=new_list[28].geoCoord;
for(var i=0;i<268*b;i++){
    new_list.push({
        name:"嘉兴",
        geoCoord:[Math.random() >.5?geo_29[0]+Math.random() *.2+0.05:geo_29[0]-Math.random() *.2+0.05,Math.random() >.5?geo_29[1]+Math.random()*0.2+0.021:geo_29[1]-Math.random()*0.1+0.021]
    })
}
var geo_30=new_list[29].geoCoord;
for(var i=0;i<84*b;i++){
    new_list.push({
        name:"嘉善",
        geoCoord:[Math.random() >.5?geo_30[0]+Math.random() *.2+0.05:geo_30[0]-Math.random() *.2+0.05,Math.random() >.5?geo_30[1]+Math.random()*0.2+0.021:geo_30[1]-Math.random()*0.2+0.021]
    })
}
var geo_31=new_list[30].geoCoord;
for(var i=0;i<82*b;i++){
    new_list.push({
        name:"平湖",
        geoCoord:[Math.random() >.5?geo_31[0]+Math.random() *.1+0.05:geo_31[0]-Math.random() *.1+0.05,Math.random() >.5?geo_31[1]+Math.random()*0.1+0.021:geo_31[1]-Math.random()*0.1+0.021]
    })
}
var geo_32=new_list[31].geoCoord;
for(var i=0;i<76*b;i++){
    new_list.push({
        name:"海盐",
        geoCoord:[Math.random() >.5?geo_32[0]+Math.random() *.1+0.05:geo_32[0]-Math.random() *.2+0.05,Math.random() >.5?geo_32[1]+Math.random()*0.1+0.021:geo_32[1]-Math.random()*0.1+0.021]
    })
}
var geo_33=new_list[32].geoCoord;
for(var i=0;i<188*b;i++){
    new_list.push({
        name:"桐乡",
        geoCoord:[Math.random() >.5?geo_33[0]+Math.random() *.2+0.05:geo_33[0]-Math.random() *.2+0.05,Math.random() >.5?geo_33[1]+Math.random()*0.2+0.021:geo_33[1]-Math.random()*0.2+0.021]
    })
}
var geo_34=new_list[33].geoCoord;
for(var i=0;i<178*b;i++){
    new_list.push({
        name:"湖州",
        geoCoord:[Math.random() >.5?geo_34[0]+Math.random() *.35+0.05:geo_34[0]-Math.random() *.3+0.05,Math.random() >.5?geo_34[1]+Math.random()*0.2+0.021:geo_34[1]-Math.random()*0.15+0.021]
    })
}
var geo_35=new_list[34].geoCoord;
for(var i=0;i<74*b;i++){
    new_list.push({
        name:"德清",
        geoCoord:[Math.random() >.5?geo_35[0]+Math.random() *.3+0.05:geo_35[0]-Math.random() *.2+0.05,Math.random() >.5?geo_35[1]+Math.random()*0.1+0.021:geo_35[1]-Math.random()*0.1+0.021]
    })
}
var geo_36=new_list[35].geoCoord;
for(var i=0;i<88*b;i++){
    new_list.push({
        name:"长兴",
        geoCoord:[Math.random() >.5?geo_36[0]+Math.random() *.35+0.05:geo_36[0]-Math.random() *.2+0.05,Math.random() >.5?geo_36[1]+Math.random()*0.2+0.021:geo_36[1]-Math.random()*0.2+0.021]
    })
}
var geo_37=new_list[36].geoCoord;
for(var i=0;i<90*b;i++){
    new_list.push({
        name:"安吉",
        geoCoord:[Math.random() >.5?geo_37[0]+Math.random() *.4+0.05:geo_37[0]-Math.random() *.2+0.05,Math.random() >.5?geo_37[1]+Math.random()*0.2+0.021:geo_37[1]-Math.random()*0.1+0.021]
    })
}
var geo_38=new_list[37].geoCoord;
for(var i=0;i<132*b;i++){
    new_list.push({
        name:"绍兴",
        geoCoord:[Math.random() >.5?geo_38[0]+Math.random() *.2+0.05:geo_38[0]-Math.random() *.2+0.05,Math.random() >.5?geo_38[1]+Math.random()*0.2+0.021:geo_38[1]-Math.random()*0.3+0.021]
    })
}
var geo_39=new_list[38].geoCoord;
for(var i=0;i<87*b;i++){
    new_list.push({
        name:"新仓",
        geoCoord:[Math.random() >.5?geo_39[0]+Math.random() *.25+0.05:geo_39[0]-Math.random() *.25+0.05,Math.random() >.5?geo_39[1]+Math.random()*0.15+0.021:geo_39[1]-Math.random()*0.15+0.021]
    })
}
var geo_40=new_list[39].geoCoord;
for(var i=0;i<258*b;i++){
    new_list.push({
        name:"诸暨",
        geoCoord:[Math.random() >.5?geo_40[0]+Math.random() *.3+0.05:geo_40[0]-Math.random() *.35+0.05,Math.random() >.5?geo_40[1]+Math.random()*0.4+0.021:geo_40[1]-Math.random()*0.15+0.021]
    })
}
var geo_41=new_list[40].geoCoord;
for(var i=0;i<74*b;i++){
    new_list.push({
        name:"上虞",
        geoCoord:[Math.random() >.5?geo_41[0]+Math.random() *.1+0.05:geo_41[0]-Math.random() *.2+0.05,Math.random() >.5?geo_41[1]+Math.random()*0.1+0.021:geo_41[1]-Math.random()*0.1+0.021]
    })
}
var geo_42=new_list[41].geoCoord;
for(var i=0;i<74*b;i++){
    new_list.push({
        name:"上虞",
        geoCoord:[Math.random() >.5?geo_42[0]+Math.random() *.1+0.05:geo_42[0]-Math.random() *.1+0.05,Math.random() >.5?geo_42[1]+Math.random()*0.2+0.021:geo_42[1]-Math.random()*0.2+0.021]
    })
}
var geo_43=new_list[42].geoCoord;
for(var i=0;i<52*b;i++){
    new_list.push({
        name:"嵊州",
        geoCoord:[Math.random() >.5?geo_43[0]+Math.random() *.3+0.05:geo_43[0]-Math.random() *.2+0.05,Math.random() >.5?geo_43[1]+Math.random()*0.1+0.021:geo_43[1]-Math.random()*0.1+0.021]
    })
}
var geo_44=new_list[43].geoCoord;
for(var i=0;i<52*b;i++){
    new_list.push({
        name:"嵊州",
        geoCoord:[Math.random() >.5?geo_44[0]+Math.random() *.2+0.05:geo_44[0]-Math.random() *.2+0.05,Math.random() >.5?geo_44[1]+Math.random()*0.2+0.021:geo_44[1]-Math.random()*0.2+0.021]
    })
}
var geo_45=new_list[44].geoCoord;
for(var i=0;i<52*b;i++){
    new_list.push({
        name:"金华市",
        geoCoord:[Math.random() >.5?geo_45[0]+Math.random() *.2+0.05:geo_45[0]-Math.random() *.2+0.05,Math.random() >.5?geo_45[1]+Math.random()*0.2+0.021:geo_45[1]-Math.random()*0.2+0.021]
    })
}
var geo_46=new_list[45].geoCoord;
for(var i=0;i<52*b;i++){
    new_list.push({
        name:"金华市",
        geoCoord:[Math.random() >.5?geo_46[0]+Math.random() *.2+0.05:geo_46[0]-Math.random() *.2+0.05,Math.random() >.5?geo_46[1]+Math.random()*0.2+0.021:geo_46[1]-Math.random()*0.2+0.021]
    })
}
var geo_47=new_list[46].geoCoord;
for(var i=0;i<188*b;i++){
    new_list.push({
        name:"永康",
        geoCoord:[Math.random() >.5?geo_47[0]+Math.random() *.2+0.05:geo_47[0]-Math.random() *.2+0.05,Math.random() >.5?geo_47[1]+Math.random()*0.2+0.021:geo_47[1]-Math.random()*0.2+0.021]
    })
}
var geo_48=new_list[47].geoCoord;
for(var i=0;i<70*b;i++){
    new_list.push({
        name:"武义",
        geoCoord:[Math.random() >.5?geo_48[0]+Math.random() *.2+0.05:geo_48[0]-Math.random() *.2+0.05,Math.random() >.5?geo_48[1]+Math.random()*0.2+0.021:geo_48[1]-Math.random()*0.2+0.021]
    })
}
var geo_49=new_list[48].geoCoord;
for(var i=0;i<352*b;i++){
    new_list.push({
        name:"义乌",
        geoCoord:[Math.random() >.5?geo_49[0]+Math.random() *.3+0.05:geo_49[0]-Math.random() *.4+0.05,Math.random() >.5?geo_49[1]+Math.random()*0.3+0.021:geo_49[1]-Math.random()*0.3+0.021]
    })
}
var geo_50=new_list[49].geoCoord;
for(var i=0;i<70*b;i++){
    new_list.push({
        name:"浦江",
        geoCoord:[Math.random() >.5?geo_50[0]+Math.random() *.15+0.05:geo_50[0]-Math.random() *.2+0.05,Math.random() >.5?geo_50[1]+Math.random()*0.15+0.021:geo_50[1]-Math.random()*0.15+0.021]
    })
}
var geo_51=new_list[50].geoCoord;
for(var i=0;i<40*b;i++){
    new_list.push({
        name:"磐安",
        geoCoord:[Math.random() >.5?geo_51[0]+Math.random() *.15+0.05:geo_51[0]-Math.random() *.2+0.05,Math.random() >.5?geo_51[1]+Math.random()*0.2+0.021:geo_51[1]-Math.random()*0.3+0.021]
    })
}
var geo_52=new_list[51].geoCoord;
for(var i=0;i<44*b;i++){
    new_list.push({
        name:"兰溪",
        geoCoord:[Math.random() >.5?geo_52[0]+Math.random() *.3+0.05:geo_52[0]-Math.random() *.2+0.05,Math.random() >.5?geo_52[1]+Math.random()*0.1+0.021:geo_52[1]-Math.random()*0.2+0.021]
    })
}
var geo_53=new_list[52].geoCoord;
for(var i=0;i<174*b;i++){
    new_list.push({
        name:"东阳",
        geoCoord:[Math.random() >.5?geo_53[0]+Math.random() *.4+0.05:geo_53[0]-Math.random() *.3+0.05,Math.random() >.5?geo_53[1]+Math.random()*0.2+0.021:geo_53[1]-Math.random()*0.3+0.021]
    })
}
var geo_54=new_list[53].geoCoord;
for(var i=0;i<132*b;i++){
    new_list.push({
        name:"衢州",
        geoCoord:[Math.random() >.5?geo_54[0]+Math.random() *.2+0.05:geo_54[0]-Math.random() *.2+0.05,Math.random() >.5?geo_54[1]+Math.random()*0.4+0.021:geo_54[1]-Math.random()*0.4+0.021]
    })
}
var geo_55=new_list[54].geoCoord;
for(var i=0;i<38*b;i++){
    new_list.push({
        name:"常山",
        geoCoord:[Math.random() >.5?geo_55[0]+Math.random() *.3+0.05:geo_55[0]-Math.random() *.3+0.05,Math.random() >.5?geo_55[1]+Math.random()*0.2+0.021:geo_55[1]-Math.random()*0.2+0.021]
    })
}
var geo_56=new_list[55].geoCoord;
for(var i=0;i<54*b;i++){
    new_list.push({
        name:"江山",
        geoCoord:[Math.random() >.5?geo_56[0]+Math.random() *.2+0.05:geo_56[0]-Math.random() *.2+0.05,Math.random() >.5?geo_56[1]+Math.random()*0.3+0.021:geo_56[1]-Math.random()*0.3+0.021]
    })
}

var geo_57=new_list[56].geoCoord;
for(var i=0;i<40*b;i++){
    new_list.push({
        name:"开化",
        geoCoord:[Math.random() >.5?geo_57[0]+Math.random() *.2+0.05:geo_57[0]-Math.random() *.2+0.05,Math.random() >.5?geo_57[1]+Math.random()*0.3+0.021:geo_57[1]-Math.random()*0.3+0.021]
    })
}
var geo_58=new_list[57].geoCoord;
for(var i=0;i<40*b;i++){
    new_list.push({
        name:"龙游",
        geoCoord:[Math.random() >.5?geo_58[0]+Math.random() *.1+0.05:geo_58[0]-Math.random() *.1+0.05,Math.random() >.5?geo_58[1]+Math.random()*0.4+0.021:geo_58[1]-Math.random()*0.4+0.021]
    })
}
var geo_59=new_list[58].geoCoord;
for(var i=0;i<78*b;i++){
    new_list.push({
        name:"定海",
        geoCoord:[Math.random() >.5?geo_59[0]+Math.random() *.2+0.05:geo_59[0]-Math.random() *.1+0.05,Math.random() >.5?geo_59[1]+Math.random()*0.2+0.021:geo_59[1]-Math.random()*0.1+0.021]
    })
}
var geo_60=new_list[59].geoCoord;
for(var i=0;i<56*b;i++){
    new_list.push({
        name:"普陀",
        geoCoord:[Math.random() >.5?geo_60[0]+Math.random() *.2+0.05:geo_60[0]-Math.random() *.2+0.05,Math.random() >.5?geo_60[1]+Math.random()*0.05+0.021:geo_60[1]-Math.random()*0.1+0.021]
    })
}
var geo_61=new_list[60].geoCoord;
for(var i=0;i<22*b;i++){
    new_list.push({
        name:"岱山",
        geoCoord:[Math.random() >.5?geo_61[0]+Math.random() *.1+0.05:geo_61[0]-Math.random() *.1+0.05,Math.random() >.5?geo_61[1]+Math.random()*0.1+0.021:geo_61[1]-Math.random()*0.1+0.021]
    })
}
var geo_62=new_list[61].geoCoord;
for(var i=0;i<14*b;i++){
    new_list.push({
        name:"嵊泗",
        geoCoord:[Math.random() >.5?geo_62[0]+Math.random() *.1+0.05:geo_62[0]-Math.random() *.1+0.05,Math.random() >.5?geo_62[1]+Math.random()*0.1+0.021:geo_62[1]-Math.random()*0.1+0.021]
    })
}
var geo_63=new_list[62].geoCoord;
for(var i=0;i<92*b;i++){
    new_list.push({
        name:"丽水",
        geoCoord:[Math.random() >.5?geo_63[0]+Math.random() *.2+0.05:geo_63[0]-Math.random() *.2+0.05,Math.random() >.5?geo_63[1]+Math.random()*0.2+0.021:geo_63[1]-Math.random()*0.2+0.021]
    })
}
var geo_64=new_list[63].geoCoord;
for(var i=0;i<36*b;i++){
    new_list.push({
        name:"龙泉",
        geoCoord:[Math.random() >.5?geo_64[0]+Math.random() *.35+0.05:geo_64[0]-Math.random() *.35+0.05,Math.random() >.5?geo_64[1]+Math.random()*0.25+0.021:geo_64[1]-Math.random()*0.25+0.021]
    })
}
var geo_65=new_list[64].geoCoord;
for(var i=0;i<62*b;i++){
    new_list.push({
        name:"青田",
        geoCoord:[Math.random() >.5?geo_65[0]+Math.random() *.35+0.05:geo_65[0]-Math.random() *.35+0.05,Math.random() >.5?geo_65[1]+Math.random()*0.25+0.021:geo_65[1]-Math.random()*0.25+0.021]
    })
}
var geo_66=new_list[65].geoCoord;
for(var i=0;i<32*b;i++){
    new_list.push({
        name:"云和",
        geoCoord:[Math.random() >.5?geo_66[0]+Math.random() *.1+0.05:geo_66[0]-Math.random() *.1+0.05,Math.random() >.5?geo_66[1]+Math.random()*0.1+0.021:geo_66[1]-Math.random()*0.1+0.021]
    })
}
var geo_67=new_list[66].geoCoord;
for(var i=0;i<30*b;i++){
    new_list.push({
        name:"庆元",
        geoCoord:[Math.random() >.5?geo_67[0]+Math.random() *.4+0.05:geo_67[0]-Math.random() *.4+0.05,Math.random() >.5?geo_67[1]+Math.random()*0.2+0.021:geo_67[1]-Math.random()*0.2+0.021]
    })
}
var geo_68=new_list[67].geoCoord;
for(var i=0;i<58*b;i++){
    new_list.push({
        name:" 缙云",
        geoCoord:[Math.random() >.5?geo_68[0]+Math.random() *.3+0.05:geo_68[0]-Math.random() *.2+0.05,Math.random() >.5?geo_68[1]+Math.random()*0.15+0.021:geo_68[1]-Math.random()*0.2+0.021]
    })
}
var geo_69=new_list[68].geoCoord;
for(var i=0;i<26*b;i++){
    new_list.push({
        name:" 遂昌",
        geoCoord:[Math.random() >.5?geo_69[0]+Math.random() *.3+0.05:geo_69[0]-Math.random() *.2+0.05,Math.random() >.5?geo_69[1]+Math.random()*0.15+0.021:geo_69[1]-Math.random()*0.2+0.021]
    })
}
var geo_70=new_list[69].geoCoord;
for(var i=0;i<34*b;i++){
    new_list.push({
        name:" 松阳",
        geoCoord:[Math.random() >.5?geo_70[0]+Math.random() *.3+0.05:geo_70[0]-Math.random() *.2+0.05,Math.random() >.5?geo_70[1]+Math.random()*0.15+0.021:geo_70[1]-Math.random()*0.2+0.021]
    })
}
var geo_71=new_list[70].geoCoord;
for(var i=0;i<26*b;i++){
    new_list.push({
        name:"景宁",
        geoCoord:[Math.random() >.5?geo_71[0]+Math.random() *.3+0.05:geo_71[0]-Math.random() *.2+0.05,Math.random() >.5?geo_71[1]+Math.random()*0.15+0.021:geo_71[1]-Math.random()*0.2+0.021]
    })
}
var geo_72=new_list[71].geoCoord;
for(var i=0;i<20*b;i++){
    new_list.push({
        name:"台州",
        geoCoord:[Math.random() >.5?geo_72[0]+Math.random() *.4+0.05:geo_72[0]-Math.random() *.4+0.05,Math.random() >.5?geo_72[1]+Math.random()*0.15+0.021:geo_72[1]-Math.random()*0.15+0.021]
    })
}
for(var i=0;i<114*2;i++){
    new_list.push({
        name:"台州",
        geoCoord:[Math.random() >.5?geo_72[0]+Math.random() *.4+0.05:geo_72[0]-Math.random() *.4+0.05,Math.random() >.5?geo_72[1]+Math.random()*0.15+0.021:geo_72[1]-Math.random()*0.15+0.021]
    })
}
var geo_73=new_list[72].geoCoord;
for(var i=0;i<78*b;i++){
    new_list.push({
        name:"临海",
        geoCoord:[Math.random() >.5?geo_73[0]+Math.random() *.4+0.05:geo_73[0]-Math.random() *.4+0.05,Math.random() >.5?geo_73[1]+Math.random()*0.15+0.021:geo_73[1]-Math.random()*0.15+0.021]
    })
}
var geo_74=new_list[73].geoCoord;
for(var i=0;i<90*b;i++){   //190
    new_list.push({
        name:"温岭",
        geoCoord:[Math.random() >.5?geo_74[0]+Math.random() *.3+0.05:geo_74[0]-Math.random() *.2+0.05,Math.random() >.5?geo_74[1]+Math.random()*0.15+0.021:geo_74[1]-Math.random()*0.15+0.021]
    })
}
var geo_75=new_list[74].geoCoord;
for(var i=0;i<34*b;i++){
    new_list.push({
        name:"仙居",
        geoCoord:[Math.random() >.5?geo_75[0]+Math.random() *.4+0.05:geo_75[0]-Math.random() *.3+0.05,Math.random() >.5?geo_75[1]+Math.random()*0.2+0.021:geo_75[1]-Math.random()*0.15+0.021]
    })
}
var geo_76=new_list[75].geoCoord;
for(var i=0;i<76*b;i++){
    new_list.push({
        name:"天台",
        geoCoord:[Math.random() >.5?geo_76[0]+Math.random() *.4+0.05:geo_76[0]-Math.random() *.3+0.05,Math.random() >.5?geo_76[1]+Math.random()*0.2+0.021:geo_76[1]-Math.random()*0.15+0.021]
    })
}
var geo_77=new_list[76].geoCoord;
for(var i=0;i<40*b;i++){
    new_list.push({
        name:"三门",
        geoCoord:[Math.random() >.5?geo_77[0]+Math.random() *.3+0.05:geo_77[0]-Math.random() *.3+0.05,Math.random() >.5?geo_77[1]+Math.random()*0.1+0.021:geo_77[1]-Math.random()*0.1+0.021]
    })
}
var geo_78=new_list[77].geoCoord;
for(var i=0;i<9*b;i++){
    new_list.push({
        name:"玉环",
        geoCoord:[Math.random() >.5?geo_78[0]+Math.random() *.1+0.05:geo_78[0]-Math.random() *.1+0.05,Math.random() >.5?geo_78[1]+Math.random()*0.1+0.021:geo_78[1]-Math.random()*0.1+0.021]
    })
}

var geo_79=new_list[78].geoCoord;
for(var i=0;i<165*b;i++){
    new_list.push({
        name:"余姚",
        geoCoord:[Math.random() >.5?geo_79[0]+Math.random() *.6+0.05:geo_79[0]-Math.random() *.4+0.05,Math.random() >.5?geo_79[1]+Math.random()*0.3+0.021:geo_79[1]-Math.random()*0.2+0.021]
    })
}
var geo_80=new_list[79].geoCoord;
for(var i=0;i<165*b;i++){
    new_list.push({
        name:"余姚",
        geoCoord:[Math.random() >.5?geo_80[0]+Math.random() *.5+0.05:geo_80[0]-Math.random() *.2+0.05,Math.random() >.5?geo_80[1]+Math.random()*0.3+0.021:geo_80[1]-Math.random()*0.2+0.021]
    })
}
var geo_81=new_list[80].geoCoord;
for(var i=0;i<15*b;i++){
    new_list.push({
        name:"余姚",
        geoCoord:[Math.random() >.5?geo_81[0]+Math.random() *.4+0.05:geo_81[0]-Math.random() *.1+0.05,Math.random() >.5?geo_81[1]+Math.random()*0.1+0.021:geo_81[1]-Math.random()*0.1+0.021]
    })
}
var geo_82=new_list[81].geoCoord;
for(var i=0;i<30*b;i++){
    new_list.push({
        name:"余姚",
        geoCoord:[Math.random() >.5?geo_82[0]+Math.random() *.3+0.05:geo_82[0]-Math.random() *.2+0.05,Math.random() >.5?geo_82[1]+Math.random()*0.1+0.021:geo_82[1]-Math.random()*0.1+0.021]
    })
}
var geo_83=new_list[82].geoCoord;
for(var i=0;i<205*b;i++){
    new_list.push({
        name:"余姚",
        geoCoord:[Math.random() >.5?geo_83[0]+Math.random() *.6+0.05:geo_83[0]-Math.random() *.5+0.05,Math.random() >.5?geo_83[1]+Math.random()*0.2+0.021:geo_83[1]-Math.random()*0.2+0.021]
    })
}
var geo_84=new_list[83].geoCoord;
for(var i=0;i<55*b;i++){
    new_list.push({
        name:"余姚",
        geoCoord:[Math.random() >.5?geo_84[0]+Math.random() *.1+0.05:geo_84[0]-Math.random() *.2+0.05,Math.random() >.5?geo_84[1]+Math.random()*0.3+0.021:geo_84[1]-Math.random()*0.25+0.021]
    })
}
var geo_85=new_list[84].geoCoord;
for(var i=0;i<105*b;i++){
    new_list.push({
        name:"余姚",
        geoCoord:[Math.random() >.5?geo_85[0]+Math.random() *.2+0.05:geo_85[0]-Math.random() *.2+0.05,Math.random() >.5?geo_85[1]+Math.random()*0.2+0.021:geo_85[1]-Math.random()*0.2+0.021]
    })
}
var geo_86=new_list[85].geoCoord;
for(var i=0;i<50*b;i++){
    new_list.push({
        name:"玉环",
        geoCoord:[Math.random() >.5?geo_86[0]+Math.random() *.1+0.05:geo_86[0]-Math.random() *.1+0.05,Math.random() >.5?geo_86[1]+Math.random()*0.1+0.021:geo_86[1]-Math.random()*0.1+0.021]
    })
}
