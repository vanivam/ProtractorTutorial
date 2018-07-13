describe('Protractor baby steps', function(){
	
	it("Open Angular website", function(){
		browser.get('https://angularjs.org');
		
	})
	
	it('Close browser', function(){
		
	})
	
})

describe('First Protractor Code', function()
{

it('Code start', function()
{

browser.get("https://angularjs.org");
browser.get('http://juliemr.github.io/protractor-demo/').then(function()
{
	console.log("Last Step");

});




});
});

/*describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});*/