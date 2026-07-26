import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

let isSmtpReady = false;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.GMAIL_USER || 'kowsalyasubbu289@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || '',
  },
});

// Verify connection configuration
export const verifyTransporter = async () => {
  if (!process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_APP_PASSWORD === 'your_16_character_app_password_here') {
    console.warn('⚠️ GMAIL_APP_PASSWORD is not set in server/.env. Running contact API in Development Fallback Mode.');
    isSmtpReady = false;
    return false;
  }

  try {
    await transporter.verify();
    console.log('✅ Nodemailer SMTP Transporter connected successfully to Gmail.');
    isSmtpReady = true;
    return true;
  } catch (error) {
    console.warn('⚠️ Google SMTP Authentication Notice:');
    console.warn('   Google requires a 16-character App Password (not your main account password).');
    console.warn('   To enable live email delivery: Enable 2-Step Verification on Google Account -> generate an App Password at https://myaccount.google.com/apppasswords.');
    console.warn('👉 Contact Form is running in Safe Fallback Mode (Messages logged to console & return 200 OK success).');
    isSmtpReady = false;
    return false;
  }
};

export const getIsSmtpReady = () => isSmtpReady;

export default transporter;
