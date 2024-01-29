import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.css'
import 'swiper/css/bundle'
import '../src/assets/css/flaticon-set.css'
import 'react-modal-video/css/modal-video.css';

import '../src/assets/css/validnavs.css'
import '../src/assets/css/unit-test.css'
import '../src/assets/css/animate.css'
import '../src/assets/css/helper.css'
import '../src/assets/css/style.css'

import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import Routers from './Routers';
import { useEffect } from 'react'
import { useState } from 'react'
import Preloader from './components/preloader/Preloader'
import ScrollUpBtn from './components/others/ScrollUpBtn'

function App() {

  //  Preloader 
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1200)
  }, [])

  return (
    <>
      {isLoading ? <Preloader /> :
        <div>
          <Helmet>
            <title>Avrix - Digital Agency Portfolio React Template</title>
            <link rel="shortcut icon" href="/img/others/favicon.ico"></link>
          </Helmet>
          <Routers />
          <ScrollUpBtn />
          <ToastContainer />
        </div>
      }
    </>
  )
}

export default App
