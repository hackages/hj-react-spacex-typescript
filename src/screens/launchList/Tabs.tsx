import React, { useState, useMemo } from 'react';
import { Tab } from './LauncheListScreen';

const Tabs: React.FunctionComponent<{
  selectedTab: Tab;
  tabs: Tab[];
  filterText: string;
  onSelectTab: (value: Tab) => void;
  onFilterTextChange: (value: string) => void;
}> = ({ selectedTab, tabs, filterText, onSelectTab, onFilterTextChange }) => {
  return (
    <section className="bg-white py-4 font-sans">
      <div className="container m-auto max-w-xl flex items-baseline justify-start border-b-2 border-grey-light mb-10 ">
        {tabs.map(tab => (
          <h2
            key={tab}
            onClick={() => onSelectTab(tab)}
            className={`${
              selectedTab === tab ? 'border-b-2 border-black -mb-4' : ''
            }hover:text-grey-darkest cursor-pointer text-grey-dark text-base font-bold tracking-wide uppercase py-4 px-6 `}
          >
            {tab}
          </h2>
        ))}
        <input
          type="text"
          value={filterText}
          onChange={e => onFilterTextChange(e.target.value)}
          placeholder="Filter mission name"
          className="text-sm transition focus:outline-0 border border-transparent focus:bg-white focus:border-grey-light placeholder-grey-darkest rounded bg-grey-lighter py-1 px-2 pl-10 appearance-none leading-normal ds-input"
        />
      </div>
    </section>
  );
};

export default Tabs;
