---
id: "modules"
title: "Simple Multi-Select"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
pagination_next: null
pagination_prev: null
---

## Classes

- [MultiSelect](classes/MultiSelect.md)

## Type Aliases

### onChangeCallback

Ƭ **onChangeCallback**: (`multiSelectId`: `string`, `values`: `string`[]) => `void`

#### Type declaration

▸ (`multiSelectId`, `values`): `void`

The expected function to call when an option is changed

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `multiSelectId` | `string` | The id of the multi select that was changed |
| `values` | `string`[] | The selected values |

##### Returns

`void`

## Functions

### InitializeAllMultiSelects

▸ **InitializeAllMultiSelects**(): [`MultiSelect`](classes/MultiSelect.md)[]

This function initializes all multi-selects on the page.
Searches for all native selects with the `multiple` attribute, insures they have not already been initialized, and initializes them.

#### Returns

[`MultiSelect`](classes/MultiSelect.md)[]

Returns an array of initialized multi-selects.
