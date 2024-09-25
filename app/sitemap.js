const URL = "https://next-webcache.vercel.app/";

export default async function sitemap() {
	const routes = ["", "test/"].map((route) => ({
		url: `${URL}${route}`,
		lastModified: new Date().toISOString(),
	}));

	return [...routes];
}
