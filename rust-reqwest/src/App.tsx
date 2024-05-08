import "./App.css";
import useFetch from "./useFetch";

function App() {
	const { data, isLoading, isError } = useFetch(
		"posts",
		"https://cprss.s3.amazonaws.com/frontendfoc.us.xml"
		// "https://jsonplaceholder.typicode.com/posts"
	);

	console.log(isError, isLoading, data);

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
