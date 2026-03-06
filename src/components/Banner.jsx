const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <section className="flex gap-6 px-10 py-10 justify-center">
      <div className="flex-1 max-w-md px-10 py-9 rounded-2xl text-white text-center shadow-lg bg-gradient-to-br from-purple-600 to-purple-400 relative overflow-hidden">
        <div className="absolute -top-16 -right-10 w-48 h-48 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-12 -left-6 w-36 h-36 rounded-full bg-white/5"></div>
        <h3 className="text-base font-medium opacity-90 mb-2 relative z-10">In Progress</h3>
        <div className="text-5xl font-bold relative z-10">{inProgressCount}</div>
      </div>
      <div className="flex-1 max-w-md px-10 py-9 rounded-2xl text-white text-center shadow-lg bg-gradient-to-br from-emerald-600 to-emerald-400 relative overflow-hidden">
        <div className="absolute -top-16 -right-10 w-48 h-48 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-12 -left-6 w-36 h-36 rounded-full bg-white/5"></div>
        <h3 className="text-base font-medium opacity-90 mb-2 relative z-10">Resolved</h3>
        <div className="text-5xl font-bold relative z-10">{resolvedCount}</div>
      </div>
    </section>
  );
};

export default Banner;
