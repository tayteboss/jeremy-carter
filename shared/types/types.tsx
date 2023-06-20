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

type GalleryType = {
	image: {
		url: string;
	}
}

export type ProjectTypes = {
	client?: string;
	description?: {};
	gallery: GalleryType[];
	slug?: string;
	thumbnailImage?: {
		url?: string;
	};
	title?: string;
}
