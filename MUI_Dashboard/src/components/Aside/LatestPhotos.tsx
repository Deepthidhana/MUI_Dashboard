import { ImageList, ImageListItem, Typography } from "@mui/material";

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    // {
    //     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    //     title: 'Coffee',
    // },
]

const LatestPhotos = () => {
    return (
        <>
            <Typography component={"h3"} fontWeight={100} mt={4}>Latest Photos</Typography>
            <ImageList sx={{ width: 300, height: 100 }} cols={3} rowHeight={50}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )
}
export default LatestPhotos;