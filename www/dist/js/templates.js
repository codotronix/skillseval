angular.module('skillseval').run(['$templateCache', function($templateCache) {$templateCache.put('index.html','<!DOCTYPE html>\n<html data-ng-app="skillseval">\n    <head>\n    <!--\n        Customize the content security policy in the meta tag below as needed. Add \'unsafe-inline\' to default-src to enable inline JavaScript.\n        For details, see http://go.microsoft.com/fwlink/?LinkID=617521\n    -->\n        <meta http-equiv="Content-Security-Policy" content="default-src \'self\' data: http://barick.in https://sumanbarick.bitbucket.io gap: https://ssl.gstatic.com \'unsafe-eval\'; style-src \'self\' \'unsafe-inline\'; img-src *; media-src *">\n        \n        <meta name="format-detection" content="telephone=no">\n        <meta name="msapplication-tap-highlight" content="no">\n        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">\n        <meta name="msapplication-TileColor" content="#ffffff">\n        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">\n        <meta name="theme-color" content="#ffffff">\n\n        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">\n        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">\n        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">\n        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">\n        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">\n        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">\n        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">\n        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">\n        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">\n        <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png">\n        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">\n        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">\n        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">\n        <link rel="manifest" href="/favicon/manifest.json">        \n\n        <link rel="stylesheet" type="text/css" href="lib/css/bootstrap.min.css">\n        <link rel="stylesheet" type="text/css" href="lib/font-awesome-4.7.0/css/font-awesome.min.css">\n        <link rel="stylesheet" type="text/css" href="css/index.css">\n        <link rel="stylesheet" type="text/css" href="css/media.css">\n        <link rel="stylesheet" type="text/css" href="css/print.css">\n        <link rel="stylesheet" type="text/css" href="css/app.css">\n\n        <title>KNEXAA - Knowledge.Exam.Anytime.Anywhere</title>\n    </head>\n\n    <body data-ng-controller="mainController as mvm" \n    data-ng-class="{\n    \'app\': !!$root.isMobileApp, \n    \'web\': !$root.isMobileApp,\n    \'exam-background\': $root.pageID === \'EXAMENV\'}">\n\n        <div data-ng-include="\'partials/loading.html\'" class="no-print"></div>\n        <div data-ng-include="\'partials/header.html\'" class="no-print"></div>\n        <div class="container-fluid main-container">            \n            <div data-ng-view=""></div>\n        </div>\n\n        <!-- JAVASCRIPT SECTION -->\n        \n        <script type="text/javascript" src="cordova.js"></script>\n        <script type="text/javascript" src="scripts/platformOverrides.js"></script>\n        <script type="text/javascript" src="scripts/index.js"></script>\n        \n        <script type="text/javascript" src="lib/js/jquery-2.2.4.min.js"></script>\n        <script type="text/javascript" src="lib/js/angular.min.js"></script>\n        <script type="text/javascript" src="lib/js/angular-route.min.js"></script>\n        <script type="text/javascript" src="lib/js/ngStorage.min.js"></script>\n        <script type="text/javascript" src="lib/js/crypto-js.js"></script>\n\n        <script type="text/javascript" src="scripts/properties.js"></script>\n        \n        <!--<Deject>-->\n        <!-- Following Files are Merged and Minified -->        \n        <script type="text/javascript" src="scripts/app.js"></script>      \n        <script type="text/javascript" src="modules/common/secretService.js"></script>\n        <script type="text/javascript" src="modules/common/modalService.js"></script>\n        <script type="text/javascript" src="modules/common/routerService.js"></script>\n        <script type="text/javascript" src="modules/common/persistenceService.js"></script>\n        <script type="text/javascript" src="modules/common/urlService.js"></script>\n        <script type="text/javascript" src="modules/common/ajaxService.js"></script>\n        <script type="text/javascript" src="modules/exam/examService.js"></script>\n        <script type="text/javascript" src="modules/exam/examController.js"></script>\n        <script type="text/javascript" src="modules/exam/examResultController.js"></script>\n        <script type="text/javascript" src="modules/exam/certificateController.js"></script>\n        <script type="text/javascript" src="modules/exam/viewCertificateController.js"></script>\n        <script type="text/javascript" src="modules/common/mainController.js"></script>\n        <script type="text/javascript" src="modules/home/homeController.js"></script>\n        <script type="text/javascript" src="modules/library/libraryService.js"></script>\n        <script type="text/javascript" src="modules/library/libraryController.js"></script>\n        <script type="text/javascript" src="modules/topic/topicService.js"></script>\n        <script type="text/javascript" src="modules/topic/topicController.js"></script>\n        <script type="text/javascript" src="scripts/router.js"></script>\n        <!--</Deject>-->\n        \n        <!-- Minified JS Files -->\n        <!--MinJSGulp-->\n\n    </body>\n</html>\n');
$templateCache.put('dist/index.html','<!DOCTYPE html>\n<html data-ng-app="skillseval">\n    <head>\n    <!--\n        Customize the content security policy in the meta tag below as needed. Add \'unsafe-inline\' to default-src to enable inline JavaScript.\n        For details, see http://go.microsoft.com/fwlink/?LinkID=617521\n    -->\n        <meta http-equiv="Content-Security-Policy" content="default-src \'self\' data: http://barick.in https://sumanbarick.bitbucket.io gap: https://ssl.gstatic.com \'unsafe-eval\'; style-src \'self\' \'unsafe-inline\'; img-src *; media-src *">\n        \n        <meta name="format-detection" content="telephone=no">\n        <meta name="msapplication-tap-highlight" content="no">\n        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">\n        <meta name="msapplication-TileColor" content="#ffffff">\n        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">\n        <meta name="theme-color" content="#ffffff">\n\n        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">\n        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">\n        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">\n        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">\n        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">\n        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">\n        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">\n        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">\n        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">\n        <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png">\n        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">\n        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">\n        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">\n        <link rel="manifest" href="/favicon/manifest.json">        \n\n        <link rel="stylesheet" type="text/css" href="lib/css/bootstrap.min.css">\n        <link rel="stylesheet" type="text/css" href="lib/font-awesome-4.7.0/css/font-awesome.min.css">\n        <link rel="stylesheet" type="text/css" href="css/index.css">\n        <link rel="stylesheet" type="text/css" href="css/media.css">\n        <link rel="stylesheet" type="text/css" href="css/print.css">\n        <link rel="stylesheet" type="text/css" href="css/app.css">\n\n        <title>KNEXAA - Knowledge.Exam.Anytime.Anywhere</title>\n    </head>\n\n    <body data-ng-controller="mainController as mvm" \n    data-ng-class="{\n    \'app\': !!$root.isMobileApp, \n    \'web\': !$root.isMobileApp,\n    \'exam-background\': $root.pageID === \'EXAMENV\'}">\n\n        <div data-ng-include="\'partials/loading.html\'" class="no-print"></div>\n        <div data-ng-include="\'partials/header.html\'" class="no-print"></div>\n        <div class="container-fluid main-container">            \n            <div data-ng-view=""></div>\n        </div>\n\n        <!-- JAVASCRIPT SECTION -->\n        \n        <script type="text/javascript" src="cordova.js"></script>\n        <script type="text/javascript" src="scripts/platformOverrides.js"></script>\n        <script type="text/javascript" src="scripts/index.js"></script>\n        \n        <script type="text/javascript" src="lib/js/jquery-2.2.4.min.js"></script>\n        <script type="text/javascript" src="lib/js/angular.min.js"></script>\n        <script type="text/javascript" src="lib/js/angular-route.min.js"></script>\n        <script type="text/javascript" src="lib/js/ngStorage.min.js"></script>\n        <script type="text/javascript" src="lib/js/crypto-js.js"></script>\n\n        <script type="text/javascript" src="scripts/properties.js"></script>\n        \n        \n        \n        <!-- Minified JS Files -->\n        <!--MinJSGulp-->\n        <script type="text/javascript" src="dist/js/nexaa.js"></script>\n        <script type="text/javascript" src="dist/js/templates.js"></script>\n\n        <script type="text/javascript" src="js/nexaa.js"></script>\n        <script type="text/javascript" src="js/templates.js"></script>\n    \n\n    </body>\n</html>\n');
$templateCache.put('partials/header.html','<!-- <div class="header"> -->\n\t<!-- <label class="title">\n        <a href="#!/" class="anchor-no-decoration">\n            <img class="big-logo" src="images/knexaa-white.png" alt="KNEXAA Logo" />\n            <img class="small-logo" src="images/knexaa-logo-ball.png" alt="KNEXAA Logo" />\n        </a>\n\t</label> -->\n<div data-ng-if="$root.pageID !== \'EXAMENV\'">\n    <!-- The Thin version of the header -->\n    <div class="header thin-header">\n        <a href="#!/" class="anchor-no-decoration">\n            <img class="small-logo" src="images/knexaa-logo-ball.png" alt="KNEXAA Logo" />\n        </a>\n\n        <div class="header-border-below"></div>\n    </div>\n\n\n    <!-- The Thick version of the header -->\n    <div class="header thick-header">\n        <a href="#!/" class="anchor-no-decoration">\n            <img class="big-logo" src="images/knexaa-white.png" alt="KNEXAA Logo" />\n        </a>\n\n        <!-- <div class="header-border-below"></div> -->\n\n        <div class="user-profile">\n            <div class="profile-img-holder">\n                <img class="profile-img" src="images/default-profile-black.png" alt="profile picture"/>\n            </div>\n            <a class="show-profile" href="#!/settings">\n                <i class="fa fa-caret-down"></i>\n            </a>\n        </div>\n    </div>\n<div>\n\n\n    <!-- <i class="fa fa-share-alt-square share-btn" aria-hidden="true" data-ng-click="mvm.showSocialIcons = !mvm.showSocialIcons"></i> -->\n\n    <!-- <div class="social-icon-group" data-ng-class="!!mvm.showSocialIcons ? \'show-now\': \'\'">\n        <i class="fa fa-facebook-square"></i>\n        <i class="fa fa-twitter-square"></i>\n        <i class="fa fa-google-plus-square"></i>\n        <i class="fa fa-linkedin-square"></i>\n        <i class="fa fa-envelope"></i>       \n    </div> -->\n\n    \n<!-- </div> -->\n');
$templateCache.put('partials/loading.html','<div class="modal loading-modal" data-ng-show="mvm.isLoaderVisible()">\n    <div class="loading">\n        <img class="loading-img" src="images/knexaa-logo-ball.png"/>    \n        <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw loading-icon"></i>\n    </div>    \n</div>');
$templateCache.put('partials/subheader.html','<!-- <div data-ng-show="!!vm.libName" class="libSubHeader">\n    <i class="fa fa-long-arrow-left back-btn" data-ng-click="mvm.gotoPrevPage()" data-ng-hide="vm.libName === \'INDEX\'"></i>\n    <span data-ng-if="vm.libName === \'INDEX\'">LIBRARY</span>\n    <span data-ng-if="vm.libName !== \'INDEX\'">{{vm.libName}}</span>\n</div> -->');
$templateCache.put('modules/exam/certificateTemplate.html','<div id="certificate-body" class="col-xs-12 padding-0">\n    <img id="certificate-template-image" class="certificate-bg img-responsive" src="images/cert.png" alt="certificate-background-image"/>\n\n    <div class="decorative-col left col-xs-3 col-sm-2 col-md-1"></div>\n    <div class="cert-text col-xs-6 col-sm-8 col-md-10">\n    \t<div class="certificate-heading">Certificate of Completion</div>\n\t    <div class="cert-line-1">This certificate is awareded to</div>\n\t\t<div class="student-name">{{vm.nameOfUser}}</div>\n\t    <div class="cert-line-2">for the Successfull Completion of</div>\n\t    <div class="exam-name">{{vm.examName}}</div>\n\t    <div class="connector">on</div>\n\t\t<div class="cert-date">{{vm.examDate}}</div>\n\t\t<div class="connector">by</div>\n\t\t<div class="site-name">www.knexaa.bitbucket.org</div>\n\n\t\t<div class="cert-code">\n\t\t\tThis certificate can be verified using the follwoing certificate-code<br/>\n\t\t\t<span class="break-all-word">{{vm.certCode}}</span>\n\t\t</div>\n    </div>\n    <div class="decorative-col right col-xs-3 col-sm-2 col-md-1"></div>\n\n    \n</div>\n\n');
$templateCache.put('modules/exam/examResultTemplate.html','<div class="col-xs-12">\n\n    <!-- Exam Statistics Panel -->\n    <div class="col-xs-12 col-sm-6 col-md-6">\n        <div class="panel panel-primary exam-stats">\n            <div class="panel-heading collapse-header">\n                <b>Result</b>\n            </div>\n            <div class="panel-body collapse-body">\n                <div class="col-xs-8 col-sm-9 col-md-7">\n                    Total Questions: \n                </div>\n                <div class="col-xs-4 col-sm-3 col-md-5">\n                    {{vm.currentExam.result.totalQ}}\n                </div>\n\n                <div class="col-xs-8 col-sm-9 col-md-7">\n                    Questions Skipped: \n                </div>\n                <div class="col-xs-4 col-sm-3 col-md-5">\n                    {{vm.currentExam.result.skipped}}\n                </div>\n\n\n                <div class="col-xs-8 col-sm-9 col-md-7">\n                    Correct Answers: \n                </div>\n                <div class="col-xs-4 col-sm-3 col-md-5">\n                    {{vm.currentExam.result.correct}}\n                </div>\n\n                <div class="col-xs-8 col-sm-9 col-md-7">\n                    Incorrect Answers: \n                </div>\n                <div class="col-xs-4 col-sm-3 col-md-5">\n                    {{vm.wrongQAs.length}}\n                </div>\n\n                <div class="col-xs-8 col-sm-9 col-md-7">\n                    Score: \n                </div>\n                <div class="col-xs-4 col-sm-3 col-md-5">\n                    {{vm.percentScore}} %\n                </div>\n\n                <div class="col-xs-8 col-sm-9 col-md-7">\n                    Total Time: \n                </div>\n                <div class="col-xs-4 col-sm-3 col-md-5">\n                    {{vm.currentExam.totalTime || \'-\'}}\n                </div>\n\n                <div class="col-xs-8 col-sm-9 col-md-7 no-border">\n                    Time Taken: \n                </div>\n                <div class="col-xs-4 col-sm-3 col-md-5 no-border">\n                    {{vm.currentExam.timeTaken || \'-\'}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- ******************************************************* -->\n\n\n    <!-- Marksheet and Certificate Link Panel -->\n    <div class="col-xs-12 col-sm-6 col-md-6">\n        <div class="panel panel-primary">\n            <div class="panel-heading collapse-header">\n                <b>Marksheet and Certificate</b>\n            </div>\n\n            <!-- If percentage > 70, then only marksheet and certificate -->\n            <div class="panel-body collapse-body" data-ng-if="vm.percentScore >= 70">\n\n                <div data-ng-show="!vm.certificateLink">\n                    <div class="col-xs-12">\n                        <label>Please enter your name in the box below and then click on "Generate Link" to get the link to your marksheet and certificate</label>\n                    </div>\n                    <div class="col-xs-12 margin-top-15">\n                        <input type="text" data-ng-model="vm.nameOfUser" class="form-control" placeholder="Enter your name" />\n                        <button type="button" class="btn btn-primary col-xs-12 margin-top-15" data-ng-disable="!vm.nameOfUser.trim()" data-ng-click="vm.generateCertificateLink()">Generate Link</button>\n                    </div>\n                </div>\n                \n                <div data-ng-show="!!vm.certificateLink">\n                    <div class="col-xs-12">\n                        <p>\n                        You can enter this code anytime in our "Marksheets and Certificates" section to view your marksheet and certificate for this exam.\n                        </p>\n                        <p>\n                        Please copy this code and keep it somewhere safe. This codes are currently not saved on our server. So, if you lose it, it will be lost forever and you will not be able to access your marksheet or certificate for this exam.\n                        </p>\n                    </div>\n                    <div class="col-xs-12">\n                        <input type="text" class="form-control" data-ng-model="vm.certificateLink"/>\n                    </div>\n                    <div class="col-xs-12">\n                        <a href="javascript:void(0);" data-ng-click="vm.showCertificate()">Show certificate &gt;</a>\n                    </div>\n                </div>\n            </div>\n\n            <!-- No Certificate for score less than 70 -->\n            <div class="panel-body collapse-body" data-ng-if="vm.percentScore < 70">\n                <label>Sorry, you need to score atleast 70% to generate Result and Marksheet</label>\n\n                <div>\n                    <a href="#!/" class="btn btn-primary btn-lg pull-right">Back</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- ******************************************************* -->\n\n\n\n    <!-- The Detailed QA -->\n    <div class="heading col-xs-12 col-sm-12 col-md-12" data-ng-if="vm.wrongQAs.length > 0">What went wrong ?</div>\n\n    <div class="col-xs-12">\n        <div class="qa-panel panel panel-primary" data-ng-repeat="qa in vm.wrongQAs">\n            <div class="panel-heading collapse-header">\n                <div class="panel-title">\n                    <pre><b>{{"[Q " + ($index+1) + "] "}}</b>{{qa.q.trim()}}</pre>\n                </div>\n            </div>\n            <div class="panel-body options-container normal-font collapse-body">\n                <label>You chose : </label>\n                <label>{{qa.incorrectAns}}</label>\n                <br/>\n                <label>Correct Answer : </label>\n                <label>{{qa.correctAns}}</label>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class="col-xs-12 margin-15">\n    <a href="#!/" class="btn btn-primary btn-lg">Back</a>\n</div>\n');
$templateCache.put('modules/exam/examTemplate.html','<div id="rules-dialog" data-ng-show="!vm.rulesDialogHidden">\n    <div class="rules-dialog-inner-container">\n        <div class="title">Exam Rules</div>\n        <ul>\n            <li>\n                To leave the exam anytime click on either "Submit" or "Abort" button located at the bottom of the page\n            </li>\n            <li>\n                This is a free tool for self evaluation. So, cheat if you want,  no one cares.\n            </li>\n        </ul>\n\n        <div class="footer">\n            <span>Good Luck!</span>\n            <br/>\n            <button type="button" class="btn btn-primary btn-lg start-exam-btn" data-ng-click="vm.startExam()">Start Exam</button>\n        </div>\n\n        \n    </div>\n</div>\n\n<div id="examenvbody" data-ng-show="!!vm.rulesDialogHidden">\n    <div id="examenvheader">\n        <img class="small-logo" src="images/knexaa-logo-ball.png" alt="KNEXAA Logo" />\n        <div class="timer font-electrolize" data-ng-class="{\'last5minalert\': vm.last5minLeft}">\n            {{vm.displayTime}}\n        </div>\n    </div>\n    <!-- Wrapper to contain ALL THE QUESTIONS -->\n    <div id="q-wrapper">    \n        <div class="qa-panel panel panel-default" data-ng-repeat="qa in vm.questions">\n            <div class="panel-heading">\n                <div class="panel-title">\n                    <pre><b>{{"[Q " + ($index+1) + "] "}}</b>{{qa.q.trim()}}</pre>\n                </div>\n            </div>\n            <div class="panel-body options-container" data-ng-init="qa.chosenAns=\'Z\'">\n                <div data-ng-repeat="op in qa.options">\n                    <pre><input type="radio" value="{{vm.optionIndices[$index]}}" data-ng-model="qa.chosenAns"> {{vm.optionIndices[$index] + ". " + op.trim()}}</pre>                \n                </div>\n                <div>\n                    <pre><input type="radio" value="Z" data-ng-model="qa.chosenAns"> Z. I don\'t want to answer</pre> \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="button-footer">\n        <button type="button" class="btn btn-danger btn-lg" data-ng-click="vm.abortExam()"><i class="fa fa-angle-double-left"></i> Abort</button>\n\n        <button type="button" class="btn btn-success btn-lg pull-right" data-ng-click="vm.submitExam()">Submit <i class="fa fa-angle-double-right"></i></button>               \n    </div>\n    \n</div>');
$templateCache.put('modules/exam/viewCertificateTemplate.html','<div class="col-xs-12 margin-top-15">\n    <input type="text" data-ng-model="$root.tempCertCode" class="form-control" placeholder="Enter Certificate / Marksheet Code" />\n    <button type="button" class="btn btn-primary col-xs-12 margin-top-15" data-ng-click="vm.showCertificate()" data-ng-disable="!$root.tempCertCode">View Certificate</button>\n</div>');
$templateCache.put('modules/home/homeTemplate.html','<div data-ng-repeat="menu in vm.menuItems" class="col-xs-12 col-sm-6 col-md-3 icon-card">\n    <a class="inner-container" href="{{menu.url}}">\n        <div class="icon-container">\n            <span class="icon {{menu.icon}}"></span>\n        </div>\n        <div class="title font-rye">\n            <span>{{menu.name}}</span>\n        </div>\n        <p class="desc">\n            {{menu.desc}}\n        </p>\n    </a>\n</div>');
$templateCache.put('modules/library/libraryTemplate.html','<div id="libraryTemplate">\n    <!-- <div data-ng-include="\'subheader.html\'"></div> -->\n\n    <div class="heading">Select a subject</div>\n\n    <div class="">\n    \t<div data-ng-repeat="item in vm.library.list" class="lib-card col-xs-12 col-sm-4 col-md-3">\n    \t\t<div class="inner-container" data-ng-click="vm.goTo(item)">\n    \t\t\t<label class="title font-aldrich" data-ng-bind="item.name"></label>\n    \t\t\t<!-- <a href="#!/library/{{item.name.toLowerCase()}}" class="button font-electrolize" data-ng-if="item.subjectType === \'library\'">Show Subjects</a>\n    \t\t\t<a href="#!/library/{{item.libName.toLowerCase()}}/{{item.name.toLowerCase()}}" class="button font-electrolize" data-ng-if="item.subjectType === \'topic\'">Show Exams</a> -->\n    \t\t</div>\n    \t</div>\n    </div>\n</div>');
$templateCache.put('modules/settings/settingsTemplate.html','<div id="settings-page">\n    \n    <!-- Left Panel -->\n    <div class="left-menu-panel">\n        Menu\n    </div>\n    <!-- ***** END OF Left Panel ***** -->\n\n\n    <!-- Middle Region -->\n    <div class="panel-view-area">\n        \n        <div class="user-profile-settings">\n            <div class="col-xs-12 col-sm-6 col-md-6 margin-top-15">\n                <label class="col-xs-12 col-sm-12 col-md-4">\n                    First name\n                </label>\n                <div class="col-xs-12 col-sm-12 col-md-8 padding-left-20">\n                    <input type="text" placeholder="First name" class="form-control" />\n                </div>\n            </div>\n\n            <div class="col-xs-12 col-sm-6 col-md-6 margin-top-15">\n                <label class="col-xs-12 col-sm-12 col-md-4">\n                    Last name\n                </label>\n                <div class="col-xs-12 col-sm-12 col-md-8">\n                    <input type="text" placeholder="Last name" class="form-control" />\n                </div>\n            </div>\n\n            <div class="col-xs-12 col-sm-12 col-md-12 margin-top-15">\n                <label class="col-xs-12 col-sm-12 col-md-2">\n                    Image URL\n                </label>\n                <div class="col-xs-12 col-sm-12 col-md-12">\n                    <input type="text" placeholder="Image URL" class="form-control" />\n                </div>\n            </div>\n\n\n            <div class="col-xs-12 col-sm-12 col-md-12 margin-top-15">\n                <div class="col-xs-12 col-sm-12 col-md-12">\n                    <img src="" class="img-url-result-img" />\n                    <span>\n                    Create an image in Imgur or anywhere you like, copy the image url by right clicking on the image and paste it the Image URL box above.\n                    </span>\n                </div>\n            </div>\n\n            \n        </div>\n\n\n\n        <div class="clearfix"></div>\n    </div>\n    <!-- ****** END OF Middle Region ******* -->\n\n\n    \n</div>\n\n    ');
$templateCache.put('modules/topic/topicTemplate.html','<div id="topicTemplate">\n    <!-- <div data-ng-include="\'subheader.html\'"></div> -->\n\n    <div class="heading" data-ng-if="vm.topics.mighty">Select a Quick Exam</div>\n\n    <div class="mighty-quick-exams" data-ng-if="vm.topics.mighty">\n        <div data-ng-repeat="qe in vm.quickExams" class="lib-card col-xs-12 col-sm-4 col-md-2">\n            <div class="inner-container" data-ng-click="vm.startExam(qe)">\n                <label class="title font-aldrich" data-ng-bind="qe.subType"></label>\n                <div class="noOfQstn-info exam-info">\n                    <span><b>Questions: </b></span>\n                    <span>{{qe.noOfQuestions}}</span>\n                </div>\n                <div class="time-info exam-info">\n                    <span><b>Time: </b></span>\n                    <span>{{qe.totalTime}}</span>\n                </div>\n\n                <!-- <a href="javascript:void(0)" data-ng-click="vm.startExam(qe)" class="button font-electrolize">START</a> -->\n            </div>      \n        </div>\n        <div class="lib-card col-xs-12 col-sm-4 col-md-2">\n            <div class="inner-container" data-ng-click="vm.startCustomExam()">\n                <label class="title font-aldrich">Custom</label>\n                <div class="noOfQstn-info exam-info">\n                    <span><b>Questions: </b></span>\n                    <span><u>Edit</u></span>\n                </div>\n                <div class="time-info exam-info">\n                    <span><b>Time: </b></span>\n                    <span><u>Edit</u></span>\n                </div>\n                <!-- <a href="javascript:void(0)" data-ng-click="vm.startCustomExam()" class="button font-electrolize">START</a> -->\n            </div>      \n        </div>\n    </div>\n</div>');}]);