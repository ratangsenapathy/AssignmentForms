Router.configure({
    'layoutTemplate':'layout'
});
Router.route('/', function(){
    this.render('home');
},{
    name: 'home'
});
Router.route('/submission/:_id', function(){
    if(this.params._id!=="undefined"){ 
        this.render('submitted');
    }else{
        Router.go('/');
    }
},{
    name: 'submitted',    
    waitOn: function(){
        return Meteor.subscribe('assignments');
    },
    data: function(){
        return Assignments.findOne({_id:this.params._id});
    }
});
/*
Router.route('/add', function(){
    this.render('addContent');
},{
    name:'add',
    waitOn: function(){
        return Meteor.subscribe('colls');
    }
});

Router.route('/profile', function(){
    this.render('profile');
},{
    name:'profile',
    waitOn: function(){
        return Meteor.subscribe('profile');
    },
    data:function(){
        var user = Meteor.user();
        user.email = user.emails[0].address;
        return user;
    }
});


Router.route('/about', function(){
    this.render('about');
},{
    name:'about'
});


var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            FlashMessages.sendError("Login or Create account");
            this.redirect('/');
        }
    } else {
        this.next();
    }
}
*/
