import { useCallback } from "react";



import useLocalStorage from "./useLocalStorage";
import { GetQuoteDto } from "@/appDtos/Dtos/Quote";

export enum HistoryItemTypes {
  Quote,
}

export interface HitoryItem {
  type: HistoryItemTypes;
  item: GetQuoteDto
}

export function useSearchHistory(): [
  HitoryItem[],
  (newValue: HitoryItem) => void,
] {
  const [value, setValue] = useLocalStorage("History", [] as HitoryItem[]);

  const addFunction = useCallback((item: HitoryItem) => {
    if (value.length > 0 && value[0].item.id === item.item.id) return;

    if (value.length < 16) {
      value.unshift(item);
      setValue(value);
    } else {
      value.pop();
      value.unshift(item);
      setValue(value);
    }
  }, []);

  return [value, addFunction];
}
