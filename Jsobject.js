
function  homePage()
{

this.tagname=element.all(by.tagName("app-card"));	
//this.block=element(by.css("h4 a"));
this.name=element(by.name("name"));

this.button=element(By.css("button[class*='btn-info']"));
this.email=element(by.css("input[name='email']"));
this.password=element(by.id("exampleInputPassword1"));
this.checkbox=element(by.css("input[type='checkbox']"));
this.gender=element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female"));
this.radioOptions=element.all(by.name("inlineRadioOptions"));
this.submit=element(by.buttonText("Submit"));
this.success=element(by.css("div[class*='success']"));
this.alert=element(by.css("[class='alert alert-danger']"));
this.shop=element(by.linkText("Shop"));
this.checkout=element(by.partialLinkText("Checkout"));





this.getURL=function()
{

	browser.get("https://qaclickacademy.github.io/protocommerce/");
};

};

  module.exports= new homePage();
 /* a.getModel();
  console.log(a.engine);*/



//JsobjectDemo2.js


     var obj=  require("./Jsobject.js");
     
     //obj.getModel();
     //console.log(obj.search);