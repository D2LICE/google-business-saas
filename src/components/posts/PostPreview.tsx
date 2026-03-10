'use client';

interface PostPreviewProps {
  title?: string;
  content?: string;
  imageUrl?: string;
  views?: string;
  postedAt?: string;
  progress?: number;
}

export function PostPreview({ 
  title = "Join us for Weekend Brunch!", 
  content = "Discover our new seasonal menu featuring locally sourced ingredients and crafted cocktails...",
  imageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuALm-6I1oBPEzp2g7mdxJVWgHmkNnJTbr8jexFfWDWNPClHL7HXFAZiqswD-z0MJN1GwJF29AkG66msuIA4Gu7JGvhjcr-CydP94Ik1nzn3ThHWulAIecrEcq6B9b3KyjftOLebv_3ymspw9U6ae6zAKYpKLRyyuJMoZoi7XBsDsipv9xfuNNZcXdfLDPVn1lb-OVO5Jq6kyqgAmKVGp1pt8hMnoc4XGGBvMIzG0WRVckl4YHkhUidnSa_txRTyyWlwXPcwfSUjAWD2",
  views,
  postedAt,
  progress
}: PostPreviewProps) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <h4 className="font-bold mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">auto_awesome</span>
        AI Suggested Post
      </h4>
      <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg mb-4 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <p className="text-white text-xs font-medium">Preview of "Weekend Specials" template</p>
        </div>
        <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url('${imageUrl}')`}}></div>
      </div>
      <p className="text-sm font-bold mb-1">{title}</p>
      <p className="text-xs text-slate-500 line-clamp-2 mb-4">{content}</p>
      <button className="w-full py-2 bg-primary/5 text-primary text-xs font-bold rounded-lg hover:bg-primary/10">
        Customize & Post
      </button>
    </div>
  );
}
