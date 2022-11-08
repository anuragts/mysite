import { NextApiRequest, NextApiResponse } from "next";
export default (req: NextApiRequest, res: NextApiResponse) => {
  res
    .status(200)
    .json({
      programs: [
        "vscode",
        "vscode insiders",
        "git",
        "npm & yarn",
        "windows terminal",
        "postman",
        "planetscale",
        "mongodb compass",
        "brave",
        "vivalid browser",
        "Ubuntu WSL",
        "vlc",
      ],
      vscode: [
        "Github copilot",
        "Prettier",
        "Karma",
        "Material Icon theme",
        "Prisma",
        "WakaTime",
        "coderunner",
        "auto close & rename & import tag",
        "ES7+ React",
        "Javascript/ts",
      ],
      browser: [
        "awesome ss",
        "metamask",
        "unhook yt",
        "sponserblock yt",
        "audio only yt",
        "grammerly",
        "emoji keyboard",
      ],
    });
};
