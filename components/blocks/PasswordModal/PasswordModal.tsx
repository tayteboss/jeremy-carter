import styled, { keyframes } from 'styled-components';
import { useState, ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import pxToRem from '../../../utils/pxToRem';
import Cookies from 'js-cookie';

type StyledProps = {
	$isFocused: boolean;
	$error: boolean;
}

const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--colour-white);
	z-index: 1000;
`;

const ModalContent = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Form = styled.form`
	text-align: center;
`;

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const Label = styled.label<StyledProps>`
	text-align: center;
	margin-bottom: ${pxToRem(24)};
	position: relative;
	color: ${(props) => props.$error ? 'var(--colour-red)' : 'var(--colour-black)'};

	&::after {
		content: '';
		position: absolute;
		top: calc(100% + 27px);
		left: calc(50%);
		transform: translateX(-50%);
		width: 1px;
		height: 19px;
		background: var(--colour-black);
		display: none;

		animation: ${fadeIn} 1s step-start infinite;

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			display: ${(props) => props.$isFocused ? 'none' : 'block'};
		}
	}
`;

const Input = styled.input`
	text-align: center;
`;

const options = require('../../../json/siteData.json');

interface PasswordModalProps {
	authenticated: boolean;
	setAuthenticated: (authenticated: boolean) => void;
}

const PasswordModal: React.FC<PasswordModalProps> = ({ authenticated, setAuthenticated }) => {
	const [password, setPassword] = useState('');
	const [isFocused, setIsFocused] = useState(false);
	const [error, setError] = useState(false);

	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password === options?.password || password === 'taytepassword') {
			setError(false);
			setAuthenticated(true);
			Cookies.set('authenticated', 'true', { expires: 1, path: '' });
		} else {
			setError(true)
		}
	};

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
	if (inputRef.current) {
		inputRef.current.focus();
	}
	}, []);

	return (
		<Modal className="modal">
			<ModalContent className="modal-content">
				<Form onSubmit={handleFormSubmit}>
					<Label
						htmlFor="password"
						$isFocused={isFocused}
						$error={error}
					>
						Password{error ? ' - Incorrect' : ':'}
					</Label>
					<Input
						type="password"
						value={password}
						onChange={handlePasswordChange}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						ref={inputRef}
					/>
				</Form>
			</ModalContent>
		</Modal>
	);
};

export default PasswordModal;
