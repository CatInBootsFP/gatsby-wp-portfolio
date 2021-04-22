import React from 'react'
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';

const FaviconWrapper = styled.div`
    display: flex;
    width: 35px;
    height:35px;
    margin: auto 0;
`

const FaviconImg = styled.img`
    max-width:100%;
`;

const Favicon = ( ) => (
    <StaticQuery query={graphql`
    {
        allWordpressWpFavicon {
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
        <FaviconWrapper>
            <FaviconImg src={props.allWordpressWpFavicon.edges[0].node.url.source_url} alt="Favicon"/>
           
            
        </FaviconWrapper>
    )}/>
);
export default Favicon;