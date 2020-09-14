import { errorMsg } from "constants/messages";

export default function hintError(err) {
  const msg = err && err.message ? err.message : JSON.stringify(err);
  alert(errorMsg + msg);
  throw err;
}
