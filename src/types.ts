type Nullable<T> = T | null;

export interface Launch {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_site: LaunchSite;
  launch_success: Nullable<boolean>;
  links: Links;
  details: Nullable<string>;
  launch_failure_details?: LaunchFailureDetails;
}

export interface LaunchFailureDetails {
  time: number;
  altitude: Nullable<number>;
  reason: string;
}

export interface LaunchSite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

export interface Links {
  mission_patch?: Nullable<string>;
  mission_patch_small?: Nullable<string>;
}
