import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Content } from './components/Content/Content';
import { Notice } from './sections/Notice/Notice';

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path='/notice' element={<Notice />} />
            </Routes>
        </BrowserRouter>
    )
}