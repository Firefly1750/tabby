import { Injectable } from '@angular/core'
import { HotkeyDescription, HotkeyProvider, TranslateService } from 'tabby-core'

/** @hidden */
@Injectable()
export class TelnetHotkeyProvider extends HotkeyProvider {
    hotkeys: HotkeyDescription[] = [
        {
            id: 'restart-telnet-session',
            name: this.translate.instant('Restart current Telnet session'),
        },
    ]

    constructor (private translate: TranslateService) { super() }

    async provide (): Promise<HotkeyDescription[]> {
        return this.hotkeys
    }
}
