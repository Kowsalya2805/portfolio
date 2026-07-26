import fs from 'fs';
import path from 'path';

const srcPath = 'C:/Users/samyuktha/.gemini/antigravity-ide/brain/a124a6c0-9c06-4bae-9c2d-a9a0d595b322/media__1785071333751.png';
const destPng = 'd:/kowsi portfolio/client/public/profile.png';
const destJpg = 'd:/kowsi portfolio/client/public/profile.jpg';

try {
  fs.copyFileSync(srcPath, destPng);
  fs.copyFileSync(srcPath, destJpg);
  console.log('✅ Exact original user photo copied successfully to public/profile.png and public/profile.jpg');
} catch (err) {
  console.error('Error copying photo:', err);
}
