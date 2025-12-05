import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

app.post("/chat", async (req, res) => {
  try {
    const userMsg = req.body.message;

    const reply = await client.responses.create({
      model: "gpt-5.1",
      input: userMsg
    });

    res.json({ reply: reply.output_text });
  } catch (err) {
    res.json({ error: err.message });
  }
});

app.listen(3000, () => console.log("AI Server Running on 3000"));
