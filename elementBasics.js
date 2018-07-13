describe('Protractor Element Demo', function()
{

it('Locators', function()
{


browser.get('http://juliemr.github.io/protractor-demo/');
element(by.model("first")).sendKeys("3");
element(by.model("second")).sendKeys("5");
//tagname[attribute='value']
element(by.id("gobutton")).click();

//jasmine takes care of promise resolve
//for comparing values use expect(actual).tobe(expected)

expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");

element(by.css("h2[class='ng-binding']")).getText().then(function(text){
	
	console.log(text);
})





});
});