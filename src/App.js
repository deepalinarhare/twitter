
import './App.css';

import Sidebar from './components/Sidebar';
import Trends from './components/Trends';
import Tweets from './components/Tweets';

function App() {
  return (
    <div className='twitter'>
      <Sidebar/>
      <Tweets/>
      <Trends/>
    
    </div>
 
  );
}

export default App