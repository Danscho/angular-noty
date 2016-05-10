(function(noty) {
    "use strict";

    angular.module("notifier", [])
        .provider("$notifier", function() {
            var provider = {
                settings: $.noty.defaults,
                configureSettings: function(configSettings) {
                    provider.settings = angular.extend($.noty.defaults, configSettings);
                },
                $get: function() {
                    return {
                        show: show,
                        showAlert: showAlert,
                        showSuccess: showSuccess,
                        showError: showError,
                        showYesNo: showYesNo,
                        closeAll: closeAll,
                        clearShowQueue: clearShowQueue
                    };
                }
            };
            return provider;

            function callNoty(newSettings) {
                return noty(angular.extend({}, provider.settings, newSettings) || {});
            }

            function show(message, type, overrideSettings) {
                callNoty(angular.extend({
                    text: message || provider.settings.text,
                    type: type
                }, overrideSettings));
            }

            function showAlert(message, overrideSettings) {
                callNoty(angular.extend({
                    text: message || provider.settings.text,
                    type: "alert"
                }, overrideSettings));
            }

            function showSuccess(message, overrideSettings) {
                callNoty(angular.extend({
                    text: message || provider.settings.text,
                    type: "success"
                }, overrideSettings));
            }

            function showError(message, overrideSettings) {
                callNoty(angular.extend({
                    text: message,
                    type: "error"
                }, overrideSettings));
            }

            function showYesNo(message, positiveCallback, overrideSettings) {
                callNoty(angular.extend({
                    text: message,
                    buttons: [{
                        addClass: "btn btn-primary",
                        text: "Yes",
                        onClick: function($noty) {
                            positiveCallback();
                            $noty.close();
                        }
                    }, {
                        addClass: "btn btn-danger",
                        text: "No",
                        onClick: function($noty) {
                            $noty.close();
                        }
                    }]
                }, overrideSettings));
            }

            function closeAll() {
                return $.noty.closeAll();
            }

            function clearShowQueue() {
                return $.noty.clearQueue();
            }
        });
})(noty);