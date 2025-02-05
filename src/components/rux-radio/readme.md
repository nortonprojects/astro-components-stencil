# RadioButtons

Radio Buttons allow users to mutually select an option from a predefined set of options. When one selection is made, the previous selection becomes deselected. One option should always be selected.

## Guidelines

-   [Astro UXDS: Radio Buttons](https://www.astrouxds.com/ui-components/radio-button)
-   [Astro UXDS: Toggles](http://www.astrouxds.com/ui-components/toggle)
-   [Astro UXDS: Form and Input Validation](https://www.astrouxds.com/ui-components/validation)

## Basic HTML Usage

### 1. Markup for the component


```xml
  <rux-radio
    name="radio1"
    id="ruxId`"
    disabled
    checked
  ></rux-radio>
```

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                                                                                                           | Type                  | Default     |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `checked`   | `checked`    | Toggles checked state of a radio                                                                                                                                                      | `boolean`             | `false`     |
| `disabled`  | `disabled`   | Disables the radio via HTML disabled attribute. Radio takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored. | `boolean`             | `false`     |
| `errorText` | `error-text` | The validation error text                                                                                                                                                             | `string \| undefined` | `undefined` |
| `helpText`  | `help-text`  | The help or explanation text                                                                                                                                                          | `string \| undefined` | `undefined` |
| `name`      | `name`       | The radio name                                                                                                                                                                        | `string`              | `''`        |
| `required`  | `required`   | Sets the radio as required                                                                                                                                                            | `boolean`             | `false`     |
| `value`     | `value`      | The radio value                                                                                                                                                                       | `string`              | `''`        |


## Events

| Event        | Description                                                                                                                                                                    | Type               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `rux-change` | Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)                                | `CustomEvent<any>` |
| `rux-input`  | Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) | `CustomEvent<any>` |


## CSS Custom Properties

| Name                                  | Description                    |
| ------------------------------------- | ------------------------------ |
| `--controlBorderColor`                | Checkbox border color          |
| `--controlHoverBorderColor`           | Checkbox border color on hover |
| `--controlLabelColor`                 | Label text color               |
| `--controlOutlineBackgroundColor`     | Checkbox background color      |
| `--controlSelectedOutlineBorderColor` | Selected checkbox border color |
| `--controlTextColor`                  | Selected checkbox icon color   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
