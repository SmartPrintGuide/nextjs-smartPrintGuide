"use client"

import React, { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How do I add a printer to my computer?",
      answer: "On most Windows and macOS computers, you can add a printer through the system's printer settings. Make sure the printer is powered on and connected through the appropriate Wi-Fi, network, or USB connection before attempting to add it."
    },
    {
      question: "How do I connect my printer to my computer?",
      answer: "The exact process depends on whether you're using a wireless, network, or USB connection. For wireless setup, your printer and computer generally need access to the appropriate network before the printer can be added through your computer settings."
    },
    {
      question: "How do I connect my printer to Wi-Fi?",
      answer: "Open the printer's network or wireless settings, select the appropriate Wi-Fi network, and follow the printer manufacturer's setup instructions. The exact process varies by printer model."
    },
    {
      question: "Why is my printer offline?",
      answer: "A printer can appear offline because of lost network connectivity, USB connection problems, incorrect settings, print queue issues, network changes, or communication problems between the printer and computer."
    },
    {
      question: "How can I fix a printer showing offline?",
      answer: "Start by checking that the printer is turned on and connected. Confirm the Wi-Fi or USB connection, check the printer status on your computer, and review the print queue. Additional troubleshooting may be necessary if the printer continues to show offline."
    },
    {
      question: "Why is my printer not connecting to my computer?",
      answer: "Possible causes include network problems, incorrect Wi-Fi configuration, USB issues, missing or outdated software, printer settings, or the computer being unable to discover the printer."
    },
    {
      question: "Can you help with wireless printer setup?",
      answer: "Yes. Assistance can cover common wireless setup and connectivity steps, including connecting a printer to Wi-Fi, adding it to a computer, and troubleshooting common connection problems."
    },
    {
      question: "Can you help me set up a new printer?",
      answer: "Yes. Printer setup assistance can cover connection, computer configuration, driver guidance, wireless setup, and basic testing."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Find quick answers to common printer setup, Wi-Fi configuration, and troubleshooting inquiries.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-semibold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm transition-transform duration-200 ${isOpen ? 'rotate-45 bg-blue-50 text-blue-600' : ''}`}>
                    +
                  </span>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default FAQ