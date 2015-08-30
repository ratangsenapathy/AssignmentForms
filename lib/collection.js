Assignments = new Mongo.Collection("assignments");
Files = new FS.Collection("files",{
            stores: [
                new FS.Store.GridFS("files")
                ]
            });

Assignments.attachSchema(new SimpleSchema({
    topic: {
        type: String,
        label: "Topic",
        max: 200
    },
    date: {
        type: Date,
        label:"Deadline",
        autoform: {
              type: "bootstrap-datepicker",
              "data-date-autoclose": "true"
        }
    },
    pages: {
        type: Number,
        label: "Number of Pages",
        min:0
    },
    outputFormat: {
        type: String,
        label: "Output Format",
        max: 200 
    },
    words: {    
        type: Number,
        label: "No of words",
        min:0
    },
    description: {
        type: String,
        autoform:{
            rows:3
        },
        label: "Description",
        max: 1000
        
    },
    upload: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'files',
                label: 'Choose file'
            }
        }
    }
    
}));

