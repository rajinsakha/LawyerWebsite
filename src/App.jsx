
import { Navbar, Footer } from './components'
import { About, Contact, Hero, Services} from './containers'

function App() {

  return (
    <>
    <section className='container'>
      <Navbar />
      <Hero />
    </section>

    <Services />
    <About />
    <Contact />
    <Footer />
      
    
    </>
  )
}

export default App
