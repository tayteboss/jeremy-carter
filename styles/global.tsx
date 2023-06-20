import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
	:root {
		--colour-white: ${theme.colours.white};
		--colour-black: ${theme.colours.black};
		--font-apercu-regular: ${theme.fonts.apercuRegular};
		--font-apercu-light: ${theme.fonts.apercuLight};
		--transition-speed-default: ${theme.transitionSpeed.default};
		--transition-speed-fast: ${theme.transitionSpeed.fast};
		--transition-speed-extra-fast: ${theme.transitionSpeed.extraFast};
		--transition-speed-slow: ${theme.transitionSpeed.slow};
		--transition-speed-extra-slow: ${theme.transitionSpeed.extraSlow};
		--transition-ease: cubic-bezier(0.65, 0, 0.35, 1);
	}

	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: none;
		list-style: none;
		background: none;
		outline: none;
		border-radius: 0;
		box-shadow: none;
		font-weight: 100;
	}

	::selection {
		background-color: black;
		color: white;
	}

	html {
		scroll-behavior: smooth;
		background: ${theme.colours.white};
		font-size: 16px;

		&.no-scroll {
			overflow-y: hidden;
			
			body {
				overflow-y: hidden;
			}
		}
	}

	body {
		position: relative;
	}

	input,
	textarea,
	select,
	button,
	label,
	body {
		font-family: var(--font-apercu-regular);
		color: var(--colour-black);
	}

	strong,
	b,
	.bold {
		font-weight: 400;
		font-family: var(--font-apercu-regular);
	}

	.light {
		font-weight: 300;
		font-family: var(--font-apercu-light);
	}

	em {
		font-style: italic;
	}

	a {
		text-decoration: none;
		color: var(--colour-black);
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	button {
		cursor: pointer;
	}

	h1,
	.type-h1 {
		font-size: ${theme.size.h1};
		line-height: 1.5rem;

		@media ${theme.mediaBreakpoints.tabletLandscape} {
			font-size: ${theme.sizeTabletLandscape.h1};
			line-height: 1.125rem;
		}

		@media ${theme.mediaBreakpoints.tabletMedium} {
			font-size: ${theme.sizeTabletMedium.h1};
			line-height: 1rem;
		}

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTabletPortrait.h1};
			line-height: 0.938rem;
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h1};
			line-height: 0.938rem;
		}
	}

	h2,
	.type-h2 {
		font-size: ${theme.size.h2};
		line-height: 1.5rem;

		@media ${theme.mediaBreakpoints.tabletLandscape} {
			font-size: ${theme.sizeTabletLandscape.h2};
			line-height: 1.125rem;
		}

		@media ${theme.mediaBreakpoints.tabletMedium} {
			font-size: ${theme.sizeTabletMedium.h2};
			line-height: 1rem;
		}

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTabletPortrait.h2};
			line-height: 0.938rem;
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h2};
			line-height: 0.938rem;
		}
	}

	h3,
	.type-h3 {
		font-size: ${theme.size.h3};
		line-height: 1.5rem;

		@media ${theme.mediaBreakpoints.tabletLandscape} {
			font-size: ${theme.sizeTabletLandscape.h3};
			line-height: 1.125rem;
		}

		@media ${theme.mediaBreakpoints.tabletMedium} {
			font-size: ${theme.sizeTabletMedium.h3};
			line-height: 1rem;
		}

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTabletPortrait.h3};
			line-height: 0.938rem;
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h3};
			line-height: 0.938rem;
		}
	}

	h4,
	.type-h4 {
		font-size: ${theme.size.h4};
		line-height: 1.5rem;

		@media ${theme.mediaBreakpoints.tabletLandscape} {
			font-size: ${theme.sizeTabletLandscape.h4};
			line-height: 1.125rem;
		}

		@media ${theme.mediaBreakpoints.tabletMedium} {
			font-size: ${theme.sizeTabletMedium.h4};
			line-height: 1rem;
		}

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTabletPortrait.h4};
			line-height: 0.938rem;
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h4};
			line-height: 0.938rem;
		}
	}

	p,
	.type-p,
	a,
	button,
	div {
		font-size: ${theme.size.body};
		line-height: 1.5rem;

		@media ${theme.mediaBreakpoints.tabletLandscape} {
			font-size: ${theme.sizeTabletLandscape.body};
			line-height: 1.125rem;
		}

		@media ${theme.mediaBreakpoints.tabletMedium} {
			font-size: ${theme.sizeTabletMedium.body};
			line-height: 1rem;
		}

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTabletPortrait.body};
			line-height: 0.938rem;
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.body};
			line-height: 0.938rem;
		}
	}

	.content {
		& > * {
			font-family: var(--font-apercu-light);
		}
	}

	.view-element-fade-in
	{
		opacity: 0;

		transition: opacity 300ms ease;

		&--in-view
		{
			opacity: 1;
		}
	}

	.view-element-bottom-top
	{
		opacity: 0;
		transform: translateY(15px);

		transition: opacity 300ms cubic-bezier(0.65, 0, 0.35, 1), transform 300ms cubic-bezier(0.65, 0, 0.35, 1);

		&--in-view
		{
			opacity: 1;
			transform: translateY(0);
		}
	}

	.view-element-scale-up
	{
		transform: scale(0.95);
		opacity: 0;

		transition: opacity 300ms ease, transform 300ms ease;

		&--in-view
		{
			opacity: 1;
			transform: scale(1);
		}
	}

	.performance {
		-webkit-transform: translateZ(0);
	}

	::placeholder {
		color: currentcolor;
		opacity: 1;
	}

	input[type="search"]::-webkit-search-decoration,
	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-results-button,
	input[type="search"]::-webkit-search-results-decoration {
		-webkit-appearance: none;
	}

	input[type="hidden"] {
		display: none;
	}

	input,
	textarea,
	select {
		padding: 0.125rem 0;
		font-size: ${theme.size.body};
		width: 100%;
		appearance: none;
	}

	input::placeholder,
	textarea::placeholder {
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	textarea {
		min-height: 8rem;
	}

	label {
		display: inline-block;
	}

	.overflow-hidden {
		overflow: hidden;
	}

	img,
	video {
		max-width: 100%;
		display: block;
		height: auto;
	}

	iframe {
		max-width: 100%;
		display: block;
	}
`;
