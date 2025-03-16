import { App, Button, Input, Space, Typography } from "antd";
import React, { useState } from "react";
import { editClientInfo } from "../../redux/slices/client-slice";
import styles from "./index.module.scss";
import { useDispatch } from "react-redux";

export default function ClientDescription({ currentClient }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [clientInfo, setClientInfo] = useState(currentClient);
  const { message } = App.useApp();

  const handleEdit = () => {
    if (editMode) {
      message.success("Success!");
      dispatch(editClientInfo(clientInfo));
    }

    setEditMode((prev) => !prev);
  };

  const handleChange = (e) => {
    setClientInfo((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  return (
    <Space direction="vertical" size="middle">
      <Space direction="vertical" size={0}>
        <Typography.Text>Bio</Typography.Text>
        <Input
          id="bio"
          value={clientInfo?.bio}
          disabled={!editMode}
          onChange={handleChange}
        />
      </Space>
      <Space direction="vertical" size={0}>
        <Typography.Text>Company</Typography.Text>
        <Input
          id="company"
          value={clientInfo?.company}
          disabled={!editMode}
          onChange={handleChange}
        />
      </Space>
      <Space direction="vertical" size={0}>
        <Typography.Text>Job type</Typography.Text>
        <Input
          id="jobType"
          value={clientInfo?.jobType}
          disabled={!editMode}
          onChange={handleChange}
        />
      </Space>
      <Space direction="vertical" size={0}>
        <Typography.Text>Card number</Typography.Text>
        <Input
          id="cardNumber"
          value={clientInfo?.cardNumber}
          disabled={!editMode}
          onChange={handleChange}
        />
      </Space>
      <Space direction="vertical" size={0}>
        <Typography.Text>Income</Typography.Text>
        <Input
          id="income"
          value={clientInfo?.income}
          disabled={!editMode}
          onChange={handleChange}
        />
      </Space>
      <Space direction="vertical" size={0}>
        <Typography.Text>Time zone</Typography.Text>
        <Input
          id="timeZone"
          value={clientInfo?.timeZone}
          disabled={!editMode}
          onChange={handleChange}
        />
      </Space>
      <Space direction="vertical" size={0}>
        <Typography.Text>Email</Typography.Text>
        <Input
          id="email"
          value={clientInfo?.email}
          disabled={!editMode}
          onChange={handleChange}
        />
      </Space>
      <Space direction="horizontal" className={styles.saveButton}>
        <Button onClick={handleEdit} type="primary">
          {editMode ? "Save" : "Edit"}
        </Button>
      </Space>
    </Space>
  );
}
