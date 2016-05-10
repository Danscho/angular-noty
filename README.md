angular-noty
============

Originally by [dev-tim](https://github.com/dev-tim/angular-noty)

Added settings config and overrideable settings per notification.

Wrapper for [noty](ned.im/noty) - cool growl-like notifications. 
Simple angularJS provider for noty notifications

##Development setup

Install gulp and the necessary npm and bower dependencies

```
npm install gulp -g
npm install
bower install
gulp

```

##How to use it in your project

1. Add link to ``notifier.min.js`` and make sure that you have jquery in your project.
2. Add ``` notifier ``` as dependency module to your main angular module.
3. Inject ``` $notifier ``` where you need it.




