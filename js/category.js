$(function(){
    onlist();
    init();
    // 点击事件
    function onlist(){
        $('.onlist').onclick()
    };
    function init (){
        $.ajax({
            type:"GET",
            url:"http://193.112.55.79:9090/api/getcategorytitle",
            dataType:"json",
            success:function(res){
                console.log(res)
                var srt = template("crtl_title",{arr:res.result})
                $(".mian").html(srt)
                // var goodid = res.
                // var titleId = res.result[0]._id
                // console.log(titleId)
                listdata();
            }
        })
    };
    function listdata(){
        $.ajax({
            type:"GET",
            url:"http://193.112.55.79:9090/api/getcategory?titleid=2",
            dataType:"json",
            success:function(res){
                console.log(res)
                var srt2 = template("crtl_list",{arr:res.result})
                $(".main-z-z").html(srt2)
            }
        })
    }
})