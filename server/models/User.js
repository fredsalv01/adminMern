import Schema from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 100
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
  city: {
    type: String,
  },
  state: String,
  country: String,
  occupation: String,
  phoneNumber: String,
  transactions: Array,
  role: {
    type: String,
    enum: ['user', 'admin', 'superadmin'],
    default: 'admin'
  },
}, {
  timestamps: true,
  versionKey: false
});

const User = mongoose.model('User', UserSchema);

export default User;