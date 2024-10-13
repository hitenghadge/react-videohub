import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const videosArr = [
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
    'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
    'https://www.w3schools.com/html/movie.mp4',
    'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-video.mp4',
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: '100%',
          }}
        ></video>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video 1</Heading>
          <Text>
            This is a sample video for testing and demo. This is called
            description.
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p="8"
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            key={index}
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
