import { newSpecPage } from '@stencil/core/testing'
import { RuxClock } from '../rux-clock'

const RealDate = Date.now

beforeAll(() => {
    //Swap Date.now() with global mock
    global.Date.now = jest.fn(() => new Date('1988-04-22 01:02:03').getTime())
})

afterAll(() => {
    //Replace our mock with the OG global Date.now()
    global.Date.now = RealDate
})

describe('rux-clock', () => {
    it('shows the current time', async () => {
        const page = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock></rux-clock>`,
        })

        expect(page.root.time).toBe('05:02:03 UTC')
    })

    it('converts time to timezone', async () => {
        const page = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock timezone="America/New_York"></rux-clock>`,
        })

        expect(page.root.time).toBe('01:02:03 EDT')
    })

    // it('converts time to timezone on the fly', async () => {
    //   const clock = new RuxClock()
    //   clock.timezone = 'UTAC'

    //     clock.timezone = 'UTC'
    //   expect(clock['time']).toBe(2)

    // })

    it('hides the timezone', async () => {
        const page = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock hide-timezone></rux-clock>`,
        })

        expect(page.root.time).toBe('05:02:03 ')
    })

    it('hides the date', async () => {
        const page = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock hide-date></rux-clock>`,
        })

        expect(page.root).toEqualHtml(`
      <rux-clock hide-date>
        <mock:shadow-root>
          <div class="rux-clock__segment rux-clock__time">
            <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label">
              05:02:03 UTC
            </div>
            <div class="rux-clock__segment__label" id="rux-clock__time-label">
              Time
            </div>
          </div>
        </mock:shadow-root>
      </rux-clock>
    `)
    })

    // shows aos

    // shows los
})
