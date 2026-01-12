import { FaInfoCircle } from 'react-icons/fa'
import { SeoAnalyzer } from './components/SeoAnalyzer/SeoAnalyzer'

function App() {

  return (
    <>
      <div className='card'>
      <h1>Mini SEO-Analyzer</h1>
        
      <p><FaInfoCircle />Paste your HTML and enter comma-separated keywords to get a quick look at how your page handles SEO.</p>
      </div>
      <SeoAnalyzer />
    </>
  )
}

export default App
