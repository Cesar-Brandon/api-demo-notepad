const mongoose = require("mongoose");
const DB_URI =
  "mongodb+srv://Brandon:i0h6l4vAXoBUqnfq@cluster0.hzkiu.mongodb.net/api-notepad?retryWrites=true&w=majority";

const dbConnect = () => {
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      {
        if (!err) {
          console.log("DB : Conexion Correcta");
        } else {
          console.log("DB : Error en la conexion");
        }
      }
    }
  );
};

module.exports = dbConnect;
