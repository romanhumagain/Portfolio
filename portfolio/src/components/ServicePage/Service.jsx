const Service = ({ service }) => {
  return (
    <>
      <div className="flex flex-col w-full max-w-md gap-2 p-5 transition-transform duration-700 shadow-md bg-gradient-to-l from-slate-100 to-slate-300 dark:from-neutral-800 dark:to-neutral-900 item-start rounded-2xl hover:scale-105">
        <service.icon className='text-4xl text-gray-800 dark:text-gray-300' />
        <p className='text-[22px] font-semibold text-gray-800 dark:text-gray-300'>{service.title}</p>
        <p className='text-sm font-medium text-gray-700 dark:text-gray-400'>{service.technologies}</p>
        <p className='font-normal text-gray-800 dark:text-gray-400 text-md'>
          {service.description}
        </p>
      </div>
    </>
  )
}

export default Service