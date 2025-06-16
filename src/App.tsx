import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'swiper/css';
import 'swiper/css/bundle';
import 'react-modal-video/css/modal-video.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-photo-view/dist/react-photo-view.css';
import "react-datepicker/dist/react-datepicker.css";

import '../src/assets/css/animate.css';
import '../src/assets/css/font-awesome.min.css';
import '../src/assets/css/flaticon-set.css';

import '../src/assets/css/validnavs.css';
import '../src/assets/css/shop.css';
import '../src/assets/css/helper.css';
import '../src/assets/css/unit-test.css';
import '../src/assets/css/style.css';

import Routers from './Routers';
import RoutesScrollToTop from './components/utilities/RoutesScrollToTop';
import { ToastContainer } from 'react-toastify';
import Dependency from './components/utilities/Dependency';
import Preloader from './components/utilities/Preloader';
import { useEffect, useState } from 'react';
import ReduxWrapper from './components/utilities/ReduxWrapper';

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
        <>
          <ReduxWrapper>
            <Routers />
            <RoutesScrollToTop />
            <ToastContainer />
            <Dependency />
          </ReduxWrapper>
        </>
      }
    </>
  )
}

export default App
