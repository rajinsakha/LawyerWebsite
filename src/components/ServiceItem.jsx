// Service array is being passed as prop in order to access all the values of it in one component
const ServiceItem = ({service}) => {
  return (
    <div className='flex gap-8 max-sm:flex-col'>
        <img className='flex-1 object-contain sm:w-1/2' src={service.imgURL} alt={service.title} />

        <div className="flex-1 flex flex-col bg-gray-500 py-12 px-4">
            <h3 className="text-white text-lg sm:text-2xl font-medium">{service.title}</h3>
            <ul className="list-disc py-4 px-6">
            {service.subTitle.map((sub, index) => (
            <li key={index} className="text-white text-sm sm:text-lg" >{sub.name}</li>
          ))}
            </ul>

        </div>

    </div>
  )
}


export default ServiceItem
