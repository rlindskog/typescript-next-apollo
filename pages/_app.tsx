import React from 'react'
import { AppProps } from 'next/app'
import NavBar from '../components/nav-bar'

const MyApp: React.FC<AppProps> = ({ Component, router, children, pageProps }) => {
  return (
      <>
      <NavBar/>
      <div className="content">
        <Component {...pageProps}/>
      </div>
      <style jsx global>{`
        body, html {
          padding: 0;
          margin: 0;
          width: 100%;
        }
        .content {
          display: flex;
          justify-content: center;
          flex-direction: row;
          align-items: center;
        }
        .container {
          padding: 15px;
          width: 600px;
          max-width: calc(100% - 15px);
        }
      `}</style>
      </>
  )
}

export default MyApp