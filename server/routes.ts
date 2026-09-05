import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { renderPrivacyPage } from "./templates/privacy";
import { renderTermsPage } from "./templates/terms";
import { renderDeleteAccountPage } from "./templates/delete-account";
import { renderInvitePage } from "./templates/invite";
import { sendWaitlistNotification } from "./email";

// Apple Universal Links config. Must be served as application/json, with no
// ".json" extension and no redirect (including no apex<->www redirect), or
// iOS silently refuses to open saayr.sa links in the app.
const APPLE_APP_SITE_ASSOCIATION = `{"applinks":{"details":[{"appIDs":["X4KTHW6XMR.com.saayr.app","X4KTHW6XMR.com.saayr.app.staging"],"components":[{"/":"/invite/*"},{"/":"/g/*"}]}]}}`;

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get("/.well-known/apple-app-site-association", (_req, res) => {
    res.status(200).set({ "Content-Type": "application/json" }).end(APPLE_APP_SITE_ASSOCIATION);
  });

  // Universal link fallback: opens in the SAAYR app when installed;
  // anyone without the app (or on desktop) lands on this page instead.
  app.get(["/invite/:code", "/g/:code"], (_req, res) => {
    res.status(200).set({ "Content-Type": "text/html" }).end(renderInvitePage());
  });

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

      sendWaitlistNotification(input.email, input.role).catch((err) =>
        console.error("Failed to send waitlist notification email:", err)
      );
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
