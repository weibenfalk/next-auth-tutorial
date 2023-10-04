import Image from 'next/image';

type Props = {
  imgUrl: string;
};

const Thumb = ({ imgUrl }: Props) => (
  <Image
    placeholder='blur'
    blurDataURL='/placeholder.jpg'
    className='rounded-lg object-cover'
    layout='fill'
    src={imgUrl}
    alt='thumb'
  />
);

export default Thumb;
