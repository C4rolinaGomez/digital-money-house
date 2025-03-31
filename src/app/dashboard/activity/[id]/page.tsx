import { ActivityDetail } from "@/components/dashboard/activity/activity-detail/activity-detail";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  return <ActivityDetail id={params.id} />;
}
