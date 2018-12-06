$(function(){
    init();
    onlist();
    function init (){
        $.ajax({
            type:"GET",
            url:"http://193.112.55.79:9090/api/getcategorytitle",
            dataType:"json",
            success:function(res){
                console.log(res)
                var srt = template("crtl_title",{arr:res.result})
                $(".main").html(srt)
                listdata();
            }
        })
    };

    // 点击事件,使用事件委托.只可以两级.坑1
    function onlist (){
        $('.main').on('tap','.box_title',function(){
            console.log(122)
        })
    }
    function listdata(){
        $.ajax({
            type:"GET",
            url:"http://193.112.55.79:9090/api/getcategory?titleid=2",
            dataType:"json",
            success:function(res){
                console.log(res)
                var srt2 = template("crtl_list",{arr:res.result})
                $(".box_table").html(srt2)
            }
        })
    }
})