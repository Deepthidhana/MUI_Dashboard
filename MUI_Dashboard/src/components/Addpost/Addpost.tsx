import { Add } from "@mui/icons-material";
import { Box, Fab, Tooltip } from "@mui/material";
import { Modal } from "./Modal";
import { useState } from "react";

export function Addpost() {
    const [open, setOpen] = useState(false);
    return (
        <Box >
            <Tooltip title="Add Post" sx={{
                position: "fixed",
                bottom: 20,
                left: { xs: "calc(50% - 25px)", md: 80 }
            }}>
                <Fab color="primary" onClick={()=>setOpen(true)}>
                    <Add />
                </Fab>
            </Tooltip>
            <Modal open={open} handleClose={() => setOpen(!open)} />
        </Box>
    );
}