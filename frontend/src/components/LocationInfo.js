import { Select, Input, Button, DatePicker, Form } from "antd";
import { useEffect, useState } from "react";
import moment from 'moment';


export default function LocationInfo({ currentLocation }) {

  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  useEffect(() => {
    form.setFieldsValue({
      type: currentLocation?.type,
      name: currentLocation?.name || "",
      quantity: currentLocation?.quantity || 0,
      expire: moment(currentLocation.expire),
      distance:currentLocation?.distance
    })
  }, [currentLocation])


  return (
    <Form

      form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}

      style={{
        minWidth: "30%",
        minHeight: 200
      }}

      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      disabled={true}
    >
      <div style={{ textAlign: 'center', fontSize: 40, fontWeight: 1200 }}>
        Thông tin location hiện tại
      </div>

      <Form.Item
        label="Loại hàng"
        name="type"
      >
        <Select
          showSearch

          placeholder="Chọn loại hàng"
          optionFilterProp="children"
          options={[
            {
              value: "A",
              label: "A",
            },
            {
              value: "B",
              label: "B",
            },
            {
              value: "C",
              label: "C",
            },
          ]}
        />
      </Form.Item>

      <Form.Item
        label="Số lượng"
        name="quantity"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Tên"
        name="name"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Khoảng cách"
        name="distance"
      >
        <Input />
      </Form.Item>

      {/*<Form.Item
        label="Hết hạn"
        name="expire"
      >
        <DatePicker  />
        </Form.Item> */}
    </Form>
  );
}
