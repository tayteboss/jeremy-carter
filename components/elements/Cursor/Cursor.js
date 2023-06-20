import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useMousePosition } from '../../../hooks/useMousePosition';
import ArrowSvg from '../../svgs/ArrowSvg';

const CursorWrapper = styled.div`
	height: 15px;
	width: 53px;
	z-index: 1000;
	position: fixed;
	display: ${(props) => (props.isOnDevice ? 'none' : 'block')};
	mix-blend-mode: difference;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		display: none;
	}
`;

const PrevProjectArrowWrapper = styled(motion.div)`
	position: fixed;
	display: flex;
	flex-flow: row;
	align-content: center;
	justify-content: center;
	top: 7px;
	left: 21px;
	height: 15px;
	width: 53px;
	pointer-events: none;
	z-index: 2;
	opacity: ${(props) => props.$isActive ? 1 : 0};
	mix-blend-mode: difference;
`;

const NextProjectArrowWrapper = styled(motion.div)`
	position: fixed;
	display: flex;
	flex-flow: row;
	align-content: center;
	justify-content: center;
	top: 7px;
	left: 21px;
	height: 15px;
	width: 53px;
	pointer-events: none;
	z-index: 2;
	opacity: ${(props) => props.$isActive ? 1 : 0};
	mix-blend-mode: difference;
`;

const Cursor = ({ cursorRefresh }) => {
	const [isHoveringPrevProject, setIsHoveringPrevProject] = useState(false);
	const [isHoveringNextProject, setIsHoveringNextProject] = useState(false);
	const [isOnDevice, setIsOnDevice] = useState(false);
	const position = useMousePosition();
	const router = useRouter();

	const mouseXPosition = position.x;
	const mouseYPosition = position.y;

	const variantsWrapper = {
		visible: {
			x: mouseXPosition,
			y: mouseYPosition,
			transition: {
				type: 'spring',
				mass: 0.05,
				stiffness: 1000,
				damping: 40,
				ease: 'linear',
			},
		},
	};

	useEffect(() => {
		const nextProjectLink = document.querySelectorAll('.next-project-cover');
		const previousProjectLink = document.querySelectorAll('.previous-project-cover');

		nextProjectLink.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringNextProject(true);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringNextProject(false);
			});
		});

		previousProjectLink.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringPrevProject(true);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringPrevProject(false);
			});
		});

		// checking if on a device
		const ua = navigator.userAgent;
		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			setIsOnDevice(true);
		} else if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {
			setIsOnDevice(true);
		}
	}, [router.asPath, cursorRefresh]);

	useEffect(() => {
		setIsHoveringNextProject(false);
		setIsHoveringPrevProject(false);
	}, [router.asPath, cursorRefresh]);

	return (
		<CursorWrapper isOnDevice={isOnDevice}>
			<PrevProjectArrowWrapper
				variants={variantsWrapper}
				animate="visible"
				$isActive={isHoveringPrevProject}
			>
				<ArrowSvg isNext={false} />
			</PrevProjectArrowWrapper>
			<NextProjectArrowWrapper
				variants={variantsWrapper}
				animate="visible"
				$isActive={isHoveringNextProject}
			>
				<ArrowSvg isNext={true} />
			</NextProjectArrowWrapper>
		</CursorWrapper>
	);
};

export default Cursor;
