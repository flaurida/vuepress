import { Browser, Page } from 'playwright'
import qawolf from 'qawolf'

let browser: Browser
let page: Page

/* eslint-env jest */
beforeAll(async () => {
  browser = await qawolf.launch()
  const context = await browser.newContext()
  await qawolf.register(context)
  page = await context.newPage()
})

afterAll(async () => {
  await qawolf.stopVideos()
  await browser.close()
})

test('initialSetup', async () => {
  await page.goto('http://localhost:8080/')

  // this will fail if the text never appears
  await page.waitFor(() => document.body.innerText.includes('Hello VuePress'))
})
