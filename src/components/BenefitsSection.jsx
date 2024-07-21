import React from 'react';
import { Box, List, ListItem, ListItemText, ListSubheader, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Container = styled(Box)({
    width: '70%',
    maxWidth: '1360px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '60px',
    marginBottom: '60px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    position: 'relative',
    '@media (max-width: 960px)': {
        flexDirection: 'column',
        padding: '10px',
    },
});

const StyledList = styled(List)({
    width: '100%',
    maxWidth: 360,
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    '& .MuiListSubheader-root': {
        backgroundColor: '#1A73E8',
        fontSize: '12px',
        color: '#fff',
        cursor: 'pointer',
        borderRadius: '10px 10px 0 0',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 16px',
    },
    '& .MuiListItem-root': {
        padding: '10px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        cursor: 'pointer',
        alignItems: 'center',
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '15px',
            right: '22px',
            height: '1px',
            backgroundColor: '#E0E0E0',
        },
        '&:last-child::after': {
            content: 'none',
        },
    },
    '& .MuiListItemText-root': {
        flex: '1 1 auto',
    },
});

const BenefitsSection = () => {
    const programs = [
        'PRODUCT MANAGEMENT',
        'STRATEGY & LEADERSHIP',
        'BUSINESS MANAGEMENT',
        'FINTECH',
        'SENIOR MANAGEMENT',
        'DATA SCIENCE',
        'DIGITAL TRANSFORMATION',
        'BUSINESS ANALYTICS',
    ];

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Container>
                <Typography sx={{ fontSize: '19px', fontWeight: 'bold', paddingTop: '10px', paddingBottom: '10px' }} variant="h4" component="h1" gutterBottom>
                    What Are The <span style={{ color: '#1A73E8' }}>Referral Benefits?</span>
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <StyledList subheader={
                            <ListSubheader>
                                ALL PROGRAMS
                                <ArrowForwardIosIcon sx={{ fontSize: '12px', color: '#fff' }} />
                            </ListSubheader>
                        }>
                            {programs.map((program, index) => (
                                <ListItem key={index}>
                                    <ListItemText primaryTypographyProps={{ fontSize: '11px', fontWeight: 'bold' }} primary={program} />
                                    <ArrowForwardIosIcon sx={{ fontSize: '12px', color: '#1A73E8' }} />
                                </ListItem>
                            ))}
                        </StyledList>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Item>Program Details Here</Item>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default BenefitsSection;
