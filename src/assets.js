// Import assets
import no_selfie from './assets/no_selfie.png';
import no_image from './assets/no_image.png';
import pdf from './assets/pdf.png';
import doc from './assets/docs.png';
import excel from './assets/excel.png';
import video from './assets/video.png';
import file from './assets/file.png';

// Favicon
import favicon from "./assets/favicon.png"

// Resolve different extensions to one media format
export const doc_format = ['doc','docm','docx','dot','dotm','dotx','odt','rtf','txt',];
export const pdf_format = ['pdf','ai',];
export const excel_format = ['csv','dif','ods','xls','xlsb','xlsm','xlsx','xlt'];
export const video_format = ['mov','avi','flv','wmv','mov','mp4'];
export const image_format = ['jpg','jpeg','png','bmp','gif','exif',];
export const audio_format = ['mp3','wav','wma','vlc',];

// render correct icon based on media format
export function renderFileImageOrIcon(file, renderKey, formats, assets) {
    var url = "";
    var name = file.name;
    if (name) {
        if (formats.doc_format.includes(name.split(".").slice(-1)[0].toLowerCase())) {
            url = assets.doc;
        } else if (formats.pdf_format.includes(name.split(".").slice(-1)[0].toLowerCase())) {
            url = assets.pdf;
        } else if (formats.video_format.includes(name.split(".").slice(-1)[0].toLowerCase())) {
            url = assets.video;
        } else if (formats.audio_format.includes(name.split(".").slice(-1)[0].toLowerCase())) {
            url = assets.video;
        } else if (formats.excel_format.includes(name.split(".").slice(-1)[0].toLowerCase())) {
            url = assets.excel;
        } else if (formats.image_format.includes(name.split(".").slice(-1)[0].toLowerCase())) {
            if (file.data) {
                url = URL.createObjectURL(file.data);
            } else {
                url = file[`${renderKey}`];
            }
        } else {
            url = assets.file;
        }
    }
    return (url);
};

// Export assets
export { 
    no_selfie,
    no_image,
    pdf,
    doc,
    video,
    excel,
    file,
    favicon,
};