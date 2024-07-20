import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ReferTab from './ReferTab';

const getRandomImageUrl = () => {
    const randomId = Math.floor(Math.random() * 500) + 1;
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
            <Box sx={{ width: '80%' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    {tabContent.map((tab, index) => (
                        <Tab
                            key={index}
                            label={tab.label}
                            sx={{ textTransform: 'none' }}
                        />
                    ))}
                </Tabs>
                <Box sx={{ p: 3, textAlign: 'center' }}>
                    {tabContent[value].content || (
                        <img src={tabContent[value].imgSrc} alt={tabContent[value].label} style={{ maxWidth: '100%', borderRadius: '13px' }} />
                    )}
                </Box>
            </Box>
        </Box>
    );
}
