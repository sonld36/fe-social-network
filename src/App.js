
import './App.css';
import 'antd/dist/antd.css';
import LoginRegisterPage from './Login-Register';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { typeOfSubmit } from './const';
import Home from './components';
import UserPage from './components/user';
import AnotherUserPage from './components/user/anotherUser/anotherUserPage';


function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path='/login' element={<LoginRegisterPage typeProps={typeOfSubmit.LOGIN} />} />
          <Route path='/register' element={<LoginRegisterPage typeProps={typeOfSubmit.REGISTER} />} />
          <Route path='/' element={<Home />}>
            <Route path='/me' element={<UserPage />} />
            <Route path="/user/profile/:id" element={<AnotherUserPage />} />
          </Route>
          
        </Routes>
      </div>


    </Router>
  );
}

export default App;
