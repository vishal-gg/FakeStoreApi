
type queryType = {
    page_str: string | null;
    limit_str: string | null;
}

export const parseQuery = (query : queryType) => {
    const page_str = query.page_str
    const limit_str = query.limit_str

    const page = page_str ? parseInt(page_str, 10) : 1;
    const limit = limit_str ? parseInt(limit_str, 10) : 50;

    return {page, limit}
}