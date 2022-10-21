import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion"
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

  const showAnimation = {
    hidden : {
        width: 0,
        opacity: 0, 
        transition: {
            duration: 0.5,
        }
    },
    show : {
        width: "auto",
        opacity: 1,
        transition: {
            duration: 0.2,
        }
    }
  }
  return (
    <div className='main-container'>
        <motion.div animate={{ width : isOpen ? "200px" : "40px",
            transition: {
                duration: 0.5,
                type: "spring",
                damping: 11,
            },
            }} className="side-bar">

            <div className="top-section">
                {isOpen && <h1 className='logo'>Ngage</h1>}
                <div className='bars'>
                    <FaBars onClick={toggle} />
                </div>
            </div>

            <section className='routes'>
                {routes.map((route) => (
                    <NavLink activeClassName="active" to={route.path} key={route.name} className="link">
                        <div className='icon'>{route.icon}</div>
                        <AnimatePresence>
                        {isOpen && <motion.div variants={showAnimation} initial="hidden" animate="show" exit="hidden" className='link-text'>{route.name}</motion.div>}
                        </AnimatePresence>
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