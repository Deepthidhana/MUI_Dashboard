import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import LatestPhotos from "./LatestPhotos";
import { LatestConvo } from "./LatestConvo";

export function Aside() {
    return (
        <Box flex={2} p={2} sx={{
            display: { xs: "none", sm: "block" },
            position:"relative"
        }}>
            <Box position={"sticky"} top={1}>
            <OnlineFriends />
            <LatestPhotos />
            <LatestConvo />
            </Box>
        </Box>
    );
}

const OnlineFriends = () => {
    return (
        <>
            <Typography component={"h3"} fontWeight={100}
            mb={2}>Online Friends</Typography>
            <AvatarGroup max={15}>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
            </AvatarGroup>
        </>
    )
}

