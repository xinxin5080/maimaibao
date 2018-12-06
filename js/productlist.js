$(function(){

    // 从跳转过来的页面获取id
    // console.log(location.href)
    // 截取传递过来的参数
    var id = location.href.split('=')[1]
    

    goodsList()
    function goodsList(){
        $.ajax({
            type:"GET",
            url:"http://193.112.55.79:9090/api/getproductlist?categoryid="+id,
            data:"josn",
            success:function(res){
                console.log(res.result)
                var str = template("goodsList",{arr:res.result})
                $(".goodsData").html(str)
                // 渲染标题(坑)
                var str2 = template("goodsName",res.result[0])
                $(".title-l").html(str2)
            }
        })
        // $.ajax({
        //     type:"GET",
        //     url:"http://193.112.55.79:9090/api/getcategory?titleid=2",
        //     data:"josn",
        //     success:function(res){
        //         // console.log(res.result[0])
        //         var str2 = template("goodsName",res.result[0])
        //         $(".title-l").html(str2)

        //     }
        // })
    }
})