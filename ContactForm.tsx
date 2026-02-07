import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, Mail, User, MessageSquare, PenTool } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-gamma-card border border-gray-800 rounded-2xl p-8 relative overflow-hidden group">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/10 transition-colors duration-700"></div>

      <div className="relative z-10 mb-8">
        <h3 className="text-2xl font-display font-bold text-white mb-2 flex items-center gap-2">
          <MessageSquare className="text-purple-500 w-6 h-6" />
          Send a <span className="text-purple-400">Message</span>
        </h3>
        <p className="text-gray-400 text-sm">
          Open for collaborations, AI consulting, or just a tech chat.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Your Name</label>
            <div className="relative">
              <User className="absolute left-4 top-3.5 text-gray-600 w-4 h-4" />
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="John Doe"
                className="w-full bg-gray-900/50 border border-gray-800 rounded-xl py-3 pl-10 pr-4 text-gray-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-700"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 text-gray-600 w-4 h-4" />
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="john@example.com"
                className="w-full bg-gray-900/50 border border-gray-800 rounded-xl py-3 pl-10 pr-4 text-gray-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-700"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Subject</label>
            <div className="relative">
              <PenTool className="absolute left-4 top-3.5 text-gray-600 w-4 h-4" />
              <input 
                type="text" 
                required
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                placeholder="Project Collaboration"
                className="w-full bg-gray-900/50 border border-gray-800 rounded-xl py-3 pl-10 pr-4 text-gray-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-700"
              />
            </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Message</label>
          <textarea 
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            placeholder="Tell me about your idea..."
            className="w-full bg-gray-900/50 border border-gray-800 rounded-xl py-3 px-4 text-gray-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-700 resize-none"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status !== 'idle'}
          className={`w-full py-4 rounded-xl font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
            status === 'success' 
              ? 'bg-emerald-600 text-white' 
              : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-900/20'
          }`}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Sending...
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle2 className="w-5 h-5" /> Message Sent Successfully
            </>
          ) : (
            <>
              Send Message <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};