import { Save } from "@mui/icons-material";
import { Box, Button, Modal as ModalDialog, Stack, TextField, Typography } from "@mui/material";

export function Modal({ open, handleClose }: any) {
    return (
        <>
            <ModalDialog
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: 'translate(-50%, -50%)',
                    width: 600,                    
                    textAlign: "center",
                    boxShadow: 20,
                    // border: '2px solid #000',
                    p: 4

                }}
                    bgcolor={"background.default"} color={"text.primary"}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2" pb={2}>
                        Create Post
                    </Typography>
                    <Stack spacing={2}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Post"
                            multiline
                            rows={4}
                            defaultValue="Write a comment..."
                            color="primary"
                        />
                        <Button variant="contained" startIcon={<Save />} size="small" sx={{ width: 150, left: "35%" }}>
                            Save Post
                        </Button>
                    </Stack>
                </Box>
            </ModalDialog>
        </>
    );
}