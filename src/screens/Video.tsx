import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Background } from '../components/Background';

import { Screen } from '../components/Screen';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { StateType } from '../reducers';
import { VideoInformation } from '../components/VideoInformation';
import { Back } from '../components/Back';

export const Video: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const video = useSelector((state: StateType) =>
    state.videos?.find(video => video.id === parseInt(id))
  );
  const error = useSelector((state: StateType) => state.error);
  const loading = useSelector((state: StateType) => state.loading);

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  if (error) {
    return (
      <Error>
        <strong>Error: </strong> {error}
      </Error>
    );
  }

  if (!video) {
    return <Error>Not found.</Error>;
  }

  return (
    <Screen>
      <Background image={video.image_url} title={video.title} />
      <VideoInformation video={video} />
      <Back />
    </Screen>
  );
};
