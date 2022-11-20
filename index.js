let ExifImage = require('exif').ExifImage;

try {
    new ExifImage({image: 'Image_Source'}, function(error, exifData) {
        if(error) {
            console.log('Error: ' + error.message);
        } else {
            console.log(exifData);
        }
    });
} catch(error) {
    console.log('Error: ' + error.message)
}