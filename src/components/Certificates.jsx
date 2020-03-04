import React from 'react';

const Certificates = props => (
    <div className="Certificates">
        {props.data.map((cert, index) => (
            <div className="Certificates-container" key={`Cert-${index}`}>
                <div className="Certificates-item">
                    <h3>{cert.name} - {cert.institution}, {cert.date}</h3>
                    <p>{cert.description}</p> 
                </div>
            </div>
        ))}
    </div>
);

export default Certificates;