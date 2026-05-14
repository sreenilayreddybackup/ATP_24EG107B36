import exp from "express";
import { connect } from "mongoose";
import { empRoute } from "./API/empApp.js";
import cors from "cors";

const app = exp();
//add cors middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);
//body parser middleware
app.use(exp.json());
//emp api middleware
app.use("/emp-api", empRoute);

//DB connection
const connectDB = async () => {
  try {
    await connect("mongodb://sreenilayreddybackup_db:nilay5253@ac-rm0ymww-shard-00-00.sgp3nib.mongodb.net:27017,ac-rm0ymww-shard-00-01.sgp3nib.mongodb.net:27017,ac-rm0ymww-shard-00-02.sgp3nib.mongodb.net:27017/?ssl=true&replicaSet=atlas-o9tfev-shard-0&authSource=admin&appName=Cluster0");
    console.log("DB connected");
    app.listen(4000, () => console.log("server listening on port 4000.."));
  } catch (err) {
    console.log("err in DB connection", err.message);
  }
};

connectDB();

//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
