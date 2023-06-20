import styled from 'styled-components';
import { ProjectTypes } from '../../../shared/types/types';
import Link from 'next/link';
import Image from 'next/image';

const ImageWrapper = styled.a`
	position: relative;
	grid-column: span 3;
	padding-top: 66.8%;
	background: var(--colour-black);

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		grid-column: span 4;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: span 6;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		grid-column: span 1;
	}
`;

const ProjectCard = (props: ProjectTypes) => {
	const {
		slug,
		thumbnailImage,
		title,
		client
	} = props;

	return (
		<Link href={`/projects/${slug}`} passHref>
			<ImageWrapper>
				{thumbnailImage?.url && (
					<Image
						src={thumbnailImage.url}
						layout="fill"
						objectFit="cover"
					/>
				)}
			</ImageWrapper>
		</Link>
	);
};

export default ProjectCard;
