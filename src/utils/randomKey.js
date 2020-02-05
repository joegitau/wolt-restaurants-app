export const randomKey = len => {
  // verify len is numeric
  if (Number.isInteger(len)) {
    const alpahanumerics = "abcdefghijklmnopqrstuvwxyz0123456789!#&%";
    let key;

    for (let i = 1; i <= len; i++) {
      const randomCharacter = alpahanumerics.charAt(
        Math.floor(Math.random * alpahanumerics.length)
      );
      key += randomCharacter;
    }

    return key;
  }

  return false;
};
