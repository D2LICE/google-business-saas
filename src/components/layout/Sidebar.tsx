'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Reputation', href: '/reputation', icon: '⭐' },
  { name: 'AI Post Gen', href: '/posts/create', icon: '✏️' },
  { name: 'Lead Center', href: '/leads', icon: '💬' },
  { name: 'Insights', href: '/insights', icon: '📈' },
  { name: 'Settings', href: '/settings', icon: '⚙️' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <div>
            <h1 className="font-bold text-gray-900">SMB Manager</h1>
            <p className="text-xs text-gray-500">Google Profile Sync</p>
          </div>
        </div>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-600">Current Plan</span>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
              Growth Pro
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-3">Next billing on Oct 12</p>
          <button className="w-full bg-blue-600 text-white text-xs font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Upgrade Plan
          </button>
        </div>
      </div>
    </div>
  );
}
