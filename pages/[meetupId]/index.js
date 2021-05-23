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
  // fetch data from API
  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        id: 'm1',
        title: 'A First Meetup',
        address: 'Some Street 5, Some City',
        description: 'The meetup description',
      },
    },
    revalidate: 10,
  };
}

export default MeetupDetails;
