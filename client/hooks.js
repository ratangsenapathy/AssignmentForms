Assignments.after.insert(function(userId, doc){
    Router.go('/submission/'+doc._id);
});
