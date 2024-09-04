import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';

createRoot(document.getElementById('root')).render(
  <div className='bg-[#272C30] container w-full'>
    <StrictMode>
     <RouterProvider router={router} />
   </StrictMode>
  </div>,
 )
