import Image from 'next/image'
function NeedSupport() {
  return (
    <section>
      <div className='container  mx-auto px-4 mb-[113px]  text-right rounded-[10px] '>
        <div className='mx-auto  lg:w-[85%]   mb-5'>
          <h1 className='text-[32px] xl:text-[40px] font-bold mb-[20px] '>
            هل تحتاج مساعدة؟
          </h1>
          <p className='text-[16px] xl:text-[18px] text-[#28305FCC] mb-[44px]'>
            نحن هنا لمساعدتك. تواصل معنا في أي وقت على مدار الساعة
          </p>
        </div>
        <div className='flex justify-center items-center flex-wrap gap-[12px] xl:gap-[64px]   lg:w-[85%]  mx-auto'>
          <div className=' w-[320px] h-[120px] flex flex-col justify-center items-center  border border-primary rounded-[10px] p-5 hover:shadow-sm hover:shadow-primary transition-all duration-300 '>
            <Image src='/icons/phone.svg' alt='phone' width={20} height={20} />
            <p>رقم الهاتف</p>
            <p>632328632836</p>
          </div>
          <div className=' w-[320px] h-[120px]  flex flex-col justify-center items-center gap-2 border border-primary rounded-[10px] p-5 hover:shadow-sm hover:shadow-primary transition-all duration-300'>
            <Image src='/icons/whats.svg' alt='phone' width={20} height={20} />
            <p>البريد الالكتروني</p>
            <p>info@goldenticket.com</p>
          </div>
          <div className=' w-[320px] h-[120px]  flex flex-col justify-center items-center gap-2 border border-primary rounded-[10px] p-5 hover:shadow-sm hover:shadow-primary transition-all duration-300'>
            <Image src='/icons/letter.svg' alt='phone' width={20} height={20} />
            <p>رقم الواتس اب</p>
            <p>632328632836</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NeedSupport
