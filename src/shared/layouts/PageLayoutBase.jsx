import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { useAppDrawerContext } from '../contexts';

export const PageLayoutBase = ({ children, title, tollbox }) => {
    const theme = useTheme();

    const matchesDown = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMedia = useMediaQuery(theme.breakpoints.down('md'));

    const { toggleDrawerOpen } = useAppDrawerContext();

    return (
        <Box height='100%' display='flex' flexDirection='column' gap={1}>
            <Box padding={1} display='flex' alignItems='center' gap={1} height={theme.spacing(matchesDown ? 6 : matchesMedia ? 8 : 12)}>
                {matchesDown && <MenuIcon sx={{cursor: 'pointer'}} onClick={toggleDrawerOpen}/>}
                
                <Typography 
                    variant={matchesDown ? 'h5' : matchesMedia ? 'h4' : 'h3'}
                    whiteSpace='nowrap'
                    overflow='hidden'
                    textOverflow='ellipsis'
                >
                    {title}
                </Typography>
            </Box>
            {tollbox && <Box>{tollbox}</Box>}
            
            <Box flex={1} overflow='auto'>
                {children}
            </Box>
        </Box>
    );
};
