// conversion de la taille
const formatFileSize = (bytes: number): string => {
    if(bytes < 1024) {
        return ` ${bytes} bytes `; // Affiche en bytes si inferieur a 1Ko
    } else if (bytes < 1024 * 1024) {
        const kilobytes = (bytes / 1024).toFixed(2); // en Ko
        return ` ${kilobytes} ko `;
    }else{
        const megabytes = (bytes / (1024 * 1024) ).toFixed(2); // conversion en Mo
        return ` ${megabytes} `;
    }
}