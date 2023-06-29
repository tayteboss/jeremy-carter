import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import Link from 'next/link';
import pxToRem from '../../../utils/pxToRem';

const options = require('../../../json/siteData.json');

const HeaderWrapper = styled.header`
	position: relative;
	z-index: 100;
`;

const HeaderInner = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${pxToRem(70)} 0 ${pxToRem(110)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletLandscape} {
		padding: ${pxToRem(55)} 0 ${pxToRem(80)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		padding: ${pxToRem(45)} 0 ${pxToRem(62)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(25)} 0 ${pxToRem(43)};
	}
`;

const LinkTag = styled.a``;

const Header = () => {
	const siteTitle = options?.siteTitle || '';
	const infoTitle = options?.informationPageTitle || '';

	return (
		<HeaderWrapper className="header">
			<LayoutWrapper>
				<HeaderInner>
					{siteTitle && (
						<Link href="/" passHref>
							<LinkTag>{siteTitle}</LinkTag>
						</Link>
					)}
					{infoTitle && (
						<Link href="/information" passHref>
							<LinkTag>{infoTitle}</LinkTag>
						</Link>
					)}
				</HeaderInner>
			</LayoutWrapper>
		</HeaderWrapper>
	)
};

export default Header;
