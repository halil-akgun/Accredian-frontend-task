import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import anniversarImg from '../assets/Anniversar.png';
import moneyImg from '../assets/money.png';

const Container = styled(Box)({
    width: '100%',
    maxWidth: '1360px',
    height: 'auto',
    backgroundColor: '#EEF5FF',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 20px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    position: 'relative',
    '@media (max-width: 960px)': {
        flexDirection: 'column',
        padding: '10px',
    },
});

const TextContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: '5px',
    padding: '20px',
    '@media (max-width: 960px)': {
        width: '100%',
        padding: '10px',
        alignItems: 'center',
        textAlign: 'center',
    },
});

const ImageContainer = styled(Box)({
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    '@media (max-width: 960px)': {
        width: '100%',
        marginTop: '20px',
    },
});

const MoneyImage = styled('img')({
    position: 'absolute',
    width: '100px',
    height: 'auto',
    zIndex: 1,
});

const ReferTab = () => {
    return (
        <Container>
            <TextContainer>
                <Typography variant="h2" component="h1" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    Let’s Learn & Earn
                </Typography>
                <Typography variant="h6" component="p" style={{ marginTop: '10px' }}>
                    Get a chance to win up-to <span style={{ color: '#1A73E8', fontWeight: 'bold', fontSize: '1.6rem' }}>Rs. 15,000</span>
                </Typography>
                <Button sx={{ marginTop: '20px', width: '150px', textTransform: 'none' }} variant="contained" color="primary">
                    Refer Now
                </Button>
                <MoneyImage src={moneyImg} alt="Money" style={{ top: '-35px', left: '0%', transform: 'rotate(110deg)' }} />
            </TextContainer>
            <ImageContainer>
                <img src={anniversarImg} alt="Sample" style={{ maxWidth: '100%', zIndex: 3 }} />
                <MoneyImage src={moneyImg} alt="Money" style={{ top: '66%', left: '8%', transform: 'rotate(-70deg) scale(0.9)', zIndex: 4 }} />
                <MoneyImage src={moneyImg} alt="Money" style={{ top: '-11%', right: '-2%', transform: 'rotate(180deg)', zIndex: 4 }} />
                <MoneyImage src={moneyImg} alt="Money" style={{ top: '-4%', right: '55%', transform: 'rotate(180deg)', zIndex: 2 }} />
                <MoneyImage src={moneyImg} alt="Money" style={{ bottom: '29%', right: '5%', transform: 'rotate(100deg)', zIndex: 2 }} />
            </ImageContainer>
        </Container>
    );
};

export default ReferTab;
