"use client";
import { Pagination } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";
import { FC, useCallback } from "react";
import { toUrl } from "../../../../../src/utils/fromObjToUrl";
import { paramsToObject } from "../../../../../src/utils/urlToObject";

type PaginationWrapperType = {
    totalPage?: string;
};

const PaginationWrapper: FC<PaginationWrapperType> = ({ totalPage }) => {
    const pageCount = Math.ceil(+totalPage / 10 || 0);
    const route = useRouter();
    const searchParams = useSearchParams();
    const urlParams = new URLSearchParams(location.search);
    const entries = urlParams.entries();
    const params = paramsToObject(entries);

    const currentPage = +searchParams.get("page") || 0;
    console.log(pageCount, totalPage, currentPage);

    const setPagination = (page: number) => {
        route.replace(`?${toUrl({ ...params, page })}`);
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
