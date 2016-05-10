angular.module('demoApp', ['notifier'])
    .config(["$notifierProvider", function($notifierProvider) {
        $notifierProvider.configureSettings({
            modal: false,
            layout: 'bottom',
            theme: 'bootstrapTheme'
        });
    }])
    .controller('notifierController', ["$notifier", function($notifier) {
        var vm = this;
        vm.options = {
            text: "Your message here...",
            layout: "top"
        }

        //Functions
        vm.showNotification = showNotification;
        vm.showYesNo = showYesNo;
        vm.close = close;
        vm.reset = reset;

        function showNotification() {
            $notifier.show(vm.options.text, "success", vm.options);
            $notifier.show(vm.options.text, "information", vm.options);
            $notifier.show(vm.options.text, "warning", vm.options);
        }

        function showYesNo() {
            $notifier.showYesNo(vm.options.text, function() {
                $notifier.show("You clicked Yes", "success", vm.options);
            });
        }

        function close() {
            $notifier.closeAll()
        }

        function reset() {
            vm.options = {
                text: "Your message here...",
                layout: "top"
            };
        }
    }]);