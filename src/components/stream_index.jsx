import React, { useEffect } from 'react';
import StreamsIndexItem from './streams_index_item';

import axios from 'axios';

const clientId = 'phczz6owfir98r6qdz6tmmlruq4kvi';
const twitchApi = 'https://api.twitch.tv/kraken/streams/featured?&client_id=';

const StreamsIndex = () => {
  const [streams, setStreams] = React.useState([]);

  useEffect(
    () =>
      async function fetchStreams() {
        axios
          .get(twitchApi + clientId)
          .then((response) => {
            setStreams(response.data.featured);
            console.log(streams);
          })
          .catch((error) => {
            console.log('error', error);
          });
      },
    [streams]
  );

  if (streams.length <= 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='streams-index'>
      <h2>Featured Streams</h2>
      <table>
        <tbody>
          <tr>
            <th>Preview:</th>
            <th>Stream:</th>
            <th>Currently Stream:</th>
          </tr>
          {streams.map((stream, idx) => (
            <StreamsIndexItem key={idx} stream={stream} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StreamsIndex;
