'use client';

import { useState } from 'react';
import { Star, TrendingUp, MessageSquare, Smile, Search, Bell, Settings, User, Send, Mail, Phone, Upload, ChevronDown } from 'lucide-react';

export default function ReviewsPage() {
  const [selectedFilter, setSelectedFilter] = useState('newest');

  const reviews = [
    {
      id: 1,
      initials: 'JD',
      name: 'Jane Doe',
      time: '2 days ago',
      rating: 5,
      comment: 'Absolutely fantastic coffee and atmosphere! The lavender cold brew was unique and delicious. Staff was very friendly and knowledgeable.',
      sentiment: 'POSITIVE',
      hasResponse: false
    },
    {
      id: 2,
      initials: 'SR',
      name: 'Sarah Rodriguez',
      time: '1 week ago',
      rating: 4,
      comment: 'Great place to work remotely. Good WiFi, plenty of seating, and excellent coffee. Could use more power outlets though.',
      sentiment: 'NEUTRAL',
      hasResponse: false
    },
    {
      id: 3,
      initials: 'MK',
      name: 'Mike Kelso',
      time: '2 weeks ago',
      rating: 5,
      comment: 'Best coffee shop in downtown! Their seasonal menu is always creative and the quality is consistent.',
      sentiment: 'POSITIVE',
      hasResponse: true,
      response: 'Thank you so much for your kind words! We work hard to maintain quality and creativity in everything we serve.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">ReviewManager AI</h1>
            </div>
            <nav className="flex space-x-8">
              <a href="/dashboard" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Dashboard</a>
              <a href="/reviews" className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium">Reviews</a>
              <a href="/posts/create" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">AI Posts</a>
              <a href="/insights" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Insights</a>
            </nav>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search reviews..."
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reputation Dashboard</h1>
          <p className="text-gray-600">Monitor your Google Business Profile performance and engage with customers.</p>
          
          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Request Review
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
              Sync GBP
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Total Reviews</h3>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">1,248</div>
            <div className="text-sm text-green-600">+12.4%</div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Average Rating</h3>
              <Star className="w-4 h-4 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">4.8</div>
            <div className="flex items-center space-x-1">
              <div className="text-sm text-green-600">+0.1</div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Response Rate</h3>
              <MessageSquare className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">92%</div>
            <div className="flex items-center space-x-2">
              <div className="text-sm text-green-600">+5%</div>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Sentiment Score</h3>
              <Smile className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">Positive</div>
            <div className="text-sm text-green-600">+3%</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Reviews */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Google Reviews</h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Sort by:</span>
                    <button
                      onClick={() => setSelectedFilter('newest')}
                      className="flex items-center space-x-1 text-sm text-gray-700 hover:text-gray-900"
                    >
                      <span>Newest First</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {reviews.map((review) => (
                  <div key={review.id} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {review.initials}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900">{review.name}</h4>
                            <p className="text-sm text-gray-500">{review.time}</p>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3">{review.comment}</p>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            review.sentiment === 'POSITIVE' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            AI {review.sentiment} SENTIMENT
                          </span>
                          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                            AI Suggest Reply
                          </button>
                        </div>
                        {review.hasResponse && (
                          <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                            <p className="text-sm font-medium text-gray-700 mb-1">YOUR RESPONSE</p>
                            <p className="text-sm text-gray-600">{review.response}</p>
                            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium mt-2">
                              Edit Response
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Cards */}
          <div className="space-y-6">
            {/* Review Booster */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-500" />
                <h3 className="text-lg font-semibold text-gray-900">Review Booster</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Get more 5-star reviews Send a direct link to your customers via SMS or Email to boost your ranking on Google.
              </p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700 flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-1" />
                    Email
                  </button>
                  <button className="flex-1 bg-green-600 text-white px-3 py-2 rounded-md text-sm hover:bg-green-700 flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-1" />
                    SMS
                  </button>
                </div>
                <button className="w-full bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm hover:bg-gray-200 flex items-center justify-center">
                  <Upload className="w-4 h-4 mr-1" />
                  Bulk Import List
                </button>
              </div>
            </div>

            {/* AI Sentiment Analysis */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-500" />
                <h3 className="text-lg font-semibold text-gray-900">AI Sentiment Analysis</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Positive Mentions</span>
                    <span className="font-medium">88%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Customer Service</span>
                    <span className="font-medium">94%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Pricing Fairness</span>
                    <span className="font-medium">62%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-blue-800">
                  <strong>AI Summary:</strong> Customers frequently praise your 'professionalism' and 'fast delivery'. Consider addressing pricing perceptions to improve the 62% score.
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=300&fit=crop"
                  alt="Map location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-sm font-medium">Oxford Street, London</p>
                    <p className="text-xs">Profile Visibility 100% Optimized</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">©2024 ReviewManager AI Dashboard. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Help Center</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

