const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      // here's how to extend fonts if needed
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
      colors: {
        base: {
          DEFAULT: '#18191c',
        },
        // 主要文字
        main: { DEFAULT: '#18191c' },
        // 常规文字
        content: { DEFAULT: '#606266' },
        // 次要文字
        tips: { DEFAULT: '#c0c4cc' },
        // 占位文字
        light: { DEFAULT: '#e5e7eb' },
        // 边框的颜色
        border: { DEFAULT: '#dadbde' },
        // 背景的颜色
        bg: { DEFAULT: '#f3f4f6' },
        // 禁用的颜色
        disabled: { DEFAULT: '#c8c9cc' },
        border: {
          DEFAULT: '#e3e5e7'
        },
        primary: {
          DEFAULT: 'var(--ant-primary-color)',
          hover: 'var(--ant-primary-color-hover)',
          active: 'var(--ant-primary-color-active)',
          outline: 'var(--ant-primary-color-outline)',
          1: 'var(--ant-primary-1)',
          2: 'var(--ant-primary-2)',
          3: 'var(--ant-primary-3)',
          4: 'var(--ant-primary-4)',
          5: 'var(--ant-primary-5)',
          6: 'var(--ant-primary-6)',
          7: 'var(--ant-primary-7)',
        },
        info: {
          DEFAULT: 'var(--ant-info-color)',
          hover: 'var(--ant-info-color-hover)',
          active: 'var(--ant-info-color-active)',
          outline: 'var(--ant-info-color-outline)',
        },
        success: {
          DEFAULT: 'var(--ant-success-color)',
          hover: 'var(--ant-success-color-hover)',
          active: 'var(--ant-success-color-active)',
          outline: 'var(--ant-success-color-outline)',
        },
        processing: {
          DEFAULT: 'var(--ant-processing-color)'
        },
        error: {
          DEFAULT: 'var(--ant-error-color)',
          hover: 'var(--ant-error-color-hover)',
          active: 'var(--ant-error-color-active)',
          outline: 'var(--ant-error-color-outline)',
        },
        warning: {
          DEFAULT: 'var(--ant-warning-color)',
          hover: 'var(--ant-warning-color-hover)',
          active: 'var(--ant-warning-color-active)',
          outline: 'var(--ant-warning-color-outline)',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        })
        isFirefoxRule.append(container.nodes)
        container.append(isFirefoxRule)
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`
        })
      })
    }),
  ],
}
