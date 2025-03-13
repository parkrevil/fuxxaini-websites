/** @type {import('stylelint').Config} */
module.exports = { 
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended',
    'stylelint-config-concentric-order'
  ],
  rules : {
    'no-empty-source': null,
  }
};
