import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home'
import { Header } from '../../components/Header';
import './App.css'
import { Footer } from '../../components/Footer';
import { MultimediaContextProvider } from '../../Context';
import { NewVideo } from '../NewVideo';
import { Video } from '../Video';
import { NotFound } from '../NotFound';
import { SuccesfulVideo } from '../SuccessfulVideo';

const App = () => {
  return (
    <MultimediaContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevo-video" element={<NewVideo />} />
        <Route path="/:id" element={<Video />} />
        <Route path="/success" element={<SuccesfulVideo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </MultimediaContextProvider>
  )
}

export default App