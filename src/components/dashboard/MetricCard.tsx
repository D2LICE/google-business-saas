'use client';

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: string;
  color: 'blue' | 'orange' | 'purple';
  chartPath?: string;
}

export function MetricCard({ title, value, change, icon, color, chartPath }: MetricCardProps) {
  const isPositive = change > 0;
  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/30 text-primary',
    orange: 'bg-orange-50 dark:bg-orange-900/30 text-orange-500',
    purple: 'bg-purple-50 dark:bg-purple-900/30 text-purple-500'
  };

  const chartColors = {
    blue: 'text-primary',
    orange: 'text-orange-500',
    purple: 'text-purple-500'
  };

  const defaultChartPaths = {
    blue: "M0,20 Q10,5 20,15 T40,10 T60,18 T80,5 T100,15 L100,20 L0,20 Z",
    orange: "M0,15 Q15,10 30,12 T50,5 T70,15 T100,8 L100,20 L0,20 Z",
    purple: "M0,5 Q20,15 40,8 T70,15 T100,5 L100,20 L0,20 Z"
  };

  const chartPathData = chartPath || defaultChartPaths[color];

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 ${colorClasses[color]} rounded-lg`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
          isPositive 
            ? 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30' 
            : 'text-rose-500 bg-rose-50 dark:bg-rose-900/30'
        }`}>
          {isPositive ? '+' : ''}{change}%
        </span>
      </div>
      <p className="text-slate-500 text-sm font-medium">{title}</p>
      <h3 className="text-2xl font-bold mt-1">{value}</h3>
      <div className="mt-4 h-12 w-full">
        <svg className={`w-full h-full ${chartColors[color]} opacity-30`} preserveAspectRatio="none" viewBox="0 0 100 20">
          <path d={`${chartPathData} L100,20 L0,20 Z`} fill="currentColor"></path>
          <path d={chartPathData} fill="none" stroke="currentColor" strokeWidth="2"></path>
        </svg>
      </div>
    </div>
  );
}
