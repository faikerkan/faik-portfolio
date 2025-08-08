/* eslint-disable no-console */
import https from "node:https";

function head(url) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, { method: "HEAD" }, (res) => {
      resolve({ status: res.statusCode, location: res.headers.location });
    });
    req.on("error", reject);
    req.end();
  });
}

async function main() {
  const apex = await head("https://faikerkan.info");
  const www = await head("https://www.faikerkan.info");

  const apexOk = (apex.status === 301 || apex.status === 308) && apex.location && apex.location.startsWith("https://www.faikerkan.info/");
  const wwwOk = www.status === 200 && !www.location;

  if (apexOk && wwwOk) {
    console.log("Redirects OK");
    process.exit(0);
  }
  console.error("Redirects FAILED:", { apex, www });
  process.exit(1);
}

main();


