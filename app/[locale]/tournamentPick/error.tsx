"use client";
import { useEffect } from "react";
import ErrorComponent from "../../components/uikit/ErrorComponent";

export default function Error({ error }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return <ErrorComponent />;
}
