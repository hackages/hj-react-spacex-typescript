import React, { useMemo } from 'react';
import { allLaunches } from '../../data';
import { Launch } from '../../types';

type Props = {
  flightNumber: number;
  onClose: () => void;
};

const LaunchDetailsScreen: React.FunctionComponent<Props> = ({
  flightNumber,
  onClose,
}) => {
  const launch = useMemo<Launch | undefined>(
    () => allLaunches.find(launch => launch.flight_number === flightNumber),
    [flightNumber],
  );

  return (
    <section className="my-8 font-sans container m-auto max-w-xl ">
      <div className="w-full flex flex-col items-center justify-center h-full pt-2 border-grey-lightest border-r border-b shadow-md border-0 bg-white transform-scale-subtle transition-normal show-child relative">
        <span
          className="absolute pin-t pin-r px-1 py-1 hover:text-grey-light cursor-pointer"
          onClick={onClose}
        >
          Close
        </span>
        {launch ? (
          <>
            {launch.links.mission_patch ? (
              <img
                className="w-48 h-48 rounded-full"
                alt=""
                src={launch.links.mission_patch}
              />
            ) : (
              <div className="w-48 h-48 rounded-full bg-grey-light" />
            )}
            <h3 className="mt-4 mb-1">
              {launch.launch_year} - {launch.mission_name}
            </h3>
            <div className="mt-4 text-grey-dark leading-normal px-6  block overflow-auto flex flex-col">
              <div className="mb-2">
                <p className="block text-grey-darker text-sm font-bold mb-2">
                  Launch success:&nbsp;
                  <span className="text-grey-dark">
                    {launch.launch_success ? 'Yes' : 'No'}
                  </span>
                </p>
              </div>
              <div className="mb-2">
                <p className="block text-grey-darker text-sm font-bold mb-2">
                  Launch failure details:&nbsp;
                  <span className="text-grey-dark">
                    {launch.launch_failure_details &&
                      launch.launch_failure_details.reason}
                  </span>
                </p>
              </div>
              <div className="mb-2">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                  Details:&nbsp;
                </label>
                <p className="w-full px-3 text-grey-darker leading-tight">
                  {launch.details}
                </p>
              </div>
              <div className="mb-2">
                <p className="block text-grey-darker text-sm font-bold mb-2">
                  Launch site:&nbsp;
                  <span className="text-grey-dark">
                    {launch.launch_site.site_name_long}
                  </span>
                </p>
              </div>
            </div>
          </>
        ) : (
          <div>No Launch found</div>
        )}
      </div>
    </section>
  );
};

export default LaunchDetailsScreen;
