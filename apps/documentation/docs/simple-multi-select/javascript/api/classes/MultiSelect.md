---
id: "MultiSelect"
title: "Class: MultiSelect"
sidebar_label: "MultiSelect"
sidebar_position: 0
custom_edit_url: null
pagination_next: null
pagination_prev: null
---

A class to convert a native select element into a multi-select that resembles a native select element.

## Constructors

### constructor

• **new MultiSelect**(`selectElement`, `onChangeCallback?`)

Creates a new MultiSelect

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `selectElement` | `HTMLSelectElement` | `undefined` | The native select element to convert to a multi-select |
| `onChangeCallback` | ``null`` \| [`onChangeCallback`](../modules.md#onchangecallback) | `null` | (Optional) The callback function to call when the selected values change. The function will be passed the multi-select id and an array of selected values |

## Accessors

### id

• `get` **id**(): `string`

Gets the id of the multi-select.

#### Returns

`string`

Returns the id of the multi-select

___

### selectedValues

• `get` **selectedValues**(): `string`[]

Gets the currently selected values.

#### Returns

`string`[]

Returns an array of selected values

## Methods

### registerOnChangeCallback

▸ **registerOnChangeCallback**(`onChangeCallback`): `void`

Registers a callback function to be called when the selected values change

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onChangeCallback` | [`onChangeCallback`](../modules.md#onchangecallback) | The function to call. The function will be passed the multi-select id and an array of selected values |

#### Returns

`void`
