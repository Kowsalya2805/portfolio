import express from 'express';
import { handleContactForm } from '../controllers/contactController.js';
import { validateContactForm } from '../middlewares/validation.js';
import { contactRateLimiter } from '../middlewares/rateLimiter.js';

const router = express.Router();

// POST /api/contact
router.post('/', contactRateLimiter, validateContactForm, handleContactForm);

export default router;
