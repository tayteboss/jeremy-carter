import styled from 'styled-components';
import { ProjectTypes } from '../../../shared/types/types';
import Link from 'next/link';
import Image from 'next/image';

type StyledProps = {
	$isHovered: boolean;
};

const ImageWrapper = styled.a<StyledProps>`
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

	img {
		transition: all var(--transition-speed-fast) var(--transition-ease);
	}

	img {
		filter: ${(props) => props.$isHovered ? 'blur(1px) grayscale(100%)' : 'blur(0)  grayscale(0)'};
	}

	&:hover {
		img {
			filter: blur(0) grayscale(0);
		}
	}
`;

const ProjectCard = (props: ProjectTypes) => {
	const {
		slug,
		thumbnailImage,
		isHovered,
		setIsHovered
	} = props;

	return (
		<Link href={`/projects/${slug}`} passHref>
			<ImageWrapper
				onMouseOver={() => setIsHovered(true)}
				onMouseOut={() => setIsHovered(false)}
				$isHovered={isHovered}
			>
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
