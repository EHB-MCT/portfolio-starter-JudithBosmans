const app = require("./routes/app");

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
