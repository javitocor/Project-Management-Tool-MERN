var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 20},
    description:{type: String, required: true, minlength: 15, maxlength: 2000},
    stack: [{type: Schema.Types.ObjectId, ref: 'Stack'}],
    year: { type: Number, null: true, blank: true, min: 1980, max: 2100},
    image: {type: String},
    links: {
      type: Map,
      of: String,
    },
    status: {type: String, enum: ['Development', 'Standby', 'Production'], default: 'Development'},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});


// Virtual for this Project instance URL.
ProjectSchema
.virtual('url')
.get(function () {
  return '/Projects/'+this.name;
});

// Export model.
module.exports = mongoose.model('Project', ProjectSchema);