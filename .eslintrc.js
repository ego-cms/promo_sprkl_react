module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-shadow': 'off', // disallow variable declarations from shadowing variables declared in the outer scope
    'no-duplicate-imports': ['error', { includeExports: true }], // disallow duplicate module imports
    'no-template-curly-in-string': 'error', // disallow template literal placeholder syntax in regular strings
    'block-scoped-var': 'error', // enforce the use of variables within the scope they are defined
    curly: ['error', 'all'], // enforce consistent brace style for all control statements
    eqeqeq: ['error', 'smart'],
    'max-classes-per-file': ['error', 1], // enforce a maximum number of classes per file
    'no-alert': 'warn', // disallow the use of alert, confirm, and prompt
    'no-console': 'warn', // disallow the use of console
    'no-else-return': ['error', { allowElseIf: false }], // disallow else blocks after return statements in if statements
    'no-implicit-coercion': 'error', // disallow shorthand typeDropdown conversions
    'no-labels': 'error', // disallow labeled statements
    'no-lone-blocks': 'error', // disallow unnecessary nested blocks
    'no-multi-spaces': 'error', // disallow multiple spaces
    'no-new': 'error', // disallow new operators outside of assignments or comparisons
    'no-new-func': 'error', // disallow new operators with the Function object
    'no-new-wrappers': 'error', // disallow new operators with the String, Number, and Boolean objects
    'no-return-await': 'error', // disallow unnecessary return await
    'no-self-compare': 'error', // disallow comparisons where both sides are exactly the same
    'no-sequences': 'error', // disallow comma operators
    'no-throw-literal': 'off', // disallow throwing literals as exceptions
    'no-useless-call': 'error', // disallow unnecessary calls to .call() and .apply()
    'no-useless-concat': 'error', // disallow unnecessary concatenation of literals or template literals
    'no-useless-return': 'error', // disallow redundant return statements
    'prefer-promise-reject-errors': 'error', // require using Error objects as Promise rejection reasons
    radix: 'error', // enforce the consistent use of the radix argument when using parseInt()
    'no-undefined': 'off', // disallow the use of undefined as an identifier
    'array-bracket-newline': 'off', // enforce linebreaks after opening and before closing array brackets
    'comma-dangle': ['error', 'always-multiline'], // require or disallow trailing commas
    'comma-style': 'error', // enforce consistent comma style
    'eol-last': 'error', // require or disallow newline at the end of files
    'key-spacing': 'error', // enforce consistent spacing between keys and values in object literal properties
    'keyword-spacing': 'error', // enforce consistent spacing before and after keywords
    'new-parens': 'error', // enforce or disallow parentheses when invoking a constructor with no arguments
    'no-bitwise': 'warn', // disallow bitwise operators
    'no-lonely-if': 'warn', // disallow if statements as the only statement in else blocks
    'no-multiple-empty-lines': 'error', // disallow multiple empty lines
    'no-nested-ternary': 'error', // disallow nested ternary expressions
    'no-new-object': 'error', // disallow Object constructors
    'no-empty-function': 'off',
    'no-trailing-spaces': 'error', // disallow trailing whitespace at the end of lines
    'no-unneeded-ternary': 'error', // disallow ternary operators when simpler alternatives exist
    'no-whitespace-before-property': 'error', // disallow whitespace before properties
    'object-curly-newline': 'error', // enforce consistent line breaks inside braces
    'object-curly-spacing': ['error', 'always'], // enforce consistent spacing inside braces
    'semi-spacing': 'error', // enforce consistent spacing before and after semicolons
    'space-before-blocks': 'error', // enforce consistent spacing before blocks
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ], // enforce consistent spacing before function definition opening parenthesis
    'space-in-parens': 'error', // enforce consistent spacing inside parentheses
    'space-infix-ops': 'error', // require spacing around infix operators
    'space-unary-ops': 'error', // enforce consistent spacing before or after unary operators
    'spaced-comment': ['error', 'always'], // enforce consistent spacing after the // or /* in a comment
    'switch-colon-spacing': 'error', // enforce spacing around colons of switch statements
    'arrow-body-style': ['error', 'as-needed'], // require braces around arrow function bodies
    'arrow-parens': ['error', 'as-needed'], // require parentheses around arrow function arguments
    'arrow-spacing': 'error', // enforce consistent spacing before and after the arrow in arrow functions
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    'generator-star-spacing': ['error', 'after'], // enforce consistent spacing around * operators in generator functions
    'no-confusing-arrow': 'off', // disallow arrow functions where they could be confused with comparisons
    'no-useless-computed-key': 'error', // disallow unnecessary computed property keys in object literals
    'no-useless-rename': 'error', // disallow renaming import, export, and destructured assignments to the same name
    'object-shorthand': ['error', 'always'], // require or disallow method and property shorthand syntax for object literals
    'prefer-arrow-callback': 'warn', // require using arrow functions for callbacks
    'prefer-destructuring': 'off', // require destructuring from arrays and/or objects
    'rest-spread-spacing': ['error', 'never'], // enforce spacing between rest and spread operators and their expressions
    'sort-imports': 'off', // enforce sorted import declarations within modules
    'template-curly-spacing': 'error', // require or disallow spacing around embedded expressions of template strings
    'promise/prefer-await-to-then': 'off', // refer await to then() for reading Promise values,
    'optimize-regex/optimize-regex': 'off', // Optimize regex literals
    '@typescript-eslint/semi': ['error', 'never'], // Require or disallow semicolons instead of ASI
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }], // Require a specific member delimiter style for interfaces and typeDropdown literals
    '@typescript-eslint/member-ordering': 'off', // Require a consistent member declaration order
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs'], // Enforce consistent brace style for blocks
    '@typescript-eslint/indent': 'off', // Enforce consistent indentation
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }], // Enforce the consistent use of either backticks, double, or single quotes
    '@typescript-eslint/func-call-spacing': ['error', 'never'], // Require or disallow spacing between function identifiers and their invocations
    '@typescript-eslint/no-useless-constructor': 'error', // Disallow unnecessary constructors
    '@typescript-eslint/prefer-for-of': 'warn', // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
    '@typescript-eslint/no-parameter-properties': 'error', // Disallow the use of parameter properties in class constructors
    // '@typescript-eslint/no-unnecessary-typeDropdown-arguments': 'warn', // Warns if an explicitly specified typeDropdown argument is the default for that typeDropdown parameter
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/prefer-function-type': 'warn', // Use function patients instead of interfaces with call signatures
    // '@typescript-eslint/prefer-readonly': 'warn', // Requires that private members are marked as readonly if they're never modified outside of the constructor
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_$' }],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/unbound-method': 'off',
    'react/no-access-state-in-setstate': 'off', // Prevent using this.state inside this.setState
    'react/no-danger': 'error', // Prevent usage of dangerous JSX properties
    'react/no-multi-comp': 'off', // Prevent multiple component definition per file
    'react/no-this-in-sfc': 'error', // Prevent using this in stateless functional components
    'react/prefer-stateless-function': 'off', // Enforce stateless React Components to be written as a pure function
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-bind': 'off', // Prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-literals': 'off', //  Prevent usage of unwrapped JSX strings
    'react/jsx-pascal-case': 'error', // Enforce PascalCase for user-defined JSX components
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
