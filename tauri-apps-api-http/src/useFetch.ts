import { useQuery } from "@tanstack/react-query";
import { fetch, ResponseType } from "@tauri-apps/api/http";
import { parseXML } from "./helper";

// const getData = async (url: string) => {
// 	const data = await fetch(url, {
// 		method: "GET",
// 		responseType: ResponseType.JSON,
// 	});
// 	console.log(data);
// 	return data.data;
// };

const getData = async (url: string) => {
	try {
		const data = await fetch(url, {
			method: "GET",
			responseType: ResponseType.Text,
		});
		console.log(parseXML(data.data as string));
		return parseXML(data.data as string);
	} catch (error) {
		console.error(error);
	}
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
