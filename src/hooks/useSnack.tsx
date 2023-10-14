import { useContext } from "react";

import { SnackContenxt } from "../contents/SnackContext";

export function useSnack() {
  return useContext(SnackContenxt)
}
