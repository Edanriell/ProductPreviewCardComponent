import { css } from "@emotion/css";

export const button = css`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	column-gap: 1.1rem;
	width: 100%;
	max-height: 4.8rem;
	background: var(--deep-aquamarine);
	border-radius: 0.8rem;
	padding-top: 1.5rem;
	padding-bottom: 1.6rem;
	border: none;
	cursor: pointer;
`;

export const buttonText = css`
	font-family: var(--font-family), serif;
	font-weight: 700;
	font-size: 1.4rem;
	color: var(--pure-white);
`;
