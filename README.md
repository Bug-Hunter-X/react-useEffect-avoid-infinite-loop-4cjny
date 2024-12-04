# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug arises from an improperly defined dependency array, leading to an infinite rendering loop.

## Bug Description
The `useEffect` hook is used to perform side effects after a component renders. If the dependency array is missing a value that changes during rendering, the effect will be triggered repeatedly, leading to an infinite loop.  This example demonstrates this behavior, showing how forgetting to include `count` in the dependency array leads to the loop.

## Solution
The solution involves ensuring that all variables used within the `useEffect` callback are included in the dependency array. If a variable is not listed in the dependency array, it will not trigger re-renders of the useEffect function.