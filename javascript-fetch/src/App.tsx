import useFetch from "./useFetch";

function App() {
	const { data, isLoading, isError } = useFetch(
		"posts",
		"https://jsonplaceholder.typicode.com/posts"
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error</div>;
	}

	return (
		<div className="container">
			<h1>Welcome to Tauri!</h1>
			<ul>
				{data?.map((post: any) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
