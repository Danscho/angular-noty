angular.module('demoApp', ['notifier'])
    .config(["$notifierProvider", function($notifierProvider) {
        $notifierProvider.overrideSettings({
            killer: true,
            modal: false
        });
    }])
    .controller('notifierController', ["$notifier", function($notifier) {
        var vm = this;
        vm.notyMessage = "Your message here...";

        //Functions
        vm.showNotification = showNotification;
        vm.showYesNo = showYesNo;
        vm.close = close;

        function showNotification() {
            $notifier.show(vm.notyMessage, "success")
        }

        function showYesNo() {
            $notifier.showYesNo(vm.notyMessage, function() {
                $notifier.show("You clicked Yes", "success", {
                    killer: false,
                    modal: true,
                    layout: "center"
                });
            }, {
                killer: false,
            })
        }

        function close() {
            $notifier.closeAll()
        }
    }]);