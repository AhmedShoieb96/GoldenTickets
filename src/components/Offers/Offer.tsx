import { Button } from '@/components/ui/button'
import Image from 'next/image'
function Offer({
  offer,
  image,
  title,
}: {
  offer?: string
  image?: string
  title?: string
}) {
  return (
    <div className='relative  w-full h-[300px] rounded-[30px]   overflow-hidden '>
      <div tabIndex={0} className='absolute inset-0 bg-[#4c246ea6] flex flex-col items-center justify-end text-white text-lg
       font-bold rounded-[30px] z-10 transition-opacity duration-300 opacity-0 hover:opacity-100 focus:opacity-100'>
        <h1>{offer}</h1>
        <Button className='mb-8 cursor-pointer mt-8 bg-primary text-white'>
          {title}
        </Button>
      </div>
      <Image
        src={image ?? '/image.png'}
        alt='Offer Image'
        width={400}
        height={300}
        className='absolute top-0 left-0 w-full h-full object-cover rounded-[30px]  '
      />
    </div>
  )
}

export default Offer
