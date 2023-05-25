import { Avatar, Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useAppDrawerContext } from '../../contexts';

export const Sidebar = ({ children }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toggleDrawerOpen } = useAppDrawerContext();

    return (
        <>
            <Drawer open={isDrawerOpen} variant={ matches ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} display='flex' flexDirection='column' height='100%'>
                    <Box 
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        height={theme.spacing(20)}
                        width='100%'
                    >
                        <Avatar sx={{ width: theme.spacing(12), height: theme.spacing(12) }} src="https://github.com/tharsila.png" />
                    </Box>
                    <Divider />
                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height='100vh' marginLeft={matches ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};