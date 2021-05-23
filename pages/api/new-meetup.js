// api routes will only run on the server, never on the client. The code in them will never be exposed to the client
// so we can also use credentials in api routes without compromising them and those functions are then simply triggered
// whenever a request is sent to this route.

// when calling /api/new-meetup, this function in this file which got the "export default" will be triggered:

import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      'mongodb+srv://annie:<password>@testcluster1-4fb1w.mongodb.net/test?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
    console.log('result=', result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
