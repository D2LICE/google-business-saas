'use client';

interface ProfileHealthProps {
  score?: number;
  status?: string;
  description?: string;
}

export function ProfileHealth({ 
  score = 82, 
  status = "Almost optimized!", 
  description = "Complete 3 more actions to reach 100% visibility." 
}: ProfileHealthProps) {
  const percentage = score;

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <h4 className="font-bold mb-6">Profile Health</h4>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="relative size-32 flex items-center justify-center mb-4">
          <svg className="size-full" viewBox="0 0 36 36">
            <path 
              className="text-slate-100 dark:text-slate-800" 
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
              fill="none" 
              stroke="currentColor" 
              strokeDasharray="100, 100" 
              strokeWidth="3"
            ></path>
            <path 
              className="text-primary" 
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
              fill="none" 
              stroke="currentColor" 
              strokeDasharray={`${percentage}, 100`} 
              strokeLinecap="round" 
              strokeWidth="3"
            ></path>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-extrabold">{score}</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Score</span>
          </div>
        </div>
        <p className="text-sm font-bold mb-1">{status}</p>
        <p className="text-xs text-slate-500 mb-4 px-4">{description}</p>
      </div>
    </div>
  );
}
