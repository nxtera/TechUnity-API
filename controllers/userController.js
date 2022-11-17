const { Thought, User } = require("../models");

module.exports = {
  // Get all users.
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single user.
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create a new user.
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Delete a user and associated thoughts.
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() =>
        res.json({ message: "User and associated thoughts deleted!" })
      )
      .catch((err) => res.status(500).json(err));
  },

  // Update a user.
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Add a friend to a user.
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.friendId },
      { $push: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((friend) =>
        !friend
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json({ message: `${friend.username} added as friend!` })
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete a friend.
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.friendId },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((friend) =>
        !friend
          ? res.status(404).json({ message: "No friend with this id!" })
          : res.json({ message: `${friend.username} removed as friend!` })
      )
      .catch((err) => res.status(500).json(err));
  },
};
