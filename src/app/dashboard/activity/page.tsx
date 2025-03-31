import { ActivityContainer } from "@/components/dashboard/activity/activity-container/activity-container";

export default async function Page() {
  return (
    <ActivityContainer
      showFilter={true}
      showViewAll={false}
      showPagination={true}
    />
  );
}
