import React from "react";
import { useEffect } from "react";

function useDocumentUrl(url) {
    useEffect(() => {
        document.URL = url;
    }, [url]);
}

export default useDocumentUrl;
