function beforeSubmit(){
    let outputdate = document.querySelector(".outputdate");
    //for showing date into form
    let inputdate =  document.querySelector(".inputdate");
    console.log("inputdate.value",inputdate.value);
    //convert type into date suing Locale
    let dateFormate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = dateFormate;
}