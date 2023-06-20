import styled from 'styled-components';
import { getAllProjects, getSiteData } from '../lib/datocms';
import { NextSeo } from 'next-seo';
import { ProjectTypes, SiteDataTypes } from '../shared/types/types';
import ProjectList from '../components/blocks/ProjectList';

const PageWrapper = styled.div``;

type Props = {
	projects: ProjectTypes[];
	siteData: SiteDataTypes;
};

const Page = (props: Props) => {
	const {
		projects,
		siteData
	} = props;

	return (
	<PageWrapper>
		<NextSeo
			title="Jeremy Carter"
			description={siteData?.seoDescription || ''}
		/>
		<ProjectList data={projects} />
	</PageWrapper>
	);
};

export async function getStaticProps() {
	const projects = await getAllProjects();
	const siteData = await getSiteData();

	return {
		props: {
			projects,
			siteData
		},
	};
}

export default Page;
