import { useState } from "react";
import logo from '../assets/company_logo.png'
import control from '../assets/control.png'
import { NavLink } from 'react-router-dom';
const SideBar = ({children}) => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", icon:<i className="fa-sharp fa-solid fa-house"/>, path:'/' },
    { title: "Categories", icon: <i className="fa-sharp fa-solid fa-users"/>, path:'/categories' },
    { title: "Budgets Expenses", icon: <i className="fa-sharp fa-solid fa-user"/>, path:'/budgets-expenses' },
    { title: "Budgets Revenues", icon: <i class="fa-sharp fa-solid fa-check-to-slot"></i>, path:'/budgets-revenues' },
  ];
  const Finance = [
    { title: "Client Database", icon: <i class="fa-sharp fa-solid fa-table"></i>, path:'/client-database' },
    { title: "Accounting System", icon: <i class="fa-sharp  fa-regular fa-note-sticky"></i>, path:'/accounting-system' },
    { title: "Financial Analysis", icon: <i class="fa-sharp fa-solid fa-sack-dollar"></i>, path:'/financial-analysis' },
    { title: "Payment Details", icon: <i class="fa-sharp fa-solid fa-sack-dollar"></i>, path:'/payment-details' },
    { title: "Forecasting", icon: <i class="fa-sharp fa-solid fa-sack-dollar"></i>, path:'/forecasting' },


  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple p-5 min-h-screen pt-8 relative duration-300`}
      >
        <div>
          
        
        <img
          src={control} alt=""
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo} alt=""
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>
        <ul className="pt-6 ">
         <p className="text-white text-xs"> Accounting</p>
          {Menus.map((Menu, index) => (
            <NavLink to={Menu.path} key={index}  >
            <li
              className={`flex  rounded-md p-2 cursor-pointer  hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"}`}
            >
               <p className="text-white text-lg">{Menu.icon}</p>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
            </NavLink>
          ))}
        </ul>
        <ul className="pt-6 ">
         <p className="text-white text-xs"> Finance</p>
          {Finance.map((finance, index) => (
            <NavLink to={finance.path} key={index}  >
            <li
              className={`flex  rounded-md p-2 cursor-pointer  hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${finance.gap ? "mt-9" : "mt-2"}`}
            >
               <p className="text-white text-lg">{finance.icon}</p>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {finance.title}
              </span>
            </li>
            </NavLink>
          ))}
        </ul>
        </div>
      </div>
      <div className=" flex-1">
      <main className='min-h-screen'>{children}</main>
      </div>
    </div>
  );
};
export default SideBar;
