const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI =
    "mongodb+srv://Brandon:i0h6l4vAXoBUqnfq@cluster0.hzkiu.mongodb.net/api-notepad?retryWrites=true&w=majority";
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      {
        if (!err) {
          console.log("Conexion Correcta");
        } else {
          console.log("Error en la conexion");
        }
      }
    }
  );
};

module.exports = dbConnect;
