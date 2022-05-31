import React, { FC, useState } from 'react';

import Image, { ImageProps } from 'next/image';

const NextImage: FC<ImageProps> = (props) => {
  const lazyBoundary = props.lazyBoundary || '250px';
  const { src } = props;
  const [imgSrc, setImgSrc] = useState(src);

  const getImageURL: any = () => {
    return imgSrc;
  };

  return (
    <Image
      loader={getImageURL}
      src={imgSrc}
      lazyBoundary={lazyBoundary}
      {...props}
    />
  );
};

export default NextImage;
