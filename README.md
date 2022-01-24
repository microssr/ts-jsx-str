# TypeScript JSX renderer

This project provides a very simple renderer for JSX, without React/Vue or any
other big framework.

This is especially useful for **Server-Side Rendering**, in order to transform
JSX templates to string.

## :package: Installation

```
$ yarn add -D @microssr/ts-jsx-str @types/microssr-ts-jsx-str
```

## :construction: Usage

In your `tsconfig.json` add the following:

```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "JSX.createElement"
  }
}
```

Then in `your-file.tsx`:

```tsx
import JSX from '@microssr/ts-jsx-str'

const greetings = (<h1>Hello World</h1>)
console.log(greetings)
// <h1>Hello World</h1>
```

Or with a function-based template:

```tsx
import JSX from '@microssr/ts-jsx-str'

const Greet = ({ name }) => (<p>Hello {name}</p>)
const greetings = (<Greet name="world" />)
console.log(greetings)
// <p>Hello world</p>
```

## :memo: License

This library is released under the terms of the [MIT License](./LICENSE.txt).
