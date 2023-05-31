import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { useAppDrawerContext } from '../contexts';

export const PageLayoutBase = ({ children, title }) => {
    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const { toggleDrawerOpen } = useAppDrawerContext();

    return (
        <Box height='100%' display='flex' flexDirection='column' gap={1}>
            <Box padding={1} display='flex' alignItems='center' gap={1} height={theme.spacing(12)}>
                {matches && <MenuIcon sx={{cursor: 'pointer'}} onClick={toggleDrawerOpen}/>}
                
                <Typography variant='h5'>
                    {title}
                </Typography>
            </Box>
            <Box>
                Barra de ferramentas
            </Box>
            <Box>
                {children}
            </Box>
        </Box>
    );
};
