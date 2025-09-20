const newUser = (req, res) => {
  console.log(req.body);
  res.send("form has been submitted");
};
module.exports = { newUser };
