import { makeSchema } from 'nexus'
import { join } from 'path'
//  Importing the graphql model which exports the Link object type through index.ts.
import * as types from "./graphql";

export const schema = makeSchema({
  types, 
  outputs: {
    schema: join(__dirname, '..', 'schema.graphql'), 
    typegen: join(__dirname, '..', 'nexus-typegen.ts'), 
  },
  contextType: {
      module: join(__dirname, "./context.ts"),
      export: "Context",
  },
});