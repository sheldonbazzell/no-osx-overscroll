module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jasmine": true
    },
    "plugins": ["jasmine"],
    "extends": ["eslint:recommended", "plugin:jasmine/recommended"],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "no-console": 0
    }
};