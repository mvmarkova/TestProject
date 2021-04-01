import { Config, browser } from "protractor"
var HtmlReporter = require('protractor-beautiful-reporter');

export let config: Config = {
    framework: "jasmine",
    
    baseUrl: 'https://www.saucedemo.com/',



    seleniumAdress: 'http://localhost:4444/wd/hub',


    allScriptsTimeout: 10000,  

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 100000,   

    },

  
    specs: [  
        './scr/spec/products.specs.js',
       './scr/spec/login.specs.js'

     
    ],
   // за chrome  
    capabilities: {
        browserName: 'chrome',
        platform: 'ANY',
        version: 'ANY',
        chromeOptions: {
            args: ["--start-maximized"],
            prefs: {
                download: {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory': process.cwd() + '\\download'
                }
            }
        }

    },
     //за firefox
 //capabilities: {
       //  browserName: 'firefox',
      //  "acceptInsecureCerts": true,
  // },
    //Protractor-beautifull-report
    // onPrepare: function () { 

    //     
    //     jasmine.getEnv().addReporter(new HtmlReporter({
    //         baseDirectory: 'report/screenshots'
    //         , preserveDirectory: false   // за да изтрива папката в началото, т.е. да не се добавят резултати към преден репорт
    //         , docName: 'TestReport.html'  // име на файл за репорт, по подразбиране е report.html
    //         , docTitle: 'Test Automation Report'

    //     }).getJasmine2Reporter());
    //     var reporter = new HtmlReporter({
    //         baseDirectory: 'report/screenshots'
    //     });

    //     afterEach(function () {
       
    //         browser.waitForAngularEnabled(true);

    //         browser.switchTo().defaultContent();

    //         browser.manage().deleteAllCookies();
    //         browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();').then(
    //             undefined,
    //             function (err) {
    //             });
    //         browser.manage().timeouts().implicitlyWait(5000); 
    //     })

    // }
    onPrepare: async ()=>{

  
        jasmine.getEnv().addReporter(new HtmlReporter({   // Add a screenshot reporter and store screenshots to /tmp/screenshots:
            baseDirectory: 'report/screenshots'
            , preserveDirectory: false   // за да изтрива папката в началото, т.е. да не се добавят резултати към преден репорт
            , docName: 'report.html'  // име на файл за репорт, по подразбиране е report.html
            , docTitle: 'Test Automation reports of TestProject'

        }).getJasmine2Reporter());
        var reporter = new HtmlReporter({
            baseDirectory: 'report/screenshots'
        });

        await browser.waitForAngularEnabled(false);
        await browser.manage().window().maximize();
        await browser.manage().timeouts().implicitlyWait(5000);

        afterEach(async function () {
          await  browser.executeScript('window.sessionStorage.clear();');
          await  browser.executeScript('window.localStorage.clear();');
            await browser.switchTo().defaultContent();

            await browser.manage().deleteAllCookies();


            await browser.manage().timeouts().implicitlyWait(5000); // I even rewrite implicit wait back to default value, in case i touched it in tests


        })
} 
}
