import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import statsRoutes from './routes/statsRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { generalRateLimiter } from './middlewares/rateLimiter.js';
import { verifyTransporter } from './config/nodemailer.js';

import fs from 'fs';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middlewares
app.use(helmet({
  contentSecurityPolicy: false,
}));

// CORS Configuration - Normalize origins & allow local + Vercel deployment URLs
const configuredClientUrl = process.env.CLIENT_URL ? process.env.CLIENT_URL.replace(/\/$/, '') : null;
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  configuredClientUrl,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    const normalizedOrigin = origin.replace(/\/$/, '');
    if (
      allowedOrigins.includes(normalizedOrigin) ||
      process.env.NODE_ENV !== 'production' ||
      /\.vercel\.app$/.test(normalizedOrigin)
    ) {
      callback(null, true);
    } else {
      callback(new Error('Blocked by CORS policy'));
    }
  },
  credentials: true,
}));

// Rate Limiter & Body Parser
app.use(generalRateLimiter);
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/stats', statsRoutes);

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'API Route Not Found' });
});

// Global Error Handler
app.use(errorHandler);

// Start Server & Verify SMTP
app.listen(PORT, async () => {
  console.log(`🚀 Kowsalya Portfolio Server running on port ${PORT}`);
  await verifyTransporter();
});
