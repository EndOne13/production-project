module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next'],
    rules: {
    // Свойство, которое указывает какие должны быть размером отступы
        'react/jsx-indent': [2, 4],
        // Отступы для props
        'react/jsx-indent-props': [2, 4],
        // Так же количество отступов
        indent: [2, 4],
        // Свойство, указываем расширения в которые jsx будет разрешен
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx'],
        }],
        // Правило, которое ругается на абсолютные пути import
        'import/no-unresolved': 'off',
        // Свойство, которое рекомендует default export
        'import/prefer-default-export': 'off',
        // Если переменная нигде не используется, не ошибка, а warning
        'no-unused-vars': 'warn',
        // Если Props не используется, и не имеет default значения
        'react/require-default-props': 'off',
        // Используем jsx, не импортировав react
        'react/react-in-jsx-scope': 'off',
        // Использование spread Оператора для props
        'react/jsx-props-no-spreading': 'warn',
        // Рекомендация использования function declaration, не же ли стрелочные функции
        'react/function-component-definition': 'off',
        // Не очень полезное свойство, ругается на enum
        'no-shadow': 'off',
        // Ругается на отсутствие расширения при import
        'import/extensions': 'off',
        // Ругается что webpack как Dev зависимость, а не Dep
        'import/no-extraneous-dependencies': 'off',
        // Правило, которое запрещает нижние подчеркивания
        'no-underscore-dangle': 'off',
        // Чтобы i18next не требовал везде перевод! А markupOnly делает, чтобы i18next ругался только на файлы jsx tsx
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to'],
        }],
        // Игнор длинные комментариев
        'max-len': ['error', {
            ignoreComments: true,
            code: 110,
        }],
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts, tsx}'],
            rules: { 'i18next/no-literal-string': 'off' },
        },
    ],
};
