import styled from 'styled-components';
import { ProjectTypes } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import ProjectCard from '../../elements/ProjectCard';
import { useState } from 'react';

const ProjectListWrapper = styled.section``;

type Props = {
	data: ProjectTypes[];
}

const ProjectList = ({ data }: Props) => {
	const hasData = data && data.length > 0;

	const [isHovered, setIsHovered] = useState(false);

	return (
		<ProjectListWrapper>
			<LayoutWrapper>
				<LayoutGrid>
					{hasData && data.map((item, i) => (
						<ProjectCard
							key={i}
							client={item?.client}
							slug={item?.slug}
							thumbnailImage={item?.thumbnailImage}
							title={item?.title}
							isHovered={isHovered}
							setIsHovered={setIsHovered}
						/>
					))}
				</LayoutGrid>
			</LayoutWrapper>
		</ProjectListWrapper>
	);
};

export default ProjectList;
