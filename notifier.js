(function(noty) {
    "use strict";

    angular.module("notifier", [])
        .provider("$notifier", function() {
            this.defaultSettings = $.noty.defaults;
            this.overrideSettings = function(overriddenSettings) {
                this.defaultSettings = angular.extend(this.defaultSettings, overriddenSettings);
            };

            this.$get = function() {
                var vm = this;

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

            return this;

            function callNoty(newSettings) {
                return noty(newSettings || {});
            }

            function show(message, type, additionalSettings) {
                callNoty(angular.extend({
                    text: message || vm.defaultSettings.text,
                    type: type
                }, additionalSettings));
            }

            function showAlert(message, additionalSettings) {
                callNoty(angular.extend({
                    text: message || vm.defaultSettings.text,
                    type: "alert"
                }, additionalSettings));
            }

            function showSuccess(message, additionalSettings) {
                callNoty(angular.extend({
                    text: message || vm.defaultSettings.text,
                    type: "success"
                }, additionalSettings));
            }

            function showError(message, additionalSettings) {
                callNoty(angular.extend({
                    text: message,
                    type: "error"
                }, additionalSettings));
            }

            function showYesNo(message, positiveCallback, additionalSettings) {
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