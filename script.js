let captchachecked = false;
function beforeSubmit(event){
    if(captchachecked){
        let outputdate = document.querySelector(".outputdate");
        //for showing date into form
        let inputdate =  document.querySelector(".inputdate");
        console.log("inputdate.value",inputdate.value);
        //convert type into date suing Locale
        let dateFormate = new Date(inputdate.value).toLocaleDateString("en-IN");
        outputdate.value = dateFormate;
    }else{
        alert("please check the reCaptcha box");
        event.preventDefault();
    }
 }
    
function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
    }
} 
 setInterval(timestamp, 500); 
function captchasucess(){
      captchachecked = true;
    }