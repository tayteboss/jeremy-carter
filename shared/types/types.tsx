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
	siteTitle: string;
	password: string;
	informationContact: {};
	informationPageTitle: {};
};

type GalleryType = {
	image: {
		url: string;
	}
}

export type ProjectTypes = {
	client?: string;
	description?: {};
	gallery?: GalleryType[];
	slug?: string;
	thumbnailImage?: {
		url?: string;
	};
	title?: string;
	setIsHovered: (isHovered: boolean) => void;
	isHovered: boolean;
}
