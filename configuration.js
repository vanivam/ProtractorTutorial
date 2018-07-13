var Jasmine2HtmlReporter=  require('protractor-jasmine2-html-reporter');
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['PractiseExcercise.js'],
  
  
  //Common Global Prerequisite for all scripts
  onPrepare:function(){
	  browser.driver.manage().window().maximize();
	  
	  //For generating reports with screenshots
	  jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
		  savePath: 'target/screenshots'
	  }))
  },
  suites: {
	  Smoke : ['ChainLocators.js','Dropdown.js'], //to run particular test cases
      Regression: 'Alerts.js'
  },
   jasmineNodeOpts: {
	   showColors : true, // Use colors in the command prompt
   }
};