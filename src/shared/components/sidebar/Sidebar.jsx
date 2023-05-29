import { Avatar, Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { useAppDrawerContext } from '../../contexts';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

const ListItemLink = ({ to, icon, label, onClick }) => {
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };

    return (
        <ListItemButton selected={match} onClick={handleClick}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
};

export const Sidebar = ({ children }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useAppDrawerContext();

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
                            {drawerOptions.map((drawerOption) => (
                                <ListItemLink
                                    key={drawerOption.path}
                                    to={drawerOption.path}
                                    icon={drawerOption.icon}
                                    label={drawerOption.label}
                                    onClick={matches ? toggleDrawerOpen : undefined}
                                />
                            ))}
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