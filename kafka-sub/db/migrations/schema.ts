import { pgTable, uuid, timestamp, text } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"




export const tasks = pgTable("tasks", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	title: text().notNull(),
	status: text().notNull(),
	description: text(),
});

export const users = pgTable("users", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	name: text().notNull(),
	email: text().notNull(),
	password: text().notNull(),
});
