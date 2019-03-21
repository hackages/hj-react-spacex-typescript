import { Launch } from '../types';
// tslint:disable:max-line-length
export const pastLaunches: Launch[] = [
  {
    flight_number: 1,
    launch_year: '2006',
    mission_name: 'FalconSat',
    details: 'Engine failure at 33 seconds and loss of vehicle',
    launch_success: false,
    launch_failure_details: {
      reason: 'merlin engine failure',
      time: 33,
      altitude: null,
    },
    launch_site: {
      site_id: 'kwajalein_atoll',
      site_name: 'Kwajalein Atoll',
      site_name_long: 'Kwajalein Atoll Omelek Island',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
      mission_patch: 'https://images2.imgbox.com/40/e3/GypSkayF_o.png',
    },
  },
  {
    flight_number: 2,
    launch_year: '2007',
    mission_name: 'DemoSat',
    details:
      'Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage',
    launch_success: false,
    launch_failure_details: {
      reason: 'harmonic oscillation leading to premature engine shutdown',
      time: 301,
      altitude: 289,
    },
    launch_site: {
      site_id: 'kwajalein_atoll',
      site_name: 'Kwajalein Atoll',
      site_name_long: 'Kwajalein Atoll Omelek Island',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png',
      mission_patch: 'https://images2.imgbox.com/be/e7/iNqsqVYM_o.png',
    },
  },
  {
    flight_number: 3,
    launch_year: '2008',
    mission_name: 'Trailblazer',
    details:
      'Residual stage 1 thrust led to collision between stage 1 and stage 2',
    launch_success: false,
    launch_failure_details: {
      reason:
        'residual stage-1 thrust led to collision between stage 1 and stage 2',
      time: 140,
      altitude: 35,
    },
    launch_site: {
      site_id: 'kwajalein_atoll',
      site_name: 'Kwajalein Atoll',
      site_name_long: 'Kwajalein Atoll Omelek Island',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/3d/86/cnu0pan8_o.png',
      mission_patch: 'https://images2.imgbox.com/4b/bd/d8UxLh4q_o.png',
    },
  },
  {
    flight_number: 4,
    launch_year: '2008',
    mission_name: 'RatSat',
    details:
      'Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1',
    launch_success: true,
    launch_site: {
      site_id: 'kwajalein_atoll',
      site_name: 'Kwajalein Atoll',
      site_name_long: 'Kwajalein Atoll Omelek Island',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png',
      mission_patch: 'https://images2.imgbox.com/e0/a7/FNjvKlXW_o.png',
    },
  },
  {
    flight_number: 5,
    launch_year: '2009',
    mission_name: 'RazakSat',
    details: null,
    launch_success: true,
    launch_site: {
      site_id: 'kwajalein_atoll',
      site_name: 'Kwajalein Atoll',
      site_name_long: 'Kwajalein Atoll Omelek Island',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/a7/ba/NBZSw3Ho_o.png',
      mission_patch: 'https://images2.imgbox.com/8d/fc/0qdZMWWx_o.png',
    },
  },
  {
    flight_number: 6,
    launch_year: '2010',
    mission_name: 'Falcon 9 Test Flight',
    details: null,
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/5c/36/gbDKf6Y7_o.png',
      mission_patch: 'https://images2.imgbox.com/d6/12/yxne8mMD_o.png',
    },
  },
  {
    flight_number: 7,
    launch_year: '2010',
    mission_name: 'COTS 1',
    details: null,
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/d9/3e/FfrN88ry_o.png',
      mission_patch: 'https://images2.imgbox.com/00/2f/FhtEd0nB_o.png',
    },
  },
  {
    flight_number: 8,
    launch_year: '2012',
    mission_name: 'COTS 2',
    details:
      'Launch was scrubbed on first attempt, second launch attempt was successful',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/fc/7a/r9ITwL12_o.png',
      mission_patch: 'https://images2.imgbox.com/2b/8e/MYyHbnd2_o.png',
    },
  },
  {
    flight_number: 9,
    launch_year: '2012',
    mission_name: 'CRS-1',
    details:
      "CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost due to Falcon 9 boost stage engine failure, ISS visiting vehicle safety rules, and the primary payload owner's contractual right to decline a second ignition of the second stage under some conditions.",
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/0b/33/2eLGEejP_o.png',
      mission_patch: 'https://images2.imgbox.com/52/09/eNvilptL_o.png',
    },
  },
  {
    flight_number: 10,
    launch_year: '2013',
    mission_name: 'CRS-2',
    details: 'Last launch of the original Falcon 9 v1.0 launch vehicle',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/1b/b6/Z4oktZeR_o.png',
      mission_patch: 'https://images2.imgbox.com/ef/39/FyZRYeOh_o.png',
    },
  },
  {
    flight_number: 11,
    launch_year: '2013',
    mission_name: 'CASSIOPE',
    details:
      'Commercial mission and first Falcon 9 v1.1 flight, with improved 13-tonne to LEO capacity. Following second-stage separation from the first stage, an attempt was made to perform an ocean touchdown test of the discarded booster vehicle. The test provided good test data on the experiment-its primary objective-but as the booster neared the ocean, aerodynamic forces caused an uncontrollable roll. The center engine, depleted of fuel by centrifugal force, shut down resulting in the impact and destruction of the vehicle.',
    launch_success: true,
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/91/27/VhC1TTYN_o.png',
      mission_patch: 'https://images2.imgbox.com/89/bc/JcbcvuBI_o.png',
    },
  },
  {
    flight_number: 12,
    launch_year: '2013',
    mission_name: 'SES-8',
    details: 'First GTO launch for Falcon 9',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/42/b0/vP0sk3d5_o.png',
      mission_patch: 'https://images2.imgbox.com/b5/1d/46Eo0yuu_o.png',
    },
  },
  {
    flight_number: 13,
    launch_year: '2014',
    mission_name: 'Thaicom 6',
    details:
      'Second GTO launch for Falcon 9. The USAF evaluated launch data from this flight as part of a separate certification program for SpaceX to qualify to fly U.S. military payloads and found that the Thaicom 6 launch had "unacceptable fuel reserves at engine cutoff of the stage 2 second burnoff"',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/d8/6d/fnqIBEJh_o.png',
      mission_patch: 'https://images2.imgbox.com/37/c4/jRAk115c_o.png',
    },
  },
  {
    flight_number: 14,
    launch_year: '2014',
    mission_name: 'CRS-3',
    details:
      'Following second-stage separation, SpaceX conducted a second controlled-descent test of the discarded booster vehicle and achieved the first successful controlled ocean touchdown of a liquid-rocket-engine orbital booster. Following touchdown the first stage tipped over as expected and was destroyed. This was the first Falcon 9 booster to fly with extensible landing legs and the first Dragon mission with the Falcon 9 v1.1 launch vehicle.',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/a0/cb/s1h2RuR0_o.png',
      mission_patch: 'https://images2.imgbox.com/ff/81/EOWojaSj_o.png',
    },
  },
  {
    flight_number: 15,
    launch_year: '2014',
    mission_name: 'OG-2 Mission 1',
    details:
      'Total payload mass was 1,316 kg (2,901 lb) : 6 satellites weighing 172 kg each, plus two 142-kg mass simulators. This was the second Falcon 9 booster equipped with landing legs. Following second-stage separation, SpaceX conducted a controlled-descent test of the first stage, which successfully decelerated from hypersonic velocity in the upper atmosphere, made reentry and landing burns, deployed its legs and touched down on the ocean surface. As with the previous mission, the first stage then tipped over as expected and was not recovered.',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/a7/b4/bcMrHMey_o.png',
      mission_patch: 'https://images2.imgbox.com/4d/ed/CHXoRaSP_o.png',
    },
  },
  {
    flight_number: 16,
    launch_year: '2014',
    mission_name: 'AsiaSat 8',
    details: null,
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/bf/12/oSP2EwNz_o.png',
      mission_patch: 'https://images2.imgbox.com/5a/ab/8IzvDOzc_o.png',
    },
  },
  {
    flight_number: 17,
    launch_year: '2014',
    mission_name: 'AsiaSat 6',
    details: null,
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/6f/c0/D3Owbmpo_o.png',
      mission_patch: 'https://images2.imgbox.com/57/6a/upI6gwfq_o.png',
    },
  },
  {
    flight_number: 18,
    launch_year: '2014',
    mission_name: 'CRS-4',
    details: null,
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/b4/28/cQwcs8qz_o.png',
      mission_patch: 'https://images2.imgbox.com/0d/e8/tfdeNslS_o.png',
    },
  },
  {
    flight_number: 19,
    launch_year: '2015',
    mission_name: 'CRS-5',
    details:
      "Following second stage separation, SpaceX performed a test flight which attempted to return the first stage of the Falcon 9 through the atmosphere and land it on an approximately 90-by-50-meter (300 ft x 160 ft) floating platform-called the autonomous spaceport drone ship. Many of the test objectives were achieved, including precision control of the rocket's descent to land on the platform at a specific point in the Atlantic ocean, and a large amount of test data was obtained from the first use of grid fin control surfaces used for more precise reentry positioning. The grid fin control system ran out of hydraulic fluid a minute before landing and the landing itself resulted in a crash.",
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/25/b6/RhNppyL3_o.png',
      mission_patch: 'https://images2.imgbox.com/fe/5a/WyQS4MXa_o.png',
    },
  },
  {
    flight_number: 20,
    launch_year: '2015',
    mission_name: 'DSCOVR',
    details:
      "First launch under USAF's OSP 3 launch contract. First SpaceX launch to put a satellite to an orbit with an orbital altitude many times the distance to the Moon: Sun-Earth libration point L1. The first stage made a test flight descent to an over-ocean landing within 10 m (33 ft) of its intended target.",
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/63/c5/0OIpD59z_o.png',
      mission_patch: 'https://images2.imgbox.com/ec/a0/kTPQRyzt_o.png',
    },
  },
  {
    flight_number: 21,
    launch_year: '2015',
    mission_name: 'ABS-3A / Eutelsat 115W B',
    details:
      "The launch was Boeing's first-ever conjoined launch of a lighter-weight dual-commsat stack that was specifically designed to take advantage of the lower-cost SpaceX Falcon 9 launch vehicle. Per satellite, launch costs were less than $30 million. The ABS satellite reached its final destination ahead of schedule and started operations on September 10.",
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/20/10/sqPgZfej_o.png',
      mission_patch: 'https://images2.imgbox.com/78/82/H9gthFmK_o.png',
    },
  },
  {
    flight_number: 22,
    launch_year: '2015',
    mission_name: 'CRS-6',
    details:
      'Following the first-stage boost, SpaceX attempted a controlled-descent test of the first stage. The first stage contacted the ship, but soon tipped over due to excess lateral velocity caused by a stuck throttle valve resulting in a later-than-intended downthrottle.',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/3d/55/kbVulokl_o.png',
      mission_patch: 'https://images2.imgbox.com/e4/9f/GRP89UBo_o.png',
    },
  },
  {
    flight_number: 23,
    launch_year: '2015',
    mission_name: 'TürkmenÄlem 52°E / MonacoSAT',
    details: null,
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/c9/35/VNpbqUPb_o.png',
      mission_patch: 'https://images2.imgbox.com/7a/99/RLkM4sNw_o.png',
    },
  },
  {
    flight_number: 24,
    launch_year: '2015',
    mission_name: 'CRS-7',
    details:
      'Launch performance was nominal until an overpressure incident in the second-stage LOX tank, leading to vehicle breakup at T+150 seconds. The Dragon capsule survived the explosion but was lost upon splashdown because its software did not contain provisions for parachute deployment on launch vehicle failure.',
    launch_success: false,
    launch_failure_details: {
      reason:
        'helium tank overpressure lead to the second stage LOX tank explosion',
      time: 139,
      altitude: 40,
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/d0/22/gyTVYo21_o.png',
      mission_patch: 'https://images2.imgbox.com/47/39/stH98Qy1_o.png',
    },
  },
  {
    flight_number: 25,
    launch_year: '2015',
    mission_name: 'OG-2 Mission 2',
    details:
      'Total payload mass was 2,034 kg (4,484 lb) : 11 satellites weighing 172 kg each, plus a 142-kg mass simulator. This was the first launch of the upgraded v1.1 variant (later called Falcon 9 Full Thrust), with a 30 percent power increase. Orbcomm had originally agreed to be the third flight of the enhanced-thrust rocket, but the change to the maiden flight position was announced in October 2015. SpaceX received a permit from the FAA to land the booster on solid ground at Cape Canaveral, and succeeded.',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/89/e8/5eeThzqZ_o.png',
      mission_patch: 'https://images2.imgbox.com/65/a5/8iNE9T6Y_o.png',
    },
  },
  {
    flight_number: 26,
    launch_year: '2016',
    mission_name: 'Jason 3',
    details:
      'First launch of NASA and NOAA joint science mission under the NLS II launch contract (not related to NASA CRS or USAF OSP3 contracts). Last launch of the original Falcon 9 v1.1 launch vehicle. The Jason-3 satellite was successfully deployed to target orbit. SpaceX again attempted a recovery of the first stage booster by landing on an autonomous drone ship; this time located in the Pacific Ocean. The first stage did achieve a soft-landing on the ship, but a lockout on one of the landing legs failed to latch, so that the booster fell over and exploded.',
    launch_success: true,
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/72/f2/uK9vYzvk_o.png',
      mission_patch: 'https://images2.imgbox.com/71/59/j489OwAI_o.png',
    },
  },
  {
    flight_number: 27,
    launch_year: '2016',
    mission_name: 'SES-9',
    details:
      'Second launch of the enhanced Falcon 9 Full Thrust launch vehicle. Following the launch, SpaceX attempted an experimental landing test to a drone ship, although a successful landing was not expected because launch mass exceeded previously indicated limit for a GTO there was little fuel left. As predicted, booster recovery failed: the spent first stage "landed hard", but the controlled-descent, atmospheric re-entry and navigation to the drone ship were successful and returned significant test data on bringing back high-energy Falcon 9s.',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/fa/ef/4FBvVReu_o.png',
      mission_patch: 'https://images2.imgbox.com/f6/aa/xDtGo0WJ_o.png',
    },
  },
  {
    flight_number: 28,
    launch_year: '2016',
    mission_name: 'CRS-8',
    details:
      "Dragon carried over 1500 kg of supplies and delivered (stowed in its trunk) the inflatable Bigelow Expandable Activity Module (BEAM) to the ISS for two years of in-orbit tests. The rocket's first stage landed smoothly on SpaceX's autonomous spaceport drone ship 9 minutes after liftoff, making this the first ever successful landing of a rocket booster on a ship at sea as part of an orbital launch. The first stage B1021 was later also the first orbital booster to be used again, when launching SES-10 on March 30, 2017.",
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/49/2a/gkSR50yc_o.png',
      mission_patch: 'https://images2.imgbox.com/1b/f0/tyNDMK5j_o.png',
    },
  },
  {
    flight_number: 29,
    launch_year: '2016',
    mission_name: 'JCSAT-2B',
    details:
      'Launched the JCSAT 14 communications satellite for Tokyo-based SKY Perfect JSAT Corp. JCSAT 14 will support data networks, television broadcasters and mobile communications users in Japan, East Asia, Russia, Oceania, Hawaii and other Pacific islands. This was the first time a booster successfully landed after a GTO mission.',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/87/c9/qViUTdt5_o.png',
      mission_patch: 'https://images2.imgbox.com/84/40/ddJiuhNV_o.png',
    },
  },
  {
    flight_number: 30,
    launch_year: '2016',
    mission_name: 'Thaicom 8',
    details:
      'Manufactured by Orbital ATK, the 3,100-kilogram (6,800 lb) Thaicom 8 communications satellite will serve Thailand, India and Africa from the 78.5° East geostationary location. It is equipped with 24 active Ku-band transponders.',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/d1/de/waYRCanq_o.png',
      mission_patch: 'https://images2.imgbox.com/b7/ec/5kukvU10_o.png',
    },
  },
  {
    flight_number: 31,
    launch_year: '2016',
    mission_name: 'ABS-2A / Eutelsat 117W B',
    details:
      'One year after pioneering this technique on flight 16, Falcon again launched two Boeing 702SP gridded ion thruster satellites in a dual-stack configuration, with the two customers sharing the rocket and mission costs. First stage landing attempt on drone ship failed on landing due to low thrust on one of the three landing engines.',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/ae/e9/VTH2y7S5_o.png',
      mission_patch: 'https://images2.imgbox.com/07/79/4ajR03l9_o.png',
    },
  },
  {
    flight_number: 32,
    launch_year: '2016',
    mission_name: 'CRS-9',
    details:
      'Among other cargo, an International Docking Adapter (IDA-2) was carried to the ISS. This mission had a successful first-stage landing at Cape Canaveral.*Including the reusable Dragon Capsule, total payload to orbit was 6457 kg.',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/b6/52/p5vdNEJF_o.png',
      mission_patch: 'https://images2.imgbox.com/7c/07/rs4MS4HU_o.png',
    },
  },
  {
    flight_number: 33,
    launch_year: '2016',
    mission_name: 'JCSAT-16',
    details:
      'First attempt to touch down from a ballistic trajectory using a single-engine landing burn. All previous landings from a ballistic trajectory had fired three engines on the landing-burn, which provided more braking force, but subjected the vehicle to greater structural stresses. The single-engine landing burn takes more time and fuel, but puts less stress on the vehicle.',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/a4/21/eLkeQOl8_o.png',
      mission_patch: 'https://images2.imgbox.com/74/fc/KiaMQgym_o.png',
    },
  },
  {
    flight_number: 34,
    launch_year: '2016',
    mission_name: 'Amos-6',
    details:
      'The rocket and Amos-6 payload were lost in a launch pad explosion on September 1, 2016 during propellant fill prior to a static fire test. The pad was clear of personnel and there were no injuries.',
    launch_success: false,
    launch_failure_details: {
      reason:
        'buckled liner in several of the COPV tanks, causing perforations that allowed liquid and/or solid oxygen to accumulate underneath the lining, which was ignited by friction.',
      time: -165180,
      altitude: 0,
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/54/7a/c5XLHIvL_o.png',
      mission_patch: 'https://images2.imgbox.com/eb/28/cg2hkitx_o.png',
    },
  },
  {
    flight_number: 35,
    launch_year: '2017',
    mission_name: 'Iridium NEXT Mission 1',
    details:
      'Return-to-flight mission after the loss of Amos-6 in September 2016. Iridium NEXT will replace the original Iridium constellation, launched in the late 1990s. Each Falcon mission will carry 10 satellites, with a goal to complete deployment of the 66 plus 9 spare satellite constellation by mid 2018. The first two Iridium qualification units were supposed to ride a Dnepr rocket in April 2016 but were delayed, so Iridium decided to qualify the first batch of 10 satellites instead.',
    launch_success: true,
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/a6/e8/5PyY296y_o.png',
      mission_patch: 'https://images2.imgbox.com/ab/b8/USCniUHy_o.png',
    },
  },
  {
    flight_number: 36,
    launch_year: '2017',
    mission_name: 'CRS-10',
    details:
      'First Falcon 9 flight from the historic LC-39A launchpad at Kennedy Space Center, carrying supplies and materials to support dozens of science and research investigations scheduled during ISS Expeditions 50 and 51. The first stage returned to launch site and landed at LZ-1.',
    launch_success: true,
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/d3/08/7YmXiSOQ_o.png',
      mission_patch: 'https://images2.imgbox.com/02/52/hp8DpyGM_o.png',
    },
  },
  {
    flight_number: 37,
    launch_year: '2017',
    mission_name: 'EchoStar 23',
    details:
      'Communications satellite for EchoStar Corp. EchoStar XXIII, based on a spare platform from the cancelled CMBStar 1 satellite program, will provide direct-to-home television broadcast services over Brazil. There was no attempt at a first-stage recovery so this rocket did not have landing legs or grid fins.',
    launch_success: true,
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/54/f8/0X2hNhNK_o.png',
      mission_patch: 'https://images2.imgbox.com/47/c2/mmiTCLkJ_o.png',
    },
  },
  {
    flight_number: 38,
    launch_year: '2017',
    mission_name: 'SES-10',
    details:
      'First payload to fly on a reused first stage, B1021, previously launched with CRS-8, which also landed a second time. In what is also a first, the payload fairing remained intact after a successful splashdown achieved with thrusters and a steerable parachute.',
    launch_success: true,
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/5b/10/dfj7yRG3_o.png',
      mission_patch: 'https://images2.imgbox.com/d1/f6/9q2edz2p_o.png',
    },
  },
  {
    flight_number: 39,
    launch_year: '2017',
    mission_name: 'NROL-76',
    details:
      "First launch under SpaceX's certification for national security space missions, which allows SpaceX to contract launch services for classified payloads. Second-stage speed and altitude telemetry were omitted from the launch webcast, which displayed first-stage telemetry instead, with continuous tracking of the booster from liftoff to landing for the first time.",
    launch_success: true,
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/0d/06/aNPEVF72_o.png',
      mission_patch: 'https://images2.imgbox.com/8e/6e/dM1L8DMs_o.png',
    },
  },
  {
    flight_number: 40,
    launch_year: '2017',
    mission_name: 'Inmarsat-5 F4',
    details:
      'At 6,070 kg this was the heaviest payload launched to GTO by a Falcon 9 rocket. The launch was originally scheduled for the Falcon Heavy, but performance improvements allowed the mission to be carried out by an expendable Falcon 9 instead.',
    launch_success: true,
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/82/d6/SCoNa79H_o.png',
      mission_patch: 'https://images2.imgbox.com/76/0b/bJD0zV02_o.png',
    },
  },
  {
    flight_number: 41,
    launch_year: '2017',
    mission_name: 'CRS-11',
    details:
      'This mission delivered the Neutron Star Interior Composition Explorer (NICER) to the ISS, along with the MUSES Earth imaging platform and ROSA solar array. For the first time, this mission launched a refurbished Dragon capsule, serial number C106 which first flew in September 2014 on the CRS-4 mission. Originally scheduled to launch on June 1, but was scrubbed due to inclement weather.',
    launch_success: true,
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/e8/33/RV791zv9_o.png',
      mission_patch: 'https://images2.imgbox.com/4b/88/4irzX449_o.png',
    },
  },
  {
    flight_number: 42,
    launch_year: '2017',
    mission_name: 'BulgariaSat-1',
    details:
      'Second time a booster will be reused: Second flight of B1029 after the Iridium mission of January 2017. The satellite will be the first commercial Bulgarian-owned communications satellite and it will provide television broadcasts and other communications services over southeast Europe.',
    launch_success: true,
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/1b/40/Ouyy9Neh_o.png',
      mission_patch: 'https://images2.imgbox.com/3b/6c/d5ulGpoh_o.png',
    },
  },
  {
    flight_number: 43,
    launch_year: '2017',
    mission_name: 'Iridium NEXT Mission 2',
    details:
      'First flight with titanium grid fins to improve control authority and better cope with heat during re-entry.',
    launch_success: true,
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/cd/99/lNWjUnUS_o.png',
      mission_patch: 'https://images2.imgbox.com/3f/f0/7zaluW42_o.png',
    },
  },
  {
    flight_number: 44,
    launch_year: '2017',
    mission_name: 'Intelsat 35e',
    details:
      'Due to the constraints of sending a heavy satellite (~6,000 kg) to GTO, the rocket will fly in its expendable configuration and the first-stage booster will not be recovered.',
    launch_success: true,
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/ab/6f/3l4ib2QW_o.png',
      mission_patch: 'https://images2.imgbox.com/94/85/7GzzSMBu_o.png',
    },
  },
  {
    flight_number: 45,
    launch_year: '2017',
    mission_name: 'CRS-12',
    details:
      'Dragon is expected to carry 2,349 kg (5,179 lb) of pressurized mass and 961 kg (2,119 lb) unpressurized. The external payload manifested for this flight is the CREAM cosmic-ray detector. First flight of the Falcon 9 Block 4 upgrade. Last flight of a newly-built Dragon capsule; further missions will use refurbished spacecraft.',
    launch_success: true,
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/4e/c6/M7X1WGKk_o.png',
      mission_patch: 'https://images2.imgbox.com/95/31/PhgU9kf9_o.png',
    },
  },
  {
    flight_number: 46,
    launch_year: '2017',
    mission_name: 'FormoSat-5',
    details:
      'Formosat-5 is an Earth observation satellite of the Taiwanese space agency. The SHERPA space tug by Spaceflight Industries was removed from the cargo manifest of this mission. The satellite has a mass of only 475 kg.',
    launch_success: true,
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/f9/3a/3kH19hlj_o.png',
      mission_patch: 'https://images2.imgbox.com/a7/2a/s41i5C9t_o.png',
    },
  },
  {
    flight_number: 47,
    launch_year: '2017',
    mission_name: 'Boeing X-37B OTV-5',
    details:
      'Notable because Boeing is the primary contractor of the X-37B, which has until now been launched by ULA, a SpaceX competitor and Boeing partnership. Second flight of the Falcon 9 Block 4 upgrade.',
    launch_success: true,
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/bb/c2/CpO3VtI7_o.png',
      mission_patch: 'https://images2.imgbox.com/7e/ad/Q6iDgXq2_o.png',
    },
  },
  {
    flight_number: 48,
    launch_year: '2017',
    mission_name: 'Iridium NEXT Mission 3',
    details:
      "Third of eight missions to launch Iridium's second generation constellation from VAFB",
    launch_success: true,
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/1c/e0/lhGbeqkh_o.png',
      mission_patch: 'https://images2.imgbox.com/16/0c/P2REhX5k_o.png',
    },
  },
  {
    flight_number: 49,
    launch_year: '2017',
    mission_name: 'SES-11 / Echostar 105',
    details:
      'Nineteenth comsat to GTO, also the fourth satellite launched for SES and second for Echostar. Third time a first stage booster will be reused.',
    launch_success: true,
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/e3/b5/UEzC560l_o.png',
      mission_patch: 'https://images2.imgbox.com/75/43/F11jelFx_o.png',
    },
  },
  {
    flight_number: 50,
    launch_year: '2017',
    mission_name: 'KoreaSat 5A',
    details:
      'KoreaSat 5A is a Ku-band satellite capable of providing communication services from East Africa and Central Asia to southern India, Southeast Asia, the Philippines, Guam, Korea, and Japan. The satellite will be placed in GEO at 113Â° East Longitude, and will provide services ranging from broadband internet to broadcasting services and maritime communications.',
    launch_success: true,
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/02/51/7NLaBm8c_o.png',
      mission_patch: 'https://images2.imgbox.com/69/f5/04lBXd2F_o.png',
    },
  },
  {
    flight_number: 51,
    launch_year: '2017',
    mission_name: 'CRS-13',
    details:
      'Will reuse the Dragon capsule previously flown on CRS-6 and will reuse the booster from CRS-11.',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/ea/12/8vVzlOeL_o.png',
      mission_patch: 'https://images2.imgbox.com/1b/30/oP1DBQ6b_o.png',
    },
  },
  {
    flight_number: 52,
    launch_year: '2017',
    mission_name: 'Iridium NEXT Mission 4',
    details:
      'Reusing the booster first used on Iridium-2, but will be flying expendable.',
    launch_success: true,
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/cb/4b/n6GTX4PI_o.png',
      mission_patch: 'https://images2.imgbox.com/ee/c2/x8q8XiTg_o.png',
    },
  },
  {
    flight_number: 53,
    launch_year: '2018',
    mission_name: 'ZUMA',
    details:
      'Originally planned for mid-November 2017, the mission was delayed due to test results from the fairing of another customer. First-stage booster will attempt landing at LZ-1',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/e8/30/yMNPvCci_o.png',
      mission_patch: 'https://images2.imgbox.com/26/99/ppTFXiLw_o.png',
    },
  },
  {
    flight_number: 54,
    launch_year: '2018',
    mission_name: 'SES-16 / GovSat-1',
    details:
      'Reused booster from the classified NROL-76 mission in May 2017. Following a successful experimental ocean landing that used three engines, the booster unexpectedly remained intact; Elon Musk stated in a tweet that SpaceX will attempt to tow the booster to shore.',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/95/ec/FoFpPft0_o.png',
      mission_patch: 'https://images2.imgbox.com/42/0a/LAupFe3L_o.png',
    },
  },
  {
    flight_number: 55,
    launch_year: '2018',
    mission_name: 'Falcon Heavy Test Flight',
    details:
      'The launch was a success, and the side boosters landed simultaneously at adjacent ground pads. Drone ship landing of the central core failed. Final burn to heliocentric mars-earth orbit was successful after the second stage and payload passed through the Van Allen belts.',
    launch_success: true,
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/22/5f/jAAULKc3_o.png',
      mission_patch: 'https://images2.imgbox.com/33/1a/ujrnfkna_o.png',
    },
  },
  {
    flight_number: 56,
    launch_year: '2018',
    mission_name: 'Paz / Starlink Demo',
    details:
      'First flight with fairing 2.0. Will also carry two SpaceX test satellites for the upcoming Starlink constellation.',
    launch_success: true,
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/f9/05/I9duWQ6v_o.png',
      mission_patch: 'https://images2.imgbox.com/f1/b8/HAXSg9rr_o.png',
    },
  },
  {
    flight_number: 57,
    launch_year: '2018',
    mission_name: 'Hispasat 30W-6',
    details:
      "Launched with landing legs and titanium grid fins. Did not attempt a landing due to 'unfavorable weather conditions in the recovery area'.",
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/87/5d/ZDr6l98A_o.png',
      mission_patch: 'https://images2.imgbox.com/86/73/dycVqz0C_o.png',
    },
  },
  {
    flight_number: 58,
    launch_year: '2018',
    mission_name: 'Iridium NEXT Mission 5',
    details:
      "Fifth Iridium NEXT mission to deploy ten Iridium NEXT satellites. Reused booster from third Iridium flight, and although controlled descent was performed, the booster was expended into the ocean. SpaceX planned a second recovery attempt of one half of the fairing using the specially modified boat Mr. Steven. However, the fairing's parafoil twisted during the recovery, which led to water impact at high speed",
    launch_success: true,
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/2f/36/Bn1RX3aO_o.png',
      mission_patch: 'https://images2.imgbox.com/6e/32/3hj6BIWx_o.png',
    },
  },
  {
    flight_number: 59,
    launch_year: '2018',
    mission_name: 'CRS-14',
    details:
      'The launch used a refurbished booster (from CRS-12) for the 11th time, and a refurbished capsule (C110 from CRS-8) for the third time. External payloads include a materials research platform MISSE-FF phase 3 of the Robotic Refueling Mission TSIS, heliophysics sensor several crystallization experiments, and the RemoveDebris spacecraft aimed at space junk removal. The booster was expended in order to test a new landing profile.',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/e7/bf/WzMju1cP_o.png',
      mission_patch: 'https://images2.imgbox.com/4c/3a/VGGRo5PT_o.png',
    },
  },
  {
    flight_number: 60,
    launch_year: '2018',
    mission_name: 'TESS',
    details:
      "Part of the Explorers program, this space telescope is intended for wide-field search of exoplanets transiting nearby stars. It is the first NASA high priority science mission launched by SpaceX. It was the first time SpaceX launched a scientific satellite not primarily intended for Earth observations. The second stage placed it into a high-Earth elliptical orbit, after which the satellite's own booster will perform complex maneuvers including a lunar flyby, and over the course of two months, reach a stable, 2:1 resonant orbit with the Moon. In January 2018, SpaceX received NASA's Launch Services Program Category 2 certification of its Falcon 9 'Full Thrust', certification which is required for launching medium risk missions like TESS. It was the last launch of a new Block 4 booster, and marked the 24th successful recovery of the booster. An experimental water landing was performed in order to attempt fairing recovery.",
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/ca/54/EEGqRRto_o.png',
      mission_patch: 'https://images2.imgbox.com/7d/2c/pYXpOVCz_o.png',
    },
  },
  {
    flight_number: 61,
    launch_year: '2018',
    mission_name: 'Bangabandhu-1',
    details: 'First launch of a Block V first stage.',
    launch_success: true,
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/94/3a/eavaQRYD_o.png',
      mission_patch: 'https://images2.imgbox.com/df/cf/wlysigUT_o.png',
    },
  },
  {
    flight_number: 62,
    launch_year: '2018',
    mission_name: 'Iridium NEXT Mission 6',
    details:
      'GFZ arranged a rideshare of GRACE-FO on a Falcon 9 with Iridium following the cancellation of their Dnepr launch contract in 2015. Iridium CEO Matt Desch disclosed in September 2017 that GRACE-FO would be launched on the sixth Iridium NEXT mission. The booster reuse turnaround was a record 4.5 months between flights.',
    launch_success: true,
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/f5/da/hz3r2Lni_o.png',
      mission_patch: 'https://images2.imgbox.com/3d/f9/IHjBUE1f_o.png',
    },
  },
  {
    flight_number: 63,
    launch_year: '2018',
    mission_name: 'SES-12',
    details:
      "SES-12, the replacement satellite for NSS-6, was successfully launched and deployed on June 4th, completing SpaceX's eleventh flight of 2018. According to SES Luxembourg, The SES-12 satellite will expand SES’s capabilities to provide direct-to-home (DTH) broadcasting, VSAT, Mobility and High Throughput Satellite (HTS) data connectivity services in the Middle East and the Asia-Pacific region, including rapidly growing markets such as India and Indonesia. [SES-12] will be co-located with SES-8",
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/4b/b9/oS8ezl6V_o.png',
      mission_patch: 'https://images2.imgbox.com/44/ba/fvMeODet_o.png',
    },
  },
  {
    flight_number: 64,
    launch_year: '2018',
    mission_name: 'CRS-15',
    details:
      'Payload included MISSE-FF 2, ECOSTRESS, and a Latching End Effector. The refurbished booster featured a record 2.5 months period turnaround from its original launch of the TESS satellite — the fastest previous was 4.5 months. This was the last commercial flight of a Block 4 booster, which was expended into the Atlantic without landing legs and grid fins.',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/11/ec/xng5hAXN_o.png',
      mission_patch: 'https://images2.imgbox.com/43/35/0QW7yRsB_o.png',
    },
  },
  {
    flight_number: 65,
    launch_year: '2018',
    mission_name: 'Telstar 19V',
    details:
      'SSL-manufactured communications satellite intended to be placed at 63° West over the Americas. At 7,075 kg, it became the heaviest commercial communications satellite ever launched.',
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/12/7c/NiniYxoh_o.png',
      mission_patch: 'https://images2.imgbox.com/c5/53/5jklZkPz_o.png',
    },
  },
  {
    flight_number: 66,
    launch_year: '2018',
    mission_name: 'Iridium NEXT Mission 7',
    details:
      "SpaceX's fourteenth flight of 2018 and seventh of eight launches in a half-a-billion-dollar contract with Iridium. Will use a Block 5 first stage, to be recovered in the Pacific Ocean. Only one mission will be left for Iridium, with 10 more satellites. First attempt to recover a Fairing with the upgraded net. Fairing recovery was not successful.",
    launch_success: true,
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/37/63/NE4EISfK_o.png',
      mission_patch: 'https://images2.imgbox.com/90/b5/fS6LMNGd_o.png',
    },
  },
  {
    flight_number: 67,
    launch_year: '2018',
    mission_name: 'Merah Putih',
    details:
      "SpaceX's fifteenth flight of 2018 launched the Merah Putih (also known as Telkom-4) geostationary communications satellite for Telkom Indonesia. It marked the first reuse of any Block 5 first stage; the booster B1046 had previously launched Bangabandhu-1. The stage was recovered and is expected to become the first Falcon 9 booster to fly three missions.",
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/a7/ec/sbwePzVD_o.png',
      mission_patch: 'https://images2.imgbox.com/a8/f5/ZgdsrbqW_o.png',
    },
  },
  {
    flight_number: 68,
    launch_year: '2018',
    mission_name: 'Telstar 18V',
    details:
      "SpaceX's sixteenth flight of 2018 launched the Telstar 18v GEO communication satellite for Telesat, the second launch for the canadian company in a few months. The first stage was a new Falcon 9 V1.2 Block 5 which was successfully recovered on OCISLY.",
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/2d/d2/jStsqeLC_o.png',
      mission_patch: 'https://images2.imgbox.com/ba/db/3plcm5IB_o.png',
    },
  },
  {
    flight_number: 69,
    launch_year: '2018',
    mission_name: 'SAOCOM 1A',
    details:
      "SpaceX's seventeenth flight of 2018 was the first launch of the Saocom Earth observation satellite constellation of the Argentine Space Agency CONAE. The second launch of Saocom 1B will happen in 2019. This flight marked the first RTLS launch out of Vandenberg, with a landing on the concrete pad at SLC-4W, very close to the launch pad.",
    launch_success: true,
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/ae/11/H85gskPQ_o.png',
      mission_patch: 'https://images2.imgbox.com/66/d2/oVB1ofaZ_o.png',
    },
  },
  {
    flight_number: 70,
    launch_year: '2018',
    mission_name: 'Es’hail 2',
    details:
      "SpaceX's eighteenth flight of 2018 was its first for Es'hailSat. Es'hail-2 is a communications satellite delivering television and internet to Qatar and the surrounding region. It was launched into a geostationary transfer orbit from LC-39A at Kennedy Space Center. The booster landed on OCISLY.",
    launch_success: true,
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/a3/96/WvJsBXuE_o.png',
      mission_patch: 'https://images2.imgbox.com/59/c8/HPYpMlux_o.png',
    },
  },
  {
    flight_number: 71,
    launch_year: '2018',
    mission_name: 'SSO-A',
    details:
      "SpaceX's nineteenth flight of 2018 will fly SSO-A: SmallSat Express out of Vandenberg SLC-4E for Spaceflight. SSO-A is a rideshare to sun synchronus low earth orbit consisting of 64 individual microsatellites and cubesats. It is also likely to be the third flight of core B1046 which previously flew Bangabandhu-1 and Merah Putih. If this happens it will be the first time a Falcon 9 has flown more than two missions. ",
    launch_success: true,
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/07/ff/s2SD7HuJ_o.png',
      mission_patch: 'https://images2.imgbox.com/c3/88/YprVKOBk_o.png',
    },
  },
  {
    flight_number: 72,
    launch_year: '2018',
    mission_name: 'CRS-16',
    details:
      "SpaceX's 16th Crew Resupply Mission on behalf of NASA, with a total of 20 contracted flights. This will bring essential supplies to the International Space Station using SpaceX's reusable Dragon spacecraft. The Falcon 9 will launch from SLC-40 at Cape Canaveral Air Force Station. During the landing of the first stage, a grid fin hydraulic pump stalled, causing the core to enter an uncontrolled roll, and resulting in a (succesful) water landing.",
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/de/47/liJzNMRP_o.png',
      mission_patch: 'https://images2.imgbox.com/b6/15/tLQrmwcl_o.png',
    },
  },
  {
    flight_number: 73,
    launch_year: '2018',
    mission_name: 'GPS III SV01',
    details:
      "SpaceX's twenty-first flight of 2018 will launch a GPS III satellite for the United States Air Force. This will be SpaceX's first GPS mission and it will be delivered to a MEO transfer orbit from SLC-40 at Cape Canaveral Air Force Station. The booster will be expended.",
    launch_success: true,
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
    },
    links: {
      mission_patch_small: 'https://images2.imgbox.com/b3/24/vKUtLIu9_o.png',
      mission_patch: 'https://images2.imgbox.com/e1/cb/cvLgCm0d_o.png',
    },
  },
];
