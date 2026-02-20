import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type CalendarProps = {
  selected?: Date;
  onSelect?: (date: Date | null) => void;
  disabled?: (date: Date) => boolean;
  initialFocus?: boolean;
  className?: string;
};

export function Calendar({
  selected,
  onSelect,
  disabled,
  className,
}: CalendarProps) {
  return (
    <DatePicker
      selected={selected}
      onChange={onSelect}
      filterDate={disabled ? (date) => !disabled(date) : undefined}
      inline
      className={className}
      minDate={new Date()}
    />
  );
}
