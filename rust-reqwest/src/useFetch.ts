import { useQuery } from "@tanstack/react-query";
import { invoke } from "@tauri-apps/api/tauri";
import { parseXML } from "./helper";

// const getData = async (url: string) => {
// 	return await invoke("get_data", { url: url });
// };

const getData = async (url: string) => {
	try {
		const data = await invoke("get_data", { url: url });
		return parseXML(data as string);
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
