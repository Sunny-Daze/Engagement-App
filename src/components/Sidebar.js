import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"
import { FaRegCompass, FaBars } from "react-icons/fa"
import { MdOutlineAccountTree } from "react-icons/md"
import { BsLightningChargeFill, BsPlay } from "react-icons/bs"
import { FiUsers } from "react-icons/fi"
import { HiShoppingCart } from "react-icons/hi"

const routes = [
    {
        path : "/",
        name : "Community",
        icon : <FaRegCompass />
    },
    {
        path : "/projects",
        name : "Projects",
        icon : <MdOutlineAccountTree />
    },
    {
        path : "/training",
        name : "Training",
        icon : <BsLightningChargeFill />
    },
    {
        path : "/recreation",
        name : "Recreation",
        icon : <BsPlay />
    },
    {
        path : "/management",
        name : "Management",
        icon : <FiUsers />
    },
    {
        path : "/store",
        name : "Store",
        icon : <HiShoppingCart />
    }
]

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(0)

    const toggle = () => setIsOpen(!isOpen)
  return (
    <div className='main-container'>
        <motion.div animate={{ width : "200px"}} className="side-bar">

            <div className="top-section">
                <h1 className='logo'>Ngage</h1>
                <div className='bars'>
                    <FaBars />
                </div>
            </div>

            <section className='routes'>
                {routes.map((route) => (
                    <NavLink to={route.path} key={route.name} className="link">
                        <div className='icon'>{route.icon}</div>
                        <div className='link-text'>{route.name}</div>
                    </NavLink>
                ))}
            </section>
        </motion.div>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Sidebar;