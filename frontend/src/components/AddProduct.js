import { Select, Input, Button, DatePicker, Form } from "antd";
import { fetchData } from "../utils";

export default function AddProduct({ currentLocation, setCurrentLocation }) {

  const [form] = Form.useForm()

  const onFinish = async (values) => {

    const { data } = await fetchData.post("/set-location", {
      ...currentLocation,
      quantity: parseInt(currentLocation.quantity) + parseInt(values?.quantity || 0),
      type: values?.type || currentLocation?.type,
      expire: values?.expire || currentLocation?.expire,
      name: values?.name || currentLocation?.name,
    });

    setCurrentLocation({
      ...currentLocation,
      quantity: parseInt(currentLocation.quantity) + parseInt(values?.quantity || 0),
      type: values?.type || currentLocation?.type,
      expire: values?.expire || currentLocation?.expire,
      name: values?.name || currentLocation?.name,
    })

    form.resetFields()
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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
      <div style={{textAlign:'center', fontSize:40,fontWeight:1200}}>
        Thêm sản phẩm
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
        label="Hết hạn"
        name="expire"
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Thêm sản phẩm
        </Button>
      </Form.Item>
    </Form>
  );
}
