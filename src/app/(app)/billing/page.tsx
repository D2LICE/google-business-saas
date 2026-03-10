export default function BillingPage() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-semibold text-slate-900">
          Abonnement & paiement
        </h1>
        <p className="text-sm text-slate-500">
          Gérez votre offre, vos factures et vos renouvellements Stripe.
        </p>
      </header>
      <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-500">
        Récapitulatif du plan (15–40€/mois), statut d&apos;abonnement et lien
        vers le portail Stripe.
      </div>
    </div>
  );
}

