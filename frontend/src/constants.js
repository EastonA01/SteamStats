export const API_URL = "http://localhost:8000/api/hub/";
export const API_RAW = "http://localhost:8000/api/"
export function minutesToHHmm(minutes) {
    if (!minutes || isNaN(minutes)) return "00:00"
    let m = minutes % 60;
    let h = (minutes - m) / 60;
    return (h < 10 ? "0" : "") + h.toString() + ":" + (m < 10 ? "0" : "") + m.toString();
}