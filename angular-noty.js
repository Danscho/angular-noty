(function(noty) {
    "use strict";

    angular.module("services.notifier", [])
        .factory("$notifier", function() {
            var defaultSettings = $.noty.defaults;
            defaultSettings.layout = "center";
            defaultSettings.killer = true;
            defaultSettings.modal = true;

            return {
                callNoty: callNoty,
                show: show,
                showAlert: showAlert,
                showSuccess: showSuccess,
                showError: showError,
                showYesNo: showYesNo,
                closeAll: closeAll,
                clearShowQueue: clearShowQueue
            };

            function callNoty(newSettings) {
                return noty(newSettings || {});
            }

            function show(message, type, additionalSettings) {
                callNoty(angular.extend({ text: message || defaultSettings.text, type: type }, additionalSettings));
            }

            function showAlert(message, additionalSettings) {
                callNoty(angular.extend({ text: message || defaultSettings.text, type: "alert" }, additionalSettings));
            }

            function showSuccess(message, additionalSettings) {
                callNoty(angular.extend({ text: message || defaultSettings.text, type: "success" }, additionalSettings));
            }

            function showError(message, additionalSettings) {
                callNoty(angular.extend({ text: message, type: "error" }, additionalSettings));
            }

            function showYesNo(message, positiveCallback, additionalSettings) {
                callNoty(angular.extend({
                    text: message,
                    buttons: [
                        {
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
                        }
                    ]
                }, additionalSettings));
            }

            function closeAll() {
                return $.noty.closeAll();
            }

            function clearShowQueue() {
                return $.noty.clearQueue();
            }
        });
})(noty);