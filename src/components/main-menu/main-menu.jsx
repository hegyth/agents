import { App, Menu, Space } from "antd";
import { useState } from "react";
import { menuItems } from "../../constants/main-menu-constants";
import AddClientPage from "../../pages/add-client/add-client";
import AllStats from "../../pages/all-stats/all-stats";
import MailingPage from "../../pages/mailing/mailing";
import ClientsTable from "../../pages/clients-table/clients-table";

export default function MainMenu() {
  const [menuPage, setMenuPage] = useState(1);

  const onClick = (e) => {
    setMenuPage(e.key);
  };

  return (
    <App>
      <Space align="start">
        <Menu
          onClick={onClick}
          style={{ width: 256 }}
          defaultSelectedKeys={[menuPage]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={menuItems}
        />

        {menuPage == 1 ? (
          <ClientsTable />
        ) : menuPage == 2 ? (
          <MailingPage />
        ) : menuPage == 3 ? (
          <AddClientPage />
        ) : (
          <AllStats />
        )}
      </Space>
    </App>
  );
};
