import React from 'react';
import { Link } from 'react-scroll';
import { styled } from '@mui/system';

const TabContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F0FF',
    padding: '10px',
    borderRadius: '25px',
    margin: '20px 0',
    gap: '45px',
    width: '577px',
    height: '50px',
});

const Tab = styled(Link)({
    padding: '10px 20px',
    cursor: 'pointer',
    color: '#000',
    textDecoration: 'none',
    '&.active': {
        color: '#1A73E8',
        borderBottom: '2px solid #1A73E8',
    },
    '&:hover': {
        color: '#1A73E8',
    }
});

const NavigationTabs = () => {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <TabContainer>
                <Tab to="refer" spy={true} smooth={true} duration={500} activeClass="active" offset={-60}>Refer</Tab>
                <Tab to="benefits" spy={true} smooth={true} duration={500} activeClass="active" offset={-60}>Benefits</Tab>
                <Tab to="faqs" spy={true} smooth={true} duration={500} activeClass="active" offset={-60}>FAQs</Tab>
                <Tab to="support" spy={true} smooth={true} duration={500} activeClass="active" offset={-60}>Support</Tab>
            </TabContainer>
        </div>
    );
};

export default NavigationTabs;
