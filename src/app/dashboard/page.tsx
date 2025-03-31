import { ActivityContainer } from "@/components/dashboard/activity/activity-container/activity-container";
import { DashboardCardBalance } from "@/components/dashboard/dashboard/dashboard-card-balance/dashboard-card-balance";
import { DashboardOptions } from "@/components/dashboard/dashboard/dashboard-options/dashboard-options";

export default async function Page() {
  return (
    <>
      <DashboardCardBalance />
      <DashboardOptions />
      <ActivityContainer
        showFilter={false}
        showViewAll={true}
        showPagination={false}
      />
    </>
  );
}
