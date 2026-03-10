'use client';

import { useState } from 'react';
import { Sparkles, Upload, Image as ImageIcon, ExternalLink, ArrowRight, Calendar, Save } from 'lucide-react';

export default function CreatePostPage() {
  const [postType, setPostType] = useState<'whats-new' | 'offer' | 'event'>('whats-new');
  const [content, setContent] = useState('');
  const [tone, setTone] = useState('Friendly & Casual');
  const [generatedContent, setGeneratedContent] = useState('');

  const postTypes = [
    { id: 'whats-new', label: "What's New" },
    { id: 'offer', label: 'Offer' },
    { id: 'event', label: 'Event' },
  ];

  const tones = [
    'Friendly & Casual',
    'Professional',
    'Enthusiastic',
    'Informative',
    'Promotional',
  ];

  const suggestedImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop', alt: 'Cafe interior' },
    { id: 2, url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop', alt: 'Coffee and pastry' },
  ];

  const handleGenerateContent = () => {
    // Mock AI content generation
    const mockContent = "✨ Exciting News! Our new Summer Menu is finally here! ☕ Come try our signature Lavender Cold Brew and fresh Seasonal Fruit Bowls. Perfect for those warm morning starts. We've also added more vegan-friendly options to our breakfast lineup! Stop by today and mention this post for a free upgrade to a large coffee. See you at the cafe! 🧡";
    setGeneratedContent(mockContent);
  };

  const getPostTypeLabel = (type: string) => {
    switch (type) {
      case 'whats-new':
        return "What's New";
      case 'offer':
        return 'Offer';
      case 'event':
        return 'Event';
      default:
        return "What's New";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">AI Post Creator</h1>
            </div>
            <nav className="flex space-x-8">
              <a href="/dashboard" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Dashboard</a>
              <a href="/posts" className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium">Posts</a>
              <a href="/reviews" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Reviews</a>
              <a href="/insights" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Insights</a>
            </nav>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search posts..."
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Upgrade Plan
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Create New Post Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Create New Post</h2>
            <p className="text-sm text-gray-600 mb-6">Generate engaging content for Main Street Cafe using AI.</p>
            
            {/* Post Type Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Post Type</label>
              <div className="flex space-x-2">
                {postTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setPostType(type.id as any)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      postType === type.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                What are you sharing?
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="e.g. We're launching a new summer menu featuring organic fruit bowls and cold brew specials..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
              />
            </div>

            {/* Tone Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Tone of Voice</label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {tones.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Generate Content Button */}
            <div className="mb-6">
              <button
                onClick={handleGenerateContent}
                className="flex items-center space-x-2 w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Sparkles className="w-5 h-5" />
                <span>Generate Content</span>
              </button>
            </div>

            {/* Generated Content Display */}
            {generatedContent && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Generated Content:</h4>
                <p className="text-sm text-gray-700">{generatedContent}</p>
                <button
                  onClick={() => setContent(generatedContent)}
                  className="mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Use This Content
                </button>
              </div>
            )}

            {/* Suggested Images */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Suggested Images</label>
              <div className="flex space-x-4">
                {suggestedImages.map((image) => (
                  <div key={image.id} className="relative group">
                    <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-colors rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
                <button className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors">
                  <Upload className="w-6 h-6 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Live Preview Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">LIVE PREVIEW</h3>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Header */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Main Street Cafe</h4>
                    <p className="text-sm text-gray-500">Published via AI Creator • Just now</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop"
                  alt="Post image"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {getPostTypeLabel(postType)}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="text-sm text-gray-700 leading-relaxed mb-4">
                  {generatedContent || "Your post content will appear here..."}
                </div>
                
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button className="flex items-center space-x-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
            <Save className="w-5 h-5" />
            <span>Save as Draft</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            <Calendar className="w-5 h-5" />
            <span>Schedule Post</span>
          </button>
        </div>
      </main>
    </div>
  );
}
