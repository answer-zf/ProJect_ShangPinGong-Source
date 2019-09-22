//底部悬浮的验证

function submitPhone(){
    var name = $("#bottom_float_name").val();
    if(name ==""){
        alert('您的姓名不能为空噢');
        return false;
    }
    var mobile = $("#bottom_float_phone").val();
    if(mobile ==""){
        alert('您的手机号不能留空噢');
        return false;
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/;
    if(!myreg.test(mobile)){
        alert('请填写有效手机号');
        return false;
    }
    var url = "/api.php?c=post&f=save&id=book";
    $.ajax({ url: url,
        contentType: "application/x-www-form-urlencoded", dataType:'json',
        async:false,
        data: {title:"name", fullname:name, mobile:mobile, content:""},
        type: 'POST', beforeSend: function() { },
        error: function(request) {},
        success: function(data) {
            if(data.status){
                alert("您的信息提交成功，稍后我们会尽快与您联系");
            }
        }
    });
}
