import { Router, Request, Response } from "express";
import { supabase } from "../config/supabase";

const router = Router();

// POST /api/contact - handle contact form submissions
router.post("/", async (req: Request, res: Response) => {
  const { name, phone, email, message } = req.body;

  if (!name || !email || !message) {
    res
      .status(400)
      .json({ success: false, error: "Name, email, and message are required." });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ success: false, error: "Invalid email address." });
    return;
  }

  try {
    if (supabase) {
      const { error } = await supabase.from("contact_submissions").insert({
        name,
        phone: phone || null,
        email,
        message,
      });

      if (error) {
        console.error("Supabase insert error:", error);
        res.status(500).json({ success: false, error: "Failed to save message." });
        return;
      }
    } else {
      console.log("Contact form submission without database:", {
        name,
        phone,
        email,
        message,
      });
    }

    res.json({ success: true, message: "Message received successfully!" });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ success: false, error: "Internal server error." });
  }
});

export default router;
