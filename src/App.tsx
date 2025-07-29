// import React from 'react';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import AttendanceLog from './components/AttendanceLog';
import DeviceStatus from './components/DeviceStatus';
import QuickActions from './components/QuickActions';
import GradeOverview from './components/GradeOverview';
import { Users, Clock, CheckCircle, MessageSquare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Students"
            value="346"
            icon={Users}
            trend={{ value: "Grades 1-10", isPositive: true }}
            color="blue"
          />
          <StatsCard
            title="Present Today"
            value="325"
            icon={CheckCircle}
            trend={{ value: "93.9% attendance", isPositive: true }}
            color="green"
          />
          <StatsCard
            title="Late Arrivals"
            value="12"
            icon={Clock}
            trend={{ value: "3.5% of students", isPositive: false }}
            color="yellow"
          />
          <StatsCard
            title="Parent Notifications"
            value="337"
            icon={MessageSquare}
            trend={{ value: "100% sent", isPositive: true }}
            color="purple"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Attendance Log */}
          <div className="lg:col-span-2">
            <AttendanceLog />
          </div>
          
          {/* Right Column - Device Status */}
          <div>
            <DeviceStatus />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Grade Overview */}
          <div className="lg:col-span-2">
            <GradeOverview />
          </div>
          
          {/* Quick Actions */}
          <div className="space-y-8">
            <QuickActions />
          </div>
        </div>

        {/* System Status Bar */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Attendance System Online</span>
              </div>
              <div className="text-sm text-gray-500">
                Last scan: 30 seconds ago
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Arduino Attendance System v1.2.3
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;