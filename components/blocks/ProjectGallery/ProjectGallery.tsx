import styled from 'styled-components';
import Image from 'next/image';
import { ProjectTypes } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';

const ProjectGalleryWrapper = styled.div`
	grid-column: 7 / -1;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 5 / -1;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		grid-column: 1 / -1;
		padding-bottom: ${pxToRem(40)};
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	padding-top: 66.8%;

	&:not(:last-child) {
		margin-bottom: ${pxToRem(20)};

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			margin-bottom: ${pxToRem(10)};
		}
	}
`;

type Props = {
	data: ProjectTypes;
};

const ProjectGallery = ({ data }: Props) => {
	const hasData = data?.gallery && data?.gallery?.length > 0;

	return (
		<ProjectGalleryWrapper>
			{hasData && data?.gallery && data?.gallery.map((item, i) => (
				<ImageWrapper key={i}>
					<Image
						src={item?.image?.url}
						layout="fill"
						objectFit="cover"
					/>
				</ImageWrapper>
			))}
		</ProjectGalleryWrapper>
	);
};

export default ProjectGallery;
