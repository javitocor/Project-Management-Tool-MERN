var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StackSchema = new Schema({
    name: {type: String, required: true, min: 3, max: 20},
    created_at: { type: Date, default: Date.now },
});


// Virtual for this Stack instance URL.
StackSchema
.virtual('url')
.get(function () {
  return '/Stacks/'+this._id;
});

// Export model.
module.exports = mongoose.model('Stack', StackSchema);