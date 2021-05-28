// our-domain.com/new-meetup

import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    console.log('enteredMeetupData=', enteredMeetupData);
    // const response = await fetch('https://some-domain.com/abc');
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.push('/'); // if you don't want them to use back button you can do router.replace('XXX')
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
