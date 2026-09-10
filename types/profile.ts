export type ProfileLink = {
  label: string;
  url: string;
};

export type Activity = {
  org: string;
  role: string;
  /** 조직 이름만으로 설명이 부족할 때만 채운다 (예: KUICS) */
  note?: string;
};

export type Profile = {
  name: string;
  tagline: string;
  about: string;
  /** 최신 활동이 위로 오도록 정렬해서 넣는다 */
  activities: Activity[];
  interests: string[];
  links: ProfileLink[];
};
