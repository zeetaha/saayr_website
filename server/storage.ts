import { db } from "./db";
import { waitlistEntries, type InsertWaitlist, type WaitlistEntry } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createWaitlistEntry(entry: InsertWaitlist): Promise<WaitlistEntry>;
  getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined>;
}

export class DatabaseStorage implements IStorage {
  async createWaitlistEntry(entry: InsertWaitlist): Promise<WaitlistEntry> {
    const [created] = await db!.insert(waitlistEntries).values(entry).returning();
    return created;
  }

  async getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined> {
    const [entry] = await db!.select().from(waitlistEntries).where(eq(waitlistEntries.email, email));
    return entry;
  }
}

export class InMemoryStorage implements IStorage {
  private entries: WaitlistEntry[] = [];
  private nextId = 1;

  async createWaitlistEntry(entry: InsertWaitlist): Promise<WaitlistEntry> {
    const newEntry: WaitlistEntry = {
      id: this.nextId++,
      email: entry.email,
      role: entry.role ?? "user",
      createdAt: new Date(),
    };
    this.entries.push(newEntry);
    return newEntry;
  }

  async getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined> {
    return this.entries.find(e => e.email === email);
  }
}

// Use database if available, otherwise use in-memory storage
export const storage: IStorage = db ? new DatabaseStorage() : new InMemoryStorage();
