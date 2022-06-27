const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose.connect(
    process.env.DB_URI,
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
          console.log(err);
        }
      }
    }
  );
};

module.exports = dbConnect;
