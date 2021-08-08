import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="app-container container d-flex justify-content-center">
      <div className="card p-2 align-self-center">
        <Header />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
