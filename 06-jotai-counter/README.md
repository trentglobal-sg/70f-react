# How to Use Jotai

## 'atom'
An `atom` in Jotai is a piece of data that is shared across other components.

The `atom` function creates the initial value of the data.

For a component to use the atom, we use the `useAtom` function

## Subscribing to an atom
If a component's JSX refers to an atom, when the atom changes, the component will render (i.e subscription)