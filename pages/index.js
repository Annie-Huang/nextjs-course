import MeetupList from '../components/meetups/MeetupList.js';
import { useEffect, useState } from 'react';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!',
  },
];

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
};

// If it got the getStaticProps, it will call this to create the props first. Then calling your components and pass the props to your component,
// hence resolve the problem of when the component is loaded, the data is not fully fetched yet and SEO is not optimized problem.
//
// And if you add 'async' to your getStaticProps, The app will force to wait for data as well.
// This code is executed during the build, not when your app is alive in prod.
export async function getStaticProps() {
  // fetch data from API
  return {
    props: {},
  };
}

export default HomePage;
