import React from 'react';
import { List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material/styles';

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
        '&:hover': {
            backgroundColor: '#1a73e8d5',
        },
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
        '&:hover': {
            backgroundColor: '#f9f9f9',
        },
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

const AllPrograms = ({ programs }) => {
    return (
        <StyledList subheader={
            <ListSubheader>
                ALL PROGRAMS
                <ArrowForwardIosIcon sx={{ fontSize: '12px', color: '#fff' }} />
            </ListSubheader>
        }>
            {programs.map((program, index) => (
                <ListItem key={index}>
                    <ListItemText primaryTypographyProps={{ fontSize: '12px', fontWeight: 'bold' }} primary={program} />
                    <ArrowForwardIosIcon sx={{ fontSize: '12px', color: '#1A73E8' }} />
                </ListItem>
            ))}
        </StyledList>
    );
}

export default AllPrograms;
