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
                
            }
        })
    };

    // 点击事件,使用事件委托.只可以两级.坑1
    function onlist (){
        $('.main').on('tap','.box',function(){
            // 获取当前html的index是1的子项(.box_table)
            var arr = $(this).children()[1]
            // 获取上个请求保存this(.box_title)的id
            var Id = event.target.id
            // 将id拼接在get请求中 
          $.get("http://193.112.55.79:9090/api/getcategory","titleid="+Id,function(res){
            console.log(res)
            var srt2 = template("crtl_list",{arr:res.result})
            $(".box_table").html(srt2)
            // 将其他的隐藏起来
            $(arr).toggle()
          },"json")
        })
    }
})
