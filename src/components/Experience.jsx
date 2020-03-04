import React from 'react';

const Experience = props => (
    <div className="Experience">
        {props.data.map((exp, index) => (
            <div className="Experience-container" key={`Exp-${index}`}>
                <div className="Experience-item">
                    <h3>{exp.jobTitle}
                        <span> {exp.startDate} - {exp.endDate}</span>
                    </h3>
                    <p>{exp.jobDescription}</p> 
                </div>
            </div>
        ))}
    </div>
);

export default Experience;