<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>Technology Radar</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <style type="text/css">
        [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
            display: none !important;
        }
    </style>

    <asset:stylesheet src="application.css"/>

    <asset:link rel="icon" href="favicon.ico" type="image/x-ico" />

    <script type="text/javascript">
        window.contextPath = "${request.contextPath}";
    </script>
</head>

<body ng-app="techradar" ng-controller="IndexController as indexCtrl">

    <div class="navbar navbar-default navbar-static-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" ng-click="navExpanded = !navExpanded">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/#">
                    <i class="fa grails-icon">
                        <asset:image src="grails-cupsonly-logo-white.svg"/>
                    </i> Technology Radar
                </a>
            </div>
            <div class="navbar-collapse collapse" aria-expanded="false" style="height: 0.8px;" uib-collapse="!navExpanded">
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown" uib-dropdown>
                        <a href="#" class="dropdown-toggle" uib-dropdown-toggle role="button" aria-haspopup="true" aria-expanded="false">
                            More Information
                        </a>
                        <ul class="dropdown-menu" uib-dropdown-menu>
                            <li><a target="_blank" href="https://grails.org/">Grails Framework</a></li>
                            <li><a target="_blank" href="http://views.grails.org/">Grails Views</a></li>
                            <li><a target="_blank" href="https://grails-plugins.github.io/grails-angular-scaffolding/latest/">Angular Scaffolding</a></li>
                            <li><a target="_blank" href="https://www.thoughtworks.com/radar">Thoughtworks Technology Radar</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="nav" role="navigation">
        <ul>
            <li><a class="list" ui-sref="radar.list" class="list">Radars</a></li>
            <li><a class="list" ui-sref="quadrant.list" class="list">Quadrants</a></li>
            <li><a class="list" ui-sref="item.list" class="list">Items</a></li>
        </ul>
    </div>
    <div ui-view></div>

    <div class="footer" role="contentinfo"></div>

    <div id="spinner" class="spinner" style="display:none;">
        <g:message code="spinner.alt" default="Loading&hellip;"/>
    </div>

    <asset:javascript src="/techradar/techradar.js" />
</body>
</html>
