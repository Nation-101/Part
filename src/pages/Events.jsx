import React, { useState } from "react";
import { events } from "../data/events";
import { motion, AnimatePresence } from "framer-motion";

const Events = () => {
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = events.filter(
    (e) =>
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-6 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400"
      />

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-md p-4 cursor-pointer border hover:shadow-lg transition"
            onClick={() => setSelectedEvent(event)}
          >
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-sm text-gray-500">{event.date}</p>
            <p className="text-sm text-gray-600">{event.location}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-md mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-2">
                {selectedEvent.title}
              </h2>
              <p className="text-gray-500 mb-1">{selectedEvent.date}</p>
              <p className="text-gray-600 mb-4">{selectedEvent.location}</p>
              <p className="text-gray-700">{selectedEvent.description}</p>

              <button
                onClick={() => setSelectedEvent(null)}
                className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;