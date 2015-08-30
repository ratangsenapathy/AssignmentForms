Meteor.methods({
    getAssignment: function(id){
        console.log(Assignments.findOne({_id:id}));
        return Assignments.findOne({_id:id});
    }
});
