// slugify function from https://dev.to/bybydev/how-to-slugify-a-string-in-javascript-4o9n
export function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim leading/trailing white space
  str = str.toLowerCase(); // convert string to lowercase
  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove any non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
  return str;
}

export function formatDate(date) {
    return new Date(date).toLocaleDateString("default", {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        timeZone: 'UTC'
    });
}