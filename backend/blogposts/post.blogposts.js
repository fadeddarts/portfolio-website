import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      maxlength: 280,
    },
    mediaUrls: {
      type: [String], // URLs to uploaded images/videos/GIFs
      default: [],
    },
    mediaType: {
      type: String,
      enum: ['image', 'video', 'gif', null],
      default: null,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    postedToTwitter: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const post = mongoose.model('Post', postSchema);

export default post;
