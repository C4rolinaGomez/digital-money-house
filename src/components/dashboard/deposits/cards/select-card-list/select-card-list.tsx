import { SelectCardItem } from "@/components/dashboard/deposits/cards/select-card-item/select-card-item";
import { List } from "@/components/shared/list/list";

type SelectCardListProps = {
  isLoading: boolean;
  data: GetAccountCardsResponseType[];
};
export const SelectCardList = ({ isLoading, data }: SelectCardListProps) => {
  return (
    <List title="Tus tarjetas" isLoading={isLoading} isEmpty={!data?.length}>
      <ul>
        {data?.map((item) => <SelectCardItem key={item.id} data={item} />)}
      </ul>
    </List>
  );
};
