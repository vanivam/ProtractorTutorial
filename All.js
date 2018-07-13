describe('All elements demo', function(){
	
	function Add(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		//tagname[attribute='value']
		element(by.id("gobutton")).click();
	}
	
	it("Open Angular website", function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		Add(3,5);
		Add(4,6);
		Add(5,7);
		Add(6,8);
		Add(7,9);
		
		//all elements usage
		
		element.all(by.repeater("result in memory")).count().then(function(text){
			console.log(text);
		})
		
		
		element.all(by.repeater("result in memory")).each(function(item) {
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})
		})
		
	})
	
	
	
})