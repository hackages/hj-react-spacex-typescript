import React, { useState } from 'react';
import LaunchListScreen from './screens/launchList';
import LaunchDetailsScreen from './screens/launchDetails';
import './styles.scss';

const App: React.FunctionComponent = () => {
  const [selectedLaunch, setSelectedLaunch] = useState<number | null>(null);
  return (
    <div>
      <nav className="font-sans bg-white text-center flex justify-between my-4 mx-auto container overflow-hidden items-center">
        <div className="flex items-center">
          <ul className="text-sm text-grey-dark list-reset flex items-center">
            <li>
              <button
                className="inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark no-underline cursor-pointer"
                onClick={() => setSelectedLaunch(null)}
              >
                Mission
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {selectedLaunch ? (
        <LaunchDetailsScreen
          flightNumber={selectedLaunch}
          onClose={() => setSelectedLaunch(null)}
        />
      ) : (
        <LaunchListScreen onSelectLaunch={setSelectedLaunch} />
      )}
    </div>
  );
};

export default App;
