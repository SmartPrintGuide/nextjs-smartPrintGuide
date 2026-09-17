"use client"

import React from 'react'

function ButtomLast() {
  const handleOpenChat = () => {
    if (typeof window !== 'undefined' && window.jivo_api && typeof window.jivo_api.open === 'function') {
      window.jivo_api.open();
    }
  };

  const issues = [
    {
      title: "Add Printer to Computer",
      description: "Get help adding and configuring your printer.",
      icon: "💻"
    },
    {
      title: "Connect Printer to Computer",
      description: "Troubleshoot computer and printer connection problems.",
      icon: "🔌"
    },
    {
      title: "Connect Printer to Wi-Fi",
      description: "Get assistance with wireless printer connectivity.",
      icon: "📶"
    },
    {
      title: "Printer Offline Fix",
      description: "Troubleshoot a printer displaying an offline status.",
      icon: "🛠️"
    },
    {
      title: "Printer Not Connecting",
      description: "Identify common printer connection problems.",
      icon: "❌"
    },
    {
      title: "Printer Showing Offline",
      description: "Check connectivity and configuration issues.",
      icon: "⚠️"
    }
  ]

  return (
    <div className="bg-slate-200 py-16 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#2462e8]/10 text-[#2462e8] uppercase tracking-wider">
            Expert Support
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Get Help With Your Printer
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Don't let a printer connection or setup problem interrupt what you're trying to do. Get assistance with printer setup, Wi-Fi connectivity, computer connections, offline printer issues, printing problems, and other common printer troubleshooting needs.
          </p>
        </div>

        {/* Selection Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#2462e8]">
              Select Your Printer Issue
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {issues.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:border-[#2462e8] hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2462e8]/10 border border-[#2462e8]/20 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 group-hover:text-[#2462e8] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              
              </div>
            ))}
          </div>
        </div>

        {/* Action Button CTA */}
        <div className="text-center pt-4">
          <button 
            onClick={handleOpenChat}
            style={{ backgroundColor: '#2462e8' }}
            className="px-8 py-4 text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all transform hover:-translate-y-0.5"
          >
            Get Printer Help Now
          </button>
        </div>

      </div>
    </div>
  )
}

export default ButtomLast