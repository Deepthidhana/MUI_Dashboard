import { Favorite, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";

export function Post() {
    return (
        <Card sx={{mb:3}}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Deepthi" sx={{ bgcolor: "red" }}>D</Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Munnar"
                subheader="Visited on September 23, 2023" />
            <CardMedia
                component="img"
                height="40%"
                image="https://mui.com/static/images/cards/paella.jpg"
                alt="Munnar"
            />
            <CardContent>
                <Typography component={'h6'} variant="body2">
                Munnar is a town in the Western Ghats mountain range in India’s Kerala state. A hill station and former resort for the British Raj elite, it's surrounded by rolling hills dotted with tea plantations established in the late 19th century. Eravikulam National Park, a habitat for the endangered mountain goat Nilgiri tahr, is home to the Lakkam Waterfalls, hiking trails and 2,695m-tall Anamudi Peak.
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <Favorite />
                </IconButton>
                <IconButton>
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    );
}