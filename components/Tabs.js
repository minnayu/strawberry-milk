import React, { useEffect, useState } from 'react';
import Recent from './Recent'
import Tracks from './Tracks'
import Artists from './Artists'
const { lfmGetRecent } = require('../functions.js');


const TabContent = ({ activeTab, userData }) => {
    
    switch (activeTab) {
        case 'recent':
          return (
              <Recent userData={userData}/>
              );              
        case 'toptracks':
        return (
          <Tracks userData={userData}/>
        );
        case 'topartists':
        return (
          <Artists userData={userData}/>
        );
        case 'documents':
        return (
            <div class="container">
            <h2>Documents</h2>
            <p>Coming soon...</p>
            </div>
        );
        default:
            return null;
  }
};

const Tabs = (userData) => {
  const [activeTab, setActiveTab] = useState('recent');

  return (
      <div>
    <div className="tabs is-boxed is-centered">
      <ul>
        <li className={activeTab === 'recent' ? 'is-active' : ''}>
          <a onClick={() => setActiveTab('recent')}>
            <span className="has-text-link">Recent Tracks</span>
          </a>
        </li>
        <li className={activeTab === 'toptracks' ? 'is-active' : ''}>
          <a onClick={() => setActiveTab('toptracks')}>
            <span className="has-text-link">Top Tracks</span>
          </a>
        </li>
        <li className={activeTab === 'topartists' ? 'is-active' : ''}>
          <a onClick={() => setActiveTab('topartists')}>
            <span className="has-text-link">Artists</span>
          </a>
        </li>
      </ul>
    </div>
    <TabContent activeTab={activeTab} userData={userData}/>
    </div>
  );
};

export default Tabs;
