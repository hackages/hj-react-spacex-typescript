import React, { useState, useMemo } from 'react';
import LauncheList from './LauncheList';
import { allLaunches, upcomingLaunches, pastLaunches } from '../../data';
import StatsBar from './StatsBar';
import Tabs from './Tabs';
import { Launch } from '../../types';

const tuple = <T extends string[]>(...args: T) => args;
const tabs = tuple('All', 'Past', 'Upcoming');
export type Tab = typeof tabs[number];

const getLaunchesForTab = (tab: Tab): Launch[] => {
  switch (tab) {
    case 'All':
      return allLaunches;
    case 'Past':
      return pastLaunches;
    case 'Upcoming':
      return upcomingLaunches;
  }
};

export type onSelectLaunch = (flightNumber: number) => void;

type HomeProps = {
  onSelectLaunch: onSelectLaunch;
};

const Home: React.FunctionComponent<HomeProps> = ({ onSelectLaunch }) => {
  const [selectedTab, setSelectedTab] = useState<Tab>('All');
  const [filterText, setFilterText] = useState('');

  const filteredLaunches = React.useMemo<Launch[]>(() => {
    return getLaunchesForTab(selectedTab).filter(launch =>
      launch.mission_name.toLowerCase().includes(filterText.toLowerCase()),
    );
  }, [selectedTab, filterText]);

  return (
    <div>
      <StatsBar launches={allLaunches} />
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />
      <LauncheList
        launches={filteredLaunches}
        onSelectLaunch={onSelectLaunch}
      />
    </div>
  );
};

export default Home;
