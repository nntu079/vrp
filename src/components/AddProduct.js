import { Select, Input, Button, DatePicker } from "antd";

export default function AddProduct() {
  return (
    <div>
      Chọn loại hàng hóa
      <Select
        showSearch
        style={{ width: 160 }}
        placeholder="Select a person"
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
      <br />
      Nhập số lượng:
      <Input style={{ width: 150 }} />
      <br />
      Tên sản phẩm:
      <Input style={{ width: 150 }} />
      <br />
      Ngày hết hạn:
      <DatePicker />
      <br/>
      <Button>Thêm sản phẩm</Button>
    </div>
  );
}
