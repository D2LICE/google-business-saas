'use client';

import React from 'react';
import { PanelTopDashed } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo / Nom de l'application */}
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <PanelTopDashed className="text-white" size={20} />
            </div>
            <div>
              <p className="text-black font-bold">SMB Manager</p>
              <p className="text-xs text-gray-500">Google Profile Sync</p>
            </div>
          </div>
        </div>

        {/* Menu Navigation */}
        <nav className="flex-1 px-4">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 mb-1">
            
            <div>
              <span className="text-sm font-medium">Dashboard</span>
              
            </div>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 mb-1">
            
            <div>
              <span className="text-sm font-medium">Reputation</span>
              
            </div>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 mb-1">
            
            <div>
              <span className="text-sm font-medium">AI Post Gen</span>
              
            </div>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 mb-1">
            
            <div>
              <span className="text-sm font-medium">Insights</span>
              
            </div>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50">
            
            <div>
              <span className="text-sm font-medium">Settings</span>
              
            </div>
          </a>
        </nav>

        {/* Plan */}
        <div className="p-4 border-t border-gray-200">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-xs font-bold text-blue-600 mb-2">CURRENT PLAN</p>
            <p className="text-sm font-bold mb-1">Growth Pro</p>
            <p className="text-xs text-gray-500 mb-3">Next billing on Oct 12</p>
            <button className="w-full py-2 bg-blue-600 text-white text-xs font-bold rounded-lg">
              Upgrade Plan
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header supprimé - contenu du dashboard directement */}

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Title Section */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Dashboard Overview</h2>
              <p className="text-lg text-gray-600 mt-1">Showing data for <span className="text-blue-600 font-semibold">The Gourmet Bistro, NY</span></p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium">
                <span className="material-symbols-outlined">sync</span>
                Sync Data
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
                <span className="material-symbols-outlined">add</span>
                Create Post
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Views Card */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-lg">👁️</span>
                </div>
                <span className="text-green-600 text-xs font-bold bg-green-100 px-2 py-1 rounded-full">+12.4%</span>
              </div>
              <p className="text-gray-500 text-sm font-medium mb-1">Total Views</p>
              <h3 className="text-3xl font-extrabold text-gray-900 mt-1">42,892</h3>
              <div className="mt-4 h-12">
                <svg viewBox="0 0 100 20" className="w-full h-full">
                  <path d="M0,15 Q10,5 20,12 T40,8 T60,15 T80,5 T100,12 L100,20 L0,20 Z" fill="#3B82F6" opacity="0.3"/>
                  <path d="M0,15 Q10,5 20,12 T40,8 T60,15 T80,5 T100,12" fill="none" stroke="#3B82F6" strokeWidth="2"/>
                </svg>
              </div>
            </div>

            {/* Calls Card */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-yellow-600 text-lg">📞</span>
                </div>
                <span className="text-green-600 text-xs font-bold bg-green-100 px-2 py-1 rounded-full">+5.2%</span>
              </div>
              <p className="text-gray-500 text-sm font-medium mb-1">Total Calls</p>
              <h3 className="text-3xl font-extrabold text-gray-900 mt-1">1,204</h3>
              <div className="mt-4 h-12">
                <svg viewBox="0 0 100 20" className="w-full h-full">
                  <path d="M0,12 Q15,8 30,10 T50,5 T70,12 T100,8 L100,20 L0,20 Z" fill="#EAB308" opacity="0.3"/>
                  <path d="M0,12 Q15,8 30,10 T50,5 T70,12 T100,8" fill="none" stroke="#EAB308" strokeWidth="2"/>
                </svg>
              </div>
            </div>

            {/* Directions Card */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">📍</span>
                </div>
                <span className="text-red-600 text-xs font-bold bg-red-100 px-2 py-1 rounded-full">-2.1%</span>
              </div>
              <p className="text-gray-500 text-sm font-medium mb-1">Directions</p>
              <h3 className="text-3xl font-extrabold text-gray-900 mt-1">843</h3>
              <div className="mt-4 h-12">
                <svg viewBox="0 0 100 20" className="w-full h-full">
                  <path d="M0,5 Q20,15 40,8 T70,15 T100,5 L100,20 L0,20 Z" fill="#1E3A8A" opacity="0.3"/>
                  <path d="M0,5 Q20,15 40,8 T70,15 T100,5" fill="none" stroke="#1E3A8A" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="grid grid-cols-3 gap-8">
            {/* Reviews Column */}
            <div className="col-span-2">
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Reviews</h3>
                    <a href="#" className="text-blue-600 text-sm">View All</a>
                  </div>
                </div>
                
                {/* Review 1 */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-lg font-bold text-gray-900">Sarah Jenkins</p>
                          <div className="flex items-center gap-2">
                            <div className="flex text-yellow-400">
                              <span className="material-symbols-outlined text-sm">star</span>
                              <span className="material-symbols-outlined text-sm">star</span>
                              <span className="material-symbols-outlined text-sm">star</span>
                              <span className="material-symbols-outlined text-sm">star</span>
                              <span className="material-symbols-outlined text-sm">star</span>
                            </div>
                            <span className="text-xs text-gray-500">2 hours ago</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm mb-3">The food was absolutely incredible! Best bistro in the city. The service was top notch and the atmosphere was perfect for our anniversary.</p>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded-lg">AI Smart Reply</button>
                        <button className="px-3 py-1 border border-gray-300 text-gray-700 text-xs rounded-lg">Manual Reply</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-lg font-bold text-gray-900">Mark Thompson</p>
                          <div className="flex items-center gap-2">
                            <div className="flex text-yellow-400">
                              <span className="material-symbols-outlined text-sm">star</span>
                              <span className="material-symbols-outlined text-sm">star</span>
                              <span className="material-symbols-outlined text-sm">star</span>
                              <span className="material-symbols-outlined text-sm">star</span>
                              <span className="material-symbols-outlined text-sm">star</span>
                            </div>
                            <span className="text-xs text-gray-500">1 day ago</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm mb-3">Great experience overall. The duck confit was a bit salty but everything else was excellent. Will return!</p>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded-lg">AI Smart Reply</button>
                        <button className="px-3 py-1 border border-gray-300 text-gray-700 text-xs rounded-lg">Manual Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Posts Section */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {/* AI Suggested Post */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">AI Suggested Post</h3>
                  <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <p className="text-sm">🍽️ Discover our new seasonal menu at The Gourmet Bistro! Fresh ingredients, bold flavors, and a cozy atmosphere await you. Reserve your table today!</p>
                  </div>
                  <button className="w-full py-2 bg-blue-600 text-white text-sm font-medium rounded-lg">Publish Post</button>
                </div>

                {/* Active Posts */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Active Posts</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">Holiday Hours Update</p>
                        <p className="text-xs text-gray-500">Posted 3 days ago</p>
                      </div>
                      <p className="text-sm text-gray-600">1.2k views</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Profile Health */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Profile Health</h3>
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-4">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle cx="64" cy="64" r="56" stroke="#E5E7EB" strokeWidth="12" fill="none"/>
                      <circle cx="64" cy="64" r="56" stroke="#3B82F6" strokeWidth="12" fill="none" strokeDasharray="351.86" strokeDashoffset="63.33" strokeLinecap="round"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-extrabold text-gray-900">82</span>
                    </div>
                  </div>
                  <p className="text-green-600 font-medium mb-2">Almost optimized!</p>
                  <p className="text-sm text-gray-600 text-center">Complete 3 more actions to reach 100% visibility.</p>
                </div>
              </div>

              {/* Pending Actions */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Pending Actions</h2>
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">3 Tasks</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-yellow-500">warning</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Missing Photos</p>
                      <p className="text-xs text-gray-500 mb-2">Add 3+ exterior photos to boost trust.</p>
                      <button className="text-xs text-blue-600 font-medium">Add Now</button>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500">info</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Update Business Hours</p>
                      <p className="text-xs text-gray-500 mb-2">Upcoming holiday may affect hours.</p>
                      <button className="text-xs text-blue-600 font-medium">Check Hours</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
