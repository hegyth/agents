import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClient } from "../../redux/slices/client-slice";
import { App, Button, Input, Space, Typography } from "antd";
import { hasRequiredFields } from "../../utils/check-new-client-info";
import styles from "./index.module.scss";

export default function AddClientPage() {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [clientInfo, setClientInfo] = useState({});
  const allClients = useSelector((state) => state.clients);
  const { message } = App.useApp();

  const handleAdd = () => {
    if (hasRequiredFields(clientInfo)) {
      dispatch(
        addClient({
          ...clientInfo,
          income: 0,
          id: allClients.length,
          key: allClients.length,
        })
      );
      setClientInfo({});
      message.success("Success!");
    } else setErrorMessage("All fields must be filled in.");
  };

  const handleChange = (e) => {
    setClientInfo((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  return (
    <Space direction="vertical" size="middle" className={styles.addClientBlock}>
      <Typography.Title>Form for add client in base</Typography.Title>
      <Space direction="vertical" size={0}>
        <Typography.Text>Full name</Typography.Text>
        <Input
          placeholder="Full name"
          id="fullName"
          value={clientInfo?.fullName}
          onChange={handleChange}
        />
      </Space>
      <Space direction="vertical" size={0}>
        <Typography.Text>Bio</Typography.Text>
        <Input
          placeholder="Bio"
          id="bio"
          value={clientInfo?.bio}
          onChange={handleChange}
        />
      </Space>
      <Space direction="vertical" size={0}>
        <Typography.Text>Company</Typography.Text>
        <Input
          placeholder="Company"
          id="company"
          value={clientInfo?.company}
          onChange={handleChange}
        />
      </Space>
      <Space direction="vertical" size={0}>
        <Typography.Text>Job type</Typography.Text>
        <Input
          placeholder="Job type"
          id="jobType"
          value={clientInfo?.jobType}
          onChange={handleChange}
        />
      </Space>
      <Space direction="vertical" size={0}>
        <Typography.Text>Card number</Typography.Text>
        <Input
          placeholder="Card number"
          id="cardNumber"
          value={clientInfo?.cardNumber}
          onChange={handleChange}
        />
      </Space>
      <Space direction="vertical" size={0}>
        <Typography.Text>Time zone</Typography.Text>
        <Input
          placeholder="Time zone"
          id="timeZone"
          value={clientInfo?.timeZone}
          onChange={handleChange}
        />
      </Space>
      <Space direction="vertical" size={0}>
        <Typography.Text>Email</Typography.Text>
        <Input
          placeholder="Email"
          id="email"
          value={clientInfo?.email}
          onChange={handleChange}
        />
      </Space>
      {errorMessage && (
        <span className={styles.errorMassage}>{errorMessage}</span>
      )}
      <Button onClick={handleAdd} type="primary">
        Add
      </Button>
    </Space>
  );
}
