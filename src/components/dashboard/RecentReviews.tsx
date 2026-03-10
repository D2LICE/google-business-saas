'use client';

import { useState } from 'react';

interface Review {
  id: string;
  authorName: string;
  rating: number;
  comment?: string;
  createdAt: string;
  sentiment: string;
  avatar?: string;
}

interface RecentReviewsProps {
  reviews?: Review[];
}

const defaultReviews: Review[] = [
  {
    id: '1',
    authorName: 'Sarah Jenkins',
    rating: 5,
    comment: 'The food was absolutely incredible! Best bistro in city. The service was top notch and atmosphere was perfect for our anniversary.',
    createdAt: '2 hours ago',
    sentiment: 'POSITIVE',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAde48XcBCTIxxSWt2E7CFty__5VxwvN6BiDVg5LDV_9XSIze-BhcAQXsJYHV4ypErqarJ_5oHnp86TxUQgV8-XOPZLkNJ7e26eCUQ9fE-o4l4lSNUJ_tq74MvzxtcwHzGE3pzAaWUNEcWkY_fjXUlegmbIDPIK5vN6QihrZYkyQhc48rZDUlwBdHLAeDPiW6f_tDC9FMESDx072A9oIMOQNIVdd-uSI6-9G0aF-YbL9xiccKBgUfq4vDsaCg-SbfYICzifUwbAnr39'
  },
  {
    id: '2',
    authorName: 'Mark Thompson',
    rating: 4,
    comment: 'Great experience overall. The duck confit was a bit salty but everything else was excellent. Will return!',
    createdAt: '1 day ago',
    sentiment: 'NEUTRAL',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj-Zk5lt-l37vHYHLA8uOwl1Wnp3Ysh366TPQuZtYjWzJgT4NYVb1WC2DRJfRLvb7sVDnRwFUEg5VL5LLv-OrINXb5kMS27R5zMgYkmFVFEN9ShC4iFgCxd8PAg4fjF8mz5YREsidHxcOYLg5Y_hjYbgfjpTo2EtOtPNt8-aoMd5RI_Yg0btrOezVWcVbQZDnUUTvjIlI_P5CxxmbPwLfxZG_qOnN6WKP2hp9BdlBOOj4_NZ7tWZME6xJzdShkdDGPHzQuwH8ONW54'
  }
];

export function RecentReviews({ reviews = defaultReviews }: RecentReviewsProps) {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const [replyModal, setReplyModal] = useState<{ reviewId: string; type: 'ai' | 'manual' } | null>(null);
  const [aiReplies, setAiReplies] = useState<Record<string, string>>({});

  const generateAIReply = async (reviewId: string) => {
    setLoadingStates(prev => ({ ...prev, [reviewId]: true }));
    
    // Simuler l'appel API pour générer une réponse IA
    setTimeout(() => {
      const mockReply = `Merci beaucoup pour votre avis, ${reviews.find(r => r.id === reviewId)?.authorName}! Nous sommes ravis que vous ayez apprécié votre expérience chez nous. Votre feedback nous aide à nous améliorer chaque jour. Au plaisir de vous revoir bientôt!`;
      setAiReplies(prev => ({ ...prev, [reviewId]: mockReply }));
      setLoadingStates(prev => ({ ...prev, [reviewId]: false }));
      setReplyModal({ reviewId, type: 'ai' });
    }, 2000);
  };

  const openManualReply = (reviewId: string) => {
    setReplyModal({ reviewId, type: 'manual' });
  };

  const closeModal = () => {
    setReplyModal(null);
  };

  return (
    <>
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <h4 className="font-bold text-lg">Recent Reviews</h4>
          <a className="text-primary text-sm font-bold hover:underline" href="#">View All</a>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {reviews.map((review) => (
            <div key={review.id} className="p-6 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <div className="flex gap-4">
                <div className="size-12 rounded-full bg-slate-100 flex-shrink-0 bg-cover bg-center" 
                     style={{backgroundImage: `url('${review.avatar}')`}}></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-bold">{review.authorName}</p>
                    <span className="text-xs text-slate-400">{review.createdAt}</span>
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm">
                        {i < review.rating ? 'star' : 'star_outline'}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{review.comment}</p>
                  <div className="mt-4 flex gap-2">
                    <button 
                      onClick={() => generateAIReply(review.id)}
                      disabled={loadingStates[review.id]}
                      className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                    >
                      {loadingStates[review.id] ? (
                        <>
                          <span className="material-symbols-outlined text-sm animate-spin">refresh</span>
                          Generating...
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-sm">smart_toy</span>
                          AI Smart Reply
                        </>
                      )}
                    </button>
                    <button 
                      onClick={() => openManualReply(review.id)}
                      className="px-4 py-1.5 border border-slate-200 dark:border-slate-700 text-xs font-bold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-sm">edit</span>
                      Manual Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal pour les réponses */}
      {replyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">
                  {replyModal.type === 'ai' ? 'AI Generated Reply' : 'Manual Reply'}
                </h3>
                <button 
                  onClick={closeModal}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Original Review:</p>
                <p className="text-sm font-medium">
                  "{reviews.find(r => r.id === replyModal.reviewId)?.comment}"
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  - {reviews.find(r => r.id === replyModal.reviewId)?.authorName}, {reviews.find(r => r.id === replyModal.reviewId)?.createdAt}
                </p>
              </div>

              {replyModal.type === 'ai' ? (
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-primary">smart_toy</span>
                      <p className="text-sm font-bold text-primary">AI Suggested Reply</p>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {aiReplies[replyModal.reviewId]}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors">
                      Use This Reply
                    </button>
                    <button className="flex-1 py-2 border border-slate-200 dark:border-slate-700 text-sm font-bold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                      Regenerate
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <textarea
                    className="w-full p-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-sm resize-none"
                    rows={4}
                    placeholder="Type your reply here..."
                  />
                  <div className="flex gap-3">
                    <button className="flex-1 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors">
                      Post Reply
                    </button>
                    <button 
                      onClick={closeModal}
                      className="flex-1 py-2 border border-slate-200 dark:border-slate-700 text-sm font-bold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
