import { Button } from '@/components/ui/button'
import Image from 'next/image'

function AddEvent() {
  return (
    <section>
      <div className='container  mx-auto mb-[111px]   hidden lg:block sm:px-[10px]'>
        <div className='relative m-auto h-[240.42px] w-[1042px] bg-[#2F375F] rounded-[10px] overflow-visible'>
          <Image
            src={'/images/vectorright.png'}
            alt='vector'
            width={1000}
            height={1000}
            className='absolute z-10 top-[-4px] right-[-10px]   w-[24%] object-cover rounded-[30px] '
            loading='lazy'
          />
          <Image
            className='absolute top-0 left-0 h-[100%] w-[100%]   object-cover rounded-[30px] '
            loading='lazy'
            src='/images/overlayAddEvent.png'
            alt='addeventoverlay'
            width={1000}
            height={1000}
          />
          <Image
            src={'/images/vectorleft.png'}
            alt='vector'
            width={1000}
            height={1000}
            className='absolute z-10 top-[-4px] left-[-10px]   w-[24%] object-cover rounded-[30px] '
            loading='lazy'
          />
          <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-[28px]  px-4 lg:px-0'>
            <h2 className='  font-bold mt-4  mb-4'>
              هل لديك فعالية وتريد الاعلان عندها وبيع تذاكرها من خلال قولدن
              تيكت؟
            </h2>
            <Button className='cursor-pointer h-[56px] w-[239px] text-[18px] text-center font-bold  bg-primary text-white'>
              <Image
                className='mr-2'
                src={'/icons/login.svg'}
                alt='plus'
                width={20}
                height={20}
              ></Image>
              أضافة فعالية
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddEvent
