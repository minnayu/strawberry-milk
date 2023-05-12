import React, { useEffect, useState } from 'react';
const { lfmGetRecent } = require('../functions.js');


const TabContent = ({ activeTab, userData }) => {
    
    switch (activeTab) {
        case 'tracks':
            return (
                <div class="container">
                    <div class="columns is-multiline">
                    {userData.userData.recentTracks.map((track, index) => (
                      <div class="column" key={index}>
                        <div class="card is-flex">
                            <div class="card-content">
                              <div class="card-image">
                                <figure class="image is-64x64">
                                  <img src="https://bulma.io/images/placeholders/64x64.png" alt="Placeholder image"/>
                                </figure>
                              </div>
                            <div class="media">
                                <div class="media-content">
                                <p class="title is-4">{track.name}</p>
                                <p class="subtitle is-6">{track.artist["#text"]}</p>
                                </div>
                            </div>
                            {/* <div class="content">
                                <p>Play count: {track.playcount}</p>
                            </div> */}
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
