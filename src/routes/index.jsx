import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { /* ThemeContext, */ useAppThemeContext } from '../shared/contexts/ThemeContext';
/* import { useContext } from 'react'; */

export const AppRoutes  = () => {
    // primeira forma de fazer >>>> const { toggleTheme } = useContext(ThemeContext)
    const{ toggleTheme } = useAppThemeContext();

    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleTheme}>Testando</Button>} />
            <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
        </Routes>
    );
};