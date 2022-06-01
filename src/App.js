import './App.css';
import Header from './Header.js'
import  SwipeButtton  from './SwipeButtton';
import TinderCard from './TinderCard';

function App() {
  return (
    <div className="app">
     <Header/>
     <TinderCard />
     <SwipeButtton />
    </div>
  );
}

export default App;
