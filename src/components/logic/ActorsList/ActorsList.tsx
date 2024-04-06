import {List, Typography} from "antd";
import {Person} from "../../../types/Person";
import {useState} from "react";
import {PaginationConfig} from "antd/lib/pagination";

interface ActorsListProps {
  persons: Person[];
}

export const ActorsList = ({persons}: ActorsListProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const actors: Person[] = persons.filter(person => person.profession === "актеры");

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  }

  const paginationConfig: PaginationConfig = {
    defaultCurrent: 1,
    current: currentPage,
    defaultPageSize: 10,
    total: actors.length,
    onChange: onPageChange,
    align: "center",
  }

  if (!actors.length) return <Typography.Title level={5}>Нет информации об актерах</Typography.Title>;

  return (
    <List
      header={<Typography.Title level={5}>Актеры</Typography.Title> }
      itemLayout="vertical"
      dataSource={actors}
      pagination={actors.length > 10 ? paginationConfig : false}
      renderItem={(actor: Person) =>
        <List.Item key={actor.id}>
          <Typography.Text>{actor.name}</Typography.Text>
        </List.Item>
      }
    />
  )
}