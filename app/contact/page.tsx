'use client';
import React, { useState } from 'react';
import { Mail, Send, MessageCircle, Coffee, Github, Linkedin, Twitter, Instagram, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Drop us a line anytime",
      action: "outlercodie.com@gmail.com",
      link: "mailto:outlercodie.com@gmail.com",
      color: "purple"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Discord",
      description: "Join our community",
      action: "Chat with us",
      link: "https://discord.gg/FFEZqzGwtG",
      color: "blue"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Coffee Chat",
      description: "Let's discuss over coffee",
      action: "Schedule a call",
      link: "https://cal.com/ghanshyam",
      color: "amber"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      username: "@IronIndustry",
      link: "https://github.com/ghanshyam2005singh/",
      color: "white"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      username: "@Iron-Industry",
      link: "https://www.linkedin.com/company/iron-industry-tech/",
      color: "blue"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      username: "@Iron-Industry",
      link: "https://x.com/iron_industry",
      color: "sky"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      username: "@iron.industry",
      link: "https://instagram.com/outler_codie",
      color: "pink"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-6">
          {/* Terminal Window */}
          <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-700 max-w-6xl mx-auto mb-16">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 p-4 border-b border-slate-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-slate-400 text-sm ml-4">~/contact-us</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-8 font-mono">
              <div className="text-green-400 mb-2">$ echo &quot;Let&#39;s build something amazing together!&quot;</div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-sans">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h1>
              <div className="text-slate-300 text-lg md:text-xl mb-8 max-w-4xl">
                Got an idea? Need help with a project? Just want to chat about tech? 
                We&apos;re always excited to connect with fellow builders and dreamers. 💬
              </div>
              
              <div className="text-purple-400 mb-2">$ status: online && ready_to_collaborate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative z-10 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <div className="text-purple-400 mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{method.description}</p>
                <div className="text-purple-400 font-semibold text-sm">{method.action}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative z-10 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project or idea..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Quick Info */}
              <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Let&#39;s Connect</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-slate-300">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span>India (Remote Friendly)</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <span>IST (GMT+5:30)</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>Usually reply within 24h</span>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-slate-900/50 border border-slate-600 rounded-lg hover:border-purple-500 transition-all group"
                      >
                        <div className="text-purple-400">
                          {social.icon}
                        </div>
                        <div>
                          <div className="text-white font-medium">{social.name}</div>
                          <div className="text-slate-400 text-sm">{social.username}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h4 className="text-lg font-semibold text-white mb-4">Quick Questions?</h4>
                <div className="space-y-3 text-sm">
                  <div className="text-slate-300">
                    <span className="text-purple-400">💼 Business inquiries:</span> outlercodie.com@gmail.com
                  </div>
                  <div className="text-slate-300">
                    <span className="text-purple-400">🐛 Bug reports:</span> Use GitHub issues
                  </div>
                  <div className="text-slate-300">
                    <span className="text-purple-400">💡 Feature requests:</span> Discord or GitHub
                  </div>
                  <div className="text-slate-300">
                    <span className="text-purple-400">🎯 Careers:</span> outlercodie.com@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}