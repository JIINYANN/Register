//頁面加載
$(function(){
  //註冊綁定單擊事件 
  $("#btn").click(function(){
  //1.驗證用戶名 :  必須由字母、數字下滑線組成，並且長度為5-12位
    // 獲取用戶名輸入框里的內容
    let $usernameText = $("#username").val();
    //創建正規表達式對象
    let usernamePatt = /^\w{5,12}$/;
    //使用test方法驗證--僅判斷不符合條件的時候提示用戶結果
    if($usernameText == ""){
      $("#error-msg").text("username cannot be empty!").addClass("error-msg");
       return false;
    }else if(!usernamePatt.test($usernameText)){
    //提示用戶結果
    $("#error-msg").text("please enter a valid username!").addClass("error-msg");
    return false;
    }
    //2.信件認證 : xxxxx@xxx.com
    //獲取郵箱的內容
    let $emailText = $("#email").val();
    //創建正則表達式對象
    let emailPatt = /^\w{2,}@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
    //使用test方法驗證是否合法
    if($emailText == ""){
      $("#error-msg").text("Email cannot be empty!").addClass("error-msg");
       return false;
    }else if(!emailPatt.test($emailText)){
      //提示用戶
      $("#error-msg").text("Email is not a valid email address!").addClass("error-msg");
     return false;
    }
    //3.驗證密碼 : 必須由字母、數字下滑線組成，並且長度為5-12位
    //獲取用密碼輸入框里的內容
     let $passwordText = $("#password").val();
     //創建正規表達式對象
     let passwordPatt = /^\w{5,12}$/;
    //使用test方法驗證--僅判斷不符合條件的時候提示用戶結果
    if($passwordText == ""){
      $("#error-msg").text("password cannot be empty!").addClass("error-msg");
       return false;
    }else if(!passwordPatt.test($passwordText)){
     //提示用戶結果
      $("#error-msg").text("please enter a valid password!").addClass("error-msg");
      return false;
    }

    //4.驗證確認密碼 :  和密碼相同
    //獲取確認密碼內容
    let $confirmpasswordText = $("#confirm-password").val();
    //與密碼相比較
    if($confirmpasswordText == ""){
      $("#error-msg").text("confirm-password cannot be empty!").addClass("error-msg");
       return false;
    }else if($passwordText != $confirmpasswordText){
     // 提示用戶結果
     $("#error-msg").text("please make sure your passwords match!").addClass("error-msg");
     return false;
    }

    //只要用戶名合法，提示訊息就要刪掉，不要再顯示
    $("#error-msg").text("").removeClass("error-msg");
  })
})
(function($){
})($)
//email is not a valid email address