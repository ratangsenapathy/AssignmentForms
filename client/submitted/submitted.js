Meteor.subscribe("assignments");
Meteor.subscribe("files");
console.log(Assignments.findOne({_id:window.location.pathname.split("/")[2]}));
