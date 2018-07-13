describe('All elements demo', function(){
	
	function Calc(a,b,c){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		
		element.all(by.tagName("option")).each(function(item){
			
			item.getAttribute("value").then(function(values){
				console.log(values);
				
				if(values==c){
					item.click();
				}
			})
		})
		//tagname[attribute='value']
		element(by.id("gobutton")).click();
	}
	
	it("Open Angular website", function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		
		Calc(3,5,"MULTIPLICATION");
		Calc(3,5,"DIVISION");
		Calc(3,5,"ADDITION");
		Calc(3,5,"SUBTRACTION");
		//all elements usage
		
		element.all(by.repeater("result in memory")).each(function(item){
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})
		})
		
	})
	
	
	
})