
import { Select, Input, Button, DatePicker, Form, Table } from "antd";
import { fetchData } from "../utils";
import { useState } from "react";

export default function OrderInfo() {

    const [form] = Form.useForm()

    const [order, setOrder] = useState([])
    const [locations, setLocations] = useState([])

    const onFinish = async (values) => {
        const { data } = await fetchData.post("/get-order", {
            ...values
        });

        setOrder(data.rows1)
        setLocations(data.rows2)


        if (data.rows1.length == 0) {
            form.setFields([
                {
                    name: "id_order", // required
                    errors: ["Không tìm thấy đơn hàng"],
                },
            ])
        } else {
            form.setFields([
                {
                    name: "id_order", // required
                    errors: [],
                },
            ])
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const columns1 = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
        },

        {
            title: 'Số lượng cần',
            dataIndex: 'quantity_order',
        },
    ];


    const columns2 = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
        },
        {
            title: 'Mã location',
            dataIndex: 'id_location',
        },
        {
            title: 'Số lượng hiện có',
            dataIndex: 'quantity',
        },
    ];


    return (
        <div className="flex_box_menu" style={{ minHeight: 310 }}>
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
                    minHeight: 200,
                    width: '35%', paddingRight: 50
                }}

                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <div style={{ textAlign: 'center', fontSize: 40, fontWeight: 1200 }}>
                    Tra đơn hàng
                </div>
                <Form.Item
                    label="Mã đơn hàng"
                    name="id_order"

                    rules={[
                        {
                            required: true,
                            message: 'Yêu cầu nhập mã đơn hàng.',
                        }]}
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
                        Tra đơn hàng
                    </Button>
                </Form.Item>

            </Form>
            <div style={{ width: '35%', paddingRight: 50 }}>
                <div style={{ textAlign: 'center', fontSize: 40, fontWeight: 1200 }}>
                    Thông tin đơn hàng
                </div>
                <Table
                    columns={columns1}
                    dataSource={order}
                    pagination={false}


                    scroll={{
                        y: 200,
                    }}
                />
            </div>

            <div style={{ width: '35%', paddingRight: 50 }}>

                <div style={{ textAlign: 'center', fontSize: 40, fontWeight: 1200 }}>
                    Thông tin location
                </div>
                <Table
                    columns={columns2}
                    dataSource={locations}
                    pagination={false}


                    scroll={{
                        y: 200,
                    }}
                />
            </div>

        </div>

    );
}
