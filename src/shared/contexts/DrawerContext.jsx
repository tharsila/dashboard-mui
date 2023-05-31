import { createContext, useCallback, useContext, useState } from 'react';

export const DrawerContext = createContext();

export const useAppDrawerContext = () => {
    return useContext(DrawerContext);
};

export const AppDrawerProvider = ({children}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState([]);
    
    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawer => !oldDrawer);
    }, []);

    const handleSetDrawerOptions = useCallback((newDrawerOptions) => {
        setDrawerOptions(newDrawerOptions);
    }, []);

    return (
        <DrawerContext.Provider value={{isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions}}>
            {children}
        </DrawerContext.Provider>
    );
};