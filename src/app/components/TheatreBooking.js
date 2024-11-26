'use client';

import React, { useState } from 'react';
import eventsData from '../data/events.json';
import SeatSelection from '../components/SeatSelection';

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  const handleSeatBooking = (seats) => {
    alert(`Booked seats: ${seats.join(', ')}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="bg-indigo-600 text-white p-6">
            <h1 className="text-4xl font-extrabold tracking-tight">
              Theatre Seat Booking
            </h1>
            <p className="mt-2 text-indigo-100">
              Select your perfect seat for an unforgettable experience
            </p>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {eventsData.halls.map((hall) => (
                <div key={hall.id} className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-500 pb-2">
                    {hall.name}
                  </h2>
                  
                  {hall.events.map((event) => (
                    <div 
                      key={event.id}
                      onClick={() => handleEventSelect(event)}
                      className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                    >
                      <div className="p-5">
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {event.title}
                          </h3>
                          <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Available
                          </span>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          <p>📅 {event.date}</p>
                          <p>🕒 {event.time}</p>
                          <p>💺 Seats: {event.seats.available}/{event.seats.total}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {selectedEvent && (
              <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <SeatSelection 
                  event={selectedEvent} 
                  onSeatSelect={handleSeatBooking} 
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}