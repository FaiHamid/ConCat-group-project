export type SearchParams = {
  [key: string]: string | null;
};

export function getSearchWith(
  currentParams: URLSearchParams,
  paramsToUpdate: SearchParams,
): string {
  const newParams = new URLSearchParams(currentParams.toString());

  Object.entries(paramsToUpdate).forEach(([key, value]) => {
    if (
      value === null ||
      (key === 'currentPage' && value === '1') ||
      (key === 'itemsPerPage' && value === 'all')
    ) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
  });

  return newParams.toString();
}