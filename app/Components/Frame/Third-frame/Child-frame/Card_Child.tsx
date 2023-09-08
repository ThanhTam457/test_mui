import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

interface ICard {
    image: string,
    first_line: string,
    second_line: string,
    matic: number,
    money: string,
}

const listCard: ICard[] = [
    {image: '/images/card1.png', first_line: 'Demo DAO · 8 of 1000', second_line: 'Core team', matic: 5000, money: '(3 126,52 USD)'},
    {image: '/images/card2.png', first_line: 'Demo DAO · 4 of 1000', second_line: 'Contributor', matic: 1000, money: '(625,37 USD)'},
    {image: '/images/card3.png', first_line: 'Demo DAO · 112 of 1000', second_line: 'Member', matic: 100, money: '(62,53 USD)'},
]

const Card_Child = () => 
    listCard.map((item)=>{
        return ( 
            <Card className="bg-bg_card rounded-lg mx-5 w-80">
                <CardMedia
                    component='img'
                    sx={{ height: 300 }}
                    image={`${item.image}`}
                    className="w-50"
                />
                <CardContent className="text-left">
                    <Typography variant="body2" className="text-txt_child_third_2 text-xs">
                        {item.first_line}
                    </Typography>
                    <Typography variant="body2" className="text-white font-bold">
                        {item.second_line}
                    </Typography>
                    <Box className='flex items-start'>
                        <Typography variant="body2" className="text-orange-500 pe-2">
                            {item.matic} MATIC
                        </Typography>
                        <Typography variant="body2" className="text-txt_child_third_2 text-xs">
                            {item.money}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button size="small" className="bg-orange-500 text-white rounded-full text-xs font-bold">Purchase</Button>
                </CardActions>
            </Card>
        );

    })

 
export default Card_Child;