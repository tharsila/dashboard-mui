import HomeIcon from '@mui/icons-material/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppDrawerContext } from '../shared/contexts/';
import { useEffect } from 'react';
import { Dashboard } from '../pages';

export const AppRoutes  = () => {

    const { setDrawerOptions } = useAppDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                label: 'Página inicial',
                icon: <HomeIcon />,
                path: '/pagina-inicial'
            },
        ]);
    }, []);

    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard/>} />
            <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
        </Routes>
    );
};