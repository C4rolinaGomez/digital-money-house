import { CardItem } from "@/components/dashboard/cards/card-item/card-item";
import { List } from "@/components/shared/list/list";

type CardListProps = {
  data: GetAccountCardsResponseType[];
  isLoading: boolean;
};

export const CardList = ({ data, isLoading }: CardListProps) => {
  return (
    <List title="Tus tarjetas" isLoading={isLoading} isEmpty={!data?.length}>
      <ul>{data?.map((item) => <CardItem key={item.id} {...item} />)}</ul>
    </List>
  );
};
