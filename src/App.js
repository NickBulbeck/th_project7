import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Start of project 7.
        </p>
      </header>
    </div>
  );
}

export default App;

// So: App is the top=level component. It's set up as a function in its own file.
// We need to set up separate files for each other component and export them in the same way; 
// then require them in here as applicable.

// map: React basics, section 3, vid 4 (iterating with map()).

// The biggest likely pitfall with statefull components is binding the methods to the class instance.
// See section 4, vid 6 (bind event handlers) for reminders.