
describe('Practise test',function() {  
	var obj=  require("./Jsobject.js");
	var data=  require("./datadrive.js");
	var using=  require('jasmine-data-provider');
	
	function selectItems(product)
	{
	//take 4 cards into list
	//go through each index in the list - and get the title= if title =desired title then in that index i will select add button
	element.all(by.tagName("app-card")).each(function(item)
	{

	item.element(by.css("h4 a")).getText().then(function(text)
	{
	if(text=="Samsung Note 8")
	{
	item.element(By.css("button[class*='btn-info']")).click();
	}
	}) })
	}
	
	//SetUp
	beforeEach(function(){
		obj.getURL();
	})
	
	//Using DataProvider
	using(data.Datadriven, function(data,description){
	
it('Testing HomePage functionality '+ description,function() {

	



obj.name.sendKeys(data.name);
obj.email.sendKeys(data.email);
obj.password.sendKeys(data.password);
obj.checkbox.click();
obj.gender.click();
obj.radioOptions.first().click();
obj.submit.click().then(function()
{
obj.success.getText().then(function(text)
{
console.log(text);
})
})
obj.name.clear();
obj.name.sendKeys("M").then(function()
{
obj.alert.getText().then(function(text)
{
console.log(text);
})
})
obj.shop.click();
selectItems("Samsung Note 8");
selectItems("iphone X");

obj.checkout.getText().then(function(text)
{
var res=text.split("(");
var x=Number(res[1].trim().charAt(0));


var y=x+1;
console.log(y);
//expect(res[1].trim().charAt(0)).toBe(y);
})

})

})

})

//TearDown
afterEach(function(){
	console.log("Test is complated");
})