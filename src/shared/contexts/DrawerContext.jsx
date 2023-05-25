import { createContext, useCallback, useContext, useState } from 'react';

export const DrawerContext = createContext();

export const useAppDrawerContext = () => {
    return useContext(DrawerContext);
};

export const AppThemeProvider = ({children}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    
    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawer => !oldDrawer);
    }, []);

    return (
        <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen}}>
            {children}
        </DrawerContext.Provider>
    );
};