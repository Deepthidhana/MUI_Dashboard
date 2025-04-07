import { Notifications } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Badge, Box, IconButton, Menu } from "@mui/material";
import { StyledBox } from './search';
import { useState } from 'react';
import { MenuSection } from './Menu';

export function Profile() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <StyledBox sx={{ display: { xs: "none", sm: "flex" } }}>
                <IconButton color='inherit'>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <IconButton color='inherit'>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                </IconButton>
                <Avatar sx={{ width: 34, height: 34 }} onClick={() => setOpen(true)}>D</Avatar>
            </StyledBox >
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <Avatar sx={{ width: 34, height: 34 }} onClick={() => setOpen(true)}>H</Avatar>
            </Box>
            <MenuSection open={open} setOpen={setOpen} />
        </>
    );
}