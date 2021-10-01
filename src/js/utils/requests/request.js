import { RT_API_URLS } from "environment";

export function getCactusGamingRequest() {
  const url = RT_API_URLS.cactusGaming;

  return {
    method: "GET",
    url: url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }
}
