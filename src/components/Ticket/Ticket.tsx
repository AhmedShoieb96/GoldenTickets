import { Button } from '@/components/ui/button'
import Image from 'next/image'

async function Ticket() {
  return (
    <section>
      <div className='container  mx-auto  py-[40px] lg:py-[66px] mb-[113px]   '>
        <div className=' relative mx-auto h-[240.42px] w-[85%] xl:w-[1042px] bg-[#2F375F] rounded-[10px] overflow-visible'>
          <div className='w-[118px] h-[118px] bg-white z-10 absolute bottom-[75%] right-[35%]   rounded-full'></div>
          <Image
            className='absolute top-0 left-0 h-[100%] w-[100%]   object-cover rounded-[30px] '
            loading='lazy'
            src='/images/overlay.png'
            alt='addeventoverlay'
            width={1000}
            height={1000}
          />
          <div className='w-[118px] h-[118px] bg-white z-10 absolute top-[75%] left-[35%]   rounded-full'></div>
          <div className=' absolute top-1/2 md:right-[-5%] right-[-13%] transform -translate-x-1/2 -translate-y-1/2 text-right text-white  xl:text-[28px]  px-auto lg:px-0'>
            <h1>
              اجعل من التذكرة<span className='text-primary '> هدية</span>{' '}
              واستمتع
              <br /> !بخيار الدفع لاحقًا!
            </h1>
            <Button className='cursor-pointer h-[50px] mt-1 w-[145px] lg:text-xl xl:text-2xl text-center font-bold  bg-primary text-white'>
              اشتري الأن
            </Button>
          </div>

          <Image
            className='absolute xl:top-[-55%] lg:top-[-55%] md:top-[-30%] top-[-20%]     w-[30%] '
            src='/images/tickets.png'
            width={1000}
            height={1000}
            alt='ticket'
          />
        </div>
      </div>
    </section>
  )
}

export default Ticket
