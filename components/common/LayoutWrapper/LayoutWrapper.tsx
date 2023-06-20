import { ReactNode } from 'react';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	children: ReactNode;
};

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: ${(props) => props.theme.layout.innerWrapper};
	padding-left: ${pxToRem(20)};
	padding-right: ${pxToRem(20)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding-left: ${pxToRem(10)};
		padding-right: ${pxToRem(10)};
	}
`;

const LayoutWrapper = (props: Props) => (
	<Wrapper className="inner-wrapper">{props.children}</Wrapper>
);

export default LayoutWrapper;
