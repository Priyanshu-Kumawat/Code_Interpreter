// Output

function run() {
    
  
  let output = document.querySelector(".op");
  let  HtmlCode = document.querySelector("#html-ip").value;
  let  CssCode = "<style>" + document.querySelector("#css-ip").value + "</style>";
  let  JsCode = document.querySelector("#js-ip").value; 
  
  output.contentDocument.body.innerHTML = HtmlCode + CssCode;
  output.contentWindow.eval(JsCode);

}

function css() {

    css_x = document.querySelector(".op");

    let cssCode = "<style>" + document.querySelector("#css-ip").value +"</style>";
   
}


function chk() {
    temp = document.querySelector("#click");
    sec = document.querySelector(".section");

    if (temp.checked == true) {
           sec.style.display="none";
    }
    else
    {
        sec.style.display="flex";
    }
}




document.querySelector(button).addEventL