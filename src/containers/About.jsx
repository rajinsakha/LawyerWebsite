import { aboutImages } from "../constants/data"


const About = () => {
  return (
    <div className="padding bg-sky-900 flex flex-col gap-8">
        <h1 className="text-2xl sm:text-4xl text-white font-bold text-center">About Us</h1>
        <p className="text-sm sm:text-base text-white ">We're a small business law firm, and we believe that the best way to help you is to take the time to learn about your business. We get it: life is hectic, and you're just trying to make it all work.<br/>That's why we've made it our mission to offer personalized legal services that help you manage your personal and business legal issues in a simple, step-by-step process. We'll take the time to listen to your needs, and then give you the individualized attention you deserve.</p>
       
       <div className="p-4 sm:p-8 grid grid-cols-4 gap-2">
        {/* Iterating over aboutImages array for displaying all the images */}
        {aboutImages.map((image, index)=>(
            <img key={index} src={image.imgURL} alt={image.imgURL} />
        ))}
       </div>
      
    </div>
  )
}

export default About
