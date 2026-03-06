import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';
import ticketsData from './data/tickets';

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleCardClick = (ticket) => {
    if (inProgress.find((t) => t.id === ticket.id)) {
      toast.warn(`"${ticket.title}" is already in progress!`);
      return;
    }
    if (resolved.find((t) => t.id === ticket.id)) {
      toast.info(`"${ticket.title}" is already resolved!`);
      return;
    }
    setInProgress([...inProgress, ticket]);
    toast.success(`"${ticket.title}" added to task status!`);
  };

  const handleComplete = (task) => {
    setInProgress(inProgress.filter((t) => t.id !== task.id));
    setResolved([...resolved, task]);
    setTickets(tickets.filter((t) => t.id !== task.id));
    toast.success(`"${task.title}" has been resolved!`);
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
        <TaskStatus inProgress={inProgress} resolved={resolved} onComplete={handleComplete} />
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;
