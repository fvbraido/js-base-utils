export var doc_format = ['doc','docm','docx','dot','dotm','dotx','odt','rtf','txt',];
export var pdf_format = ['pdf','ai',];
export var excel_format = ['csv','dif','ods','xls','xlsb','xlsm','xlsx','xlt'];
export var video_format = ['mov','avi','flv','wmv','mov','mp4'];
export var image_format = ['jpg','jpeg','png','bmp','gif','exif',];
export var audio_format = ['mp3','wav','wma','vlc',];

// INPUT
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