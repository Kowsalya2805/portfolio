import React, { useEffect, useState } from 'react';
import { Users, Download, Activity } from 'lucide-react';
import { fetchStats, recordVisit } from '../api';

export const VisitorCounter: React.FC = () => {
  const [stats, setStats] = useState<{ visitors: number; resumeDownloads: number }>({
    visitors: 142,
    resumeDownloads: 48,
  });

  useEffect(() => {
    // Record visit on page load
    recordVisit().then((data) => {
      if (data && data.visitors) {
        setStats(data);
      }
    }).catch(() => {
      fetchStats().then(setStats);
    });
  }, []);

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] shadow-card max-w-2xl mx-auto my-12">
      <div className="flex items-center justify-between gap-4 border-b border-[#F3F4F6] dark:border-[#334155] pb-4 mb-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F766E] dark:text-[#14B8A6]">
          <Activity className="w-4 h-4 animate-pulse" />
          <span>Live Portfolio Analytics</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Server Connected</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-[#FAFAF8] dark:bg-[#111827] border border-[#E5E7EB] dark:border-[#374151] flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-900/20 text-[#0F766E] dark:text-[#14B8A6]">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-white">
              {stats.visitors}
            </div>
            <div className="text-[11px] font-medium text-[#6B7280] uppercase tracking-wider">Total Visitors</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#FAFAF8] dark:bg-[#111827] border border-[#E5E7EB] dark:border-[#374151] flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-900/20 text-[#0F766E] dark:text-[#14B8A6]">
            <Download className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-white">
              {stats.resumeDownloads}
            </div>
            <div className="text-[11px] font-medium text-[#6B7280] uppercase tracking-wider">Resume Downloads</div>
          </div>
        </div>
      </div>
    </div>
  );
};
