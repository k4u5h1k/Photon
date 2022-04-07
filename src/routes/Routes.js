import { HashRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Code from '../components/Code';
import Receive from '../components/Receive';

const AppRoutes = () => {
    return <HashRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/code" element={<Code/>}/>
            <Route path="/receive" element={<Receive/>}/>
        </Routes>
    </HashRouter>
};

export default AppRoutes;
