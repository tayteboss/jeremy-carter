import styled from 'styled-components';
import { getSiteData } from '../lib/datocms';
import LayoutWrapper from '../components/common/LayoutWrapper';
import LayoutGrid from '../components/common/LayoutGrid';
import RichText from '../components/common/RichText';
import { SiteDataTypes } from '../shared/types/types';
import { NextSeo } from 'next-seo';

const PageWrapper = styled.div``;

const ContentWrapper = styled.div`
	grid-column: 1 / 7;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / 9;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		grid-column: 1 / -1;
	}
`;

type Props = {
	siteData: SiteDataTypes;
};

const Page = (props: Props) => {
	const {
		siteData
	} = props;

	console.log('siteData', siteData);

	return (
		<PageWrapper>
			<NextSeo
				title="Jeremy Carter - Information / Contact"
				description={siteData?.seoDescription || ''}
			/>
			<LayoutWrapper>
				<LayoutGrid>
					<ContentWrapper>
						{siteData?.informationContact && (
							<RichText data={siteData.informationContact} />
						)}
					</ContentWrapper>
				</LayoutGrid>
			</LayoutWrapper>
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteData = await getSiteData();

	return {
		props: {
			siteData
		},
	};
}

export default Page;
