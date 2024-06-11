import { PumpCoin, PumpDetail } from "common/types"

export async function getPumpList(): Promise<PumpCoin[]>{
  const res = await fetch("https://gmgn.ai/defi/quotation/v1/rank/sol/pump?limit=50&orderby=progress&direction=desc&pump=true", {cache: "no-store"})
  const data = await res.json()
  if(data.code === 0){
    return data.data.rank
  }
  return []
}

export async function getPumpDetail(addr: string): Promise<PumpDetail>{
  const res = await fetch(`https://gmgn.ai/defi/quotation/v1/tokens/sol/${addr}`)
  const data = await res.json()
  if(data.code === 0){
    return data.data.token
  }
}
