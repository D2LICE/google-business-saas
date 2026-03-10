'use client';

export function SearchCoverage() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
      <div className="p-6">
        <h4 className="font-bold mb-1">Search Coverage</h4>
        <p className="text-[10px] text-slate-500 font-medium mb-4 uppercase tracking-wider">Local Grid Performance</p>
        <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 bg-cover bg-center" 
               style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9FafWr0sUXWf03oO-oQAzTbtzO_OZf9nH6-2nzIfp_0sT8ER7TZWCmd8ZGFuQ-JSu-e9JkMFDGOI2WEDWpFeixa-6AE7ZA6ygSKb75Yp7yZABw3oqmxJN_9EVE3zAqOsn6f18I-s0KruIKnNayNtGF7CJce1ZpINLBl2Jnhw3lUHELA2aYYGs1nWUjTuy-g_fHyAfx9AVkUeXhprvnXimgBqa-VTtkpYHV3lVS88KmmVpN-NNaDf3Sb33vfolfH1aTzyj-Ty35QP6')"}}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-2">
              <div className="size-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white font-bold">1</div>
              <div className="size-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white font-bold">1</div>
              <div className="size-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white font-bold">2</div>
              <div className="size-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white font-bold">1</div>
              <div className="size-8 rounded-full bg-primary border-4 border-white dark:border-slate-900 flex items-center justify-center text-[10px] text-white font-bold animate-pulse shadow-lg">ME</div>
              <div className="size-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white font-bold">2</div>
              <div className="size-6 rounded-full bg-yellow-500 flex items-center justify-center text-[10px] text-white font-bold">4</div>
              <div className="size-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white font-bold">2</div>
              <div className="size-6 rounded-full bg-red-500 flex items-center justify-center text-[10px] text-white font-bold">8</div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        <button className="w-full py-2 bg-slate-50 dark:bg-slate-800 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 transition-colors">
          Improve Local SEO
        </button>
      </div>
    </div>
  );
}
