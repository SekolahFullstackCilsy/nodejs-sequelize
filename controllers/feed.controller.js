exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "Hello world!" }],
  });
};

exports.createPost = (req, res, next) => {
  console.log("[REQ]", req);
  res.status(200).json({
    message: "Post has been made!",
    post: {
      title: req.body.title,
    },
  });
};
