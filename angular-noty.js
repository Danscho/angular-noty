(function (angular, $) {
	return angular.module('notyModule', []).provider('noty', function () {
		var settings = $.noty.defaults;

		return {
			settings: settings,
			$get: function () {
				var callNoty = function (newSettings) {
					return noty(newSettings || {});
				};

				return {
					show: function (message, type, additionalSettings) {
						callNoty(angular.extend({text: message || settings.text, type: type || settings.type}, additionalSettings));
					},

					showAlert: function (message, additionalSettings) {
						callNoty(angular.extend({text: message || settings.text, type: "alert"}, additionalSettings));
					},

					showSuccess: function (message, additionalSettings) {
						callNoty(angular.extend({text: message || settings.text, type: "success"}, additionalSettings));
					},

					showError: function (message, additionalSettings) {
						callNoty(angular.extend({text: message, type: "error"}, additionalSettings));
					},
					
                    			showYesNo: function(message, positiveCallback, additionalSettings) {
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
		                                }]
		                        	}, additionalSettings));
		                    	},

					closeAll: function () {
						return $.noty.closeAll()
					},
					clearShowQueue: function () {
						return $.noty.clearQueue();
					}.bind(this)
				}
			}

		};
	})
}(angular, jQuery));
