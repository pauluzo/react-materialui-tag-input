# **material-ui tag-input**

A simple Material UI component that allows for multiple inputs as tags. The component is lightweight and easily customizable.

# How to use

Install this package into your react project using npm:

```
npm install react-materialui-tag-input
```

or using yarn:

```
yarn add react-materialui-tag-input
```

You can now use `react-materialui-tag-input` in your project like so:

```
import TagInput from 'react-materialui-tag-input'
...
```

You can also import the type definitions if you're using TypeScript like so:

```
import TagInput, { IInputInterface } from 'react-materialui-tag-input'
...
```

# Basic Example

```
// your-component.js
import TagInput from 'react-materialui-tag-input'

// create state handler for the tags
const [inputTags, setInputTags] = useState([])

return (
  <div>
    <TagInput tags={inputTags} setTags={setInputTags} />
  </div>
)

```

Or optionally, create a function to handle updates to the tag list. The function receives the updated tag list and can do operations on the list data before updating the `inputTags` state.

```
// your-component.js
import TagInput from 'react-materialui-tag-input'

// create state handler for the tags
const [inputTags, setInputTags] = useState([])

// tag update function
const updateTags = (newTags) => {
  // perform any operation with the data before updating the `inputTags` state
  setInputTags(newTags)
}

return (
  <div>
    <TagInput tags={inputTags} setTags={updateTags} />
  </div>
)

```

# **Available props**

## **tags** - Array of Strings (Required)

This prop expects an array of strings that represents the data to be displayed in each tag.

Implementation is as shown in the example above.

```

tags: string[] (required)

```

## **setTags** - Function (Required)

This prop expects a callback function that is called when a new tag is added/removed from the array. An array of the updated tags is passed into the function.

Implementation is as shown in the example above.

```

setTags: (tags: string[]) => void (required)

```

## **initialValue** - String (Optional)

This prop expects a `string` value that will be passed into the component's input field as the pre-filled value (especially useful for pre-filled forms)

```
...
<TagInput tags={inputTags} setTags={updateTags} initialValue="The initial value"/>
...
```

## **innerRef** - (Optional)

This prop expects a `React.ref` element that is passed into the component's input field. (Useful for getting a reference to the input field, to carry out functions like auto-focusing the input field)

```
...
const inputRef = React.useRef(null);

...
<TagInput tags={inputTags} setTags={updateTags} innerRef={inputRef} />
...
```

## **onFocus** - Function (Optional)

This prop expects a function that will be called when the input field gains focus.

```
...
const onInputFocus = (event) => {
  console.log("The input field has gained focus")
};

...
<TagInput tags={inputTags} setTags={updateTags} onFocus={onInputFocus} />
...
```

## **onBlur** - Function (Optional)

This prop expects a function that will be called when the input field loses focus.

```
...
const onInputBlur = (event) => {
  console.log("The input field has lost focus")
};

...
<TagInput tags={inputTags} setTags={updateTags} onBlur={onInputBlur} />
...
```

## **allowBackspace** - Boolean (Optional)

This prop expects a boolean value that defaults to `false`. By default, when the input field is in focus, the component removes the last tag element if the backspace button is clicked on and the input field is empty. You can turn off this feature by setting allowBackspace to `true`

```
...
<TagInput tags={inputTags} setTags={updateTags} allowBackspace />
...
```

## **allowDuplicate** - Boolean (Optional)

This prop expects a boolean value that defaults to `false`. By default, if a new tag is added, that already exists in the tags array, the duplicate value is not added, instead the input field is cleared. You can turn off this feature by setting allowDuplicate to `true`

```
...
<TagInput tags={inputTags} setTags={updateTags} allowDuplicate />
...
```

## **inputProps** - Object (Optional)

This prop expects a key-value object containing props for the component's input field. Any prop that can be passed into material-ui `Input` component can ideally be added here. This includes `className`, `id`, `style`, `placeholder` e.t.c.

```
...
<TagInput
  tags={inputTags}
  setTags={updateTags}
  inputProps={{
    id: "tag_input",
    placeholder: "Enter tag",
    className: classes.inputContainer,
    style: {
      fontSize: "16px",
    },
  }}
/>
...
```

**NB - The `classes.inputContainer` in the example above is from a `@mui/styles` or `@emotion/react` type of styling. You can also use a regular className styling here**

## **chipProps** - Object (Optional)

This prop expects a key-value object containing props that are passed into each of the component's tag/chip containers. Any prop that can be passed into material-ui `Chip` component can ideally be added here. This includes `variant`, `color`, `size`, e.t.c.

```
...
<TagInput
  tags={inputTags}
  setTags={updateTags}
  chipProps={{
    variant: "outlined",
    color: "primary",
    size: "medium"
  }}
/>
...
```

**Kindly raise any issues noticed on the github repo at https://github.com/pauluzo/react-materialui-tag-input or email me at okaforpaul26@gmail.com**
