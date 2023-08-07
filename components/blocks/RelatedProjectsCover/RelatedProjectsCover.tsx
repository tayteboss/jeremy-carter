import styled from 'styled-components';
import Link from 'next/link';

const RelatedProjectsCoverWrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 50vw;
	height: 100vh;
	z-index: 50;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const PreviousCover = styled.div`
	width: 50%;
	height: 100%;
`;

const NextCover = styled.div`
	width: 50%;
	height: 100%;
`;

const LinkTag = styled.a`
	display: block;
	height: 100%;
	width: 100%;
	cursor: none;
`;

type Props = {
	nextProjectSlug: string | undefined;
	previousProjectSlug: string | undefined;
};

const RelatedProjectsCover = (props: Props) => {
	const {
		nextProjectSlug,
		previousProjectSlug
	} = props;

	return (
		<RelatedProjectsCoverWrapper>
			{previousProjectSlug && (
				<PreviousCover className="previous-project-cover">
					<Link href={`/projects/${previousProjectSlug}`} passHref>
						<LinkTag />
					</Link>
				</PreviousCover>
			)}
			{nextProjectSlug && (
				<NextCover className="next-project-cover">
					<Link href={`/projects/${nextProjectSlug}`} passHref>
						<LinkTag />
					</Link>
				</NextCover>
			)}
		</RelatedProjectsCoverWrapper>
	);
};

export default RelatedProjectsCover;
