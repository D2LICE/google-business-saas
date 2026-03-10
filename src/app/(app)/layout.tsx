import Link from "next/link";
import type { ReactNode } from "react";
import { Search, Bell, Settings, User } from 'lucide-react';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/dashboard" className="text-xl font-bold text-gray-900">
                  BusinessPulse AI
                </Link>
              </div>
              
              <nav className="hidden md:flex space-x-8">
                <Link
                  href="/dashboard"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/messages"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Messages
                </Link>
                <Link
                  href="/reviews"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Reviews
                </Link>
                <Link
                  href="/posts/create"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Posts
                </Link>
                <Link
                  href="/insights"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Insights
                </Link>
              </nav>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
                
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Bell className="w-5 h-5" />
                </button>
                
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
                
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </>
  );
}

