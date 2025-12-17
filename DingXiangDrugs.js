const path1 = "/app/user/pro/stat?";
const path2 = "/app/user/init?";
const path3 = "/app/user/pay/checkIntroOfferPeriod?";

let url = $request.url;
let body = JSON.parse($response.body);

if (url.indexOf(path1) != -1) {
  body.data.isActive = true;
  body.data.expireDate = "2099-10-06 10:49:24";
}

if (url.indexOf(path2) != -1) {
  body.data.isProActive = true;
  body.data.expireDate = "2099-10-06 10:49:24";
}

if (url.indexOf(path3) != -1) {
  body.data.hasIntroPeriod = true;
}

$done({
  body: JSON.stringify(body)
});
