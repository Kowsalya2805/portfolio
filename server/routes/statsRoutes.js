import express from 'express';
import { getStats, incrementVisit, incrementResumeDownload } from '../controllers/statsController.js';

const router = express.Router();

router.get('/', getStats);
router.post('/visit', incrementVisit);
router.post('/download-resume', incrementResumeDownload);

export default router;
