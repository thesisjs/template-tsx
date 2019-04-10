import t from "@babel/types";
import * as ts from "typescript";

export class TransformTemplateTSX {
	public transform(file: string, code: string): t.Program {
		const source = ts.createSourceFile(
			file,
			code,
			ts.ScriptTarget.ESNext,
			true,
			ts.ScriptKind.TSX,
		);

		return {
			body: [],
			directives: [],
			end: 0,
			innerComments: [],
			interpreter: null,
			leadingComments: [],
			loc: {
				start: {
					column: 0,
					line: 0,
				},

				end: {
					column: 0,
					line: 0,
				},
			},
			sourceFile: file,
			sourceType: "module",
			start: 0,
			trailingComments: [],
			type: "Program",
		};
	}
}
