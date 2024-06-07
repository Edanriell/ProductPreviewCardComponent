export const getProductQuery = async () => {
	const response = await fetch("https://localhost:7019/product", {
		method: "GET"
	});

	if (response.status === 404) {
		throw new Error("Product data not found");
	}

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	const contentType = response.headers.get("content-type");
	if (!contentType || !contentType.includes("application/json")) {
		throw new Error("Response is not in JSON format");
	}

	return response.json();
};
