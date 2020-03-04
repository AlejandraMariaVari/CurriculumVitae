import React from 'react';
import styled, { ThemeProvider } from 'styled-components';


//Se guardan las etiquetas html en una const y se le asignan unos estilos css
const SocialStyle = styled.div`
     margin: 0 auto;
     display: block;
`;

const SocialUl = styled.ul`
    list-style-type: none;
    margin: 0 auto;
    display: block;
    padding: 0;
`;

const SocialLi = styled.li`
    display: inline;
    margin: 0 1em 0 0;
`;


const SocialAnchor = styled.a`
    color: #212121;
    text-decoration: none;
    font-size: 1.2em;
`;

//Paoso un color a través de un props
const SocialIcon = styled.i`
    color: ${props => props.theme.color}
`;

const facebook = {
    color: "#3b5998"
}

const twitter = {
    color: "#38A1F3"
}

const linkedin = {
    color: "#0e76a8"
}

const github = {
    color: "#333"
}

const getColor = (name) => {
    if(name === 'facebook') return facebook;
    if(name === 'github') return github;
    if(name === 'linkedin') return linkedin;
    if(name === 'twitter') return twitter;
}


const Social = props => (
    <SocialStyle className="Social">
        {props.social &&
            <SocialUl>
                {props.social.map( (item, index) => (
                    <SocialLi key={`Social-${index}`} target="_blank">
                        <SocialAnchor href={item.url}>
                            <ThemeProvider theme={getColor(item.name)}>
                                 <SocialIcon className={`fa fa-${item.name}`}/>
                            </ThemeProvider>
                        </SocialAnchor>
                    </SocialLi>
                ))}
            </SocialUl>
        }
    </SocialStyle>
);


export default Social;