import type { Plugin } from "@elizaos/core";
import { postAction } from "./actions/post";
import { desmosProvider } from "./providers/desmos"
import { DesmosService } from "./services/desmos"

const desmosService = new DesmosService();

export const twitterPlugin: Plugin = {
    name: "twitter",
    description: "Twitter integration plugin for posting tweets",
    actions: [postAction],
    providers: [desmosProvider],
    services: [desmosService],
};

export default twitterPlugin;
