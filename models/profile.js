var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
    firstname: {type: String, required: [true, 'Profile firstname required'], minlength: 3, maxlength: 20},
    lastname: {type: String, required: [true, 'Profile lastname required'], minlength: 3, maxlength: 20},
    about: {type: String, minlength: 25, maxlength: 2500},
    dob: { type: Date, null: true, blank: true},
    avatar: {type: String},
    city: {type: String},
    country: {type: String},
    work_status: {type: String, enum: ['Working', 'Searching', 'Freelance'], default: 'Working'},
    email: {
      type: String,
      lowercase: true,
      unique: true,
      trim: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
      required: [true, 'Email required']
    },
    gender: {
      type: String,
      trim: true,
      enum: ['Male', 'Female', 'Other'], 
      default: 'Other'
    },
    phone:{
      type     : Number,
      unique   : true,
      default: undefined,
      validate : {
        validator : Number.isInteger,
        message   : '{VALUE} is not an integer value'
      }
    },
    socialMedia: {
      type: Map,
      of: String,
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});


// Virtual for this Profile instance URL.
ProfileSchema
.virtual('url')
.get(function () {
  return '/Profiles/'+this.name;
});

// Export model.
module.exports = mongoose.model('Profile', ProfileSchema);