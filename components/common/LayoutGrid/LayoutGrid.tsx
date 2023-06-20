import { ReactNode } from 'react';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	children: ReactNode;
};

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(12, minmax(0, 1fr));
	grid-column-gap: ${pxToRem(20)};
	grid-row-gap: ${pxToRem(20)};
	align-items: start;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-column-gap: ${pxToRem(10)};
		grid-row-gap: ${pxToRem(10)};
	}
`;

const LayoutGrid = (props: Props) => <Grid className="grid">{props.children}</Grid>;

export default LayoutGrid;
