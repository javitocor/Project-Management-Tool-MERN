var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StackSchema = new Schema({
    name: {type: String, required: true, minlength: 3, maxlength : 20},
    description: {type: String, required: true, minlength: 15, maxlength : 2000},
    released_year: {type: Number, null: true, blank: true, min: 1950, max: 2100},
    link: {type: String},
    logo: {type: String},
    created_at: { type: Date, default: Date.now },
});


// Virtual for this Stack instance URL.
StackSchema
.virtual('url')
.get(function () {
  return '/stacks/'+this.name;
});

// Export model.
module.exports = mongoose.model('Stack', StackSchema);