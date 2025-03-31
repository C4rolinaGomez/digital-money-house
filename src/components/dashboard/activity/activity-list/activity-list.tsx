"use client";

import { ActivityItem } from "@/components/dashboard/activity/activity-item/activity-item";
import { Icon } from "@/components/shared/icons/icons";
import { List } from "@/components/shared/list/list";
import { Pagination } from "@/components/shared/pagination/pagination";
import { useActivityFiltered } from "@/hooks/activity-filter";
import { useGetAccount, useGetAccountActivity } from "@/hooks/api-query-hook";
import { usePagination } from "@/hooks/pagination";
import { useActivityStore } from "@/providers/activity-store-provider";
import Link from "next/link";
import styles from "./activity-list.module.css";

const ITEMS_PER_PAGE = 5;

type ActivityListProps = {
  showPagination?: boolean;
  showViewAll?: boolean;
};

export const ActivityList = ({
  showPagination,
  showViewAll,
}: ActivityListProps) => {
  const { data: accountData } = useGetAccount();
  const { data, isLoading } = useGetAccountActivity(accountData?.id!);
  const reversedData = data?.toReversed();

  const { searchTerm, filter, date } = useActivityStore((state) => state.form);

  const { filterActivityList } = useActivityFiltered(
    reversedData!,
    searchTerm,
    filter,
    date
  );

  const { currentItems, currentPage, totalPages, paginate } = usePagination(
    filterActivityList!,
    ITEMS_PER_PAGE
  );

  return (
    <List
      title="Tu actividad"
      isLoading={isLoading}
      isEmpty={!currentItems?.length}
    >
      <ul>
        {currentItems?.map((item) => (
          <ActivityItem key={item.id} data={item} />
        ))}
      </ul>
      {showPagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
      )}
      {showViewAll && (
        <Link href="/dashboard/activity" className={styles.viewAll}>
          <div>Ver toda tu actividad</div>
          <Icon icon="arrow-right" color="gray" />
        </Link>
      )}
    </List>
  );
};
