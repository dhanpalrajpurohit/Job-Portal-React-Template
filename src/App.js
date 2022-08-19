import logo from './logo.svg';
import './App.css';
import Header from './container/Header';
import Slider from './container/Slider';
import Testimonial from './container/Testimonial';
import Joblist from './container/Joblist';
import Footer from './container/Footer';
import JobCategories from './container/JobCategories';
import JobSearch from './container/JobSearch';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <JobSearch />
      <JobCategories/>
      <Joblist />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
