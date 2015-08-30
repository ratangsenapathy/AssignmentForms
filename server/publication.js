Files.allow({
    'insert': function(){
        return true;
    },
    'update': function(){
        return true;
    },

    'download': function(){
        return true;
    }
});
Assignments.allow({
    'insert': function(){
        return true;
    },
    'update': function(){
        return true;
    }
});

Meteor.publish("files", function(){
    return Files.find();
});
