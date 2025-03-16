import { ArrowLeftOutlined } from "@ant-design/icons";
import { App, Button, Card, Space, Typography } from "antd";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ClientDescription from "../../components/client-description/client-description";
import CustomBarChart from "../../components/custom-bar-chart/custom-bar-chart";
import { getclientChartData } from "../../utils/get-chart-data";
import styles from "./index.module.scss";

const GO_BACK_CONSTANT = -1;

export default function ClientCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const allClients = useSelector((state) => state.clients);

  const currentClient = useMemo(() => allClients.find((client) => {
    return client.id == id;
  }), [allClients, id]);

  const clientChartData = getclientChartData(currentClient);

  const handleGoBack = () => {
    navigate(GO_BACK_CONSTANT);
  };

  return (
    <App>
      <Space direction="vertical" className={styles.clientCardBlock}>
        <Button
          onClick={handleGoBack}
          icon={<ArrowLeftOutlined />}
          iconPosition="start"
        >
          Назад
        </Button>
        <div className={styles.clientCard}>
          <Typography.Title>Client card</Typography.Title>
          <Card className={styles.cardBody}>
            <Space align="center">
              <Card.Meta
                title={`${currentClient.fullName}`}
                description={
                  <ClientDescription currentClient={currentClient} />
                }
              />
              <CustomBarChart dataKey={"income"} data={clientChartData} />
            </Space>
          </Card>
        </div>
      </Space>
    </App>
  );
}
