import { Skeleton } from "@/components/ui/skeleton";

const LeagueSkeleton = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Array.from({ length: 15 }).map((_, i) => (
        <Skeleton key={i} className="h-28 rounded-xl" />
      ))}
    </div>
  );
};

export default LeagueSkeleton;
