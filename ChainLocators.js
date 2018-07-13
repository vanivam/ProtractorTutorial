describe('Chain Locator demo', function(){
	
	it("Open Angular website", function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("5");
		//tagname[attribute='value']
		element(by.id("gobutton")).click();
		
		//repeater, chain locator and Css for identical tags
		
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
			console.log(text);
		})
				
		
		
	})
	
	
	
})