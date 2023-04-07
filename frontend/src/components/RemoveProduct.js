
import { Select, Input, Button, DatePicker, Form } from "antd";
import { fetchData } from "../utils";

export default function RemoveProduct({ currentLocation, setCurrentLocation }) {

  const [form] = Form.useForm()

  const onFinish = async (values) => {
    const { data } = await fetchData.post("/set-location", {
      ...currentLocation,
      quantity: parseInt(currentLocation.quantity) - parseInt(values?.quantity || 0),
    });

    setCurrentLocation({
      ...currentLocation,
      quantity: parseInt(currentLocation.quantity) - parseInt(values?.quantity || 0),
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
        Bớt sản phẩm
      </div>
      <Form.Item
        style={{ marginTop: 165 }}
        label="Số lượng"
        name="quantity"
      >
        <Input />
      </Form.Item>


      <Form.Item

        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Bớt sản phẩm
        </Button>
      </Form.Item>
    </Form>
  );
}
