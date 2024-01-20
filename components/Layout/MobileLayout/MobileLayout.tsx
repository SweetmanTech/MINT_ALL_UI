import React from "react"
import { ILayout } from "../types"
import Navbar from "../../Navbar"

const MobileLayout = ({ children }: ILayout) => (
  <div className="w-screen h-screen p-[15px]">
    <div className="flex flex-col gap-y-[5px]">
      <Navbar />
      <div className="flex-grow h-[calc(100vh-60px)]">{children}</div>
    </div>
  </div>
)

export default MobileLayout
