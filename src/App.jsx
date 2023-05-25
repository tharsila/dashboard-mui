import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppDrawerProvider, AppThemeProvider,  } from './shared/contexts';
import { Sidebar } from './shared/components/sidebar/Sidebar';


function App() {
    return (
        <AppThemeProvider>
            <AppDrawerProvider>
                <BrowserRouter>
                    <Sidebar>
                        <AppRoutes />
                    </Sidebar>
                </BrowserRouter>
            </AppDrawerProvider>
        </AppThemeProvider>
    );
}

export default App;
