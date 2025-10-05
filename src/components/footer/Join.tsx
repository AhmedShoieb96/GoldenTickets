import Image from 'next/image'
import { Button } from '../ui/button'

function Join() {
  return (
    <section>
      <div className='  text-right rounded-[10px] hidden lg:block mb-[40px]   '>
        <div className='relative  w-full'>
          <Image
            src={'/images/joinnow.png'}
            alt='joinus'
            width={1000}
            height={1000}
            className='   w-full'
            loading='lazy'
          />
          <div className=' absolute bottom-[-20%] left-[] flex justify-center  items-end text-right   w-full h-full '>
            <div className=' flex flex-row-reverse justify-around items-center lg:w-[80%] mx-[70px] py-10 bg-[#FFFFFF] rounded-xl w-[1074px] h-[200px] '>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl   font-bold mb-2'>
                اشترك الان واحصل علي <br /> اخر العروض
              </p>
              <div className=' w-[510px] h-[72.04px]  flex flex-row-reverse justify-center items-center px-2 align-center !border-[#a2a4ac] border-1 rounded-2xl '>
                <input
                  type='text'
                  className='   mr-1.5   w-full sm:w-[400px] md:w-[500px] lg:w-[570px] text-right 
                   text-[14px]  text-[#000000] focus:outline-none placeholder:text-[14px] placeholder:text-[#979797]  '
                  placeholder='...ادخل بريدك الالكتروني'
                ></input>
                <Button className='h-[50px] w-[145px] text-[18px] text-center text-white font-medium rounded-[10px] bg-[radial-gradient(50%_50%_at_50%_50%,#31408D_0%,#2F375F_100%)]   '>
                  اشترك الأن
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Join
