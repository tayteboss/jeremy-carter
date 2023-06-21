import Link from 'next/link';
import styled from 'styled-components';
import ArrowSvg from '../../svgs/ArrowSvg';

const MobileRelatedProjectsCoverWrapper = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 50;
	background: var(--colour-white);
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: flex;
	}
`;

const PreviousCover = styled.div`
	width: 50%;
	height: 50px;
	position: relative;
`;

const NextCover = styled.div`
	width: 50%;
	height: 50px;
	position: relative;
`;

const LinkTag = styled.a`
	display: block;
	height: 100%;
	width: 100%;
	cursor: none;
`;

const ArrowWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
	mix-blend-mode: difference;
`;

type Props = {
	nextProjectSlug: string | undefined;
	previousProjectSlug: string | undefined;
};

const MobileRelatedProjectsCover = (props: Props) => {
	const {
		nextProjectSlug,
		previousProjectSlug
	} = props;

	return (
		<MobileRelatedProjectsCoverWrapper>
			{previousProjectSlug && (
				<PreviousCover className="previous-project-cover">
					<Link href={`/projects/${previousProjectSlug}`} passHref>
						<LinkTag />
					</Link>
					<ArrowWrapper>
						<ArrowSvg isNext={false} />
					</ArrowWrapper>
				</PreviousCover>
			)}
			{nextProjectSlug && (
				<NextCover className="next-project-cover">
					<Link href={`/projects/${nextProjectSlug}`} passHref>
						<LinkTag />
					</Link>
					<ArrowWrapper>
						<ArrowSvg isNext={true} />
					</ArrowWrapper>
				</NextCover>
			)}
		</MobileRelatedProjectsCoverWrapper>
	);
};

export default MobileRelatedProjectsCover;
