
import { Select, Input, Button, DatePicker, Form } from "antd";
import { fetchData } from "../utils";
import { useState } from "react";

export default function RemoveProduct({ currentLocation, setCurrentLocation }) {

  const [form] = Form.useForm()
  const [locations, setLocations] = useState([])

  const onFinish = async (values) => {
    const { data } = await fetchData.post("/get-product", {
      ...values
    });

    setLocations(data.locations)

    form.setFieldsValue({
      id_location: data.product.id_location,
      name: data.product.name
    })
    if (data.count == 0) {
      form.setFields([
        {
          name: "id_product", // required
          errors: ["Không tìm thấy sản phẩm"],
        },
      ])
    } else {
      form.setFields([
        {
          name: "id_product", // required
          errors: [],
        },
      ])
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  const listItems = locations.map((location, index) => {
    if (index != locations.length - 1) {
      return <span>{location},</span>
    } else {
      return <span>{location}</span>
    }
  }
  );

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
    >
      <div style={{ textAlign: 'center', fontSize: 40, fontWeight: 1200 }}>
        Tra sản phẩm
      </div>
      <Form.Item
        label="Mã sản phẩm"
        name="id_product"

        rules={[
          {
            required: true,
            message: 'Yêu cầu nhập mã sản phẩm.',
          }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Locations"
        name="id_location"
      >
        {listItems}
      </Form.Item>

      <Form.Item
        label="Tên sản phẩm"
        name="name"
      >
        <Input disabled={true} />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Tra sản phẩm
        </Button>
      </Form.Item>



    </Form>
  );
}
