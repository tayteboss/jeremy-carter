import { NextSeo } from 'next-seo';
import styled from 'styled-components';

const PageWrapper = styled.div``;

const Page = () => {
	return (
		<PageWrapper>
			<NextSeo
				title="Jeremy Carter - 404"
			/>
		</PageWrapper>
	)
}

export default Page;
