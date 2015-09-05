Meteor.subscribe("assignments");
Meteor.subscribe("files");
console.log(Assignments.findOne({_id:window.location.pathname.split("/")[2]}));

Template.submitted.helpers({

	up:function(){
		
           var url=window.location.href;
			var assignmentId=url.substring(url.lastIndexOf('/')+1);
			var assignments=Assignments.find().fetch();
			var files=Files.find().fetch();
			var uploadId="";
		for(var i=0;i<assignments.length;i++)
		{
 			  if(assignments[i]._id==assignmentId)
		{
          		uploadId=assignments[i].upload;
           		break;
			}
		}
         
		for(var i=0;i<files.length;i++)
		{
       		if(files[i]._id==uploadId)
       		{     
                 return files[i].original.name;
       		}
	    }
        
	    return "";
	}
});

