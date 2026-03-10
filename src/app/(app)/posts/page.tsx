export default function PostsPage() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-semibold text-slate-900">Posts IA</h1>
        <p className="text-sm text-slate-500">
          Générez des posts optimisés pour Google Business grâce à l&apos;IA.
        </p>
      </header>
      <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-500">
        Générateur de posts par type d&apos;activité (restaurant, garage,
        pharmacie, etc.) et calendrier de publication.
      </div>
    </div>
  );
}

