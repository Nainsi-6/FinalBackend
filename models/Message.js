const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ConversationSchema = new Schema(
  {
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
    lastMessageText: {
      type: String,
      default: "",
    },
    lastMessageDate: {
      type: Date,
    },
    isArchived: {
      type: Boolean,
      default: false,
    },
    archivedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    blockedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
)

const MessageSchema = new Schema(
  {
    conversationId: {
      type: Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
    delivered: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isReported: {
      type: Boolean,
      default: false,
    },
    reportedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    reportReason: {
      type: String,
    },
  },
  { timestamps: true }
)

const Conversation = mongoose.model("Conversation", ConversationSchema)
const Message = mongoose.model("Message", MessageSchema)

module.exports = { Conversation, Message }