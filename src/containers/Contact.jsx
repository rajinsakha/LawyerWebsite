
const Contact = () => {
  return (
    <div className="padding contact flex flex-col gap-10 text-white">
         <h1 className="text-2xl sm:text-4xl text-white font-bold text-center">Contact</h1>

       <div className="flex flex-col gap-6 sm:px-16">
        <div>
        <h3 className="text-xl sm:text-2xl py-2">Opening Hours</h3>
        <p className="text-base">Monday to Friday: 09:00 - 17:00</p>
        </div>

        <div>
        <h3 className="text-xl sm:text-2xl py-2">Information</h3>
        <p className="text-base">Address: <span className="underline">Haagweg 4F10, 2311 AA Leiden, NL</span></p>
        <p className="text-base">Phone: <span className="underline">0031713410161</span></p>
        <p className="text-base">Email: <span className="underline">info@compra.nl</span></p>
        </div>

        <div>
        <h3 className="text-xl sm:text-2xl py-2">Questions?</h3>
        <p className="text-base">Email us using this form - rest assured we will promptly upon your message reply.</p>
        </div>
        </div> 

        <div className="flex justify-center items-center mt-8">
            <form className="flex flex-col gap-4 text-black">
                <input type="text" name="fullname" id="fullname" placeholder="Name" />
                <input type="email" name="email" id="email" placeholder="Email" />
                <input type="tel" name="phone" id="phone" placeholder="Phone" />
                <textarea className="resize-none px-4 py-1" name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
            </form>
        </div>

        
      


    </div>
  )
}

export default Contact
