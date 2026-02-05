import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { renderPrivacyPage } from "./templates/privacy";
import { renderTermsPage } from "./templates/terms";
import { renderDeleteAccountPage } from "./templates/delete-account";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // SSR routes for legal pages
  app.get("/privacy", (_req, res) => {
    res.status(200).set({ "Content-Type": "text/html" }).end(renderPrivacyPage());
  });

  app.get("/terms", (_req, res) => {
    res.status(200).set({ "Content-Type": "text/html" }).end(renderTermsPage());
  });

  app.get("/delete-account", (_req, res) => {
    res.status(200).set({ "Content-Type": "text/html" }).end(renderDeleteAccountPage());
  });

  app.post(api.waitlist.create.path, async (req, res) => {
    try {
      const input = api.waitlist.create.input.parse(req.body);
      
      const existing = await storage.getWaitlistEntryByEmail(input.email);
      if (existing) {
        return res.status(409).json({ message: "Email already in waitlist" });
      }

      const entry = await storage.createWaitlistEntry(input);
      res.status(201).json(entry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
