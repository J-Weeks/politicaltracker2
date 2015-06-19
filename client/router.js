Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/Home');

Router.route('/About');

Router.route('/', function () {
  this.render('/Home');
});
