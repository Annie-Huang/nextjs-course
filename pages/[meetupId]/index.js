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
  console.log('meetupId=', meetupId);

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
