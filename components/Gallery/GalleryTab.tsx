import Image from 'next/image';
import { Tab } from '@headlessui/react';

import './style.scss';

interface GalleryTabProps {
  image: string;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="galleryTab">
      {({ selected }) => <Image fill src={image} alt="Image" sizes='100px'/>}
    </Tab>
  );
};

export default GalleryTab;
 