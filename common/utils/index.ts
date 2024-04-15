import { info } from "common/ui/popover/notify"
import { createRoot } from "react-dom/client"

export function copy(str: string, notify = true) {
  const input = document.createElement("input")
  input.value = str
  input.style.position = "fixed"
  input.style.bottom = "-100px"
  document.body.appendChild(input)
  input.select()
  document.execCommand("copy")
  document.body.removeChild(input)
  info("Copy to clipboard")
}

export function render(children: React.ReactNode) {
  const container = document.querySelector("#app")
  const root = createRoot(container!)
  root.render(children)
}

export function toFixed(num: number, n = 4) {
  if (!num) {
    return 0
  }
  return Math.round(num * Math.pow(10, n)) / Math.pow(10, n)
}

export function ellipsisAddr(addr = "") {
  return addr.substring(0, 5) + "..." + addr.substr(-4)
}

export function pumpBot(){
  return "tg://resolve?domain=pump_fun_bot"
}

export function pumpFun(mint: string){
  return `https://pump.fun/${mint}`
}
