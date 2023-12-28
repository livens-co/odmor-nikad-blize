"use client";

import { Locale } from "@/i18n.config";
import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  houseNum: number;
  lang: Locale;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  houseNum,
  lang,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const per_page = 12;

  const totalPages = Math.ceil(houseNum / per_page);

  const goToPage = (newPage: number) => {
    router.push(`/${lang}/kuce-za-odmor?page=${newPage}`);
  };

  return (
    <>
      <button
        disabled={!hasPrevPage}
        onClick={() =>
          router.push(`/${lang}/kuce-za-odmor?page=${Number(page) - 1}`)
        }
        className="navibationBtn"
      >
        <FaArrowLeftLong />
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => goToPage(index + 1)}
          className={index + 1 === page ? "pageBtn activePageBtn" : "pageBtn"}
        >
          {index + 1}
        </button>
      ))}

      <button
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/${lang}/kuce-za-odmor?page=${Number(page) + 1}`);
        }}
        className="navibationBtn"
      >
        <FaArrowRightLong />
      </button>
    </>
  );
};

export default PaginationControls;
