import styled from 'styled-components';
import { getSiteData, getAllProjects, getProject } from '../../lib/datocms';
import { NextSeo } from 'next-seo';
import { ProjectTypes, SiteDataTypes } from '../../shared/types/types';
import LayoutWrapper from '../../components/common/LayoutWrapper';
import LayoutGrid from '../../components/common/LayoutGrid';
import ProjectContent from '../../components/blocks/ProjectContent';
import ProjectGallery from '../../components/blocks/ProjectGallery';
import RelatedProjectsCover from '../../components/blocks/RelatedProjectsCover';
import MobileRelatedProjectsCover from '../../components/blocks/MobileRelatedProjectsCover';

const PageWrapper = styled.div``;

type Props = {
	data: ProjectTypes;
	siteData: SiteDataTypes;
	projects: ProjectTypes[];
	nextProject: ProjectTypes;
	previousProject: ProjectTypes;
};

const Page = (props: Props) => {
	const {
		data,
		siteData,
		nextProject,
		previousProject
	} = props;

	return (
	<PageWrapper>
		<NextSeo
			title={`Jeremy Carter - ${data?.title}`}
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
			<RelatedProjectsCover
				nextProjectSlug={nextProject.slug}
				previousProjectSlug={previousProject.slug}
			/>
			<MobileRelatedProjectsCover 
				nextProjectSlug={nextProject.slug}
				previousProjectSlug={previousProject.slug}
			/>
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
	const projects = await getAllProjects();;
	const siteData = await getSiteData();
	let nextProject = false;
	let previousProject = false;

	projects.forEach((item: ProjectTypes, index: number) => {
		if (item.slug === data?.slug) {
			nextProject = projects[(index + 1) % projects.length];
			previousProject = projects[(index - 1 + projects.length) % projects.length];
		}
	});

	return {
		props: {
			data,
			siteData,
			projects,
			nextProject,
			previousProject
		},
	};
}

export default Page;
