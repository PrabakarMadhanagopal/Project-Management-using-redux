import './App.css';
import { AddTask } from './components/AddTask';
import { Navbar } from './components/Navbar';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
