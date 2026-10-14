export default function handler(request, response) {
  const ip = request.headers['x-forwarded-for'] || "Unknown";
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET');
  response.status(200).send(ip);
}
