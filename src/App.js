import './App.css';
import AddTask from './components/AddTask';
import Task from './components/Task';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AddTask />
      <Task />
    </div>
  );
}

export default App;
