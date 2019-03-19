import React from 'react';

const StatsBar = ({ launches }) => {
  return (
    <section className="bg-white py-4 font-sans">
      <div className="container max-w-xl m-auto flex flex-wrap md:flex-no-wrap items-center justify-center">
        <h1 className="w-full md:w-1/4 font-medium tracking-normal mb-4 md:mb-0">
          Important
          <br />
          Stats
        </h1>
        <div className="w-1/3 md:w-1/4">
          <span className="text-xs inline-block mr-2 uppercase text-grey-darkest tracking-wide">
            Total launch
          </span>
          <h2 className="inline-block">{launches.length}</h2>
        </div>
        <div className="w-1/3 md:w-1/4">
          <span className="text-xs inline-block mr-2 uppercase text-grey-darkest tracking-wide">
            Percentage of success
          </span>
          <h2 className="inline-block">
            {Math.round(
              (launches.filter(launch => launch.launch_success).length /
                launches.length) *
                100,
            )}
            &nbsp;%
          </h2>
        </div>
        <div className="w-1/3 md:w-1/4">
          <span className="text-xs inline-block mr-2 uppercase text-grey-darkest tracking-wide">
            Percentage of failure
          </span>
          <h2 className="inline-block">
            {Math.round(
              (launches.filter(launch => !launch.launch_success).length /
                launches.length) *
                100,
            )}
            &nbsp;%
          </h2>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
