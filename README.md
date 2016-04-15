# Angular-themes-store
Built with Angular-Seed installed on  Web storm IDE____

integrated post API to buy the theme products from Paypal sand box 

{
  "name": "angular-seed",
  "private": true,
  "version": "0.0.0",
  "description": "A starter project for AngularJS",
  "repository": "https://github.com/angular/angular-seed",
  "license": "MIT",
  "devDependencies": {
    "bower": "^1.3.1",
    "http-server": "^0.6.1",
    "jasmine-core": "^2.3.4",
    "karma": "~0.12",
    "karma-chrome-launcher": "^0.1.12",
    "karma-firefox-launcher": "^0.1.6",
    "karma-jasmine": "^0.3.5",
    "karma-junit-reporter": "^0.2.2",
    "protractor": "^2.1.0",
    "shelljs": "^0.2.6"
  },
  "scripts": {
    "postinstall": "bower install",

    "prestart": "npm install",
    "start": "http-server -a localhost -p 8000 -c-1",

    "pretest": "npm install",
    "test": "karma start karma.conf.js",
    "test-single-run": "karma start karma.conf.js  --single-run",

    "preupdate-webdriver": "npm install",
    "update-webdriver": "webdriver-manager update",

    "preprotractor": "npm run update-webdriver",
    "protractor": "protractor e2e-tests/protractor.conf.js",

    "update-index-async": "node -e \"require('shelljs/global'); sed('-i', /\\/\\/@@NG_LOADER_START@@[\\s\\S]*\\/\\/@@NG_LOADER_END@@/, '//@@NG_LOADER_START@@\\n' + sed(/sourceMappingURL=angular-loader.min.js.map/,'sourceMappingURL=bower_components/angular-loader/angular-loader.min.js.map','app/bower_components/angular-loader/angular-loader.min.js') + '\\n//@@NG_LOADER_END@@', 'app/index-async.html');\""
  }
}
