export function computeBoundingBox(imageData) {
    const box = {
        xmin: imageData.width,
        ymin: imageData.height,
        xmax: -1,
        ymax: -1,
    }

    for (let i = 0; i < imageData.width * imageData.height; i += 1) {
        const j = i * 4;

        if (imageData.data[j] > 0 || imageData.data[j + 1] > 0 || imageData.data[j + 2] > 0) {
            const x = i % imageData.width;
            const y = Math.floor(i / imageData.width);
            
            box.xmin = Math.min(x, box.xmin);
            box.ymin = Math.min(y, box.ymin);
            box.xmax = Math.max(x, box.xmax);
            box.ymax = Math.max(y, box.ymax);
        }
    }

    return box;
}