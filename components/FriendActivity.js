import React from 'react';
import useSWR from 'swr'

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">{title}</p>
        <div className="content">{content}</div>
      </div>
    </div>
  );
};

const CardList = ({ cards }) => {
  return (
    <div className="card">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

const cardsData = [
  {
    title: 'Card 1',
    content: 'This is the content for Card 1',
  },
  {
    title: 'Card 2',
    content: 'This is the content for Card 2',
  },
  {
    title: 'Card 3',
    content: 'This is the content for Card 3',
  },
];

const FriendActivity = (user) => {
    // const { data, error } = useSWR(`/api/user/${user}/tracks`, fetcher)

    return (
        <div className="container">
        {/* <h1 className="title">Friend Activity</h1>
        <CardList cards={cardsData} /> */}
        {/* <p>{JSON.stringify(data)}</p> */}
        </div>
    );
};

export default FriendActivity;


