const messageModel = require("../../models/messageModel");

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
      return res.json({ msg: "added success" ,data:data});
    } else {
      return res.json({ msg: "Failed to add message" });
    }
  } catch (error) {
    res.json(error.message);
  }
};
