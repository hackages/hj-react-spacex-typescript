import React from 'react';
const LauncheList = ({ launches, onSelectLaunch }) => {
  return (
    <section className="my-8 font-sans container m-auto max-w-xl ">
      <div className="flex flex-col sm:flex-row flex-wrap my-8">
        {launches.map(launch => (
          <div
            key={launch.flight_number}
            onClick={() => onSelectLaunch(launch.flight_number)}
            className="cursor-pointer w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 border-grey-lightest border-r border-b hover:shadow-md hover:border-0 bg-white hover:transform-scale-subtle transition-normal hover:show-child"
          >
            {launch.links.mission_patch_small ? (
              <img
                src={launch.links.mission_patch_small}
                className="w-12 h-12 rounded-full"
                alt=""
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-grey-light" />
            )}
            <h3 className="mt-4 mb-1">
              {launch.launch_year} - {launch.mission_name}
            </h3>
            <p className="mt-4 text-center text-grey-dark leading-normal px-6 hidden hover:block overflow-auto">
              {launch.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LauncheList;
