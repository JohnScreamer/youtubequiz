"use client";
import { Pagination } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";
import { FC } from "react";
import { toUrl } from "../../../../src/utils/fromObjToUrl";

type PaginationWrapperType = {
    totalPage?: string | number;
};

const PaginationWrapper: FC<PaginationWrapperType> = ({ totalPage }) => {
    const pageCount = Math.ceil(+totalPage / 10 || 0);
    const route = useRouter();
    const searchParams = useSearchParams();

    const currentPage = +searchParams.get("page") || 0;
    const title = searchParams.get("title") || "";
    console.log(pageCount, totalPage, currentPage);

    const setPagination = (page: number) => {
        route.replace(`?${toUrl({ title, page })}`);
    };
    if (pageCount < 2) {
        return null;
    }
    return (
        <>
            <Pagination
                count={pageCount}
                page={(currentPage + 10) / 10}
                onChange={(_, page) => setPagination((page - 1) * 10)}
                color="secondary"
                className="text-yellow-400"
            />
        </>
    );
};

export default PaginationWrapper;
