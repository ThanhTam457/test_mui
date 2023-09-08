import { Box, ImageList, ImageListItem } from "@mui/material";

interface listImage{
    img: string,
}

const itemData: listImage[] = [
    {img: '/images/p1_f1.png'},
    {img: '/images/p2_f1.png'},
    {img: '/images/p3_f1.png'},
    {img: '/images/p4_f1.png'},
    {img: '/images/p5_f1.png'},
    {img: '/images/p6_f1.png'},
    {img: '/images/p7_f1.png'},
    {img: '/images/p8_f1.png'},
    {img: '/images/p9_f1.png'},
    {img: '/images/p10_f1.png'},
    {img: '/images/p11_f1.png'},
    {img: '/images/p12_f1.png'},
    {img: '/images/p13_f1.png'},
    {img: '/images/p14_f1.png'},
    {img: '/images/p15_f1.png'},
    {img: '/images/p17_f1.png'},
    {img: '/images/p18_f1.png'},
    {img: '/images/p19_f1.png'},
    {img: '/images/p20_f1.png'},
    {img: '/images/p21_f1.png'},
    {img: '/images/p22_f1.png'},
    {img: '/images/p23_f1.png'},
    {img: '/images/p24_f1.png'},
]

function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  

const ImagePicture = () => {
    return ( 
        <Box sx={{ height: 700, overflowY: 'hidden', borderRadius: '50px', background: 'black'}}>
            <ImageList variant="masonry" cols={5}>
                {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                    style={{padding: `${randomIntFromInterval(1,10)}`, margin: `${randomIntFromInterval(1,10)}`}}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=100&h=60&fit=crop&auto=format&dpr=2 2x`}
                    loading="lazy"
                    />
                </ImageListItem>
                ))}
            </ImageList>
    </Box>
     );
}
 
export default ImagePicture;