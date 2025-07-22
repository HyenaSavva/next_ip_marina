import { FC } from "react";
import { Skeleton, Section } from "@/shared";

export const ProfileSkeleton: FC = () => {
  return (
    <div className="flex flex-col grow gap-5 mx-2.5">
      <section className="mt-12">
        <div className="flex flex-col items-center space-y-4">
          {/* Profile */}
          <Skeleton variant="circle" width={180} height={180} />
          {/* Info */}
          <div className="w-full space-y-4">
            <Skeleton
              variant="block"
              height={60}
              className="mx-auto max-w-sm"
            />
            <Skeleton
              variant="block"
              height={40}
              className="mx-auto max-w-xs"
            />
          </div>
        </div>
      </section>

      {/* Buttons */}
      <div className="flex gap-2.5">
        <Skeleton variant="block" className="flex-1 h-12" />
        <Skeleton variant="block" width={120} height={48} />
      </div>

      {/* Sections */}
      {[1, 2, 3, 4, 5].map((index) => (
        <Section key={index}>
          <Skeleton variant="block" height={60} className="m-2" />
          {index === 2 && (
            <Skeleton
              variant="block"
              height={60}
              className="m-2 mt-0 border-t border-gray-200"
            />
          )}
        </Section>
      ))}

      {/* Description */}
      <Section>
        <Skeleton variant="block" height={120} className="m-4" />
      </Section>
    </div>
  );
};
