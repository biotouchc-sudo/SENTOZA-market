/**
 * SANTOZA DATABASE CONNECTION (Neon Serverless)
 * Standard: 2026 Senate Protocol
 */

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// Validate Environment Variable
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

// Create Neon SQL Client
const sql = neon(process.env.DATABASE_URL);

// Export Drizzle Instance with Schema
export const db = drizzle(sql, { schema });
