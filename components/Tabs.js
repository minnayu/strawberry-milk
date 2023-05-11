import React, { useEffect, useState } from 'react';
const { lfmGetRecent } = require('../functions.js');


const TabContent = ({ activeTab, userData }) => {
    const [recentTracks, setRecentTracks] = useState(userData.recentTracks)
    
    
    switch (activeTab) {
        case 'tracks':
            return (
                <div class="container">
                    <div class="columns is-multiline">
                    {recentTracks.map((track, index) => (
                        <div class="column is-one-third" key={index}>
                        <div class="card">
                            <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                <p class="title is-4">{track.name}</p>
                                <p class="subtitle is-6">{track.artist["#text"]}</p>
                                </div>
                            </div>
                            <div class="content">
                                <p>Play count: {track.playcount}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                );              
        case 'artists':
        return (
            <div class="container">
            <h2>Music</h2>
            
            </div>
        );
        case 'albums':
        return (
            <div class="container">
            <h2>Videos</h2>
            <p>Coming soon...</p>
            </div>
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
  const [activeTab, setActiveTab] = useState('tracks');

  return (
      <div>
    <div className="tabs is-centered is-boxed">
      <ul>
        <li className={activeTab === 'tracks' ? 'is-active' : ''}>
          <a onClick={() => setActiveTab('tracks')}>
            <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
            <span>Tracks</span>
          </a>
        </li>
        <li className={activeTab === 'artists' ? 'is-active' : ''}>
          <a onClick={() => setActiveTab('artists')}>
            <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span>
            <span>Artists</span>
          </a>
        </li>
        <li className={activeTab === 'albums' ? 'is-active' : ''}>
          <a onClick={() => setActiveTab('albums')}>
            <span className="icon is-small"><i className="fas fa-film" aria-hidden="true"></i></span>
            <span>Albums</span>
          </a>
        </li>
      </ul>
    </div>
    <TabContent activeTab={activeTab} userData={userData}/>
    </div>
  );
};

export default Tabs;
