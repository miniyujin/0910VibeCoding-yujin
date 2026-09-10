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
  /** 이름 카드 위에 작게 얹히는 로마자 표기 */
  nameLatin: string;
  /** 히어로 상단 배지 문구 */
  badge: string;
  /** 이름 카드에 붙는 동그란 스티커. 한 줄에 한 조각씩 쌓인다 */
  sticker: string[];
  /** 페이지 맨 아래 네온 손글씨로 들어가는 핸들 */
  handle: string;
  tagline: string;
  about: string;
  /** 오래된 활동이 위로 오도록 정렬해서 넣는다 (카드에 01, 02… 번호가 붙는다) */
  activities: Activity[];
  interests: string[];
  links: ProfileLink[];
};
