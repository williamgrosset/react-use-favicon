<h1 align="center">react-use-favicon</h1>

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/williamgrosset/react-use-favicon/playwright.yml" alt="Build status" />
  <img src="https://img.shields.io/badge/dependencies-0-brightgreen" alt="Dependencies" />
  <img src="https://img.shields.io/bundlephobia/minzip/react-use-favicon?color=%234ba0f6" alt="Build size" />
  <img src="https://img.shields.io/npm/dt/react-use-favicon?color=%234ba0f6" alt="Package downloads" />
</p>

<p align="center">✨ A React hook to dynamically update your page’s favicon.</p>

## Usage

### Install

Install the `react-use-favicon` package:

```bash
# npm
npm install react-use-favicon

# yarn
yarn add react-use-favicon

# pnpm
pnpm add react-use-favicon
```

### Import

Import the `useFavicon` hook:

```tsx
import useFavicon from 'react-use-favicon'

export default function App() {
  const { url, update, restore } = useFavicon()

  return (
    <div>
      {url && <img src={url} alt="Favicon" />}
      <button onClick={() => update('/favicon.ico')}>Update</button>
      <button onClick={restore}>Restore</button>
    </div>
  )
}
```

### API

`useFavicon` hook returns:

| Prop      | Type                    | Description             |
| --------- | ----------------------- | ----------------------- |
| `url`     | `string`                | Current favicon URL     |
| `update`  | `(src: string) => void` | Update the favicon URL  |
| `restore` | `() => void`            | Restore the favicon URL |

### Arguments

| Prop        | Type     | Default               | Description                                                                                                                           |
| ----------- | -------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `selectors` | `string` | `"link[rel*='icon']"` | [Valid CSS selector(s)](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) |

## Development

### Local

```
pnpm install
pnpm build
```

### Tests

```
pnpm test
```

### Demo

Inside the `demo` directory:

```
pnpm install
pnpm start
```

## License

MIT
