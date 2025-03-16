import { Button, Flex, Table, App, Typography } from "antd";
import React, { useMemo, useState } from "react";
import { columns } from "../../constants/table-constants";
import styles from "./index.module.scss";
import { useFilter } from "../../hooks/useFilter";

export default function MailingPage() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { filteredClients, getColumnSearchProps } = useFilter();
  const { message } = App.useApp();

  const columnsWhithSearch = useMemo(
    () =>
      columns.map((column) => {
        if (column.key !== "income") {
          return { ...column, ...getColumnSearchProps(`${column.key}`) };
        } else return { ...column, sorter: (a, b) => a.income - b.income };
      }),
    [getColumnSearchProps]
  );

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const sendEmailHandler = () => {
    setSelectedRowKeys([]);
    message.success("Success!");
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <Flex gap="middle" vertical className={styles.clientsTable}>
      <Typography.Title>Table for mailing</Typography.Title>
      <Flex align="center" gap="middle">
        <Button
          type="primary"
          onClick={sendEmailHandler}
          disabled={!hasSelected}
        >
          Send email
        </Button>
        {hasSelected ? `Selected ${selectedRowKeys.length} clients` : null}
      </Flex>
      <Table
        rowSelection={rowSelection}
        columns={columnsWhithSearch}
        dataSource={filteredClients}
        pagination={{
          pageSize: 10,
          defaultPageSize: 10,
          showSizeChanger: false,
        }}
      />
    </Flex>
  );
}
