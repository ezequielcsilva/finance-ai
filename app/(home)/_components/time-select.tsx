"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

const MONTH_OPTIONS = [
  { value: "01", label: "Janeiro" },
  { value: "02", label: "Fevereiro" },
  { value: "03", label: "Março" },
  { value: "04", label: "Abril" },
  { value: "05", label: "Maio" },
  { value: "06", label: "Junho" },
  { value: "07", label: "Julho" },
  { value: "08", label: "Agosto" },
  { value: "09", label: "Setembro" },
  { value: "10", label: "Outubro" },
  { value: "11", label: "Novembro" },
  { value: "12", label: "Dezembro" },
];

const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_MONTH = new Date().getMonth();

const YEAR_OPTIONS = Array.from(
  { length: 11 },
  (_, index) => CURRENT_YEAR - 5 + index,
).map((year) => ({ value: year.toString(), label: year.toString() }));

const TimeSelect = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const month = searchParams.get("month");
  const year = searchParams.get("year");

  const handleTimeChange = (newMonth: string, newYear: string) => {
    push(`/?month=${newMonth}&year=${newYear}`);
  };

  return (
    <div className="flex gap-4">
      {/* Select de Mês */}
      <Select
        onValueChange={(value) =>
          handleTimeChange(value, year ?? YEAR_OPTIONS[0].value)
        }
        defaultValue={
          MONTH_OPTIONS[Number(month) - 1].value ??
          MONTH_OPTIONS[CURRENT_MONTH].value
        }
      >
        <SelectTrigger className="w-[150px] rounded-full">
          <SelectValue placeholder="Mês" />
        </SelectTrigger>
        <SelectContent>
          {MONTH_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Select de Ano */}
      <Select
        onValueChange={(value) =>
          handleTimeChange(month ?? MONTH_OPTIONS[0].value, value)
        }
        defaultValue={year ?? CURRENT_YEAR.toString()}
      >
        <SelectTrigger className="w-[100px] rounded-full">
          <SelectValue placeholder="Ano" />
        </SelectTrigger>
        <SelectContent>
          {YEAR_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TimeSelect;
