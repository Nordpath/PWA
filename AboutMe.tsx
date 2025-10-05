import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RealTimeClock } from "../../../components/RealTimeClock";
import { StatusBar } from "../../../components/StatusBar";

interface TabData {
  id: string;
  label: string;
  content: React.ReactNode;
}

export const AboutMe = (): JSX.Element => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("biography");

  const handleBackClick = () => {
    navigate('/menu');
  };

  const tabs: TabData[] = [
    {
      id: "biography",
      label: "Biography",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-200 shadow-lg"
              alt="Michel Salgado"
              src="https://c.animaapp.com/mg40pq64bplPVp/img/image.png"
            />
            <h2 className="text-2xl font-bold text-[#181c1f] mb-2">MÍCHEL SALGADO</h2>
            <p className="text-[#5e5e5e] font-medium">Former Real Madrid Legend & Coach</p>
          </div>

          
          <div className="space-y-4">
            <div>
              <h3 className="font-body-m-bold text-[#181c1f] mb-2">Early Life</h3>
              <p className="font-body-m-regular text-[#181c1f] leading-relaxed">
                Born on October 22, 1975, in As Neves, Pontevedra, Spain, Míchel Salgado began his football journey at a young age. His passion for the beautiful game was evident from childhood, and he quickly developed into one of Spain's most promising defenders.
              </p>
            </div>
            
            <div>
              <h3 className="font-body-m-bold text-[#181c1f] mb-2">Playing Career</h3>
              <p className="font-body-m-regular text-[#181c1f] leading-relaxed">
                Salgado's professional career began at Celta Vigo before making his legendary move to Real Madrid in 1999. During his decade at the Santiago Bernabéu, he became one of the most successful right-backs in football history, winning numerous titles and establishing himself as a club icon.
              </p>
            </div>
            
            <div>
              <h3 className="font-body-m-bold text-[#181c1f] mb-2">International Career</h3>
              <p className="font-body-m-regular text-[#181c1f] leading-relaxed">
                Representing Spain with pride, Salgado earned 53 caps for his national team, participating in major tournaments including the World Cup and European Championships. His leadership and defensive prowess made him a cornerstone of the Spanish defense.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "events",
      label: "Events",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-[#181c1f] mb-2">Career Events</h2>
            <p className="text-[#5e5e5e]">Key moments and milestones</p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={() => navigate('/about-me/events')}
              className="w-full p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">📅</span>
                <div className="flex-1">
                  <h4 className="font-body-m-bold text-[#181c1f] mb-1">View All Events</h4>
                  <p className="text-sm text-[#5e5e5e]">Explore Michel Salgado's career timeline and major events</p>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-body-m-bold text-[#181c1f] mb-2">Recent Events</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-[#181c1f] text-sm">Saudi U-15 National Team Coach</p>
                      <p className="text-xs text-[#5e5e5e]">2024 - Present</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-[#181c1f] text-sm">Pafos FC Head Coach</p>
                      <p className="text-xs text-[#5e5e5e]">2020 - 2023</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-[#181c1f] text-sm">Galicia Regional Team Coach</p>
                      <p className="text-xs text-[#5e5e5e]">2018 - 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "news",
      label: "News",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-[#181c1f] mb-2">Latest News</h2>
            <p className="text-[#5e5e5e]">Recent articles and updates</p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={() => navigate('/about-me/news')}
              className="w-full p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg hover:from-green-100 hover:to-green-200 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">📰</span>
                <div className="flex-1">
                  <h4 className="font-body-m-bold text-[#181c1f] mb-1">View All News</h4>
                  <p className="text-sm text-[#5e5e5e]">Read the latest news and articles about Michel Salgado</p>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-body-m-bold text-[#181c1f] mb-2">Recent News</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-[#181c1f] text-sm">Saudi Football Federation Appointment</p>
                      <p className="text-xs text-[#5e5e5e]">June 29, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-[#181c1f] text-sm">Premier Futsal Contract</p>
                      <p className="text-xs text-[#5e5e5e]">June 27, 2016</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-[#181c1f] text-sm">Family Life Feature</p>
                      <p className="text-xs text-[#5e5e5e]">August 18, 2014</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "achievements",
      label: "Achievements",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg">
            <h3 className="font-body-l-bold text-[#181c1f] mb-4 flex items-center">
              <span className="text-2xl mr-2">🏆</span>
              Club Achievements
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-body-m-bold text-[#181c1f] mb-2">Real Madrid (1999-2009)</h4>
                <ul className="space-y-1 text-[#5e5e5e]">
                  <li>• UEFA Champions League: 2000, 2002</li>
                  <li>• La Liga: 2001, 2003, 2007, 2008</li>
                  <li>• Copa del Rey: 2011</li>
                  <li>• UEFA Super Cup: 2002</li>
                  <li>• Spanish Super Cup: 2001, 2003, 2008</li>
                  <li>• Intercontinental Cup: 2002</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-body-m-bold text-[#181c1f] mb-2">Blackburn Rovers (2009-2012)</h4>
                <ul className="space-y-1 text-[#5e5e5e]">
                  <li>• Premier League Experience</li>
                  <li>• 76 Appearances</li>
                  <li>• Leadership Role</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg">
            <h3 className="font-body-l-bold text-[#181c1f] mb-4 flex items-center">
              <span className="text-2xl mr-2">🇪🇸</span>
              International Achievements
            </h3>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <ul className="space-y-1 text-[#5e5e5e]">
                <li>• 53 Caps for Spain National Team</li>
                <li>• FIFA World Cup: 2002, 2006</li>
                <li>• UEFA European Championship: 2000, 2004</li>
                <li>• FIFA Confederations Cup: 2009</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "coaching",
      label: "Coaching",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-[#181c1f] mb-2">Coaching Journey</h2>
            <p className="text-[#5e5e5e]">From Player to Mentor</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
              <h3 className="font-body-l-bold text-[#181c1f] mb-4">Current Role</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-body-m-bold text-[#181c1f] mb-2">Saudi U-15 National Team Coach (2024-2026)</h4>
                <p className="text-[#5e5e5e] mb-3">
                  Leading the "Future Falcons" program, developing the next generation of Saudi football talent.
                </p>
                <ul className="space-y-1 text-[#5e5e5e] text-sm">
                  <li>• Overseeing players born in 2009 and 2010</li>
                  <li>• Preparing for AFC U-17 and U-20 Asian Cups</li>
                  <li>• Building towards 2032 Olympics and 2034 World Cup</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="font-body-l-bold text-[#181c1f] mb-4">Previous Experience</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-body-m-bold text-[#181c1f] mb-2">Pafos FC (Cyprus)</h4>
                  <p className="text-[#5e5e5e] text-sm">Head Coach - Gained valuable experience in European football management</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-body-m-bold text-[#181c1f] mb-2">Galicia Regional Team (Spain)</h4>
                  <p className="text-[#5e5e5e] text-sm">Regional Coach - Developed local talent and coaching philosophy</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
              <h3 className="font-body-l-bold text-[#181c1f] mb-4">Coaching Philosophy</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-[#5e5e5e] leading-relaxed">
                  "Football is about passion, dedication, and continuous learning. My goal is to inspire young players 
                  to reach their full potential while instilling the values of teamwork, respect, and perseverance that 
                  I learned throughout my playing career."
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "stats",
      label: "Career Stats",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-[#181c1f] mb-2">Career Statistics</h2>
            <p className="text-[#5e5e5e]">Numbers that tell the story</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-lg text-white text-center">
              <div className="text-2xl font-bold">371</div>
              <div className="text-sm opacity-90">Real Madrid Apps</div>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-lg text-white text-center">
              <div className="text-2xl font-bold">53</div>
              <div className="text-sm opacity-90">Spain Caps</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-lg text-white text-center">
              <div className="text-2xl font-bold">76</div>
              <div className="text-sm opacity-90">Blackburn Apps</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-4 rounded-lg text-white text-center">
              <div className="text-2xl font-bold">15</div>
              <div className="text-sm opacity-90">Major Trophies</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-body-m-bold text-[#181c1f] mb-3">Season by Season (Real Madrid)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-[#5e5e5e]">1999-2000</span>
                  <span className="text-[#181c1f] font-medium">32 appearances</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-[#5e5e5e]">2000-2001</span>
                  <span className="text-[#181c1f] font-medium">38 appearances</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-[#5e5e5e]">2001-2002</span>
                  <span className="text-[#181c1f] font-medium">41 appearances</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-[#5e5e5e]">Peak Years</span>
                  <span className="text-[#181c1f] font-medium">40+ apps/season</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-body-m-bold text-[#181c1f] mb-3">International Record</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#5e5e5e]">Debut</span>
                  <span className="text-[#181c1f] font-medium">vs Austria (1998)</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#5e5e5e]">Goals</span>
                  <span className="text-[#181c1f] font-medium">0 goals</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#5e5e5e]">Major Tournaments</span>
                  <span className="text-[#181c1f] font-medium">4 tournaments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <main className="relative w-[390px] h-[844px] bg-white overflow-hidden">
      {/* Header */}
      <header className="absolute w-full top-0 left-0 h-11 z-20">
        <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
          <RealTimeClock 
            className="w-[54px] h-5 font-default-bold-body font-[number:var(--default-bold-body-font-weight)] text-[length:var(--default-bold-body-font-size)] text-center tracking-[var(--default-bold-body-letter-spacing)] leading-[var(--default-bold-body-line-height)] whitespace-nowrap [font-style:var(--default-bold-body-font-style)]"
            textColor="text-black"
          />
        </div>
        
        <StatusBar className="text-black" />
      </header>

      {/* Navigation Header */}
      <div className="absolute top-[44px] left-0 right-0 bg-white border-b border-gray-200 z-10">
        <div className="flex w-[358px] items-center justify-between px-4 py-3 mx-auto">
          <div className="inline-flex items-center gap-2">
            <button
              onClick={handleBackClick}
              className="relative w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity"
              aria-label="Go back to menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <h1 className="font-heading-XL font-[number:var(--heading-XL-font-weight)] text-[#181c1f] text-[length:var(--heading-XL-font-size)] tracking-[var(--heading-XL-letter-spacing)] leading-[var(--heading-XL-line-height)] [font-style:var(--heading-XL-font-style)]">
              ABOUT ME
            </h1>
          </div>

          <button
            className="flex flex-col w-[25px] items-end gap-1.5 relative cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Open menu"
            onClick={() => {
              import('../../../components/HamburgerMenu').then(({ HamburgerMenu }) => {
                const menuContainer = document.createElement('div');
                document.body.appendChild(menuContainer);
                
                const closeMenu = () => {
                  document.body.removeChild(menuContainer);
                };
                
                const React = require('react');
                const { createRoot } = require('react-dom/client');
                const root = createRoot(menuContainer);
                root.render(React.createElement(HamburgerMenu, { onClose: closeMenu, currentScreen: 'about-me' }));
              });
            }}
          >
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="absolute top-[100px] left-0 right-0 bg-white border-b border-gray-200 z-10">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-3 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-black text-black'
                  : 'border-transparent text-[#5e5e5e] hover:text-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="absolute top-[148px] left-0 right-0 bottom-[100px] overflow-y-auto">
        <div className="p-4">
          {tabs.find(tab => tab.id === activeTab)?.content}
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 bg-black">
        <div className="flex flex-col h-[72px] items-start justify-center gap-2.5 pl-0 pr-2.5 py-2.5 relative w-full">
          <div className="flex items-center gap-3 relative w-full px-4">
            <button
              onClick={() => window.open('https://liveapps.ch', '_blank', 'noopener,noreferrer')}
              className="flex w-[274px] h-[38px] items-center justify-center gap-2.5 p-2.5 relative bg-white hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Visit LiveApps.ch"
            >
              <span className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'D-DIN_Exp-Bold',Helvetica] font-bold text-black text-xl tracking-[0.40px] leading-[26px] whitespace-nowrap">
                FAN EXPERIENCE 3.0
              </span>
            </button>

            <button
              onClick={() => window.open('https://liveapps.ch', '_blank', 'noopener,noreferrer')}
              className="relative w-[94px] h-[38px] hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="Visit LiveApps.ch"
            >
              <img
                className="w-full h-full"
                alt="Live! logo"
                src="https://c.animaapp.com/FLHQLvNn/img/asset-1-1.svg"
              />
            </button>
          </div>
        </div>

        <div className="absolute w-full left-0 bottom-0 h-9">
          <div className="absolute left-[calc(50.00%_-_67px)] bottom-2 w-[134px] h-[5px] bg-white rounded-[100px]" />
        </div>
      </footer>
    </main>
  );
};
