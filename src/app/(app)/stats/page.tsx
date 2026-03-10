export default function StatsPage() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-semibold text-slate-900">Statistiques</h1>
        <p className="text-sm text-slate-500">
          Suivez les appels, clics itinéraire et vues de vos fiches Google
          Business.
        </p>
      </header>
      <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-500">
        Graphiques (Recharts/Chart.js) pour visualiser les performances par
        établissement et période.
      </div>
    </div>
  );
}

