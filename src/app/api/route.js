import { promises as fs } from "fs";

export async function GET(request) {
    const result = await fs.readFile(
      process.cwd() + "/src/data/data.csv",
      "utf8"
    );
    const strArr = result.split("\n");
    const arrObj = strArr.map((item) => {
      const splitItem = item.split(";");
      const obj = { createdAt: splitItem[0], name: splitItem[1] };
      return obj;
    });
    return Response.json(arrObj)
}
