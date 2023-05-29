import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppDrawerContext } from '../shared/contexts/';
import { useEffect } from 'react';

export const AppRoutes  = () => {

    const { toggleDrawerOpen, setDrawerOptions } = useAppDrawerContext();

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
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Testando</Button>} />
            <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
        </Routes>
    );
};