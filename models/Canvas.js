const mongoose = require("mongoose");

const CanvasSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  userInput: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now },
  accepted: {
    type: Boolean,
    default: false,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  settings: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "settings",
  },
});

module.exports = Canvas = mongoose.model("canvas", CanvasSchema);
