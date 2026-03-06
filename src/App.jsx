import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <Navbar />
      <Banner inProgressCount={0} resolvedCount={0} />
    </div>
  );
}

export default App;
