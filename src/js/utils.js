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

/**
 * Simple date formatter that returns the following format "July 21, 2024"
 * @param {Date} date 
 * @returns {string}
 */
export function formatDate(date) {
    return new Date(date).toLocaleDateString("default", {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        timeZone: 'UTC'
    });
}

/**
 * Globs provide full file paths as the object keys. This "deglobs"
 * the keys by transforming them into just the file name and extension.

 * @param {} globObject Glob object
 * @returns a new glob object where file names, rather than relative paths,
 * are the key.
*/
export function deglobPathObject(globObject) {
  let deglob = {}

  for (const key in globObject) {
    deglob[deglobPath(key)] = globObject[key];
  }

  return deglob;
}

/**
 * Returns the file name of a file path
 * @param {*} str 
 * @returns 
 */
export function deglobPath(str) {
    const segments = str.split("/");
    return segments[segments.length - 1];
}