export default {
      '*.{ts,tsx,js,jsx}': 'eslint --cache --fix',
      '*.md': 'prettier --write',
      '*.css': 'stylelint --cache --fix',
      '*.{ts,tsx}': () => 'tsc --skipLibCheck --noEmit',

};
