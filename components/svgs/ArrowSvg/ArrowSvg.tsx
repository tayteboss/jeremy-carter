import styled from "styled-components";

type StyledProps = {
	$isNext: boolean;
};

const Svg = styled.svg<StyledProps>`
	transform: ${(props) => props.$isNext ? 'rotate(180deg)' : 'rotate(0deg)'};
	mix-blend-mode: difference;
`;

const Path = styled.path`
	mix-blend-mode: difference;
`;

type Props = {
	isNext: boolean;
};

const ArrowSvg = (props: Props) => {
	const {
		isNext
	} = props;

	return (
		<Svg $isNext={isNext} width="54" height="17" viewBox="0 0 54 17" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Path d="M1 8.5H54M1 8.5L8.5 1M1 8.5L8.5 16" stroke="white"/>
		</Svg>
	);
};

export default ArrowSvg;
