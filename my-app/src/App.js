import css from './App.module.css';
// import NavBarSimple from './components/NavBarSimple';
// import Sidebar from './components/Sidebar';
// import NavBarForm from './components/NavBarForm';
// import Content from './components/Content';
import ContentAPI from './components/ContentAPI';
import PostItemAPI from './components/PostItemAPI';


function App() {
  return (
    <div className={css.App}>
      {/* <Sidebar/>  */}
      {/* <NavBarSimple /> */}
      {/* <NavBarForm /> */}
      <ContentAPI />
      <PostItemAPI />
    </div>
  );
}

export default App;