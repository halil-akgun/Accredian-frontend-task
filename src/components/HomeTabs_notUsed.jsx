import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ReferTab from './ReferTab';

const getRandomImageUrl = () => {
    const randomId = Math.floor(Math.random() * 333) + 1;
    return `https://picsum.photos/id/${randomId}/1700/691`;
};

const tabContent = [
    {
        label: "Refer",
        content: <ReferTab />
    },
    {
        label: "Benefits",
        imgSrc: getRandomImageUrl()
    },
    {
        label: "FAQs",
        imgSrc: getRandomImageUrl()
    },
    {
        label: "Support",
        imgSrc: getRandomImageUrl()
    }
];

export default function HomeTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', bgcolor: 'background.paper', p: 3 }}>
            <Box sx={{ width: '80%', textAlign: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                    <Tabs
                        sx={{ backgroundColor: '#e6f0fc', borderRadius: '50px', width: '422px' }}
                        value={value}
                        onChange={handleChange}
                        centered
                    >
                        {tabContent.map((tab, index) => (
                            <Tab
                                key={index}
                                label={tab.label}
                                sx={{ textTransform: 'none' }}
                            />
                        ))}
                    </Tabs>
                </Box>
                <Box sx={{ p: 3, textAlign: 'center', borderRadius: '13px', padding: '0px', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1)' }}>
                    {tabContent[value].content || (
                        <img src={tabContent[value].imgSrc} alt={tabContent[value].label} style={{ maxWidth: '100%', borderRadius: '13px' }} />
                    )}
                </Box>
            </Box>
        </Box>
    );
}
