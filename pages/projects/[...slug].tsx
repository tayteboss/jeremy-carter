import styled from 'styled-components';
import { getSiteData, getAllProjects, getProject } from '../../lib/datocms';
import { NextSeo } from 'next-seo';
import { ProjectTypes, SiteDataTypes } from '../../shared/types/types';
import LayoutWrapper from '../../components/common/LayoutWrapper';
import LayoutGrid from '../../components/common/LayoutGrid';
import ProjectContent from '../../components/blocks/ProjectContent';
import ProjectGallery from '../../components/blocks/ProjectGallery';

const PageWrapper = styled.div``;

type Props = {
	data: ProjectTypes;
	siteData: SiteDataTypes;
};

const Page = (props: Props) => {
	const {
		data,
		siteData,
	} = props;

	console.log('data', data);
	console.log('siteData', siteData);

	return (
	<PageWrapper>
		<NextSeo
			title={`Jeremy Carter - ${data?.title}`}
			description={siteData?.seoDescription || ''}
		/>
		<LayoutWrapper>
			<LayoutGrid>
				<ProjectContent
					title={data?.title}
					client={data?.client}
					description={data?.description}
				/>
				<ProjectGallery
					data={data}
				/>
			</LayoutGrid>
		</LayoutWrapper>
	</PageWrapper>
	);
};

export async function getStaticPaths() {
	const projects = await getAllProjects();

	return {
		paths: projects.map((item: any) => {
			return `/projects/${item?.slug}`;
		}),
		fallback: true
	};
}

export async function getStaticProps({ params }: any) {
	const data = await getProject(params.slug[0]);
	const siteData = await getSiteData();

	return {
		props: {
			data,
			siteData
		},
	};
}

export default Page;
