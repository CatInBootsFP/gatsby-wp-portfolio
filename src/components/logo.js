import React from 'react'
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';

const LogoWrapper = styled.div`
    display: flex;
    width: 150px;
    height:35px;
    margin: auto 0;
`

const LogoImg = styled.img`
    max-width:100%;
`;

const Logo = ( ) => (
    <StaticQuery query={graphql`
      {
        allWordpressWpLogo {
          edges {
            node {
              url {
                source_url
              }
            }
          }
        }
      }
    `} render={props => (
        <LogoWrapper>
            <LogoImg src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="Logo"/>
           
            
        </LogoWrapper>
    )}/>
);
export default Logo;