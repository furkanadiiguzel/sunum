import { memo, type PropsWithChildren } from 'react'

export const ChartContainer = memo(function ChartContainer({ children }: PropsWithChildren) {
  return <div className="mx-auto w-full max-w-3xl px-2">{children}</div>
})

