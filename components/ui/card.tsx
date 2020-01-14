import React from 'react'


type Elevation = 1 | 2 | 3 | 4 | 5


interface CardProps {
  elevation?: Elevation
}

const Card: React.FC<CardProps> = ({ children, elevation = 1 }) => {
  return (
    <>
      <div className={`elevation-${elevation} card`}>
        {children}
      </div>
      <style jsx>{`
        .elevation-1 { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); }
        .elevation-2 { box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); }
        .elevation-3 { box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); }
        .elevation-4 { box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); }
        .elevation-5 { box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22); }

        .card {
          background: white;
          width: 100%;
          box-sizing: border-box;
          border-radius: 5px;
        }
        
      `}</style>
    </>
  )
}

export default Card