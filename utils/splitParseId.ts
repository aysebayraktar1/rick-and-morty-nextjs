export const splitAndParseIdFromUrl = (url?: string) => {
  const pieces = url?.split(/[\s/]+/);
  const last = pieces[pieces?.length - 1];
  return parseInt(last);
};
