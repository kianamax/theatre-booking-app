import React, { useState } from 'react';
import  Button  from '../components/Button';

const SeatSelection = ({ event, onSeatSelect }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (row, seatNumber) => {
    const seatId = `${row}${seatNumber}`;
    setSelectedSeats(prev => 
      prev.includes(seatId) 
        ? prev.filter(seat => seat !== seatId)
        : [...prev, seatId]
    );
  };

  const renderSeats = () => {
    return event.seats.layout.map((row) => (
      <div key={row.row} className="flex gap-2 mb-2">
        {[...Array(row.seats)].map((_, index) => {
          const seatId = `${row.row}${index + 1}`;
          const isSelected = selectedSeats.includes(seatId);
          
          return (
            <Button
              key={seatId}
              variant={isSelected ? 'default' : 'outline'}
              onClick={() => handleSeatClick(row.row, index + 1)}
              className={`w-10 h-10 ${isSelected ? 'bg-green-500' : 'bg-gray-200'}`}
            >
              {seatId}
            </Button>
          );
        })}
      </div>
    ));
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Select Seats</h2>
      {renderSeats()}
      <div className="mt-4">
        <Button 
          onClick={() => onSeatSelect(selectedSeats)}
          disabled={selectedSeats.length === 0}
        >
          Book Selected Seats
        </Button>
      </div>
    </div>
  );
};

export default SeatSelection;