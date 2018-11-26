import UAParser from 'ua-parser-js';

const parser = new UAParser();
export const browser = parser.getBrowser();
export const os = parser.getOS();
