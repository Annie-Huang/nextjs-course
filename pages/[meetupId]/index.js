import MeetupDetail from '../../components/meetups/MeetupDetail';
import { useRouter } from 'next/router';

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
      title='A First Meetup'
      address='Some Street 5, Some City'
      description='The meetup description'
    />
  );
};

// Error: getStaticPaths is required for dynamic SSG pages and is missing for '/[meetupId]'.
// Need to pre-generate for all the urls for all the meetupId values users might be entering.
// If user enters an id for which we didn't pre-generate a page they will see a 404 error.
//
// So we need to add getStaticPath which has the job of returning an object where we describe all the dynamic segment values
// so all the meetup ids in this case for which this page should be pre-generated.
//
// fallback: false -> says your path contains all supported meetup id values. It means if the user enters anything that's not supported here,
// e.g. m3, he or she will see a 404 error.
// fallback: true -> says your path contains ONLY some of supported meetup id values. next.js would try to generate a page for this meetupId dynamically on the server for the incoming request (m3)
//
export async function getStaticPaths() {
  // Need to have paths, params, meetupId.
  return {
    paths: [{ params: { meetupId: 'm1' } }, { params: { meetupId: 'm2' } }],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  /*
  // Inside getStaticProps(), you cannot access useRouter
  const router = useRouter();
  console.log(router.query.newsId); // log what is the newsId value.
  */

  // When you use context in getServerSideProps(), you can access
  //   const req = context.req;
  //   const res = context.res;
  // When you use context in getStaticProps(), you can access to context.params.
  const meetupId = context.params.meetupId; // [meetupId]\index.js
  console.log('meetupId=', meetupId); // You can see this log in the terminal but not devtool, because it's running in server side during the build time, not client side.

  // fetch data from API
  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        id: meetupId,
        title: 'A First Meetup',
        address: 'Some Street 5, Some City',
        description: 'The meetup description',
      },
    },
    revalidate: 10,
  };
}

export default MeetupDetails;
