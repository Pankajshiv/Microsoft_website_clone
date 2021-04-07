import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import MainView from './components/MainView'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import CovidResponse from './components/CovidResponse'
import OneDrivee from './components/OneDrivee'
import Social from './components/Social'
import Footer from './components/Footer'
import Showcase from './pages/microsoft_page/Showcase'
import LearnMore from './pages/microsoft_page/LearnMore'
import Video from './pages/microsoft_page/Video'
import ShowcaseOffice from './pages/office_page/ShowcaseOffice'
import OfficeGrid from './pages/office_page/OfficeGrid'
import MsGrid from './pages/office_page/MsGrid'
import Faqs from './pages/office_page/Faqs'


function App() {
  return (
    <Router>
      <Header />

      <Route path="/" exact>
        <MainView />
        <Section1 />
        <Section2 />
        <OneDrivee />
        <Section3 />
        <CovidResponse />
      </Route>

      <Route path="/microsoft-365">
        <Showcase />
        <Video />
        <LearnMore />
      </Route>

      <Route path="/office">
        <ShowcaseOffice />
        <MsGrid />
        <OfficeGrid />
        <h1 className="officeLearn">Learn more about Microsoft 365</h1>
        <LearnMore />
        <Faqs />
      </Route>
      <hr></hr>
      <Social />
      <Footer />
    </Router>
  )
}

export default App
