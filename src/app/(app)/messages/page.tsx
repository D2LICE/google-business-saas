'use client';

import { useState } from 'react';
import { Search, Bell, Settings, BarChart3, MessageSquare, Phone, Users, Calendar, TrendingUp, MoreVertical, Reply, ArrowRight } from 'lucide-react';

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedNavItem, setSelectedNavItem] = useState('lead-center');

  const leads = [
    {
      id: 1,
      name: 'Jane Doe',
      contact: 'jane.doe@example.com',
      type: 'Message',
      dateTime: 'Today, 10:42 AM',
      status: 'NEEDS ACTION'
    },
    {
      id: 2,
      name: 'Mark Smith',
      contact: '+1 (555) 012-3456',
      type: 'Call',
      dateTime: 'Yesterday, 4:15 PM',
      status: 'REPLIED'
    },
    {
      id: 3,
      name: 'Alice Kim',
      contact: '+1 (555) 987-6543',
      type: 'Call',
      dateTime: 'Oct 24, 11:20 AM',
      status: 'MISSED'
    },
    {
      id: 4,
      name: 'Robert White',
      contact: 'robert.w@gmail.com',
      type: 'Message',
      dateTime: 'Oct 23, 9:00 AM',
      status: 'REPLIED'
    },
    {
      id: 5,
      name: 'Emma Miller',
      contact: 'emma.miller@outlook.com',
      type: 'Message',
      dateTime: 'Oct 22, 5:55 PM',
      status: 'NEEDS ACTION'
    }
  ];

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'lead-center', label: 'Lead Center', icon: Users },
    { id: 'message-inbox', label: 'Message Inbox', icon: MessageSquare },
    { id: 'call-logs', label: 'Call Logs', icon: Phone },
    { id: 'staffing-ai', label: 'Staffing AI', icon: Calendar }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'NEEDS ACTION':
        return 'text-red-600 bg-red-50';
      case 'REPLIED':
        return 'text-green-600 bg-green-50';
      case 'MISSED':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeIcon = (type: string) => {
    return type === 'Message' ? MessageSquare : Phone;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-900 mb-8">BusinessPulse AI</h1>
          
          {/* Navigation */}
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedNavItem(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedNavItem === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Google Profile Health */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Google Profile Health</span>
              <span className="text-sm font-bold text-green-600">85%</span>
            </div>
            <div className="text-xs text-gray-600 mb-2">Optimized</div>
            <div className="bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Lead & Message Center</h1>
                <p className="text-sm text-gray-600 mt-1">Manage customer interactions and track lead generation from your Google Business Profile.</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  Export Data
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  New Response
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Peak Interaction Hours */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Peak Interaction Hours</h3>
                <div className="flex items-center space-x-1 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">+14% Activity</span>
                </div>
              </div>
              
              {/* Bar Chart */}
              <div className="space-y-2">
                {[30, 45, 60, 35, 80, 65, 40, 55, 70, 50, 85, 75, 90, 60, 45, 70, 55, 40, 65, 50, 75, 60, 45, 80, 70, 55, 40, 65, 50, 35].map((height, index) => (
                  <div key={index} className="flex items-end space-x-1 h-8">
                    <div className="flex-1 bg-gray-200 rounded" style={{ height: `${height * 0.8}px` }}></div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between text-xs text-gray-600">
                <span>30 days ago</span>
                <span>Today</span>
              </div>
            </div>

            {/* Staffing AI Suggestion */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Staffing AI Suggestion</h3>
                <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                  AI Powered
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      !
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        <span className="text-yellow-600 font-bold">42% higher call volume</span> between 12pm - 2pm and 6pm - 7pm
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Assign at least 2 team members to manage Google Messages during these windows to keep response times under 5 mins.
                      </p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Auto-Scheduling
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg border border-gray-200 mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: 'all', label: 'All Leads', count: 24 },
                  { id: 'messages', label: 'Google Messages', count: 12 },
                  { id: 'calls', label: 'Call Logs', count: 12 }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                ))}
              </nav>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      CUSTOMER NAME
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      CONTACT INFO
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      TYPE
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      DATE & TIME
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      STATUS
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {leads.map((lead) => {
                    const TypeIcon = getTypeIcon(lead.type);
                    return (
                      <tr key={lead.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600">{lead.contact}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <TypeIcon className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-sm text-gray-600">{lead.type}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600">{lead.dateTime}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center space-x-2">
                            {lead.status === 'NEEDS ACTION' && (
                              <button className="text-blue-600 hover:text-blue-700 font-medium">
                                REPLY
                              </button>
                            )}
                            {lead.status === 'MISSED' && (
                              <button className="text-blue-600 hover:text-blue-700 font-medium">
                                CALL BACK
                              </button>
                            )}
                            {(lead.status === 'REPLIED' || lead.status === 'MISSED') && (
                              <button className="text-gray-400 hover:text-gray-600">
                                <MoreVertical className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
              <div className="text-sm text-gray-600">
                Showing 5 of 24 leads
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-500 hover:bg-gray-50">
                  Prev
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
