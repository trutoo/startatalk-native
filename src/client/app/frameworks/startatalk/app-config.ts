// app
import { ILang } from '../core/index';

export class AppConfig {

  public static GOOGLE_MAPS_API_KEY = 'AIzaSyDpZYyuW_c_1-0HnW6t_RZA2luhaQ21VoM';
  public static GOOGLE_MAPS_LIBRARIES = ['places'];

  public static SUPPORTED_LANGUAGES: Array<ILang> = [
    { code: 'en', title: 'English' },
  ];

}