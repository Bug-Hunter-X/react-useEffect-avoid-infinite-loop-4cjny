```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only when count changes
    console.log('Effect running:', count);
    return () => {
      console.log('Cleanup function running');
    };
  }, [count]); // Correct: count is included in the dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```