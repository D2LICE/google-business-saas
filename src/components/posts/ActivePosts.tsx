'use client';

interface Post {
  id: string;
  title: string;
  postedAt: string;
  views: string;
  imageUrl: string;
  progress: number;
}

interface ActivePostsProps {
  posts?: Post[];
}

const defaultPosts: Post[] = [
  {
    id: '1',
    title: 'Holiday Hours Update',
    postedAt: '3 days ago',
    views: '1.2k',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS2k9nvU9tY-eOkI_wX5ifWVOfKLPwu5Ftn_lF3hnc_dg-hPRd22N3yWMrMD1N6rwJLKZ8srhmPCxfUJ34ZCdIYHb9RIx1-uUdd_3JMe784PnSK3yz96Ddb-tE3aFN4bkqL3xn_XYdGAiRxrGy-jz5RsQC6dtsr_oJjL3p0v_cEtpp0eaOjliLo3Y6GNxLzSQXikhVo0X11jLVbd_GuHx8xhn6CVUbuMUA0OdsxJSf5310CF_mYV2osdqdU_y-wlpDuERqNnPZS5iq',
    progress: 75
  },
  {
    id: '2',
    title: 'New Summer Dessert',
    postedAt: '1 week ago',
    views: '4.8k',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhmk1VicPu4cp38jR_M30pxYRqPguxZECEc1Jw1eSLNlkNECaRv31a3JOqdge5IHbzVpKQtc6H5je9WOr3IRVu3yEd-mou_s2T2FZcT-ABn69lCAMdZ9ZxPWmb4GvUViWvDRAwatxaIKbb4F-tUUIu0BRkAgnhaVgpM8oe3YtzPc5v0ETRMOH4K9L0X-ICIW0TIYFYupEuBk9aBZwTX1nR5vku9naZyU0B19NqmIsBvci4AfAfeXpU2VR-fQPOa1pRBpPS_7YYLANc',
    progress: 90
  }
];

export function ActivePosts({ posts = defaultPosts }: ActivePostsProps) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <h4 className="font-bold mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-emerald-500">check_circle</span>
        Active Posts
      </h4>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="flex gap-3">
            <div className="size-12 rounded bg-slate-100 flex-shrink-0 bg-cover bg-center" 
                 style={{backgroundImage: `url('${post.imageUrl}')`}}></div>
            <div className="flex-1">
              <p className="text-xs font-bold">{post.title}</p>
              <p className="text-[10px] text-slate-500">Posted {post.postedAt} • {post.views} views</p>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
                <div className="bg-emerald-500 h-full" style={{width: `${post.progress}%`}}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 py-2 border border-slate-200 dark:border-slate-700 text-xs font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
        Post History
      </button>
    </div>
  );
}
