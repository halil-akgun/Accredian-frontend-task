import React from 'react';
import { Box, Typography, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AllPrograms from './AllPrograms';
import Programs from './Programs';
import ReferButton from './ReferButton';

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
                        <AllPrograms programs={programs} />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Programs />
                    </Grid>
                </Grid>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                    <FormControl sx={{ m: 2, minWidth: 140 }} disabled>
                        <InputLabel id="demo-simple-select-disabled-label">Show More</InputLabel>
                        <Select
                            labelId="demo-simple-select-disabled-label"
                            id="demo-simple-select-disabled"
                            label="Show More"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <ReferButton />
                </div>
            </Container>
        </Box>
    );
}

export default BenefitsSection;
