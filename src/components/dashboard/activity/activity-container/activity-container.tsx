import { ActivityForm } from "@/components/dashboard/activity/activity-form/activity-form";
import { ActivityList } from "@/components/dashboard/activity/activity-list/activity-list";
import { ActivityStoreProvider } from "@/providers/activity-store-provider";

type ActivityContainerProps = {
  showFilter?: boolean;
  showViewAll?: boolean;
  showPagination?: boolean;
};

export const ActivityContainer = ({
  showFilter,
  showViewAll,
  showPagination,
}: ActivityContainerProps) => {
  return (
    <ActivityStoreProvider>
      <ActivityForm showFilter={showFilter} />
      <ActivityList showViewAll={showViewAll} showPagination={showPagination} />
    </ActivityStoreProvider>
  );
};
