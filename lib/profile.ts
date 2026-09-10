import profileData from "@/data/profile.json";
import type { Profile } from "@/types/profile";

// 프로필 데이터에 접근하는 유일한 지점.
// 나중에 DB를 붙일 때 이 함수 본문만 바꾸면 되도록 async 로 열어둔다.
const profile: Profile = profileData;

export async function getProfile(): Promise<Profile> {
  return profile;
}
