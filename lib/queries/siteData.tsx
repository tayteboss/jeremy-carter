import { richTextFragment } from "./fragments";

const SITE_DATA_QUERY: string = `
	query Query {
		siteInformation {
			password
			informationContact {
				${richTextFragment}
			}
			informationPageTitle
			siteTitle
		}
	}
`;

export default SITE_DATA_QUERY;
