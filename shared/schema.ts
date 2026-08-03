import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const waitlistEntries = pgTable("waitlist_entries", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  role: text("role").notNull().default("user"), // 'user' or 'business'
  createdAt: timestamp("created_at").defaultNow(),
});

// === BASE SCHEMAS ===
export const insertWaitlistSchema = createInsertSchema(waitlistEntries, {
  email: z.string().email("Please enter a valid email address"),
}).pick({
  email: true,
  role: true,
});

// === EXPLICIT API CONTRACT TYPES ===
export type WaitlistEntry = typeof waitlistEntries.$inferSelect;
export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;
