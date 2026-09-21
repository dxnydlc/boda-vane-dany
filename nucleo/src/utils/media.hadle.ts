
import { diskStorage } from "multer";
import { v4 as uuidv4 } from 'uuid'; // Import the v4 generator
import { randomUUID } from 'crypto'; // Built into Node.js

export const storage = diskStorage({
    destination : `./public/uploads` ,
    filename(req, file, cb ) {
        const extension     = file.originalname.split('.').pop();
        const uuid          = randomUUID();
        const filename      = `CD-upload_${uuid}_${Date.now()}.${extension}`;
        console.log( filename );
        cb( null , filename );
    },
});