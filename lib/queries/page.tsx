import { richTextFragment } from "./fragments";

export const ALL_PROJECTS_QUERY: string = `
	query Query {
		allProjects(first: 100) {
			slug
			title
			thumbnailImage {
				url
			}
			gallery {
				image {
					url
				}
			}
			description {
				${richTextFragment}
			}
			client
		}
	}
`;

export const SINGLE_PROJECT_QUERY: string = `
	query Query($slug: String) {
		allProjects(filter: {slug: {eq: $slug}}) {
			id
			slug
			title
			thumbnailImage {
				url
			}
			gallery {
				image {
					url
				}
			}
			description {
				${richTextFragment}
			}
			client
		}
	}
`;
