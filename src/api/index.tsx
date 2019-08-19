const BASE_API = 'http://localhost:7001'

export function get(url: string): Promise<any> {
  return fetch(BASE_API + url).then((res) => res.json())
}
