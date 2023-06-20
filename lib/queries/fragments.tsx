export const richTextFragment = `
	blocks
	links
	value
`;

export const linkFragment = `
	useInternalLink
	internalLink {
		... on HomePageRecord {
			slug
		}
		... on PageRecord {
			slug
		}
	}
	externalLink
	linkTitle
`;

export const imageFragment = `
	image {
		url
		alt
		height
		width
		alt
	}
`;
