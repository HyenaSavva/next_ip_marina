"use client";

import { useGetUserProfileQuery } from "@/entities/user";
import { USER_ID } from "../lib/profile-constants";
import { ProfileSkeleton } from "./profile-skeleton";
import { lazy } from "react";

const ProfileHeader = lazy(() => import("@/features/profile/profile-header"));
const ProfileInfo = lazy(() => import("@/features/profile/profile-info"));
const ProfileActions = lazy(() => import("@/features/profile/profile-actions"));
const ActivitySection = lazy(() => import("@/features/profile/activity-section"));
const GameSection = lazy(() => import("@/features/profile/game-section"));
const MenuSections = lazy(() => import("@/features/profile/menu-sections"));
const UserDescription = lazy(() => import("@/features/profile/user-description"));
const InfoSection = lazy(() => import("@/features/profile/info-section"));
const LogoutSection = lazy(() => import("@/features/profile/logout-section"));

export const ProfilePage = () => {
  const { data, isLoading } = useGetUserProfileQuery(USER_ID);

  if (isLoading || !data?.data) return <ProfileSkeleton />;

  const user = data.data;

  return (
    <div className="flex flex-col grow gap-5 mx-2.5 text-xlarge-size">
      <section>
        <ProfileHeader userName={user.name} />
        <ProfileInfo
          userName={user.name}
          userNickname={user.nickname}
          createdAt={user.created_at}
        />
      </section>

      <ProfileActions cityName={user.city.name} />
      <ActivitySection />
      <GameSection />
      <MenuSections />
      <UserDescription
        description={user.description}
        telegram={user.telegram}
      />
      <InfoSection />
      <LogoutSection />
    </div>
  );
};
