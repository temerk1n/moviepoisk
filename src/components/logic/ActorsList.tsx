import {List, Typography} from "antd";
import {Person} from "../../types/Person";
import {PaginationConfig} from "antd/lib/pagination";
import {usePagination} from "../../utils/hooks/usePagination";
import {FC} from "react";

interface ActorsListProps {
  persons: Person[];
}

export const ActorsList: FC<ActorsListProps> = ({persons}) => {
  const [currentPage, onPageChange] = usePagination();

  const actors: Person[] = persons.filter(person => person.profession === "актеры");

  const paginationConfig: PaginationConfig = {
    defaultCurrent: 1,
    current: currentPage,
    defaultPageSize: 10,
    total: actors.length,
    onChange: onPageChange,
    align: "center",
    hideOnSinglePage: true,
    showSizeChanger: false,
  }

  if (!actors.length) return <Typography.Title level={5}>Нет информации об актерах</Typography.Title>;

  return (
    <List
      header={<Typography.Title level={5}>Актеры</Typography.Title> }
      itemLayout="vertical"
      dataSource={actors}
      pagination={paginationConfig}
      renderItem={(actor: Person) =>
        <List.Item key={actor.id}>
          <Typography.Text>{actor.name}</Typography.Text>
        </List.Item>
      }
    />
  )
}