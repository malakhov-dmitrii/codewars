/**
 *
 * @param {string} magazine
 * @param {string} note
 */
const checkMagazine = (magazine, note) => {
  magazine = magazine.split(" ");
  note = note.split(" ");

  for (const word of note) {
    const idx = magazine.indexOf(word);
    if (idx != -1) magazine[idx] = "";
    if (idx === -1) return "No";
  }

  return "Yes";
};

module.exports = checkMagazine;
