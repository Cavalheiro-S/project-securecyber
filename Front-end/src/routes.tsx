import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Content } from './components/Content/Content';
import { Notice } from './sections/Notice/Notice';
import { PrivateRouter } from './components/PrivateRouter';
import { Signin } from './sections/Siginin/Siginin';

export const AppRoutes = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/signin" element={<Signin />} />
                <Route path='/notice' element={
                    <PrivateRouter>
                        <Notice />
                    </PrivateRouter>
                } />
            </Routes>
        </BrowserRouter>
    )
}