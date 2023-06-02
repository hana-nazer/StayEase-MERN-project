import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
function DateSelector() {
  return (
    <Space direction="vertical" size={12}>
      <RangePicker />
    </Space>
  );
}

export default DateSelector;
