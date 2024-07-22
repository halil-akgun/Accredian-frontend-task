import React from 'react';
import SchoolIcon from '@mui/icons-material/School';

const programsData = [
    {
        program: 'Professional Certificate Program in Product Management',
        referrerBonus: '₹ 7,000',
        refereeBonus: '₹ 9,000'
    },
    {
        program: 'PG Certificate Program in Strategic Product Management',
        referrerBonus: '₹ 9,000',
        refereeBonus: '₹ 11,000'
    },
    {
        program: 'Executive Program in Data Driven Product Management',
        referrerBonus: '₹ 10,000',
        refereeBonus: '₹ 10,000'
    },
    {
        program: 'Executive Program in Product Management and Digital Transformation',
        referrerBonus: '₹ 10,000',
        refereeBonus: '₹ 10,000'
    },
    {
        program: 'Executive Program in Product Management',
        referrerBonus: '₹ 10,000',
        refereeBonus: '₹ 10,000'
    },
    {
        program: 'Advanced Certification in Product Management',
        referrerBonus: '₹ 10,000',
        refereeBonus: '₹ 10,000'
    },
    {
        program: 'Executive Program in Product Management and Project Management',
        referrerBonus: '₹ 10,000',
        refereeBonus: '₹ 10,000'
    },
];

const Programs = () => {
    return (
        <div className="table-container">
            <table className="programs-table">
                <thead>
                    <tr>
                        <th colSpan={2}>Programs</th>
                        <th>Referrer Bonus</th>
                        <th>Referee Bonus</th>
                    </tr>
                </thead>
                <tbody>
                    {programsData.map((program, index) => (
                        <tr key={index}>
                            <td><SchoolIcon className="icon" /></td>
                            <td>{program.program}</td>
                            <td>{program.referrerBonus}</td>
                            <td>{program.refereeBonus}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Programs;
