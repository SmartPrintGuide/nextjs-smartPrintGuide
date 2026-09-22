"use client"

import React from 'react'

function ButtomContent1() {
  const handleOpenChat = () => {
    if (typeof window !== 'undefined' && window.jivo_api && typeof window.jivo_api.open === 'function') {
      window.jivo_api.open();
    }
  };

  return (
    <div className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-800 text-[15px] sm:text-base">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section 1: Image Left (35%), Content Right (65%) */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-[35%] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white aspect-4/3 flex items-center justify-center">
              <img 
                src="/offline-printer.jpg" 
                alt="Printer Setup Help for Connection, Wi-Fi & Offline Issues" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-[65%] space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
              Printer Setup Help for Connection, Wi-Fi & Offline Issues
            </h2>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              Having trouble setting up or connecting your printer? Get help with common printer setup, Wi-Fi connection, computer connection, and offline issues.
            </p>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              Whether you need to add a printer to a computer, connect a printer to Wi-Fi, or troubleshoot a printer showing offline, our printer help service can guide you through the appropriate setup and troubleshooting steps.
            </p>

            <div className="space-y-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Need Printer Setup Help?</h3>
              <p className="text-sm text-slate-600">Choose your printer issue below to get started.</p>
            </div>

            <div className="pt-1">
              <button 
                onClick={handleOpenChat}
                style={{ backgroundColor: '#2462e8' }}
                className="px-5 py-2.5 text-white text-sm font-bold rounded-xl shadow-md hover:opacity-90 transition-all"
              >
                Get Printer Help
              </button>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-slate-200"></div>

        {/* Section 2: Image Right (35%), Content Left (65%) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="w-full lg:w-[35%] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white aspect-4/3 flex items-center justify-center">
              <img 
                src="/printer-setup-help.jpg" 
                alt="Printer Setup & Connection Help" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-[65%] space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
              Printer Setup & Connection Help
            </h2>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              Printer setup can sometimes become difficult because of Wi-Fi settings, computer configuration, outdated drivers, connection problems, or incorrect printer settings. Get help identifying and resolving common setup and connectivity issues on compatible Windows and macOS computers.
            </p>

            <div className="space-y-2 pt-1 border-t border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">Add Printer to Computer</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Need to add a printer to your computer? Get help checking the connection, adding the printer through your computer settings, selecting the appropriate printer, and completing the setup process.
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Common situations include:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[15px] text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>New printer not appearing on the computer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Computer cannot detect the printer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Printer was removed and needs to be added again</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Wireless printer is not appearing</span>
                </li>
                <li className="flex items-start gap-2 sm:col-span-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Printer is installed but unavailable for printing</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button 
                onClick={handleOpenChat}
                style={{ backgroundColor: '#2462e8' }}
                className="px-5 py-2.5 text-white text-sm font-bold rounded-xl shadow-md hover:opacity-90 transition-all"
              >
                Help Me Add My Printer
              </button>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-slate-200"></div>

        {/* Section 3: Image Left (35%), Content Right (65%) */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-[35%] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white aspect-4/3 flex items-center justify-center">
              <img 
                src="/connect-printer-computer.jpg" 
                alt="Connect Printer to Computer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-[65%] space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
              Connect Printer to Computer
            </h2>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              If your computer isn't detecting your printer, the connection between the devices may need to be checked or configured.
            </p>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              We can help troubleshoot common issues when you need to connect a printer to a computer, including wireless and USB-connected printers.
            </p>

            <div className="space-y-1.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Assistance may include checking:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[15px] text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Printer and computer connectivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Wi-Fi network connection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>USB connection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Printer settings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Computer printer settings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Available printer drivers</span>
                </li>
                <li className="flex items-start gap-2 sm:col-span-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Default printer configuration</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button 
                onClick={handleOpenChat}
                style={{ backgroundColor: '#2462e8' }}
                className="px-5 py-2.5 text-white text-sm font-bold rounded-xl shadow-md hover:opacity-90 transition-all"
              >
                Connect My Printer
              </button>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-slate-200"></div>

        {/* Section 4: Image Right (35%), Content Left (65%) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="w-full lg:w-[35%] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white aspect-4/3 flex items-center justify-center">
              <img 
                src="/connect-printer-to-wifi.webp" 
                alt="Connect Printer to Wi-Fi" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-[65%] space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
              Connect Printer to Wi-Fi
            </h2>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              Trying to connect your printer to Wi-Fi? Wireless printer setup usually requires your printer and computer to communicate through the correct network. Incorrect network credentials, changed router settings, weak connectivity, or configuration problems can prevent the printer from connecting.
            </p>

            <div className="space-y-1.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Get help with:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[15px] text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Connecting a new printer to Wi-Fi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Reconnecting a printer after changing routers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Connecting after changing the Wi-Fi password</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Finding the printer on your wireless network</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Troubleshooting failed wireless connections</span>
                </li>
                <li className="flex items-start gap-2 sm:col-span-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Connecting the computer and printer to the appropriate network</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button 
                onClick={handleOpenChat}
                style={{ backgroundColor: '#2462e8' }}
                className="px-5 py-2.5 text-white text-sm font-bold rounded-xl shadow-md hover:opacity-90 transition-all"
              >
                Get Wi-Fi Printer Help
              </button>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-slate-200"></div>

        {/* Section 5: Image Left (35%), Content Right (65%) */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-[35%] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white aspect-4/3 flex items-center justify-center">
              <img 
                src="/printer-not-connecting.webp" 
                alt="Printer Not Connecting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-[65%] space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
              Printer Not Connecting?
            </h2>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              A printer not connecting can be caused by several different issues. The problem may involve the printer, computer, wireless network, USB connection, driver, or device settings.
            </p>

            <div className="space-y-1.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Common symptoms include:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[15px] text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Computer cannot find the printer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Printer cannot connect to Wi-Fi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Wireless printer keeps disconnecting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Printer appears unavailable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Printer is connected but won't print</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Printer disappears from the computer</span>
                </li>
                <li className="flex items-start gap-2 sm:col-span-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Connection fails during printer setup</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              We can help you identify the likely cause and work through the relevant troubleshooting steps.
            </p>

            <div className="pt-2">
              <button 
                onClick={handleOpenChat}
                style={{ backgroundColor: '#2462e8' }}
                className="px-5 py-2.5 text-white text-sm font-bold rounded-xl shadow-md hover:opacity-90 transition-all"
              >
                Troubleshoot Printer Connection
              </button>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-slate-200"></div>

        {/* Section 6: Image Right (35%), Content Left (65%) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="w-full lg:w-[35%] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white aspect-4/3 flex items-center justify-center">
              <img 
                src="/printer-offline.webp" 
                alt="Printer Offline Fix" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-[65%] space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
              Printer Offline Fix
            </h2>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              Is your printer connected but displaying an Offline status? A printer may appear offline even when it is turned on. This can happen because of communication problems, network changes, print queue issues, incorrect settings, or a lost connection between the printer and computer.
            </p>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              Get help checking common causes and finding an appropriate printer offline fix.
            </p>

            <div className="space-y-1.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Troubleshooting may include:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[15px] text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Checking printer connectivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Checking Wi-Fi or USB connections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Reviewing printer status</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Clearing stuck print jobs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Checking the default printer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Reconnecting the printer</span>
                </li>
                <li className="flex items-start gap-2 sm:col-span-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Reviewing relevant printer and computer settings</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button 
                onClick={handleOpenChat}
                style={{ backgroundColor: '#2462e8' }}
                className="px-5 py-2.5 text-white text-sm font-bold rounded-xl shadow-md hover:opacity-90 transition-all"
              >
                Fix Printer Offline Issue
              </button>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-slate-200"></div>

        {/* Section 7: Image Left (35%), Content Right (65%) */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-[35%] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white aspect-4/3 flex items-center justify-center">
              <img 
                src="/why-offline-printer.webp" 
                alt="Why Is My Printer Offline" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-[65%] space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
              Why Is My Printer Offline?
            </h2>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              If you're asking “Why is my printer offline?”, there isn't always one single cause. Your printer may show offline when your computer cannot communicate with it correctly.
            </p>

            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">Lost Wi-Fi connection</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">The printer may have disconnected from your wireless network.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">Different networks</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Your computer and printer may be connected to different Wi-Fi networks.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">Connection problem</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">A wireless or USB connection may have been interrupted.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">Printer settings</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Certain computer or printer settings may prevent normal communication.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">Print queue problems</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">A stuck print job can sometimes interfere with printing.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">Driver or software issues</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Missing, outdated, or incorrectly configured printer software can affect communication.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1 sm:col-span-2">
                  <h4 className="text-sm font-bold text-slate-900">Network changes</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Changing your router, Wi-Fi name, password, or network configuration can disconnect a previously configured printer.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={handleOpenChat}
                style={{ backgroundColor: '#2462e8' }}
                className="px-5 py-2.5 text-white text-sm font-bold rounded-xl shadow-md hover:opacity-90 transition-all"
              >
                Check My Printer
              </button>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-slate-200"></div>

        {/* Section 8: Image Right (35%), Content Left (65%) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="w-full lg:w-[35%] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white aspect-4/3 flex items-center justify-center">
              <img 
                src="/offline-printer.jpg" 
                alt="Printer Showing Offline" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-[65%] space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
              Printer Showing Offline?
            </h2>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              If your printer is showing offline, start by confirming that it is powered on and properly connected.
            </p>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              For wireless printers, check whether the printer is connected to the expected Wi-Fi network. For USB printers, check the cable and computer connection.
            </p>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              If the printer continues to display an offline status, additional troubleshooting may be required. Get help checking the connection and configuration to determine why the printer is unavailable.
            </p>

            <div className="pt-2">
              <button 
                onClick={handleOpenChat}
                style={{ backgroundColor: '#2462e8' }}
                className="px-5 py-2.5 text-white text-sm font-bold rounded-xl shadow-md hover:opacity-90 transition-all"
              >
                Get Offline Printer Help
              </button>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-slate-200"></div>

        {/* Section 9: Image Left (35%), Content Right (65%) */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-[35%] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white aspect-4/3 flex items-center justify-center">
              <img 
                src="/printer-setup-help-hai.webp" 
                alt="Printer Setup Help" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-[65%] space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
              Printer Setup Help
            </h2>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              Setting up a new printer involves more than simply turning it on. Depending on your printer and computer, you may need to configure the network connection, add the device to your operating system, and install appropriate software or drivers.
            </p>

            <div className="space-y-1.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Our printer setup help covers common setup tasks such as:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[15px] text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>New printer setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Add printer to computer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Connect printer to computer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Connect printer to Wi-Fi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Wireless printer setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>USB printer connection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Printer driver guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Default printer configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Printer offline troubleshooting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Printer connection troubleshooting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Scanner setup guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2462e8] font-bold">•</span>
                  <span>Basic printing troubleshooting</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button 
                onClick={handleOpenChat}
                style={{ backgroundColor: '#2462e8' }}
                className="px-5 py-2.5 text-white text-sm font-bold rounded-xl shadow-md hover:opacity-90 transition-all"
              >
                Start Printer Setup
              </button>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-slate-200"></div>

        {/* Section 10: Image Right (35%), Content Left (65%) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="w-full lg:w-[35%] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white aspect-4/3 flex items-center justify-center">
              <img 
                src="/new-printer-setup-hai.jpg" 
                alt="New Printer Setup" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-[65%] space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
              New Printer Setup
            </h2>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              Setting up a new printer? Get assistance with the essential steps needed to prepare your printer for use.
            </p>

            <div className="space-y-1.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">A typical setup may involve:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm space-y-0.5">
                  <span className="text-xs font-bold text-[#2462e8]">01</span>
                  <h4 className="text-sm font-bold text-slate-900">Prepare the printer</h4>
                  <p className="text-xs text-slate-600">Power on the printer and complete its initial device setup.</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm space-y-0.5">
                  <span className="text-xs font-bold text-[#2462e8]">02</span>
                  <h4 className="text-sm font-bold text-slate-900">Choose a connection</h4>
                  <p className="text-xs text-slate-600">Depending on your equipment, connect through Wi-Fi, network, or USB.</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm space-y-0.5">
                  <span className="text-xs font-bold text-[#2462e8]">03</span>
                  <h4 className="text-sm font-bold text-slate-900">Connect the printer</h4>
                  <p className="text-xs text-slate-600">Make sure the printer and computer can communicate correctly.</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm space-y-0.5">
                  <span className="text-xs font-bold text-[#2462e8]">04</span>
                  <h4 className="text-sm font-bold text-slate-900">Add to your computer</h4>
                  <p className="text-xs text-slate-600">Use your Windows or macOS printer settings to locate and add the device.</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm space-y-0.5">
                  <span className="text-xs font-bold text-[#2462e8]">05</span>
                  <h4 className="text-sm font-bold text-slate-900">Install required software</h4>
                  <p className="text-xs text-slate-600">Obtain the appropriate printer software or driver from the official source.</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm space-y-0.5">
                  <span className="text-xs font-bold text-[#2462e8]">06</span>
                  <h4 className="text-sm font-bold text-slate-900">Test the printer</h4>
                  <p className="text-xs text-slate-600">Print a test page or document to confirm successful setup.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={handleOpenChat}
                style={{ backgroundColor: '#2462e8' }}
                className="px-5 py-2.5 text-white text-sm font-bold rounded-xl shadow-md hover:opacity-90 transition-all"
              >
                Get Setup Help
              </button>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-slate-200"></div>

        {/* Section 11: Image Left (35%), Content Right (65%) */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-[35%] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white aspect-4/3 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" 
                alt="Help With Common Printer Problems" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-[65%] space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
              Help With Common Printer Problems
            </h2>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              Printer problems can occur during initial setup or after a printer has been working normally for some time. Get troubleshooting assistance for common issues including:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                <h4 className="text-sm font-bold text-slate-900">Printer Not Connecting</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Troubleshoot problems preventing your printer from communicating with your computer or wireless network.</p>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                <h4 className="text-sm font-bold text-slate-900">Printer Showing Offline</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Check connectivity, printer status, computer settings, and other common causes of offline printer problems.</p>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                <h4 className="text-sm font-bold text-slate-900">Printer Not Printing</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Review the printer connection, print queue, selected printer, and other relevant settings.</p>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                <h4 className="text-sm font-bold text-slate-900">Wi-Fi Printer Problems</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Get help reconnecting a wireless printer after network, router, or Wi-Fi password changes.</p>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                <h4 className="text-sm font-bold text-slate-900">Computer Can't Find Printer</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Check whether the printer is discoverable and correctly connected to your computer or network.</p>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                <h4 className="text-sm font-bold text-slate-900">Scanner Not Working</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Review common scanner connectivity, configuration, and software issues.</p>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={handleOpenChat}
                style={{ backgroundColor: '#2462e8' }}
                className="px-5 py-2.5 text-white text-sm font-bold rounded-xl shadow-md hover:opacity-90 transition-all"
              >
                Choose Your Printer Issue
              </button>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-slate-200"></div>

        {/* Section 12: Image Right (35%), Content Left (65%) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="w-full lg:w-[35%] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white aspect-4/3 flex items-center justify-center">
              <img 
                src="/how-printer-setup-help.jpg" 
                alt="How Printer Help Works" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-[65%] space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
              How Printer Help Works
            </h2>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              Getting started is simple.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-[#2462e8]/10 text-[#2462e8] font-bold flex items-center justify-center mx-auto text-sm">1</div>
                <h4 className="text-sm font-bold text-slate-900 pt-1">Select Your Issue</h4>
                <p className="text-xs text-slate-600">Choose your specific technical problem.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-[#2462e8]/10 text-[#2462e8] font-bold flex items-center justify-center mx-auto text-sm">2</div>
                <h4 className="text-sm font-bold text-slate-900 pt-1">Connect for Assistance</h4>
                <p className="text-xs text-slate-600">Get paired with targeted guides.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-[#2462e8]/10 text-[#2462e8] font-bold flex items-center justify-center mx-auto text-sm">3</div>
                <h4 className="text-sm font-bold text-slate-900 pt-1">Troubleshoot</h4>
                <p className="text-xs text-slate-600">Resolve the issue step by step.</p>
              </div>
            </div>

            <p className="text-slate-600 text-[15px] leading-relaxed pt-1">
              Tell us whether you're having trouble with printer setup, Wi-Fi connectivity, an offline printer, computer connection, printing, scanning, or another common printer issue. The problem can then be reviewed and the relevant troubleshooting steps explained.
            </p>

            <div className="pt-2">
              <button 
                onClick={handleOpenChat}
                style={{ backgroundColor: '#2462e8' }}
                className="px-5 py-2.5 text-white text-sm font-bold rounded-xl shadow-md hover:opacity-90 transition-all"
              >
                Get Printer Help
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ButtomContent1