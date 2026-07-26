export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface StatsResponse {
  visitors: number;
  resumeDownloads: number;
}

const API_BASE = '/api';

export async function sendContactMessage(data: ContactFormData) {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.message || 'Failed to submit contact message.');
  }

  return resData;
}

export async function fetchStats(): Promise<StatsResponse> {
  try {
    const response = await fetch(`${API_BASE}/stats`);
    if (!response.ok) return { visitors: 142, resumeDownloads: 48 };
    return await response.json();
  } catch {
    return { visitors: 142, resumeDownloads: 48 };
  }
}

export async function recordVisit(): Promise<StatsResponse> {
  try {
    const response = await fetch(`${API_BASE}/stats/visit`, { method: 'POST' });
    if (!response.ok) return { visitors: 143, resumeDownloads: 48 };
    return await response.json();
  } catch {
    return { visitors: 143, resumeDownloads: 48 };
  }
}

export async function recordResumeDownload(): Promise<StatsResponse> {
  try {
    const response = await fetch(`${API_BASE}/stats/download-resume`, { method: 'POST' });
    if (!response.ok) return { visitors: 143, resumeDownloads: 49 };
    return await response.json();
  } catch {
    return { visitors: 143, resumeDownloads: 49 };
  }
}
