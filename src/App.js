import './App.css';
import Programs from './components/Programs';
import Start from './components/Start';
import Reasons from './components/Reasons';
import Plans from './components/Plans'
import Testimonials from './components/Testimonials';
import Join from './components/Join';
import Footer from './components/Footer';
;

function App() {
  return (
    <div className="App">
         <Start />
         <Programs />
         <Reasons />
         <Plans />
         <Testimonials />
         <Join />
         <Footer />
    </div>
  );
}

export default App;
