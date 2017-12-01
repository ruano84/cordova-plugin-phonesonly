module.exports = function(context) {
    var fs = require('fs');
    var xcode = context.requireCordovaModule('xcode');
    var util = context.requireCordovaModule('cordova-lib/src/cordova/util');
    var ConfigParser = context.requireCordovaModule('cordova-common').ConfigParser;
    var projectName = new ConfigParser(util.projectConfig(util.isCordova())).name();
    var projectPath = './platforms/ios/' + projectName + '.xcodeproj/project.pbxproj';
    var myProj = xcode.project(projectPath);
    myProj.parseSync();
    myProj.updateBuildProperty('TARGETED_DEVICE_FAMILY', '1'); //TARGETED_DEVICE_FAMILY
    fs.writeFileSync(projectPath, myProj.writeSync());
    console.log('✔ TARGETED_DEVICE_FAMILY just iphone');
};