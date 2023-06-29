import styled from 'styled-components';
import RichText from '../../common/RichText';
import pxToRem from '../../../utils/pxToRem';

const ProjectContentWrapper = styled.div`
	grid-column: 1 / 5;
	position: sticky;
	top: ${pxToRem(55)};
	left: 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletLandscape} {
		top: ${pxToRem(55)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		top: ${pxToRem(45)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		top: initial;
		grid-column: 5 / -1;
		margin-bottom: ${pxToRem(20)};
		position: relative;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		grid-column: 1 / -1;
		margin-bottom: ${pxToRem(40)};
	}
`;

const Title = styled.h1``;

const Client = styled.h2`
	margin-bottom: ${pxToRem(24)};
`;

type Props = {
	title?: string;
	client?: string;
	description?: {};
};

const ProjectContent = (props: Props) => {
	const {
		title,
		client,
		description
	} = props;

	return (
		<ProjectContentWrapper>
			{title && <Title>{title}</Title>}
			{client && <Client>{client}</Client>}
			{description && (
				<RichText data={description} />
			)}
		</ProjectContentWrapper>
	);
};

export default ProjectContent;
