import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/Home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Educação',
    path: '/educacao',
    icon: <BsIcons.BsPlayBtnFill />,
    cName: 'nav-text'
  },
  {
    title: 'Precificação',
    path: '/produtos',
    icon: <FaIcons.FaCalculator />,
    cName: 'nav-text'
  },
  {
    title: 'Workshop',
    path: '/workshop',
    icon: <IoIcons.IoFemale />,
    cName: 'nav-text'
  },
  {
    title: 'Infantil',
    path: '/infantil',
    icon: <FaIcons.FaBaby />,
    cName: 'nav-text'
  },
  {
    title: '',
    path: '',
    icon: '',
    cName: '',
  },
  {
    title: 'Sair',
    path: '/logout',
    icon: <RiIcons.RiLogoutCircleLine />,
    cName: 'nav-text',
  },
]