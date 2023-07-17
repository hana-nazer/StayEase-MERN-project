const messageModel = require("../../models/messageModel");
const ownerModel = require("../../models/ownerModel");
const userModel = require("../../models/userModel");

// fetch messages
module.exports.getMessages = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    const messages = await messageModel
      .find({
        users: { $all: [from, to] },
      })
      .sort({ updatedAt: 1 });
    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
        createdAt: new Date(msg.createdAt).toLocaleString(),
      };
    });

    res.json(projectedMessages);
  } catch (error) {
    res.json(error.message);
  }
};

// send message
module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message, model } = req.body;
    const data = await messageModel.create({
      message: { text: message },
      users: [from, to],
      sender: from,
      senderModel: model,
    });
    if (data) {
      return res.json({ msg: "added success", data: data });
    } else {
      return res.json({ msg: "Failed to add message" });
    }
  } catch (error) {
    res.json(error.message);
  }
};

// get contacts
module.exports.getChatContacts = async (req, res, next) => {
  try {
    const contacts = await messageModel.find({ users: req.userId });

    const otherUserIds = contacts.reduce((userIds, contact) => {
      const otherUsers = contact.users.filter((user) => user !== req.userId);
      return userIds.concat(otherUsers);
    }, []);

    if (req.role === "owner") {
      contactsDetails = await userModel.find(
        { _id: otherUserIds },
        { password: 0 }
      );
    }

    if (req.role === "user") {
      contactsDetails = await ownerModel.find(
        { _id: otherUserIds },
        { password: 0 }
      );
    }

    res.status(200).json({ data: contactsDetails });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
