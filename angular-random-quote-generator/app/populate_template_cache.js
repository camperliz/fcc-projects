angular.module('randomQuoteTemplates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("app/quote.tpl.html",
    "<div class=quote-wrapper><h2 class=quote>{{ quote.quote }}</h2><p class=author>{{ quote.author }} <em class=book ng-if=quote.book>, {{ quote.book }}</em></p><p class=buttons-wrapper><a ng-click=changeQuote() data-toggle=tooltip data-placement=top title=\"Generate New Quote\"><span class=\"fa fa-refresh\"></span></a> <a href=https://twitter.com/share class=twitter-share-button count data-text=\"{{ quote.quote }}~{{ quote.author }}\">Tweet</a></p></div>");
}]);
