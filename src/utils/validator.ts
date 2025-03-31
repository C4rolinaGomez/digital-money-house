export const hasNumber = (word: string) => {
  return !!word.match(/[0-9]/);
};

export const hasSpecialCharacter = (word: string) => {
  return !!word.match(/[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/);
};

export const hasUpperCaseLetter = (word: string) => {
  return !!word.match(/[A-Z]/);
};

export const hasPasswordConstraint = (word: string) => {
  return (
    hasNumber(word) && hasSpecialCharacter(word) && hasUpperCaseLetter(word)
  );
};
