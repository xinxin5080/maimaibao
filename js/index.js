$(function(){
    init();
    goods();
    // 请求图标数据
    function init(){
        $.ajax({
            type:"GET",
            url:"http://193.112.55.79:9090/api/getindexmenu",
            dataType:"json",
            success:function(res){
                // console.log(res)
                var str = template("iocn_img",{arr:res.result});
                $(".ul_list").html(str);
            }
        })
    }

    function goods(){
        $.ajax({
            type:"GET",
            url:'http://193.112.55.79:9090/api/getmoneyctrl',
            dataType:"json",
            success:function(res){
                console.log(res)
                var str2 = template("goods_tap",{arr:res.result})
                $(".ul_goods").html(str2)
            }
        })
    }
})