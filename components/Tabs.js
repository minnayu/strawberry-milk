import React, { useEffect, useState } from 'react';
import Recent from './Recent'
import Tracks from './Tracks'
import Artists from './Artists'
import Albums from './Albums'
import styled from 'styled-components';

const TabContent = ({ activeTab, userData }) => {
    
    switch (activeTab) {
        case 'recent':
          return (
              <Recent userData={userData}/>
              );              
        case 'toptracks':
          return (
            <Tracks userData={userData}/>
            // <Test userData={userData}/>
          );
        case 'topartists':
          return (
            <Artists userData={userData}/>
          );
        case 'topalbums':
          return (
            <Albums userData={userData}/>
          );
        default:
            return null;
  }
};

const Tabs = ( userData ) => {
  const [activeTab, setActiveTab] = useState('recent');

  return (
    <TabsWrapper>
      <div style={{ fontFamily: 'Poppins' }}>
        <div className="tabs is-centered">
          <ul>
            <li className={activeTab === 'recent' ? 'is-active' : ''}>
              <a onClick={() => setActiveTab('recent')}>
                <TabTitle>Recent Tracks</TabTitle>
              </a>
            </li>
            <li className={activeTab === 'toptracks' ? 'is-active' : ''}>
              <a onClick={() => setActiveTab('toptracks')}>
                <TabTitle>Top Tracks</TabTitle>
              </a>
            </li>
            <li className={activeTab === 'topartists' ? 'is-active' : ''}>
              <a onClick={() => setActiveTab('topartists')}>
                <TabTitle>Top Artists</TabTitle>
              </a>
            </li>
            <li className={activeTab === 'topalbums' ? 'is-active' : ''}>
              <a onClick={() => setActiveTab('topalbums')}>
                <TabTitle>Top Albums</TabTitle>
              </a>
            </li>
          </ul>
        </div>
        <TabContent activeTab={activeTab} userData={userData} />
      </div>
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 1;
  padding-left: 3vw;
  padding-right: 3vw;
  margin: 1vw;
  width: 100%;

  @media (max-width: 768px) {
    padding: 2vw;
    margin: 2vw;
  }
`;

const TabTitle = styled.span`
  font-size: 1.5em;
  color: #8A4D76;

  @media (max-width: 768px) {
    font-size: 0.90em;
  }
`;

export default Tabs;