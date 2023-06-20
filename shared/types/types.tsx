export type MediaType = {
	media: [
		{
			webmVideoFile: {
				url: string;
			};
			mp4VideoFile: {
				url: string;
			};
			placeholderImage: {
				url: string;
			}
		}
	];
};

export type Transitions = {
	hidden: {
		opacity: number;
		transition: {
			duration: number;
		}
	}
	visible: {
		opacity: number;
		transition: {
			duration: number;
			delay?: number
		}
	}
};

export type SiteDataTypes = {
	seoDescription: string;
	seoTitle: string;
	password: string;
	informationContact: {};
};

export type ProjectTypes = {
	client?: string;
	description?: {};
	gallery?: [
		{
			image?: {
				url?: string;
			}
		}
	];
	slug?: string;
	thumbnailImage?: {
		url?: string;
	};
	title?: string;
}
