import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './container/Home';
import Navtab from './components/Navbar/navtab';
import Navlink from './components/Navbar/navlink';
import LoginScr from './components/Login/Login';
import RegisterScr from './components/Register/register';
import Team from './container/Teams';
import Event from './container/Events';
import Gallry from './container/Galleries';
import Footer from './components/Navbar/footer';
import Adminn from './container/Admn';
import EditTeam from './components/Admin/TeamPage';
import EditEvent from './components/Admin/EventPage';
import EditGally from './components/Admin/GalleryPage';
import { MDBContainer } from 'mdb-react-ui-kit';

function App() {
  return (
    <div>
      <Navtab />
      <Navlink />
      <MDBContainer style={{ marginTop: "30px", marginBottom: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<LoginScr />} />
          <Route path='/register' element={<RegisterScr />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/events" element={<Event />} />
          <Route path="/gallery" element={<Gallry />} />
          <Route path="/admin" element={<Adminn />}>
            <Route path="editteam" element={<EditTeam />} />
            <Route path="editevent" element={<EditEvent />} />
            <Route path="editgallery" element={<EditGally />} />
          </Route>
        </Routes>
      </MDBContainer>
      <Footer />
    </div>
  );
}

export default App;
