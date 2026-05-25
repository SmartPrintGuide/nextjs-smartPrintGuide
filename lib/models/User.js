import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  isBlocked: { type: Boolean, default: false },
  avatar: { type: String, default: null },
}, { timestamps: true });

userSchema.methods.matchPassword = async function(enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  if (this.password && this.password.startsWith('$2') && this.password.length === 60) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(this.password, salt, (hashErr, hashedPassword) => {
      if (hashErr) {
        return next(hashErr);
      }
      this.password = hashedPassword;
      next();
    });
  });
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
