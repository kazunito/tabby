import { Injectable } from '@angular/core'
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker'
import { TranslateService } from 'tabby-core'
import { ElectronService } from './electron.service'

// Must match the labels in app/lib/app.ts (macOS menu bar and Windows tray menu)
const MENU_LABELS = [
    _('About Tabby'),
    _('Preferences'),
    _('Services'),
    _('Hide Tabby'),
    _('Hide Others'),
    _('Show All'),
    _('Quit'),
    _('Edit'),
    _('Undo'),
    _('Redo'),
    _('Cut'),
    _('Copy'),
    _('Paste'),
    _('Paste and Match Style'),
    _('Delete'),
    _('Select All'),
    _('View'),
    _('Toggle Developer Tools'),
    _('Toggle Full Screen'),
    _('Reload'),
    _('Window'),
    _('Minimize'),
    _('Zoom'),
    _('Bring All to Front'),
    _('Help'),
    _('Website'),
    _('Show'),
]

/** @hidden */
@Injectable({ providedIn: 'root' })
export class AppMenuService {
    private constructor (
        private electron: ElectronService,
        private translate: TranslateService,
    ) { }

    update (): void {
        const labels = Object.fromEntries(MENU_LABELS.map(label => [label, this.translate.instant(label)]))
        this.electron.ipcRenderer.send('app:set-menu-labels', labels)
    }
}
