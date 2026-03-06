import { FaUser, FaCalendarAlt } from 'react-icons/fa';

const TicketCard = ({ ticket, onCardClick }) => {
  return (
    <div
      onClick={() => onCardClick(ticket)}
      className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all"
    >
      <div className="flex justify-between items-start mb-2.5 gap-2.5">
        <h4 className="text-[0.95rem] font-semibold text-gray-800">{ticket.title}</h4>
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
          ticket.status === 'Open'
            ? 'bg-green-100 text-green-800'
            : 'bg-amber-100 text-amber-800'
        }`}>
          {ticket.status}
        </span>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed mb-3.5 line-clamp-2">{ticket.description}</p>
      <div className="flex justify-between items-center text-xs text-gray-400">
        <span>#{ticket.id}</span>
        <span className="flex items-center gap-1"><FaUser /> {ticket.customer}</span>
        <span className="flex items-center gap-1"><FaCalendarAlt /> {ticket.createdAt}</span>
      </div>
    </div>
  );
};

export default TicketCard;
