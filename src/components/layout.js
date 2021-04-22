/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import MainMenu from './MainMenu'
import styled, {createGlobalStyle} from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';

const FavicoWrapper = styled.div`
    float: right;
    width: 50px;
    height:50px;
    margin: auto 15px;
`

const FavicoImg = styled.img`
    max-width:100%;
`;

const Favico = ( ) => (
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
      <FavicoWrapper>
          <FavicoImg src={props.allWordpressWpFavicon.edges[0].node.url.source_url} alt="Favicon"/>
         
          
      </FavicoWrapper>
  )}/>
);

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body{
    font-family: 'Open Sans', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }
`;

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Layout = ({ children }) => (
  <div>
    
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
    <Favico />
    {children}
    </LayoutWrapper>
    
    
  </div>
)
export default Layout
