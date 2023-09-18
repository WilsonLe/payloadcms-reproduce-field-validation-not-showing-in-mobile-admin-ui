import Users from "./collections/Users";
import { payloadCloud } from "@payloadcms/plugin-cloud";
import path from "path";
import { buildConfig } from "payload/config";

export default buildConfig({
	admin: {
		user: Users.slug
	},
	collections: [Users],
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts")
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql")
	},
	plugins: [payloadCloud()]
});
