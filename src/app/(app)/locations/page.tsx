'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { authApi, locationsApi } from '@/lib/api';

export const dynamic = 'force-dynamic';

export default function LocationsPage() {
  try {
    const { data: user } = useQuery({
      queryKey: ['me'],
      queryFn: () => authApi.me().then((r) => r.data),
      retry: false,
    });
    const orgId = user?.organizations?.[0]?.id;

    const { data: locations, isLoading } = useQuery({
      queryKey: ['locations', orgId],
      queryFn: () => locationsApi.list(orgId).then((r) => r.data),
      enabled: !!orgId,
    });

    const list = (Array.isArray(locations) ? locations : []) as { id: string; name: string; address?: string; phone?: string }[];

    return (
      <div className="space-y-4">
        <header>
          <h1 className="text-2xl font-semibold text-slate-900">
            Fiches Google Business
          </h1>
          <p className="text-sm text-slate-500">
            Gérez vos établissements, horaires, photos et informations pratiques.
          </p>
        </header>
        {isLoading ? (
          <div className="rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-500">
            Chargement...
          </div>
        ) : list.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
            <p className="text-sm text-slate-500">
              Aucune fiche Google Business. Connectez votre compte Google pour importer vos lieux.
            </p>
            <a
              href="/dashboard"
              className="mt-4 inline-block text-sm font-medium text-sky-600 hover:underline"
            >
              Connecter Google Business
            </a>
          </div>
        ) : (
          <ul className="space-y-3">
            {list.map((loc) => (
              <li
                key={loc.id}
                className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-300"
              >
                <Link href={`/locations/${loc.id}`} className="block">
                  <p className="font-medium text-slate-900">{loc.name}</p>
                  {loc.address && (
                    <p className="text-sm text-slate-500">{loc.address}</p>
                  )}
                  {loc.phone && (
                    <p className="text-sm text-slate-500">{loc.phone}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  } catch (error) {
    return (
      <div className="space-y-4">
        <header>
          <h1 className="text-2xl font-semibold text-slate-900">
            Fiches Google Business
          </h1>
          <p className="text-sm text-slate-500">
            Gérez vos établissements, horaires, photos et informations pratiques.
          </p>
        </header>
        <div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
          <p className="text-sm text-slate-500">
            Chargement des données...
          </p>
        </div>
      </div>
    );
  }
}
