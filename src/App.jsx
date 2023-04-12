import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts';
import { Sidebar } from './shared/components/sidebar/Sidebar';


function App() {
    return (
        <AppThemeProvider>
            <BrowserRouter>
                <Sidebar>
                    <AppRoutes />
                </Sidebar>
            </BrowserRouter>
        </AppThemeProvider>
    );
}

export default App;
