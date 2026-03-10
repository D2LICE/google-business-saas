interface LocationPageProps {
  params: { locationId: string };
}

export default function LocationDetailPage({ params }: LocationPageProps) {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-semibold text-slate-900">
          Fiche établissement
        </h1>
        <p className="text-sm text-slate-500">
          Détail et optimisation de la fiche Google Business.
        </p>
      </header>
      <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-500">
        Détails de la fiche <span className="font-mono">{params.locationId}</span>{" "}
        — infos, horaires, posts, photos (à connecter à l’API).
      </div>
    </div>
  );
}

