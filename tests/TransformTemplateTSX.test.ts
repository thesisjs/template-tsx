import {
	transformTemplateTSX,
} from "../src";

describe("TransformTemplateTSX", () => {

	it("works", () => {
		const transformer = transformTemplateTSX();
		const template = transformer.transform(
			"<anonymous>",
			`export default function(attrs) {
				return <div>
					Hello, {attrs.name}!
				</div>
			}`,
		);
	});

});
