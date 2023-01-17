const Comment = require("../models/comment.model");
exports.get = (req, res) => {
  Comment.find()
    .then((comments) => {
      res.send(comments);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving comments.",
      });
    });
};
exports.post = (req, res) => {
  const comment = new Comment({
    name: req.body.name,
    comment: req.body.comment,
  });
  comment
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Comment.",
      });
    });
};
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  const id = req.params.id;
  Comment.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Comment with id=${id}. Maybe Comment was not found!`,
        });
      } else res.send({ message: "Comment was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Comment with id=" + id,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;
  Comment.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Comment with id=${id}. Maybe Comment was not found!`,
        });
      } else {
        res.send({
          message: "Comment was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Comment with id=" + id,
      });
    });
};
