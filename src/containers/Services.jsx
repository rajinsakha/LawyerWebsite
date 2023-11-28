import { ServiceItem } from "../components"
import { services } from "../constants/data"

const Services = () => {
  return (
    <div className="padding flex flex-col gap-6">
        <h1 className="text-2xl sm:text-4xl text-black font-bold text-center">Our Services</h1>
        <p className="text-sm sm:text-base mb-8">The legal services we offer ensure the safeguarding of your rights. We advise and defend employees in disputes with the employer. The defence of labour rights acquired over decades, is based on respect, comprehension, flexibility and loyalty to the client. Our work is based on objectivity, experience and senstivity to people.</p>

        <div className="flex flex-col gap-12">
            {services.map((service, index)=> (
                <ServiceItem key={index} service={service} />
            ))}
        </div>
      
    </div>
  )
}

export default Services
