// api routes will only run on the server, never on the client. The code in them will never be exposed to the client
// so we can also use credentials in api routes without compromising them and those functions are then simply triggered
// whenever a request is sent to this route.

// when calling /api/new-meetup, this function in this file which got the "export default" will be triggered:

function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;
  }
}

export default handler;
