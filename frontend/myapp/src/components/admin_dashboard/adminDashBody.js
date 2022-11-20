import React, {useState} from "react";
import Navbar from "../home/navbar"
import Footer from '../home/footer';
// import React, {useState} from "react";
import Table from "./empManage";
import AdminDashBody1 from "./task_admin_assg";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <>
    <div className="w-full h-max bg-[#171717] py-2 mt-[70px] min-h-[700px]">
      <div className="flex flex-wrap">
        <div className="w-full">
        
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color 
                    : "text-" + color + "-200 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Task Assignment
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color 
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Employee Management
              </a>
            </li>
          </ul>
          
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <AdminDashBody1/>
                </div>

                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                
                <Table/>
            
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default function AdminDashBody() {
  return (
    <>
      <Navbar/>
      <Tabs color="black" />
      <Footer/>

    </>
  );
}