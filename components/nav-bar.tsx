import React from 'react'
import Link from 'next/link'

interface NavItemProps {
  href: string
}
const NavItem: React.FC<NavItemProps> = ({ children, href }) => {
  return (
    <>
      <Link href={href}>
        <a className="nav-item-container">{children}</a>
      </Link>
      <style jsx>{`
        .nav-item-container {
          display: flex;
          align-items: center;
          height: 100%;
          width: 75px;
          text-decoration: none;
          color: black;
        }
        .nav-item-content {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      `}</style>
    </>
  )
}

const NavBar: React.FC = () => {
  return (
    <>
    <div className="navbar-container">
      <NavItem href="/">Home</NavItem>
      <NavItem href="login">Login</NavItem>
      <NavItem href="signup">Signup</NavItem>
    </div>
    <style jsx>{`
      .navbar-container {
        display: flex;
        justify-content: flex-end;
        height: 55px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        width: 100%;
      }
    `}</style>
    </>
  )
}

export default NavBar