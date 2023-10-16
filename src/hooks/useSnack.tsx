import { useContext } from "react";

import { SnackContenxt } from "../contexts/SnackContext";

export function useSnack() {
  return useContext(SnackContenxt)
}
