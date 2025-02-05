import { Prop, Component } from '@stencil/core'

@Component({
    tag: 'rux-datetime',
    shadow: true,
})
export class RuxDatetime {
    /**
     * The date time to be formatted
     */
    @Prop() date: Date | string = new Date()
    /**
     * The locale
     */
    @Prop() locale: string = 'default'
    /**
     * Format options for year
     */
    @Prop() year?: 'numeric' | '2-digit'
    /**
     * Format options for month
     */
    @Prop() month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
    /**
     * Format options for day
     */
    @Prop() day?: 'numeric' | '2-digit'
    /**
     * Format options for hour
     */
    @Prop() hour?: 'numeric' | '2-digit'
    /**
     * Format options for minute
     */
    @Prop() minute?: 'numeric' | '2-digit'
    /**
     * Format options for second
     */
    @Prop() second?: 'numeric' | '2-digit'
    /**
     * Format options for Timezone name
     */
    @Prop() timeZoneName?: 'short' | 'long'
    /**
     * Format options for Timezone
     */
    @Prop() timeZone?: string
    /**
     * Display date in 12 hour time.
     */
    @Prop({ attribute: 'hour-12' }) hour12: boolean = false

    render() {
        const date = new Date(this.date)

        const {
            locale,
            year,
            month,
            day,
            hour,
            minute,
            second,
            timeZoneName,
            timeZone,
            hour12,
        } = this

        return new Intl.DateTimeFormat(locale, {
            year,
            month,
            day,
            hour,
            minute,
            second,
            timeZoneName,
            timeZone,
            hour12,
        }).format(date)
    }
}
