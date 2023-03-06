import { Navigate, Route, Routes } from 'react-router-dom';
import { getToken } from './helpers';
import Profile from './layouts/components/Profile/Profile';
import SocialCards from './layouts/components/SocialCards/SocialCards';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SocialCards />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={getToken() ? <Profile /> : <Navigate to="/signin" />} />
        </Routes>
    );
};

export default AppRoutes;
