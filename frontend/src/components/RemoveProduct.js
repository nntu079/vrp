import { Select, Input, Button } from "antd";

export default function RemoveProduct() {
  return (
    <div>
      Nhập số lượng:
      <Input style={{ width: 150 }} />
      <br />
      <Button>Xóa sản phẩm</Button>
    </div>
  );
}
