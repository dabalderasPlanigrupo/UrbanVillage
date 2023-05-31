import Image from 'next/image';
import Img1 from '@/images/img_1.jpg';
import Img2 from '@/images/img_2.jpg';
import Img3 from '@/images/img_3.jpg';
import Img4 from '@/images/img_4.jpg';
import { AiFillShop } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';
import { MdWork } from 'react-icons/md';

const ElementList = [
  {
    icon: <AiFillShop size={140} />,
    number: 54,
    text: 'Locales Ocupados',
  },
  {
    icon: <IoIosPeople size={140} />,
    number: 15923,
    text: 'Afluencia Mensual',
  },
  {
    icon: <MdWork size={140} />,
    number: 36,
    text: 'Giros Comerciales',
  },
];

const FbPostsList = [
  {
    likes: 7,
    image: <Image src={Img1} alt="Img1" />,
  },
  {
    likes: 23,
    image: <Image src={Img2} alt="Img2" />,
  },
  {
    likes: 3,
    image: <Image src={Img3} alt="Img3" />,
  },
  {
    likes: 12,
    image: <Image src={Img4} alt="Img4" />,
  },
];

export { ElementList, FbPostsList };
