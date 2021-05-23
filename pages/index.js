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

const HomePage = (props) => {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   // send a http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return <MeetupList meetups={props.meetups} />;
};

// If it got the getStaticProps, it will call this to create the props first. Then calling your components and pass the props to your component,
// hence resolve the problem of when the component is loaded, the data is not fully fetched yet and SEO is not optimized problem.
//
// And if you add 'async' to your getStaticProps, The app will force to wait for data as well.
// This code is executed during the build, not when your app is alive in prod.
// When you open devtool after using getStateProps, you will see the ul>li got the details of the meetup info
//
// You pre-generate a html file, that file can then be stored and served by a cdn and that is simply is faster than regenerating and
// fetching that data for every incoming request so your page will be faster when working with getStaticProps because it can be cached and reused
// instead of regenerated all the time (Server-Side Rendering). But getStaticProps does not have access to request and response object.
//
// Incremental static regeneration (IRS):
// The Page will occasionally be re-pre-generated on the server after deployment so that you don't have to redeploy and rebuilt all
// time just because some data changes.
// revalidate: 10 means retrieve again if it's more than 10 seconds from the previous request.
export async function getStaticProps() {
  // fetch data from API
  return {
    props: { meetups: DUMMY_MEETUPS },
    revalidate: 10,
  };
}

// Server-Side Rendering (SSR)
// getServerSideProps will make the call to server for every request that comes in. The page is really pre-generated for every incoming request.
// When you open google devtool, you can also see all the data is there in ul>li
//
// Will not run during the build process but instead always on the server after deployment.
// You will still return an object with a props property. It's to get the props for the HomePage component.
// You can fetch the data from an api or from a file system. The code within getServerSideProps will always run on the server, never in the client.
// So you can run server side code in here. You can also perform operations that use credentials that should not be exposed to your users
//
// From the context, you can get the request (and all its headers request body) object and response object going to the server and coming back from server.
// this is like the middleware object if you use node.js and express.
// It's useful when you work with authentication and you need to check some session cookie or anything like this.
//
// Disadvantage: You will need to wait for your page to be generated on every incoming request.
// 1. If you don't have data that change all the time, e.g. change multiple time every second. 2. And if you don't need to access to the request object for, e.g. authentication,
// Then getStaticProps() is actually better.
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from API
  return {
    props: { meetups: DUMMY_MEETUPS },
  };
}

export default HomePage;
