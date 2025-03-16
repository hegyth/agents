import { Space, Table, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { columns } from "../../constants/table-constants";
import styles from "./index.module.scss";
import Search from "antd/es/transfer/search";
import { useFilter } from "../../hooks/useFilter";

export default function ClientsTable() {
  const navigate = useNavigate();
  const { filteredClients, onChangeSearchValue } = useFilter();

  const handleRowClick = (record) => {
    navigate(`/client-card/${record.id}`);
  };

  return (
    <Space direction="vertical" size="middle" className={styles.clientsTable}>
      <Typography.Title>Table with all clients</Typography.Title>
      <Search
        placeholder="input search text"
        onChange={onChangeSearchValue}
        enterButton
      />

      <Table
        dataSource={filteredClients}
        columns={columns}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
        pagination={{
          pageSize: 10,
          defaultPageSize: 10,
          showSizeChanger: false,
        }}
      />
    </Space>
  );
}
