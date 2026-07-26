// Simple in-memory stats store
let statsData = {
  visitors: 142,
  resumeDownloads: 48,
};

export const getStats = (req, res) => {
  res.status(200).json(statsData);
};

export const incrementVisit = (req, res) => {
  statsData.visitors += 1;
  res.status(200).json(statsData);
};

export const incrementResumeDownload = (req, res) => {
  statsData.resumeDownloads += 1;
  res.status(200).json(statsData);
};
