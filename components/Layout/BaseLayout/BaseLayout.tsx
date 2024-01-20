import React from "react"
import { ILayout } from "../types"

const BaseLayout = ({ children }: ILayout) => (
  <div className="w-screen h-screen p-[50px]">
    <div className="flex flex-col h-[calc(100vh-145px)] gap-y-[5px]">
      <div className="flex flex-grow h-full gap-x-[20px]">
        <div className="flex-grow w-[calc(100vw-490px)]">{children}</div>
      </div>
    </div>
  </div>
)

export default BaseLayout
