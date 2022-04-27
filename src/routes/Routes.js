import { HashRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Code from '../components/Code';
import Receive from '../components/Receive';
import Download from '../components/Download';

const AppRoutes = () => {
    return <HashRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/code" element={<Code/>}/>
            <Route path="/receive" element={<Receive/>}/>
            <Route path="/download" element={<Download/>}/>
        </Routes>
    </HashRouter>
};

export default AppRoutes;
