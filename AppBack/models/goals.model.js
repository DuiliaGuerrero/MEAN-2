import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  target: {
    type: Number,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'usuarios',
    required: true,
  },
});

export default mongoose.model('goals', goalSchema);

