import { richTextFragment } from "./fragments";

const SITE_DATA_QUERY: string = `
	query Query {
		siteInformation {
			seoDescription
			password
			informationContact {
				${richTextFragment}
			}
			siteTitle
		}
	}
`;

export default SITE_DATA_QUERY;
