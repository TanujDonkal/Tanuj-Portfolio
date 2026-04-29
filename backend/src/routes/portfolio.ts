import { Router, Request, Response } from "express";
import { supabase } from "../config/supabase";
import {
  fallbackProfile,
  fallbackExperiences,
  fallbackEducation,
  fallbackSkills,
  fallbackProjects,
  fallbackContactBar,
  fallbackContactLinks,
} from "../data/fallback";

const router = Router();

const fallbackPortfolio = {
  profile: fallbackProfile,
  experiences: fallbackExperiences,
  education: fallbackEducation,
  skills: fallbackSkills,
  projects: fallbackProjects,
  contactBar: fallbackContactBar,
  contactLinks: fallbackContactLinks,
};

// GET /api/portfolio - returns all portfolio data in one call
router.get("/", async (_req: Request, res: Response) => {
  try {
    if (supabase) {
      const [
        { data: profile },
        { data: experiences },
        { data: education },
        { data: skills },
        { data: projects },
        { data: contact },
      ] = await Promise.all([
        supabase.from("profile").select("*").single(),
        supabase.from("experiences").select("*").order("sort_order"),
        supabase.from("education").select("*").order("sort_order"),
        supabase.from("skills").select("*").order("sort_order"),
        supabase.from("projects").select("*").order("sort_order"),
        supabase.from("contact").select("*").single(),
      ]);

      res.json({
        profile: profile || fallbackProfile,
        experiences: experiences || fallbackExperiences,
        education: education || fallbackEducation,
        skills: skills || fallbackSkills,
        projects: projects || fallbackProjects,
        contactBar: contact?.contact_bar || fallbackContactBar,
        contactLinks: contact?.contact_links || fallbackContactLinks,
      });
      return;
    }

    res.json(fallbackPortfolio);
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    res.json(fallbackPortfolio);
  }
});

// GET /api/portfolio/profile
router.get("/profile", async (_req: Request, res: Response) => {
  try {
    if (supabase) {
      const { data } = await supabase.from("profile").select("*").single();
      if (data) {
        res.json(data);
        return;
      }
    }
    res.json(fallbackProfile);
  } catch {
    res.json(fallbackProfile);
  }
});

// GET /api/portfolio/experiences
router.get("/experiences", async (_req: Request, res: Response) => {
  try {
    if (supabase) {
      const { data } = await supabase
        .from("experiences")
        .select("*")
        .order("sort_order");
      if (data) {
        res.json(data);
        return;
      }
    }
    res.json(fallbackExperiences);
  } catch {
    res.json(fallbackExperiences);
  }
});

// GET /api/portfolio/education
router.get("/education", async (_req: Request, res: Response) => {
  try {
    if (supabase) {
      const { data } = await supabase
        .from("education")
        .select("*")
        .order("sort_order");
      if (data) {
        res.json(data);
        return;
      }
    }
    res.json(fallbackEducation);
  } catch {
    res.json(fallbackEducation);
  }
});

// GET /api/portfolio/skills
router.get("/skills", async (_req: Request, res: Response) => {
  try {
    if (supabase) {
      const { data } = await supabase
        .from("skills")
        .select("*")
        .order("sort_order");
      if (data) {
        res.json(data);
        return;
      }
    }
    res.json(fallbackSkills);
  } catch {
    res.json(fallbackSkills);
  }
});

// GET /api/portfolio/projects
router.get("/projects", async (_req: Request, res: Response) => {
  try {
    if (supabase) {
      const { data } = await supabase
        .from("projects")
        .select("*")
        .order("sort_order");
      if (data) {
        res.json(data);
        return;
      }
    }
    res.json(fallbackProjects);
  } catch {
    res.json(fallbackProjects);
  }
});

export default router;
