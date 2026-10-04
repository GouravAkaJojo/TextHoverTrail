# Text Hover Trail

A React component that splits text into words and animates each word the pointer passes over, leaving a trail behind the cursor.

## Use it in your project

The component is a single file with no dependencies besides React:

1. Copy [`src/components/TextHoverTrail.tsx`](src/components/TextHoverTrail.tsx) into your project.
2. Render it:

```tsx
import TextHoverTrail from "./TextHoverTrail";

export default function Example() {
  return (
    <TextHoverTrail
      as="h1"
      hoverColor="#e3452c"
      style={{ fontSize: 32, fontWeight: 800, wordSpacing: "0.4em" }}
    >
      Glide your mouse over this sentence
    </TextHoverTrail>
  );
}
```

It works in any React 18+ app. The file starts with `"use client"`, so in the Next.js App Router you can render it from a Server Component. In other setups the directive does nothing.

If you're not using TypeScript, delete the `TextHoverTrailProps` interface and the type annotations, and save the file as `.jsx`.

### Props

| Prop             | Type                  | Default                        | Description                                              |
| ---------------- | --------------------- | ------------------------------ | -------------------------------------------------------- |
| `children`       | `string`              | (required)                     | Text to animate. Any whitespace separates words.          |
| `as`             | `React.ElementType`   | `"p"`                          | Wrapper element, such as `"h1"`, `"div"` or `"span"`.     |
| `hoverColor`     | `string`              | `"#2c72e3"`                    | Color of a highlighted word.                              |
| `hoverTransform` | `string`              | `"scaleX(1.1) skewX(-10deg)"`  | CSS transform of a highlighted word.                      |
| `enterDuration`  | `number`              | `300`                          | Milliseconds to reach the highlighted state.              |
| `leaveDuration`  | `number`              | `1500`                         | Milliseconds to return to normal.                         |
| `className`      | `string`              |                                | Class for the wrapper element.                            |
| `style`          | `React.CSSProperties` |                                | Inline styles for the wrapper element.                    |
| `wordClassName`  | `string`              |                                | Class for every word `<span>`.                            |

Words return to the color they inherit, so the text matches your theme in both light and dark mode. Users who have turned on "reduce motion" get the color change but not the transform.

## Run the demo

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).
