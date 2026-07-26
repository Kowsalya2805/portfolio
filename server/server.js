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

// Sync user's exact profile photo to client/public directory
try {
  const photoSrc = 'C:/Users/samyuktha/.gemini/antigravity-ide/brain/a124a6c0-9c06-4bae-9c2d-a9a0d595b322/media__1785071333751.png';
  const clientPublicDir = path.resolve(process.cwd(), '../client/public');
  if (fs.existsSync(photoSrc) && fs.existsSync(clientPublicDir)) {
    fs.copyFileSync(photoSrc, path.join(clientPublicDir, 'profile.png'));
    fs.copyFileSync(photoSrc, path.join(clientPublicDir, 'profile.jpg'));
    console.log('📸 [Profile Photo] Original uploaded user image copied to client/public/profile.png & profile.jpg');
  }
} catch (imgErr) {
  console.error('⚠️ [Profile Photo Error]', imgErr.message);
}

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middlewares
app.use(helmet({
  contentSecurityPolicy: false,
}));

// CORS Configuration
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
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
