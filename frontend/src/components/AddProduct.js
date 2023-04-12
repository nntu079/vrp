import { Select, Input, Button, DatePicker, Form, message } from "antd";
import { fetchData } from "../utils";

export default function AddProduct({ currentLocation, setCurrentLocation }) {

  const [messageApi, contextHolder] = message.useMessage();


  const error = (content) => {

    messageApi.open({
      type: 'error',
      content: content,
    });
  };

  const [form] = Form.useForm()

  const onFinish = async (values) => {

    if (!currentLocation.id_location) {


      error("vui lòng chọn location")
      return
    }

    const { data } = await fetchData.post("/set-location", {
      ...currentLocation,
      ...values,
      type: values.type || currentLocation.type,
      currentQuantity: currentLocation.quantity || 0
    });

    setCurrentLocation({
      ...currentLocation,
      quantity: parseInt(values?.quantity || 0),
      type: values?.type || currentLocation?.type,
      //expire: values?.expire || currentLocation?.expire,
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
      {contextHolder}
      <div style={{ textAlign: 'center', fontSize: 40, fontWeight: 1200 }}>
        Thêm sản phẩm
      </div>
      {/*<Form.Item
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
      </Form.Item>*/}

      <Form.Item
        label="Mã sản phẩm"
        name="id_product"
        rules={[
          {
            required: true,
            message: 'Yêu cầu nhập mã sản phẩm.',
          },
          {
            message: 'Trong location này có sản phẩm khác.',
            validator: (_, value) => {

              if (!currentLocation.id_product) {
                return Promise.resolve();
              } else if (currentLocation.id_product == value) {
                return Promise.resolve();
              } else {
                return Promise.reject();
              }
            }
          },
          {
            message: 'Mã sản phẩm không tồn tại',
            validator: async (_, value) => {

              const { data } = await fetchData.post("/get-product", {
                id_product: value
              });

              if (data.count == 0 && !!value) {
                return Promise.reject();
              } else {
                return Promise.resolve();
              }
            }
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Số lượng"
        name="quantity"
        rules={[

          {
            message: 'Nhập số lượng không hợp lệ',
            validator: (_, value) => {

              if ((parseInt(value) > 50 || parseInt(value) < 0) && !!value) {
                return Promise.reject();
              } else {
                return Promise.resolve();
              }
            }
          }
        ]}
      >
        <Input />
      </Form.Item>



      {/* <Form.Item
        label="Hết hạn"
        name="expire"
      >
        <DatePicker />
      </Form.Item> */}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Cập nhật location
        </Button>
      </Form.Item>
    </Form>
  );
}
