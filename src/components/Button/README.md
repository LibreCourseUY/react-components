# Button

Versatile and accessible button component with support for variants, sizes, icons, loading state, ripple effect, and link rendering.

## Common usage

```tsx
import { Button } from '@components/Button';

<Button variant="primary" onClick={() => console.log('clicked')}>
  Save
</Button>
```

## As a link

```tsx
<Button as="a" href="https://example.com" target="_blank">
  Visit site
</Button>
```

## With icons

```tsx
<Button leftIcon={<StarIcon />} rightIcon={<ArrowIcon />}>
  Featured
</Button>
```

## Icon only

```tsx
<Button ariaLabel="Delete item">
  <TrashIcon />
</Button>
```

## Loading state

```tsx
<Button isLoading>
  Saving...
</Button>
```

## Props

| Prop        | Type                                                          | Default    | Description                                         |
|-------------|---------------------------------------------------------------|------------|-----------------------------------------------------|
| `variant`   | `primary` \| `secondary` \| `danger` \| `success` \| `ghost` | `primary`  | Visual style                                        |
| `size`      | `sm` \| `md` \| `lg`                                         | `md`       | Button size                                         |
| `isLoading` | `boolean`                                                     | `false`    | Shows spinner and disables the button               |
| `disabled`  | `boolean`                                                     | `false`    | Disables the button                                 |
| `leftIcon`  | `ReactNode`                                                   | —          | Icon on the left side of the text                   |
| `rightIcon` | `ReactNode`                                                   | —          | Icon on the right side of the text                  |
| `as`        | `'button'` \| `'a'`                                          | `'button'` | Render as button or anchor                          |
| `href`      | `string`                                                      | —          | URL (only when `as="a"`)                            |
| `target`    | `'_blank'` \| `'_self'` \| `'_parent'` \| `'_top'`          | —          | Anchor target                                       |
| `type`      | `'button'` \| `'submit'` \| `'reset'`                        | `'button'` | HTML button type                                    |
| `ariaLabel` | `string`                                                      | —          | Accessibility label                                 |
| `className` | `string`                                                      | —          | Extra Tailwind classes to extend styles             |