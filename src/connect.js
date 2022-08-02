const mongoose = require("mongoose");
const connectToDatabase = async () => {
  await mongoose.connect(
    "mongodb+srv://admin:<password>@nodejs.attff.mongodb.net/?retryWrites=true&w=majority",
    (error) => {
      if (error) {
        return console.log("falha de conexão", error);
      }
      return console.log("Conexão ok");
    }
  );
};

module.exports = connectToDatabase;
