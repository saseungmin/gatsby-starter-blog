import * as React from "react"
import { render } from "@testing-library/react"

import Index from "./index"

describe(`Index`, () => {
  const data = {
    site: {
      siteMetadata: {
        title: `GatsbyJS`,
      },
    },
  }

  it(`contains a Home Page`, () => {
    const { container } = render(<Index data={data} />)


    expect(container).toHaveTextContent('Home Page');
  })

  it(`contains a GatsbyJS`, () => {
    const { container } = render(<Index data={data} />)


    expect(container).toHaveTextContent('GatsbyJS');
  })
})
