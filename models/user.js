var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstname: {type: String, required: [true, 'User firstname required'], min: 3, max: 20},
    lastanme: {type: String, required: [true, 'User lastname required'], min: 3, max: 20},
    dob: { type: Date, null: true, blank: true},
    avatar: {type: String},
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
      default: null
    },
    phone:{
      type     : Number,
      unique   : true,
      default: null,
      validate : {
        validator : Number.isInteger,
        message   : '{VALUE} is not an integer value'
      }
    },
    socialMedia: {
      type: Map,
      of: String,
      null: true, blank: true
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

UserSchema
.virtual('imageUrl')
.get(function () {
  const pathJPG = `/images/${this.avatar}`;
  return pathJPG;
});


// Virtual for this User instance URL.
UserSchema
.virtual('url')
.get(function () {
  return '/Users/'+this._id;
});

// Export model.
module.exports = mongoose.model('User', UserSchema);