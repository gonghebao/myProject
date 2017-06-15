/**
 * Created by ww on 2016/7/11.
 */
//浙江（市地图）
$.get('ownGeo/zhejiang.json', function(geoJson){
    echarts3.registerMap('浙江', geoJson);
    //console.log(sss = geoJson);
});
//浙江（县地图）
$.get('ownGeo/zjdetail.json', function(geoJson){
    echarts3.registerMap('浙江县', geoJson);
});
//杭州
$.get('ownGeo/hz.json', function(geoJson){
    echarts3.registerMap('杭州市', geoJson);
});
//湖州
$.get('ownGeo/huz.json', function(geoJson){
    echarts3.registerMap('湖州市', geoJson);
});
//金华
$.get('ownGeo/jh.json', function(geoJson){
    echarts3.registerMap('金华市', geoJson);
});
//嘉兴
$.get('ownGeo/jx.json', function(geoJson){
    echarts3.registerMap('嘉兴市', geoJson);
});
//丽水
$.get('ownGeo/ls.json', function(geoJson){
    echarts3.registerMap('丽水市', geoJson);
});
//宁波
$.get('ownGeo/nb.json', function(geoJson){
    echarts3.registerMap('宁波市', geoJson);
});
//衢州
$.get('ownGeo/qz.json', function(geoJson){
    echarts3.registerMap('衢州市', geoJson);
});
//绍兴
$.get('ownGeo/sx.json', function(geoJson){
    echarts3.registerMap('绍兴市', geoJson);
});
//台州
$.get('ownGeo/tz.json', function(geoJson){
    echarts3.registerMap('台州市', geoJson);
});
//温州
$.get('ownGeo/wz.json', function(geoJson){
    echarts3.registerMap('温州市', geoJson);
});
//舟山
$.get('ownGeo/zs.json', function(geoJson){
    echarts3.registerMap('舟山市', geoJson);
});