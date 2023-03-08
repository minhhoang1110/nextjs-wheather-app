export const convertParams = (params: any): string => {
  const query: string = Object.keys(params)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");
  return query ? "?" + query : "";
};
