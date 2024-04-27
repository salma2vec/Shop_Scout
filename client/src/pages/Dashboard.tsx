import React, { useState, useEffect} from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";

// Components
import Navbar from "../components/Navbar";
import DefaultButton from "../components/buttons/DefaultButton";

// Api
import { getSearchHistory } from "../api/searchs";
import DefaultPills from "../components/pills/DefaultPills";

const Dashboard = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const preferedTheme = useSelector((state) => state.user.preferedTheme);

  const wrapperClasses = classNames('h-screen', 'flex', 'flex-col', 'transition', 'transition-all', 'duration-500', 'ease-in-out', {
    'bg-darkBlack': preferedTheme === 'dark',
    'bg-lightWhite': preferedTheme === 'light',
  });

  useEffect(() => {
    const token = localStorage.getItem('access');
    getSearchHistory(token)
      .then((response) => {
        console.log(response)
        setSearchHistory(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  return (
    <div className={wrapperClasses}>
      <Navbar />
      <div className={classNames(
        'flex', 'flex-col', 'px-6', 'py-2', 'mx-10', 'rounded', 'shadow',
        preferedTheme === 'dark' ? 'bg-lighterDark' : 'bg-darkerWhite',
      )}>
        <h1 className={classNames(
          'font-bold',
          preferedTheme === 'dark' ? 'text-lightWhite' : 'text-darkBlack',
        )}>Dashboard</h1>
        <div className="flex justify-end">
          <DefaultButton text="New search" />
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-lg font-semibold">History {`(${searchHistory.length})`}</span>
          <div className="flex flex-col gap-4">
            {
              searchHistory.map((search, index) => {
                return (
                  <div key={search._id} className="flex flex-col px-2 py-1 rounded shadow bg-lighterWhite">
                    <div className="flex justify-between px-2 py-0.5 bg-darkerWhite rounded">
                      <span>{search._id}</span>
                      <span>{search.createdAt}</span>
                    </div>
                    <div className="p-1">Product preview will go here</div>
                    <div className="flex justify-between ">
                      <DefaultPills label={search.isSearching ? "Ongoing" : "Over"} classes={search.isSearching ? "bg-orange-300" : "bg-green-300"} />
                      <span>{search.updatedAt}</span>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;