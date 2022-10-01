import Header from '../components/header/Header'
import Content from '../components/content/content';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from '../pages/MainPage';
import Page404 from '../pages/Page404';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Header/>
        <main>
          <Content/>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/Page404' element={<Page404/>}/>
            {/* на каждую ссылку путь */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
