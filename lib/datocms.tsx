import { GraphQLClient } from 'graphql-request';
import { ALL_PROJECTS_QUERY, SINGLE_PROJECT_QUERY } from './queries/page';
import SITE_QUERY from './queries/siteData';

type Request = {
	query?: string;
	variables?: {};
	preview?: boolean;
};

const request = ({ query, variables, preview }: Request) => {
	const endpoint = preview
		? `https://graphql.datocms.com/preview`
		: `https://graphql.datocms.com/`;
	const client = new GraphQLClient(endpoint, {
		headers: {
			authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
		},
	});
	return client.request(query, variables);
};

export const getSiteData = async () => {
	const data = await request({
		query: SITE_QUERY,
		variables: { siteId: process.env.SITE_ID },
		preview: false
	});

	return data?.siteInformation;
};

export const getAllProjects = async () => {
	const data = await request({
		query: ALL_PROJECTS_QUERY
	});

	return data?.allProjects;
};

export async function getProject(slug: string) {
	const data = await request({
		query: SINGLE_PROJECT_QUERY,
		variables: { slug },
	});

	return data?.allProjects[0];
}
