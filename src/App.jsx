import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import ticketsData from './data/tickets';

function App() {
  const [tickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved] = useState([]);

  const handleCardClick = (ticket) => {
    if (inProgress.find((t) => t.id === ticket.id)) return;
    setInProgress([...inProgress, ticket]);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <Navbar />
      <Banner inProgressCount={inProgress.length} resolvedCount={resolved.length} />
      <main className="flex flex-col lg:flex-row gap-6 px-6 lg:px-10 pb-10 max-w-[1400px] mx-auto">
        <section className="flex-[3]">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} onCardClick={handleCardClick} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
