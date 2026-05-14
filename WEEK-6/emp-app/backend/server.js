import exp from "express";
import mongoose from "mongoose";
import { empRoute } from "./API/empApp.js";
import cors from "cors";

const app = exp();

// CORS middleware
app.use(cors());

// body parser middleware
app.use(exp.json());

// emp api middleware
app.use("/emp-api", empRoute);

// default route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// DB connection
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sreenilayreddybackup_db:nilay5253@cluster0.sgp3nib.mongodb.net/empdb?retryWrites=true&w=majority&appName=Cluster0"
    );

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

// error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
