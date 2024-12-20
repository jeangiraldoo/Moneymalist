import { SvgXml } from 'react-native-svg';

const svg = `
	<svg id="Layer_1" viewBox="0 0 507.9 507.9" xml:space="preserve">
		<g><g><path d="M412.05,0H95.85c-23.3,0-42.3,19-42.3,42.3v423.3c0,23.3,19,42.3,
					  42.3,42.3h316.2c23.3,0,42.3-19,42.3-42.3V42.3C454.35,19,435.35,0,
					  412.05,0z M426.15,465.7c0,7.8-6.3,14.1-14.1,14.1H95.85c-7.8,0-14.1
					  -6.3-14.1-14.1V42.3c0-7.8,6.3-14.1,14.1-14.1h316.2c7.8,0,14.1,6.3,
					  14.1,14.1V465.7z"/></g></g>

		<g><g><path d="M383.85,56.4h-259.8c-7.8,0-14.1,6.3-14.1,14.1v93.7c0,7.8,6.3,14.1,
					 14.1,14.1h259.8c7.8,0,14.1-6.3,14.1-14.1V70.6C397.95,62.8,391.65,56.4,
					 383.85,56.4z M138.15,150.2V84.7h231.5v65.5H138.15z"/></g></g>

		<g><g><path d="M180.55,197.8h-56.4c-7.8,0-14.1,6.3-14.1,14.1v51.2c0,7.8,6.3,
					  14.1,14.1,14.1h56.4c7.8,0,14.1-6.3,14.1-14.1v-51.2C194.65,204.1,
					  188.35,197.8,180.55,197.8z M166.45,249h-28.2v-23h28.2V249z"/></g></g>

		<g><g><path d="M282.15,197.8h-56.4c-7.8,0-14.1,6.3-14.1,14.1v51.2c0,7.8,6.3,14.1,
					 14.1,14.1h56.4c7.8,0,14.1-6.3,14.1-14.1v-51.2C296.25,204.1,289.95,
					 197.8,282.15,197.8z M268.05,249h-28.2v-23h28.2V249z"/></g></g>

		<g><g><path d="M383.85,197.8h-56.4c-7.8,0-14.1,6.3-14.1,14.1v51.2c0,7.8,6.3,14.1,
					 14.1,14.1h56.4c7.8,0,14.1-6.3,14.1-14.1v-51.2C397.95,204.1,391.65,
					 197.8,383.85,197.8z M369.75,249h-28.2v-23h28.2V249z"/></g></g>

		<g><g><path d="M180.55,287.5h-56.4c-7.8,0-14.1,6.3-14.1,14.1v51.2c0,7.8,6.3,14.1,
					14.1,14.1h56.4c7.8,0,14.1-6.3,14.1-14.1v-51.2C194.65,293.8,188.35,287.5,
					180.55,287.5z M166.45,338.7h-28.2v-23h28.2V338.7z"/></g></g>

		<g><g><path d="M282.15,287.5h-56.4c-7.8,0-14.1,6.3-14.1,14.1v51.2c0,7.8,6.3,14.1,
					14.1,14.1h56.4c7.8,0,14.1-6.3,14.1-14.1v-51.2C296.25,293.8,289.95,287.5,
					282.15,287.5z M268.05,338.7h-28.2v-23h28.2V338.7z"/></g></g>

		<g><g><path d="M180.55,377.2h-56.4c-7.8,0-14.1,6.3-14.1,14.1v51.2c0,7.8,6.3,14.1,
					 14.1,14.1h56.4c7.8,0,14.1-6.3,14.1-14.1v-51.2C194.65,383.5,188.35,
					 377.2,180.55,377.2z M166.45,428.4h-28.2v-23h28.2V428.4z"/></g></g>

		<g><g><path d="M282.15,377.2h-56.4c-7.8,0-14.1,6.3-14.1,14.1v51.2c0,7.8,6.3,14.1,
					 14.1,14.1h56.4c7.8,0,14.1-6.3,14.1-14.1v-51.2C296.25,383.5,289.95,
					 377.2,282.15,377.2z M268.05,428.4h-28.2v-23h28.2V428.4z"/></g></g>

		<g><g><path d="M383.85,287.5h-56.4c-7.8,0-14.1,6.3-14.1,14.1v140.9c0,7.8,6.3,14.1,
					 14.1,14.1h56.4c7.8,0,14.1-6.3,14.1-14.1V301.6C397.95,293.8,391.65,
					 287.5,383.85,287.5z M369.75,428.4h-28.2V315.7h28.2V428.4z"/></g></g>
	</svg>`;

export default function BudgetLogo(props) {
	return <SvgXml xml={svg} width={props.width} height={props.height} fill="black"/>;
}
