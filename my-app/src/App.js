import css from './App.module.css';
import NavBarSimple from './components/NavBarSimple';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className={css.App}>
      {/* <Sidebar/>  */}
      <NavBarSimple />
    </div>
  );
}

export default App;