const newUser = (req, res) => {
  console.log(req.body);
  res.send({ message: "form has been submitted" });
};
module.exports = { newUser };
