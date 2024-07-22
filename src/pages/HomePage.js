import React from 'react';
import NavigationTabs from '../components/NavigationTabs';
import HowDoIRefer from '../components/HowDoIRefer';
import ReferSection from '../components/ReferSection';
import { Element } from 'react-scroll';
import BenefitsSection from '../components/BenefitsSection';

const HomePage = () => {
    return (
        <div>
            <NavigationTabs />
            <Element name="refer" className="section">
                <ReferSection />
                <HowDoIRefer />
            </Element>
            <Element name="benefits" className="section">
                <BenefitsSection />
            </Element>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>NOT COMPLETED</h1>
            <h1>NOT COMPLETED</h1>
            <h1>NOT COMPLETED</h1>
        </div>
    );
};

export default HomePage;
