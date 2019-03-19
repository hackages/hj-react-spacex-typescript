import React from 'react';
import LauncheList from './LauncheList.jsx';
import { allLaunches, upcomingLaunches, pastLaunches } from '../../data';
import StatsBar from './StatsBar.jsx';
import Tabs from './Tabs.jsx';

const tabs = ['All', 'Past', 'Upcoming'];

const getLaunchesForTab = tab => {
  switch (tab) {
    case 'All':
      return allLaunches;
    case 'Past':
      return pastLaunches;
    case 'Upcoming':
      return upcomingLaunches;
    default:
      return allLaunches;
  }
};

class Home extends React.Component {
  state = { selectedTab: 'All', filterText: '' };

  setSelectedTab = selectedTab => this.setState({ selectedTab });
  setFilterText = filterText => this.setState({ filterText });

  getfilteredLaunches = () => {
    const { selectedTab, filterText } = this.state;
    return getLaunchesForTab(selectedTab).filter(launch =>
      launch.mission_name.toLowerCase().includes(filterText.toLowerCase()),
    );
  };

  render() {
    const { selectedTab, filterText } = this.state;
    return (
      <div>
        <StatsBar launches={allLaunches} />
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onSelectTab={this.setSelectedTab}
          filterText={filterText}
          onFilterTextChange={this.setFilterText}
        />
        <LauncheList
          launches={this.getfilteredLaunches()}
          onSelectLaunch={this.props.onSelectLaunch}
        />
      </div>
    );
  }
}

export default Home;
