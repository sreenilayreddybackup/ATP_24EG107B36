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
    await connect("mongodb+srv://sreenilayreddybackup_db:nilay5253@cluster0.sgp3nib.mongodb.net/?appName=Cluster0");
    console.log("DB connected");
    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () =>
  console.log(`server listening on port ${PORT}..`)
);
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
