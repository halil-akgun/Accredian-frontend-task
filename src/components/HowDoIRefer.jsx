import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import howDoIReferImg from '../assets/howDoIReferImg.png';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const FullWidthContainer = styled(Box)({
    backgroundColor: '#EEF5FF',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100%',
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    position: 'relative',
});

const StyledImage = styled('img')({
    maxWidth: '999px',
    height: 'auto',
    '@media (max-width: 960px)': {
        width: '100%',
        marginTop: '20px',
    },
});

const StyledButton = styled(Button)({
    marginTop: '40px',
    marginBottom: '40px',
    backgroundColor: '#1A73E8',
    textTransform: 'none',
    color: '#ffffff',
    '&:hover': {
        backgroundColor: '#1A73E8'
    }
});

const IconContainer = styled(Box)({
    position: 'absolute',
    width: '120px',
    height: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});

const IconText = styled(Typography)({
    marginTop: '10px',
    fontSize: '13px',
    width: '133px',
});

const HowDoIRefer = () => {
    return (
        <FullWidthContainer>
            <Typography sx={{ paddingTop: '30px', paddingBottom: '30px' }} variant="h4" component="h1" gutterBottom>
                How Do I <span style={{ color: '#1A73E8' }}>Refer?</span>
            </Typography>
            <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <StyledImage src={howDoIReferImg} alt="How Do I Refer Image" />
                <IconContainer id='iconContainer1' sx={{ top: '28%', left: '16.5%' }}>
                    <PersonAddAlt1Icon sx={{ fontSize: '66px', color: '#1A73E8' }} />
                    <IconText className="iconText">Submit referrals easily via our website’s referral section.</IconText>
                </IconContainer>
                <IconContainer id='iconContainer2' sx={{ top: '28%', left: '44%' }}>
                    <SaveAsIcon sx={{ fontSize: '66px', color: '#1A73E8' }} />
                    <IconText className="iconText">Earn rewards once your referral joins an Accredian program.</IconText>
                </IconContainer>
                <IconContainer id='iconContainer3' sx={{ top: '28%', left: '72%' }}>
                    <AccountBalanceWalletIcon sx={{ fontSize: '66px', color: '#1A73E8' }} />
                    <IconText className="iconText">Both parties receive a bonus 30 days after program enrollment.</IconText>
                </IconContainer>
            </Box>
            <StyledButton variant="contained">
                Refer Now
            </StyledButton>
        </FullWidthContainer>
    );
}

export default HowDoIRefer;
