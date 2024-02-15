# React and Express (and Flask)

Used as a front end React often consumes data from a backend. This lesson will cover connecting React to your backend applications. 

## Single Page applications and web APIs

Single page applications consume data but don't use templates. A site built as a multipage site might generate a new page from a template with a each request. A single page site will load a single page and request updates as JSON data updating the DOM to show changes. 

## Examples

Take a look at the examples here: https://github.com/Tech-at-DU/React-Express-Tutorial

The examples in the repo above include an Express and a Flask server example, and two react client examples. Use these as a starting place. You can replace the server with a server of your own. 

The Examples use React Query. 

## React Query 

React Query is a library for loading data into your react projects. 

To use React Query you'll need to set up a "QueryClientProvider". This is a component that needs to wrap your App component. Put it in `index.js`. 

In `index.js` setup React Query provider like this: 

```JS
...
// Add React Query 
import { QueryClientProvider, QueryClient } from 'react-query';
// Create a QueryClient
const queryClient = new QueryClient()
// Wrap the App in the QueryClientProvider
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
 document.getElementById('root')
);
```

From any component you can make a query with the `useQuery` hook. 

```JS
import { useQuery } from 'react-query'

function PublicSpaces() {
  // Load /sfpopos using useQuery
  const { isLoading, error, data } = useQuery('sfpopos', () => {
    return fetch('/sfpopos').then(res => res.json())
  });

  // isLoading: a boolean true if loading
  // error: an error object with a message property
  // data: the data loaded from the server

	// Use conditional rendering to handle loading states

	// If loading show: 
	if (isLoading) {
		return <h1>Loading...</h1>
	}

	// If an error show: 
	if (error) {
		return <h1>Error:{error.message}</h1>
	}

	// Done loading no errors show the data!
  return (
      <div className="PublicSpaces">
        <h2>Public Spaces</h2>
        <ul>
          {/* If isLoading is false and no errors map the data to components */}
          { data.map(item => <li>{item.title}</li>) }
        </ul>
      </div>
  );
}

export default PublicSpaces;
```

Notice that the `useQuery` hook takes two parameters. 

- Query Key
- Callback

```JS
useQuery(<query-key>, () => { <Promise> });
```

The Query Key is a unique identifer for the data you are loading. For most purposes you can use any string. If you are loading data from different end points use a different key for each. The URI path makes a good string. 

Advanced topic: If you are loading data from the same endpoint but using parameters to get the data you can use an array with a list of the parameters. 

The Query Key is used for caching. The goal is to let React Query know what you loading by the key. If the key is the same React Query can check it's cache for the data and save resources. 

https://react-query-v3.tanstack.com/guides/query-keys

Callback: The callback takes a function that returns a Promise. You can use anything here that returns a Promise that resolves to the data you are loading. 

The example above uses `fetch()` which returns a Promise which resolves to a response object, it's this repsonse object that you use to generate another Promise that resolves to the data you are loading. 

```
fetch -> response -> json
```

The example code looks like this: 

```JS
const { isLoading, error, data } = useQuery('sfpopos', () => {
	return fetch('/sfpopos').then(res => res.json())
});
```

We can break this down to: 

```JS
const { isLoading, error, data } = useQuery('sfpopos', async () => {
	const res = fetch('/sfpopos')
	const json = res.json()
	return json
});
```

We just want to return the last promise!

## Challenges 

That challenge it create a server and handle server data in React. See the challenges here: https://github.com/Tech-at-DU/React-Express-Tutorial 

You should: 

- Define your own JSON data to serve
- Define your own route
- Set your route up to return your JSON
- In React create a component that loads data from your route using React Query
- Display the data you loaded using compponents

Submit this to Lab 4 on Gradescope. 

## Resources 

- https://expressjs.com
- https://flask.palletsprojects.com/en/2.2.x/
- https://react-query-v3.tanstack.com
