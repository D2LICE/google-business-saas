'use client';

import { useState } from 'react';
import { Sparkles, Upload, Image as ImageIcon } from 'lucide-react';

interface PostCreatorProps {
  onGenerateContent: (prompt: string) => void;
  generatedContent?: string;
}

export function PostCreator({ onGenerateContent, generatedContent }: PostCreatorProps) {
  const [postType, setPostType] = useState<'whats-new' | 'offer' | 'event'>('whats-new');
  const [content, setContent] = useState('');
  const [tone, setTone] = useState('Friendly & Casual');

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
    { id: 1, url: '/api/placeholder/300/200', alt: 'Cafe interior' },
    { id: 2, url: '/api/placeholder/300/200', alt: 'Coffee and pastry' },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Create New Post</h2>
      
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
          onClick={() => onGenerateContent(content)}
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
  );
}
