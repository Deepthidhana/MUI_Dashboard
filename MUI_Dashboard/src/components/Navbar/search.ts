import { Box, InputBase, styled } from "@mui/material";

export const SearchSection = styled(Box)(({theme})=>({
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    display:"flex",
    flexDirection:"row"
}))

export const SearchInput = styled(InputBase)(({theme})=>({

}))

export const StyledBox = styled('div')(({theme})=>({
    display: "flex",
    justifyContent: 'space-between',
    alignItems:"center",
    gap:6,

}))