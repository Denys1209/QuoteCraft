import { Button } from "@heroui/button";
import {
  cn,
  Pagination,
  PaginationItemRenderProps,
  PaginationItemType,
} from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const MyPagination = ({
  total,
  page,
  onchange,
}: {
  total: number;
  page: number;
  onchange: (e: number) => void;
}) => {

  return total > 1 ? (
    <Pagination
      showControls
      className="gap-2"
      page={page}
      radius="full"
      total={total}
      variant="light"
      onChange={onchange}
    />
  ) : (
    <></>
  );
};

export default MyPagination;
