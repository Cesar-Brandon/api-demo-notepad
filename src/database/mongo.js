const mongoose = require("mongoose");
const DB_URI = process.env.MONGODB_URI;

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
