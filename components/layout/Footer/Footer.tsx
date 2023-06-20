import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

const FooterWrapper = styled.footer`
	height: ${pxToRem(100)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		height: ${pxToRem(80)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		height: ${pxToRem(50)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		height: ${pxToRem(30)};
	}
`;

const Footer = () => {
	return (
		<FooterWrapper />
	)
};

export default Footer;