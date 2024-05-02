import { useQuery } from "@tanstack/react-query";

const getData = async (url: string) => {
	const data = await fetch(url);
	console.log(data);
	return data.json();
};

export default function useFetch(key: string, url: string) {
	const { data, isLoading, isError } = useQuery({
		queryKey: [key],
		queryFn: () => {
			return getData(url);
		},
		enabled: true,
	});

	return { data, isLoading, isError };
}
