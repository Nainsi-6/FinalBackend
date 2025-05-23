const express = require("express")
const router = express.Router()
const messageController = require("../controllers/messageController")
const { authMiddleware } = require("../middleware/authMiddleware")

// Apply auth middleware to all routes
router.use(authMiddleware)

// IMPORTANT: Specific routes must come BEFORE parameterized routes
// Get archived conversations
router.get("/conversations/archived", messageController.getArchivedConversations)

// Get blocked conversations
router.get("/conversations/blocked", messageController.getBlockedConversations)

// Get all conversations for the current user
router.get("/conversations", messageController.getConversations)

// Delete a conversation and all its messages
router.delete("/conversations/:conversationId", messageController.deleteConversation)

// Get unread messages for a specific conversation
router.get("/conversations/:conversationId/unread", messageController.getUnreadMessages)

// Get messages for a specific conversation (must come AFTER specific routes)
router.get("/conversations/:conversationId", messageController.getMessages)

// Send a message
router.post("/", messageController.sendMessage)

// Delete a message
router.delete("/:messageId", messageController.deleteMessage)

// Report a message
router.post("/report/:messageId", messageController.reportMessage)

// Archive a conversation
router.post("/archive/:conversationId", messageController.archiveConversation)

// Unarchive a conversation
router.post("/unarchive/:conversationId", messageController.unarchiveConversation)

// Block a conversation
router.post("/block/:conversationId", messageController.blockConversation)

// Unblock a conversation
router.post("/unblock/:conversationId", messageController.unblockConversation)

// Mark messages as delivered
router.post("/delivered/:conversationId", messageController.markAsDelivered)

module.exports = router

