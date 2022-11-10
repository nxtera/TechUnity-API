const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
{
    thoughtText: {
        type: String,
        required: true,
        max_length: 280
    },
createdAt: {
    type: Date,
    default: Date.now,
},
username: {
    // (The user that created this thought)
    type: String,
    required: true,
},
    reactions
    // (These are like replies)
    // Array of nested documents created with the reactionSchema
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  }

);

const Thought = model('thought', thoughtSchema);

module.exports = Thought