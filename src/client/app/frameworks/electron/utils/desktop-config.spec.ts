import { t } from '../../test/index';
import { DesktopConfig } from './desktop-config';

export function main() {
  t.describe('electron: DesktopConfig', () => {

    t.it('SUPPORTED_LANGUAGES', () => {
      t.e(DesktopConfig.SUPPORTED_LANGUAGES.length).toBe(5);
      t.e(DesktopConfig.SUPPORTED_LANGUAGES[0].code).toBe('en');
    });
  });
}
