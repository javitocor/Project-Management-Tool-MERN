var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: {type: String, required: true, min: 3, max: 20},
    stack: [{type: Schema.Types.ObjectId, ref: 'Stack'}],
    year: { type: Number, null: true, blank: true},
    socialMediaHandles: {
      type: Map,
      of: String,
      null: true, blank: true
    },
    status: {type: String, required: true, enum: ['Development', 'Standby', 'Production'], default: 'Production'},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});


// Virtual for this Project instance URL.
ProjectSchema
.virtual('url')
.get(function () {
  return '/Projects/'+this._id;
});

// Export model.
module.exports = mongoose.model('Project', ProjectSchema);