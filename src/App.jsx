// src/App.jsx
import { Routes, Route } from 'react-router';
import { Box } from '@mui/material';
import './App.css';

import Home from './pages/main/home';
import Memories from './pages/main/memories';
import EventFlow from './pages/main/eventFlow';
import Registration from './pages/main/registration';
import Meetourteam from './pages/main/meetourteam';
import RoomAllocation from './pages/main/RoomAllocation';
import ResponsiveAppBar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

// USER auth
import UserLogin from './pages/main/userlogin';
import UserProtectedRoute from './components/UserProtectedRoutes';
import ApprovedRoute from './components/ApprovedRoutes';

function App() {
  return (
    <>
      <ResponsiveAppBar />
        {/* Only add top padding on small screens where AppBar is `fixed` to avoid hiding content.
          Keep desktop padding 0 so the navbar notch design remains unchanged. */}
        <Box sx={{ paddingTop: { xs: '64px', md: '0px' } }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/eventFlow" element={<EventFlow />} />
          <Route path="/meetourteam" element={<Meetourteam />} />

          {/* USER */}
          <Route path="/login" element={<UserLogin />} />
          <Route
            path="/register"
            element={
              <UserProtectedRoute>
                <Registration />
              </UserProtectedRoute>
            }
          />
          {/* Only approved + batch 2000 can access */}
          <Route
            path="/room-allocation"
            element={
              <UserProtectedRoute>
                <ApprovedRoute>
                  <RoomAllocation />
                </ApprovedRoute>
              </UserProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;
